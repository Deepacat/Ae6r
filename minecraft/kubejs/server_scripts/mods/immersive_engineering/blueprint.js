ServerEvents.recipes(e => {
    e.recipes.immersiveengineering.blueprint('2x modularrouters:blank_module',
        [
            Ingredient.of('#forge:plates/aluminum', 2),
            '#forge:ingots/energized_steel',
            '#forge:wires'
        ], 'components'
    ).id('kubejs:immersive_engineering/blueprint/blank_module')

    e.recipes.immersiveengineering.blueprint('2x modularrouters:blank_upgrade',
        [
            Ingredient.of('#forge:plates/aluminum', 2),
            Ingredient.of('#forge:nuggets/electrum', 5),
            '#forge:wires'
        ], 'components'
    ).id('kubejs:immersive_engineering/blueprint/blank_upgrade')

    e.recipes.immersiveengineering.blueprint('2x modularrouters:augment_core',
        [
            'modularrouters:blank_upgrade',
            'modularrouters:blank_module',
            'powah:capacitor_blazing',
            '#forge:wires'
        ], 'components'
    ).id('kubejs:immersive_engineering/blueprint/augment_core')
})