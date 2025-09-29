ServerEvents.recipes(e => {
    // for now recipes require >0 wissen, dev said would fix it
    // "pattern": [
    //     "_A_", // shaped row 1
    //     "AAA", // shaped row 2
    //     "_A_", // shaped row 3
    //     "BCBC" // row of outer ingredients, up right down left
    // ],

    // e.custom({
    //     "type": "wizards_reborn:arcane_workbench",
    //     "pattern": [
    //         "_A_",
    //         "AAA",
    //         "_A_",
    //         "____"
    //     ],
    //     "key": {
    //         "A": {
    //             "item": "minecraft:dirt"
    //         }
    //     },
    //     "output": {
    //         "item": "minecraft:diamond"
    //     },
    //     "wissen": 0
    // }).id('kubejs:test_diamond')
})