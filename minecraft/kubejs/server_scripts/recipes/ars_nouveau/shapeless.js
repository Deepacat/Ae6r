ServerEvents.recipes(e => {
    e.remove({ output: "ars_nouveau:ritual_flight" })
    e.shapeless('ars_nouveau:ritual_flight',
        ['ars_nouveau:purple_archwood_log', 'ars_nouveau:wilden_wing', 'ars_nouveau:wilden_wing', 'quark:bottled_cloud', 'quark:bottled_cloud']
    ).id('kubejs:shapeless/ritual_flight')

    e.remove({ output: "ars_nouveau:ritual_cloudshaping" })
    e.shapeless('ars_nouveau:ritual_cloudshaping',
        ['ars_nouveau:blue_archwood_log', '#forge:dusts/silver', '#forge:dusts/silver', 'quark:bottled_cloud', 'quark:bottled_cloud']
    ).id('kubejs:shapeless/ritual_cloudshaping')

    e.remove({ output: "ars_nouveau:ritual_moonfall" })
    e.shapeless('ars_nouveau:ritual_moonfall',
        ['ars_nouveau:blue_archwood_log', 'architects_palette:moonstone', '#forge:ingots/silver']
    ).id('kubejs:shapeless/ritual_moonfall')

    e.remove({ output: "ars_nouveau:ritual_sunrise" })
    e.shapeless('ars_nouveau:ritual_sunrise',
        ['ars_nouveau:red_archwood_log', 'architects_palette:sunstone', '#forge:ingots/sunmetal']
    ).id('kubejs:shapeless/ritual_sunrise')

    e.remove({ output: "ars_nouveau:ritual_binding" })
    e.shapeless('ars_nouveau:ritual_binding',
        ['ars_nouveau:purple_archwood_log', 'ars_nouveau:blank_parchment', 'bloodmagic:reagentbinding', '#forge:gems/source', '#forge:gems/source', '#forge:gems/source']
    ).id('kubejs:shapeless/ritual_binding')

    e.remove({ id: "ars_nouveau:potion_jar" })
    e.shapeless('ars_nouveau:potion_jar',
        ['ars_nouveau:source_jar', ['minecraft:nether_wart', 'eidolon:fungus_sprouts']]
    ).id('kubejs:shapeless/potion_jar')
})
