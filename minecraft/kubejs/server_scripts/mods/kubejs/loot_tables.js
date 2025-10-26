function rndInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function max(maxInt) {
    return Math.round(rndInt(1, maxInt))
}

const crashsitePortableCellLoot = [
    ["ae2:light_blue_paint_ball", [10, 27]],
    ["ae2:sky_stone_block", [15, 22]],
    ["ae2:fluix_glass_cable", [12, 16]],
    ["ae2:certus_quartz_crystal", [12, 23]],
    ["ae2:silicon", [5, 12]],
    ["ae2:yellow_paint_ball", [10, 27]]
]

const crashsiteCellLoot = [
    ["ae2:sky_stone_block", [30, 45]],
    ["ae2:silicon", [15, 28]],
    ["ae2:network_tool", [1, 1]],
    ["ae2:logic_processor", [6, 8]],
    ["ae2:formation_core", [3, 5]],
    ["ae2:fluix_glass_cable", [18, 30]],
    ["ae2:fluix_crystal", [7, 20]],
    ["ae2:engineering_processor", [2, 4]],
    ["ae2:chipped_budding_quartz", [1, 2]],
    ["ae2:certus_quartz_dust", [15, 23]],
    ["ae2:certus_quartz_crystal", [30, 47]],
    ["ae2:calculation_processor", [4, 6]],
    ["ae2:annihilation_core", [3, 5]]
]

function ae2LootItem(table, rolls, itemId) {
    let lootMap = new Map()
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
    return Item.of(itemId,
        `{
            amts:[L;${finalAmts.join(",")}],
            ic:-100L,
            internalCurrentPower:${rndInt(3214, 17852)}.0d,
            keys:[${finalKeys.join(",")}]
        }`
    )
}

ServerEvents.highPriorityData(e => { // register empty loot table, edit with lootjs
    let lootTableJson = {
        type: "minecraft:chest",
        pools: [
            {
                bonus_rolls: 0.0,
                entries: [],
                rolls: 1.0
            }
        ],
        random_sequence: "kubejs:crashsite_chest"
    }
    e.addJson('kubejs:loot_tables/crashsite_chest', lootTableJson)
})

LootJS.modifiers(e => {
    // aspectus shard block loot table
    e.addBlockLootModifier('kubejs:aspectus_shard_block')
        .matchMainHand(Item.of("embers:grandhammer"))
        .addWeightedLoot(aspectusShardBlocks)
    // damaged controller block loot table
    e.addBlockLootModifier('kubejs:damaged_controller')
        .removeLoot('kubejs:damaged_controller')
        .limitCount([1, 3])
        .addLoot(Item.of('ae2:fluix_crystal'))

    //// alien crashsite loot tables
    // color applicator

    // portable item cell

    // non portable item cell

    // crashsite chest
    e.addLootTableModifier("kubejs:crashsite_chest")
        .pool(pool => {
            pool.rolls([3, 5]);
            pool.addLoot([])
        })
        .apply((context) => {
            if (Math.random() >= 0.25) { return }
            context.addLoot(ae2LootItem(crashsitePortableCellLoot, 5, "ae2:portable_item_cell_1k"))
        })
        .apply((context) => {
            if (Math.random() >= 0.25) { return }
            context.addLoot(ae2LootItem(crashsiteCellLoot, 6, "ae2:item_storage_cell_1k"))
        })
})