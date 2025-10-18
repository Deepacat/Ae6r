// Enderman bartering server script
// Thanks to liopyu for EntityJS, examples, and help
// Server part (server, startup)

const valuedItem = 'kubejs:alien_debris' // cobble temporary

// loot table to be rolled
const endermanBarterLootTable = [
    // end
    { item: 'ae2:sky_stone_block', count: [7, 23], weight: 50 },
    { item: 'ae2:certus_quartz_crystal', count: [6, 20], weight: 60 },
    { item: 'ae2:damaged_budding_quartz', count: [1, 4], weight: 30 },
    { item: 'tconstruct:budding_ender_slime_crystal', count: [1, 1], weight: 4 },
    { item: 'minecraft:crying_obsidian', count: [25, 37], weight: 9 },
    { item: 'alexsmobs:mimicream', count: [3, 6], weight: 10 },
    { item: 'alexsmobs:capsid', count: [3, 4], weight: 7 },
    // overworld
    { item: 'embers:archaic_brick', count: [20, 35], weight: 10 },
    { item: 'embers:ancient_motive_core', count: [2, 4], weight: 9 },
    { item: 'minecraft:echo_shard', count: [1, 1], weight: 1 },
    { item: 'minecraft:sponge', count: [8, 11], weight: 10 },
    // nether
    { item: 'minecraft:wither_skeleton_skull', count: [1, 3], weight: 8 },
    { item: 'irons_spellbooks:cinder_essence', count: [1, 2], weight: 4 },
    { item: 'minecraft:gilded_blackstone', count: [12, 30], weight: 10 },
    // aether
    { item: 'aether_redux:flareblossom', count: [1, 3], weight: 10 },
    { item: 'aether_redux:crystal_fruit_sapling', count: [3, 6], weight: 10 },
    { item: 'aether_redux:raw_gravitite', count: [9, 15], weight: 10 },
]

// Creates a fake loot table for bartering outputs, this isn't actually used at all for anything
// it just generates a page to be viewable by recipe viewer/ALI
ServerEvents.highPriorityData(e => {
    let lootTableJson = {
        type: "minecraft:chest",
        pools: [
            {
                bonus_rolls: 0.0,
                entries: [],
                rolls: 1.0
            }
        ],
        random_sequence: "kubejs:enderman_bartering_loot_table"
    }
    for (let lootItem of endermanBarterLootTable) {
        lootTableJson.pools[0].entries.push({
            type: "minecraft:item",
            functions: [
                {
                    add: false,
                    count: {
                        type: "minecraft:uniform",
                        max: lootItem.count[1],
                        min: lootItem.count[0]
                    },
                    function: "minecraft:set_count"
                }
            ],
            name: lootItem.item,
            weight: lootItem.weight
        })
    }
    e.addJson('kubejs:loot_tables/enderman_bartering_loot_table', lootTableJson)
})

function randomItemFromPool() {
    var i
    var weights = [endermanBarterLootTable[0].weight]

    for (i = 1; i < endermanBarterLootTable.length; i++) {
        weights[i] = endermanBarterLootTable[i].weight + weights[i - 1]
    }

    var random = Math.random() * weights[weights.length - 1]

    for (i = 0; i < weights.length; i++) {
        if (weights[i] > random) { break }
    }

    return Item.of(
        endermanBarterLootTable[i].item,
        endermanBarterLootTable[i].count[0] + Math.floor(Math.random()
            * (endermanBarterLootTable[i].count[1] - endermanBarterLootTable[i].count[0]))
    )
}

/** 
* @param {Object} sourceVecObj
* @param {Object} targetVecObj
* @returns {Vec3d}
* Gets a motion vector from one position to another, used for item throwing motion
*/
function getMotionVec(sourceVecObj, targetVecObj) {
    let startVec = { x: sourceVecObj.x, y: sourceVecObj.y, z: sourceVecObj.z }
    let endVec = { x: targetVecObj.x, y: targetVecObj.y, z: targetVecObj.z }
    let dir = { x: endVec.x - startVec.x, y: endVec.y - startVec.y, z: endVec.z - startVec.z }
    let distance = Math.sqrt(dir.x * dir.x + dir.y * dir.y + dir.z * dir.z)
    return new Vec3d(dir.x / distance, dir.y / distance, dir.z / distance)
}

/** 
* @param {Internal.Mob} mob
* Returns if mob has anger state
*/
function isMobAngry(mob) {
    return mob.nbt.AngryAt ? true : false
}

/** 
* @param {Internal.Mob} mob
* Drops held block of enderman
*/
function dropHeld(mob) {
    let heldBlock = getHeld(mob)
    mob.level.getBlock(mob.x, mob.y + 1, mob.z)
        .popItem(Item.of(heldBlock))
    mob.mergeNbt({ carriedBlockState: {} })
}

/** 
* @param {Internal.Mob} mob
* @returns {String | null}
* Returns held enderman block string or null
*/
function getHeld(mob) {
    return mob.nbt.carriedBlockState && mob.nbt.carriedBlockState.Name ? mob.nbt.carriedBlockState.Name : null
}

/** 
* @param {Internal.Mob} mob
* @returns {Internal.Player | null}
* Checks if nearby player and returns player entity
*/
function findPlayer(mob) {
    let player
    try {
        let mobAABB = mob.boundingBox.inflate(10)
        mob.level.getEntitiesWithin(mobAABB).forEach(entity => {
            if (entity.type == 'minecraft:player') {
                player = entity
            }
        })
        return player
    } catch (err) {
        console.log(err)
    }
}

let EndermanLeaveBlockGoal = "net.minecraft.world.entity.monster.EnderMan$EndermanLeaveBlockGoal"

/** 
* @param {Internal.Mob} mob
*/
function preventPlace(mob) {
    try {
        mob.goalSelector.runningGoals.forEach(g => {
            if (g.goal.class.name.toString() == EndermanLeaveBlockGoal) {
                g.goal.stop()
            }
        })
    } catch (err) {
        console.log(err)
    }
}

/** 
* @param {Internal.Mob} mob
* @param {Internal.Player} player
* Queues a server event for enderman to throw item at player or nearby if still alive and on stage 2
*/
function queueLootDrop(mob) {
    mob.server.scheduleInTicks(100, () => {
        try {
            if (!mob.alive) return
            if (getHeld(mob) != valuedItem) return
            
            mob.getNavigation().stop()
            preventPlace(mob)

            let item = mob.level
                .getBlock(mob.x, mob.y, mob.z)
                .createEntity("minecraft:item");
            item.y++
            item.item = randomItemFromPool()
            item.setDeltaMovement(new Vec3d(mob.lookAngle.x() / 5, mob.lookAngle.y() / 5, mob.lookAngle.z() / 5))

            let player = findPlayer(mob)
            if (player && mob.distanceToEntity(player) < 10) {
                mob.lookAt('feet', new Vec3d(player.x, player.y, player.z))
                item.setDeltaMovement(
                    getMotionVec(
                        { x: mob.x, y: mob.y, z: mob.z },
                        { x: player.x, y: player.y, z: player.z }
                    ).scale(0.5)
                )
            }
            item.spawn()

            mob.mergeNbt({ carriedBlockState: {} })
            mob.persistentData.barterStage = 0
            mob.persistentData.barterCooldown = 5
        } catch (err) {
            console.log(err)
        }
    })
}

/** 
* @param {Internal.Mob} mob
* @returns {Internal.ItemEntity| null}
* Finds item entity on ground and checks if it matches valued item
*/
function findGroundItem(mob) {
    let returnEnity
    try {
        let mobAABB = mob.boundingBox.inflate(6)
        for (let entity of mob.level.getEntitiesWithin(mobAABB)) {
            if (entity.type == 'minecraft:item' && entity.item.id == valuedItem) {
                returnEnity = entity
            }
        }
    } catch (err) {
        console.log(err)
    }
    return returnEnity
}

/**  
* @param {Internal.Mob} mob
* @returns {Boolean}
* Goes to item entity and pick it up
*/
function goGetGroundItem(mob) {
    try {
        let heldBlock = getHeld(mob)

        if (heldBlock && heldBlock == valuedItem) {
            mob.persistentData.barterStage = 1
            return
        }

        let itemEntity = findGroundItem(mob)
        if (!itemEntity) return

        if (itemEntity.distanceToEntity(mob) < 20) {
            mob.getNavigation().moveTo(itemEntity.x, itemEntity.y, itemEntity.z, 1.5);
        }

        if (itemEntity.distanceToEntity(mob) < 2) {
            if (heldBlock) {
                dropHeld(mob)
            }

            let NBT = mob.nbt
            NBT.carriedBlockState = { Name: itemEntity.item.id + '' }
            // NBT.remove('AngerTime')
            // NBT.remove('AngryAt')
            mob.setNbt(NBT)

            itemEntity.item.shrink(1)
            return true
        }
        return false
    }
    catch (err) {
        console.log(err)
    }
}

/** @param {Internal.Mob} mob */
function barter(mob) {
    try {
        preventPlace(mob)
        // if enderman is angered and has item in hand, reset barter stage
        if (isMobAngry(mob)) {
            mob.persistentData.barterStage = 0
            return
        }

        // if enderman is on barter cooldown, return and reduce cooldown
        if (mob.persistentData.barterCooldown > 0) {
            mob.persistentData.barterCooldown--
            return
        }

        switch (mob.persistentData.barterStage) {
            // double check ground item still exists, switch to stage 1 to avoid enderman teleporting
            case 0: {
                if (findGroundItem(mob)) {
                    mob.persistentData.barterStage = 1
                }
                break
            }
            // go to item entity and pick it up
            case 1: {
                if (goGetGroundItem(mob)) {
                    mob.persistentData.barterStage = 2
                }
                break
            }
            // stop enderman from moving, change stage to 3 so this doesn't repeat,
            // look at a player if they are nearby, start the scheduled task to drop an item
            case 2: {
                try {
                    mob.getNavigation().stop()
                    mob.persistentData.barterStage = 3

                    let p = findPlayer(mob)
                    if (p) {
                        mob.lookAt('feet', new Vec3d(p.x, p.y, p.z))
                    }
                    queueLootDrop(mob)
                } catch (err) {
                    console.log(err)
                }
                break
            }
            // while trade in progress, stop moving
            case 3: {
                mob.getNavigation().stop()
                break
            }
            default:
                mob.persistentData.barterStage = 0
        }
    } catch (err) {
        console.log(err)
    }
}

EntityJSEvents.addGoalSelectors('minecraft:enderman', e => {
    /**
        * @param {string}   name The name of the custom goal
        * @param {number}   priority The priority of the goal
        * @param {Function} canUse Determines if the entity can use the goal
        * @param {Function} canContinueToUse Determines if the entity can continue to use the goal, may be null
        * @param {boolean}  isInterruptable If the goal may be interrupted
        * @param {Function} start The action to perform when the goal starts
        * @param {Function} stop The action to perform when the goal stops
        * @param {boolean}  requiresUpdateEveryTick If the goal needs to be updated every tick
        * @param {Function} tick The action to perform when the goal ticks
    */
    e.customGoal(
        'barter',
        1,
        /** @param {Internal.Mob} mob */ mob => {
            if (isMobAngry(mob)) return false
            if (findGroundItem(mob)) {
                preventPlace(mob)
                return true
            }
            return false
        },
        mob => {
            preventPlace(mob)
            return true
        },
        true,
        mob => {
            preventPlace(mob)
            mob.getNavigation().stop()
        },
        mob => {
            preventPlace(mob)
            mob.getNavigation().stop()
        },
        true,
        mob => barter(mob)
    )
})
