ServerEvents.recipes(e => {
    e.remove({ id: 'modularrouters:item_router' })
    e.recipes.create.compacting(Item.of('modularrouters:modular_router'), ['minecraft:observer', 'immersiveengineering:circuit_board', 'modularrouters:augment_core']).heated()
        .id('kubejs:item_router')

    e.recipes.create.compacting('kubejs:rough_machine_frame', ['rftoolsbase:machine_base', 'kubejs:coated_machine_frame_top',
        '#forge:plates/invar', '#forge:plates/invar']).heated()
        .id('kubejs:rough_machine_frame')
})