// kubejs simple blocks
LootJS.modifiers(e => {
    // aspectus shard block loot table
    e.addBlockLootModifier('kubejs:aspectus_shard_block')
        .matchMainHand(Item.of("embers:grandhammer"))
        .addWeightedLoot(aspectusShardBlocks)
})

// functions for loot table functions like ae2 cell loot
function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function max(maxInt) {
    return Math.round(rndInt(1, maxInt))
}
function ae2LootItem(table, rolls, itemId) {
    let lootMap = new Map()
    rolls = rndInt(rolls[0], rolls[1])
    for (let i = 0; i < rolls; i++) {
        let rndTable = table[Math.floor(Math.random() * table.length)]
        let id = rndTable[0]
        let amt = rndInt(rndTable[1][0], rndTable[1][1])
        if (lootMap.has(id)) {
            lootMap.set(id, lootMap.get(id) + amt)
        } else {
            lootMap.set(id, amt)
        }
    }
    let finalKeys = []
    let finalAmts = []
    for (let [id, amt] of lootMap.entries()) {
        finalKeys.push(`{"#c":"ae2:i",id:"${id}"}`)
        finalAmts.push(`${amt}L`)
    }
    return Item.of(itemId, // requires nbt stringified for the L's and d's to work, YES it requires these letters.
        // also ic: is the total amount of items stored within it (item count), used to calculate bytes used in the cell.
        // I just set it to -100 so it usually autocorrects itself mostly:tm: on loot generation
        // but it can still give weird incorrect byte values in the cell until modified by a player
        `{
            amts:[L;${finalAmts.join(",")}],
            ic:-100L,
            internalCurrentPower:${rndInt(2000, 9000)}.0d,
            keys:[${finalKeys.join(",")}]
        }`
    )
}

// registering empty loot tables, edit with lootjs
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
        random_sequence: "kubejs:chests/crashsite_chest"
    }
    e.addJson('kubejs:loot_tables/chests/crashsite_chest', lootTableJson)
})

// alien crashsite related loot
LootJS.modifiers(e => {
    const crashsitePortableCellLoot = [
        ["ae2:sky_stone_block", [27, 37]],
        ["ae2:fluix_crystal", [5, 11]],
        ["ae2:fluix_glass_cable", [8, 12]],
        ["ae2:certus_quartz_crystal", [15, 23]],
        ["ae2:silicon", [9, 15]]
    ]
    const crashsiteCellLoot = [
        ["ae2:sky_stone_block", [30, 45]],
        ["ae2:silicon", [15, 28]],
        ["ae2:logic_processor", [6, 8]],
        ["ae2:formation_core", [2, 4]],
        ["ae2:fluix_glass_cable", [18, 30]],
        ["ae2:fluix_crystal", [7, 20]],
        ["ae2:engineering_processor", [2, 4]],
        ["ae2:chipped_budding_quartz", [1, 2]],
        ["ae2:certus_quartz_dust", [15, 23]],
        ["ae2:certus_quartz_crystal", [30, 47]],
        ["ae2:charged_certus_quartz_crystal", [12, 19]],
        ["ae2:calculation_processor", [4, 6]],
        ["ae2:annihilation_core", [2, 4]],
        ["ae2:network_tool", [1, 1]]
    ]

    // damaged controller block loot table
    e.addBlockLootModifier('kubejs:damaged_controller')
        .removeLoot('kubejs:damaged_controller')
        .addLoot([
            LootEntry.of('ae2:smooth_sky_stone_block').limitCount([1, 3]),
            LootEntry.of('ae2:fluix_crystal').limitCount([4, 7]),
        ])

    e.addBlockLootModifier("kubejs:damaged_me_chest")
        .removeLoot('kubejs:damaged_me_chest')
        .addWeightedLoot(1, [
            LootEntry.of('ae2:portable_item_cell_1k').limitCount([0]),
            LootEntry.of('ae2:item_storage_cell_1k').limitCount([0])
        ])
        // functions to add cells with random items inside of them
        .apply((context) => {
            if (Math.random() >= 0.50) {
                context.addLoot(ae2LootItem(crashsitePortableCellLoot, [3, 5], 'ae2:portable_item_cell_1k'))
            } else {
                context.addLoot(ae2LootItem(crashsiteCellLoot, [4, 7], 'ae2:item_storage_cell_1k'))
            }
        })
})