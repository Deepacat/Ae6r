ServerEvents.recipes(e => {
    e.remove({ id: 'botania:terra_plate/terrasteel_ingot' })
    e.recipes.botania.terra_plate('botania:terrasteel_ingot', [
        '#forge:ingots/sky',
        'botania:mana_pearl',
        'kubejs:replaceme',
        'botania:mana_diamond',
        '#forge:ingots/iesnium',
        'botania:quartz_mana'
    ], 300000
    ).id('kubejs:terra_plate/terrasteel_ingot_honeycomb')

    e.recipes.botania.terra_plate('botania:terrasteel_ingot', [
        '#forge:ingots/sky',
        'botania:mana_pearl',
        '#forge:ingots/manasteel',
        'botania:mana_diamond',
        '#forge:ingots/iesnium',
        'botania:quartz_mana'
    ], 500000
    ).id('kubejs:terra_plate/terrasteel_ingot')

    e.recipes.botania.terra_plate('naturesaura:generator_limit_remover', [
        'botania:forest_eye',
        'naturesaura:token_euphoria',
        'naturesaura:token_rage',
        /*'atum:'*/ 'kubejs:replaceme',
        'naturesaura:token_grief',
        'naturesaura:token_terror'
    ], 2000000
    ).id('kubejs:terra_plate/generator_limit_remover')
})