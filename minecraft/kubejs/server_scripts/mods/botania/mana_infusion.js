ServerEvents.recipes(e => {
    e.remove({ id: 'botania:mana_infusion/manasteel' })
    e.remove({ id: 'botania:mana_infusion/manasteel_block' })
    e.recipes.botania.mana_infusion('botania:manasteel_ingot',
        '#forge:ingots/froststeel', 3000, 'architects_palette:sunstone')
        .id('kubejs:mana_infusion/manasteel')

    e.remove({ id: 'botania:mana_infusion/manasteel_block' })
    e.recipes.botania.mana_infusion('botania:manasteel_block',
        '#forge:storage_blocks/froststeel', 27000, 'architects_palette:sunstone')
        .id('kubejs:mana_infusion/manasteel_block')

    e.remove({ id: 'botania:mana_infusion/mana_string' })
    e.recipes.botania.mana_infusion('6x botania:mana_string',
        'kubejs:lush_silk', 5000, 'architects_palette:sunstone'
    ).id('kubejs:mana_infusion/mana_string')

    e.remove({ id: 'botania:mana_infusion/mana_diamond' })
    e.recipes.botania.mana_infusion('botania:mana_diamond',
        'rftoolsbase:infused_diamond', 50000, 'architects_palette:sunstone'
    ).id('kubejs:mana_infusion/infused_diamond')

    e.remove({ id: 'botania:mana_infusion/mana_pearl' })
    e.recipes.botania.mana_infusion('botania:mana_pearl',
        'rftoolsbase:infused_enderpearl', 35000, 'architects_palette:moonstone'
    ).id('kubejs:mana_infusion/infused_enderpearl')

    e.recipes.botania.mana_infusion('kubejs:mythical_clay',
        'kubejs:marvelous_clay', 10000, 'architects_palette:sunstone'
    ).id('kubejs:mana_infusion/mythical_clay')
})