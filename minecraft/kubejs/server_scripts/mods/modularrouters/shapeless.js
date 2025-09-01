ServerEvents.recipes(e => {
    e.shapeless(Item.of('modularrouters:sender_module_3'),
        [Item.of('modularrouters:sender_module_2'), 'integrateddynamics:logic_director']
    ).id('kubejs:shapeless/sender_module_3')

    e.shapeless(Item.of('4x modularrouters:sender_module_3'),
        [Item.of('modularrouters:sender_module_2'), Item.of('modularrouters:sender_module_2'), Item.of('modularrouters:sender_module_2'), Item.of('modularrouters:sender_module_2'), 'integrateddynamics:logic_director']
    ).id('kubejs:shapeless/sender_module_3_alt')

    e.shapeless(Item.of('modularrouters:stack_upgrade'),
        ['modularrouters:blank_upgrade', 'tconstruct:sky_slime_crystal', 'tconstruct:sky_slime_crystal', 'tconstruct:sky_slime_crystal', 'tconstruct:sky_slime_crystal']
    ).id('kubejs:shapeless/stack_upgrade')

    e.shapeless('modularrouters:flinger_module',
        ['modularrouters:dropper_module', 'create:weighted_ejector']
    ).id('kubejs:shapeless/flinger_module')

    e.shapeless('modularrouters:vacuum_module',
        ['modularrouters:blank_module', 'minecraft:lodestone', 'pneumaticcraft:omnidirectional_hopper']
    ).id('kubejs:shapeless/vacuum_module')

    e.shapeless('modularrouters:xp_vacuum_augment',
        ['modularrouters:augment_core', 'thermal:xp_crystal']
    ).id('kubejs:shapeless/xp_vacuum_augment')
})
