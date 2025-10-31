ServerEvents.recipes(e => {


    e.remove({ output: 'modularrouters:blank_module' })
    e.recipes.immersiveengineering.blueprint('2x modularrouters:blank_module',
        [
            Ingredient.of('#forge:plates/aluminum', 2),
            '#forge:ingots/energized_steel',
            '#forge:wires'
        ], 'components'
    ).id('kubejs:immersive_engineering/blueprint/blank_module')

    e.remove({ output: 'modularrouters:blank_upgrade' })
    e.recipes.immersiveengineering.blueprint('2x modularrouters:blank_upgrade',
        [
            Ingredient.of('#forge:plates/aluminum', 2),
            Ingredient.of('#forge:nuggets/electrum', 5),
            '#forge:wires'
        ], 'components'
    ).id('kubejs:immersive_engineering/blueprint/blank_upgrade')

    e.remove({ output: 'modularrouters:augment_core' })
    e.recipes.immersiveengineering.blueprint('2x modularrouters:augment_core',
        [
            'modularrouters:blank_upgrade',
            'modularrouters:blank_module',
            'powah:capacitor_blazing',
            '#forge:wires'
        ], 'components'
    ).id('kubejs:immersive_engineering/blueprint/augment_core')

    e.remove({ id: 'immersiveengineering:blueprint/circuit_board' })
    e.recipes.immersiveengineering.blueprint('immersiveengineering:circuit_board',
        [
            'immersiveengineering:insulating_glass',
            '#forge:plates/copper',
        ], 'components'
    ).id('kubejs:immersive_engineering/blueprint/circuit_board')

    e.recipes.immersiveengineering.blueprint('3x immersiveengineering:circuit_board',
        [
            'immersiveengineering:plate_duroplast',
            '#forge:plates/copper',
        ], 'components'
    ).id('kubejs:immersive_engineering/blueprint/circuit_board_duroplast')

    e.remove({ id: 'immersiveengineering:blueprint/component_iron' })
    e.recipes.immersiveengineering.blueprint('immersiveengineering:component_iron',
        [
            Ingredient.of('#forge:plates/iron', 5),
            '#forge:gears/copper',
        ], 'components'
    ).id('kubejs:immersive_engineering/blueprint/component_iron')

    e.remove({ id: 'immersiveengineering:blueprint/component_electronic' })
    e.recipes.immersiveengineering.blueprint('immersiveengineering:component_electronic',
        [
            'immersiveengineering:circuit_board',
            '#forge:gems/quartz',
            '#forge:dusts/redstone',
            '#forge:wires/electrum'
        ], 'components'
    ).id('kubejs:immersive_engineering/blueprint/component_electronic')

    e.remove({ id: 'immersiveengineering:blueprint/electron_tube' })
    e.recipes.immersiveengineering.blueprint('immersiveengineering:electron_tube',
        [
            'aether:quicksoil_glass',
            '#forge:plates/zinc',
            '#forge:dusts/redstone',
            '#forge:wires/copper'
        ], 'components'
    ).id('kubejs:immersive_engineering/blueprint/electron_tube')
})