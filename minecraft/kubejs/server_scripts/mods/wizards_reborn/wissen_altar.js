ServerEvents.recipes(e => {
    e.remove({ type: 'wizards_reborn:wissen_altar' })

    e.custom({
        type: "wizards_reborn:wissen_altar",
        ingredient: {
            tag: "forge:gems/arcanum"
        },
        wissen: 250
    }).id('kubejs:wizards_reborn/wissen_altar/arcanum_gem')

    e.custom({
        type: "wizards_reborn:wissen_altar",
        ingredient: {
            tag: "forge:dusts/arcanum"
        },
        wissen: 50
    }).id('kubejs:wizards_reborn/wissen_altar/arcanum_dust')

    e.custom({
        type: "wizards_reborn:wissen_altar",
        ingredient: {
            item: "hexcasting:quenched_allay_shard"
        },
        wissen: 1000
    }).id('kubejs:wizards_reborn/wissen_altar/quenched_allay')
})