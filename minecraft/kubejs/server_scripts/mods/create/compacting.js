ServerEvents.recipes(e => {
    e.remove({ id: 'modularrouters:item_router' })
    e.recipes.create.compacting(Item.of('modularrouters:modular_router'),
        ['minecraft:observer', 'immersiveengineering:circuit_board', 'modularrouters:augment_core'])
        .heated()
        .id('kubejs:create/compacting/item_router')

    e.recipes.create.compacting('kubejs:rough_machine_frame',
        ['rftoolsbase:machine_base', 'kubejs:coated_machine_frame_top', '#forge:plates/invar', '#forge:plates/invar'])
        .heated()
        .id('kubejs:create/compacting/rough_machine_frame')

    e.recipes.create.compacting('6x minecraft:paper',
        ['#forge:dusts/wood', '#forge:dusts/wood', '#forge:dusts/wood', '#forge:dusts/wood', { fluidTag: 'minecraft:water', amount: 250 }])
        .id('kubejs:create/compacting/paper')

    e.recipes.create.compacting('immersiveengineering:slab_concrete',
        [Fluid.of('immersiveengineering:concrete', 500)])
        .id('kubejs:create/compacting/slab_concrete')

    e.recipes.create.compacting('immersiveengineering:concrete',
        [Fluid.of('immersiveengineering:concrete', 1000)])
        .id('kubejs:create/compacting/concrete')

    e.recipes.create.compacting(Fluid.of('industrialforegoing:latex', 50),
        ['minecraft:vine'])
        .heated()
        .id('kubejs:create/compacting/latex_from_vine')

    e.recipes.create.compacting(Fluid.of('industrialforegoing:latex', 50),
        ['minecraft:dandelion'])
        .heated()
        .id('kubejs:create/compacting/latex_from_dandelion')

    e.recipes.create.compacting('powah:lens_of_ender',
        ['powah:photoelectric_pane', 'minecraft:ender_eye'])
        .heated()
        .id('kubejs:create/compacting/lens_of_ender')
})