ServerEvents.recipes(e => {

    e.remove({ id: 'ppfluids:fluid_pipe_to_pipe' })
    e.remove({ id: 'prettypipes:pipe' })
    e.shaped(Item.of('prettypipes:pipe', 8), [
        'CCC',
        'ABA',
        'CCC'
    ], {
        A: '#forge:plates/tin',
        B: '#forge:glass/colorless',
        C: 'create:shaft'
    }).id('kubejs:prettypipes/shaped/pipe')

    e.remove({ id: 'ppfluids:fluid_pipe' })
    e.shaped(Item.of('ppfluids:fluid_pipe', 8), [
        'CCC',
        'ABA',
        'CCC'
    ], {
        A: 'thermal:cured_rubber',
        B: '#forge:glass/colorless',
        C: 'create:shaft'
    }).id('kubejs:prettypipes/shaped/fluid_pipe')

    e.remove({ id: 'prettypipes:wrench' })
    e.shaped('prettypipes:wrench', [
        ' A ',
        'AB ',
        '  B'
    ], {
        A: '#forge:nuggets/iron',
        B: 'prettypipes:pipe'
    }).id('kubejs:prettypipes_wrench')

    e.remove({ id: 'prettypipes:blank_module' })
    e.shaped(Item.of('prettypipes:blank_module', 3), [
        ' A ',
        'BBB',
        'CCC'
    ], {
        A: '#forge:dusts/redstone',
        B: '#enigmatica:crafting_slabs',
        C: '#forge:nuggets/copper'
    }).id('kubejs:prettypipes_blank_module')

    e.remove({ id: 'prettypipes:low_extraction_module' })
    e.shaped('prettypipes:low_extraction_module', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: '#forge:dusts/redstone',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_low_extraction_module')

    e.remove({ id: 'prettypipes:medium_extraction_module' })
    e.shaped('prettypipes:medium_extraction_module', [
        ' C ',
        'ABA',
        ' A '
    ], {
        A: '#forge:nuggets/invar',
        B: 'prettypipes:low_extraction_module',
        C: '#forge:ingots/invar'
    }).id('kubejs:prettypipes_medium_extraction_module')

    e.remove({ id: 'prettypipes:high_extraction_module' })
    e.shaped('prettypipes:high_extraction_module', [
        ' C ',
        'ABA',
        ' A '
    ], {
        A: '#forge:nuggets/electrum',
        B: 'prettypipes:medium_extraction_module',
        C: '#forge:ingots/electrum'
    }).id('kubejs:prettypipes_high_extraction_module')

    e.remove({ id: 'prettypipes:low_filter_module' })
    e.shaped('prettypipes:low_filter_module', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: '#forge:paper',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_low_filter_module')

    e.remove({ id: 'prettypipes:medium_filter_module' })
    e.shaped('prettypipes:medium_filter_module', [
        ' C ',
        'ABA',
        ' C '
    ], {
        A: '#forge:nuggets/invar',
        B: 'prettypipes:low_filter_module',
        C: 'minecraft:iron_bars'
    }).id('kubejs:prettypipes_medium_filter_module')

    e.remove({ id: 'prettypipes:high_filter_module' })
    e.shaped('prettypipes:high_filter_module', [
        ' C ',
        'ABA',
        ' C '
    ], {
        A: '#forge:nuggets/electrum',
        B: 'prettypipes:medium_filter_module',
        C: 'minecraft:iron_bars'
    }).id('kubejs:prettypipes_high_filter_module')

    e.remove({ id: 'prettypipes:low_speed_module' })
    e.shaped('prettypipes:low_speed_module', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:sugar',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_low_speed_module')

    e.remove({ id: 'prettypipes:medium_speed_module' })
    e.shaped('prettypipes:medium_speed_module', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: '#forge:nuggets/invar',
        B: 'prettypipes:low_speed_module',
        C: 'minecraft:sugar'
    }).id('kubejs:prettypipes_medium_speed_module')

    e.remove({ id: 'prettypipes:high_speed_module' })
    e.shaped('prettypipes:high_speed_module', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: '#forge:nuggets/electrum',
        B: 'prettypipes:medium_speed_module',
        C: 'minecraft:sugar'
    }).id('kubejs:prettypipes_high_speed_module')

    e.remove({ id: 'prettypipes:low_low_priority_module' })
    e.shaped('prettypipes:low_low_priority_module', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: '#forge:nuggets/lead',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_low_low_priority_module')

    e.remove({ id: 'prettypipes:medium_low_priority_module' })
    e.shaped('prettypipes:medium_low_priority_module', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: '#forge:nuggets/invar',
        B: 'prettypipes:low_low_priority_module',
        C: '#forge:nuggets/lead'
    }).id('kubejs:prettypipes_medium_low_priority_module')

    e.remove({ id: 'prettypipes:high_low_priority_module' })
    e.shaped('prettypipes:high_low_priority_module', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: '#forge:nuggets/electrum',
        B: 'prettypipes:medium_low_priority_module',
        C: '#forge:nuggets/lead'
    }).id('kubejs:prettypipes_high_low_priority_module')

    e.remove({ id: 'prettypipes:low_high_priority_module' })
    e.shaped('prettypipes:low_high_priority_module', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: '#forge:nuggets/silver',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_low_high_priority_module')

    e.remove({ id: 'prettypipes:medium_high_priority_module' })
    e.shaped('prettypipes:medium_high_priority_module', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: '#forge:nuggets/invar',
        B: 'prettypipes:low_high_priority_module',
        C: '#forge:nuggets/silver'
    }).id('kubejs:prettypipes_medium_high_priority_module')

    e.remove({ id: 'prettypipes:high_high_priority_module' })
    e.shaped('prettypipes:high_high_priority_module', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: '#forge:nuggets/electrum',
        B: 'prettypipes:medium_high_priority_module',
        C: '#forge:nuggets/silver'
    }).id('kubejs:prettypipes_high_high_priority_module')

    e.remove({ id: 'prettypipes:low_retrieval_module' })
    e.shaped('prettypipes:low_retrieval_module', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:observer',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_low_retrieval_module')

    e.remove({ id: 'prettypipes:medium_retrieval_module' })
    e.shaped('prettypipes:medium_retrieval_module', [
        ' A ',
        'ABA',
        ' C '
    ], {
        A: '#forge:nuggets/invar',
        B: 'prettypipes:low_retrieval_module',
        C: '#forge:ingots/invar'
    }).id('kubejs:prettypipes_medium_retrieval_module')

    e.remove({ id: 'prettypipes:high_retrieval_module' })
    e.shaped('prettypipes:high_retrieval_module', [
        ' A ',
        'ABA',
        ' C '
    ], {
        A: '#forge:nuggets/electrum',
        B: 'prettypipes:medium_retrieval_module',
        C: '#forge:ingots/electrum'
    }).id('kubejs:prettypipes_high_retrieval_module')

    e.remove({ id: 'prettypipes:stack_size_module' })
    e.shaped('prettypipes:stack_size_module', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:comparator',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_stack_size_module')

    e.remove({ id: 'prettypipes:damage_filter_modifier' })
    e.shaped('prettypipes:damage_filter_modifier', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:stone_pickaxe',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_damage_filter_modifier')

    e.remove({ id: 'prettypipes:nbt_filter_modifier' })
    e.shaped('prettypipes:nbt_filter_modifier', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:book',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_nbt_filter_modifier')

    e.remove({ id: 'prettypipes:tag_filter_modifier' })
    e.shaped('prettypipes:tag_filter_modifier', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: '#forge:chunks',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_tag_filter_modifier')

    e.remove({ id: 'prettypipes:mod_filter_modifier' })
    e.shaped('prettypipes:mod_filter_modifier', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'prettypipes:wrench',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_mod_filter_modifier')

    e.remove({ id: 'prettypipes:redstone_module' })
    e.shaped('prettypipes:redstone_module', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:redstone_torch',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_redstone_module')

    e.remove({ id: 'prettypipes:filter_increase_modifier' })
    e.shaped('prettypipes:filter_increase_modifier', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:iron_bars',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_filter_increase_modifier')

    e.remove({ id: 'prettypipes:low_crafting_module' })
    e.shaped('prettypipes:low_crafting_module', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:crafting_table',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_low_crafting_module')

    e.remove({ id: 'prettypipes:medium_crafting_module' })
    e.shaped('prettypipes:medium_crafting_module', [
        ' A ',
        'ABA',
        ' C '
    ], {
        A: '#forge:nuggets/invar',
        B: 'prettypipes:low_crafting_module',
        C: '#forge:ingots/invar'
    }).id('kubejs:prettypipes_medium_crafting_module')

    e.remove({ id: 'prettypipes:high_crafting_module' })
    e.shaped('prettypipes:high_crafting_module', [
        ' A ',
        'ABA',
        ' C '
    ], {
        A: '#forge:nuggets/electrum',
        B: 'prettypipes:medium_crafting_module',
        C: '#forge:ingots/electrum'
    }).id('kubejs:prettypipes_high_crafting_module')

    e.remove({ id: 'prettypipes:item_terminal' })
    e.shaped('prettypipes:item_terminal', [
        ' B ',
        'CAD',
        'EFE'
    ], {
        A: 'thermal:machine_frame',
        B: 'minecraft:observer',
        C: 'prettypipes:high_extraction_module',
        D: 'prettypipes:high_retrieval_module',
        E: '#forge:gears/invar',
        F: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_item_terminal')

    e.remove({ id: 'prettypipes:pressurizer' })
    e.shaped('prettypipes:pressurizer', [
        ' E ',
        'BAB',
        'CDC'
    ], {
        A: 'thermal:machine_frame',
        B: 'prettypipes:high_speed_module',
        C: '#forge:gears/invar',
        D: 'thermal:rf_coil',
        E: 'prettypipes:pipe'
    }).id('kubejs:prettypipes_pressurizer')

    e.remove({ id: 'prettypipes:round_robin_sorting_modifier' })
    e.shaped('prettypipes:round_robin_sorting_modifier', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:clock',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_round_robin_sorting_modifier')

    e.remove({ id: 'prettypipes:random_sorting_modifier' })
    e.shaped('prettypipes:random_sorting_modifier', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:dropper',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo'
    }).id('kubejs:prettypipes_random_sorting_modifier')

    e.remove({ id: 'ppfluids:low_fluid_extraction_module' })
    e.shaped('ppfluids:low_fluid_extraction_module', [
        ' A ',
        'DBD',
        ' C '
    ], {
        A: '#forge:dusts/redstone',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo',
        D: 'thermal:cured_rubber'
    }).id('kubejs:prettypipes/shaped/low_fluid_extraction_module')

    e.remove({ id: 'ppfluids:medium_fluid_extraction_module' })
    e.shaped('ppfluids:medium_fluid_extraction_module', [
        ' C ',
        'ABA',
        ' A '
    ], {
        A: '#forge:nuggets/aluminum',
        B: 'ppfluids:low_fluid_extraction_module',
        C: '#forge:ingots/aluminum'
    }).id('kubejs:prettypipes/shaped/medium_fluid_extraction_module')

    e.remove({ id: 'ppfluids:high_fluid_extraction_module' })
    e.shaped('ppfluids:high_fluid_extraction_module', [
        ' C ',
        'ABA',
        ' A '
    ], {
        A: '#forge:nuggets/bronze',
        B: 'ppfluids:medium_fluid_extraction_module',
        C: '#forge:ingots/bronze'
    }).id('kubejs:prettypipes/shaped/high_fluid_extraction_module')

    e.remove({ id: 'ppfluids:low_fluid_filter_module' })
    e.shaped('ppfluids:low_fluid_filter_module', [
        ' A ',
        'DBD',
        ' C '
    ], {
        A: 'thermal:diving_fabric',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo',
        D: 'thermal:cured_rubber'
    }).id('kubejs:prettypipes/shaped/low_fluid_filter_module')

    e.remove({ id: 'ppfluids:medium_fluid_filter_module' })
    e.shaped('ppfluids:medium_fluid_filter_module', [
        ' C ',
        'ABA',
        ' C '
    ], {
        A: '#forge:nuggets/aluminum',
        B: 'ppfluids:low_fluid_filter_module',
        C: 'minecraft:iron_bars'
    }).id('kubejs:prettypipes/shaped/medium_fluid_filter_module')

    e.remove({ id: 'ppfluids:high_fluid_filter_module' })
    e.shaped('ppfluids:high_fluid_filter_module', [
        ' C ',
        'ABA',
        ' C '
    ], {
        A: '#forge:nuggets/bronze',
        B: 'ppfluids:medium_fluid_filter_module',
        C: 'minecraft:iron_bars'
    }).id('kubejs:prettypipes/shaped/high_fluid_filter_module')

    e.remove({ id: 'ppfluids:low_fluid_retrieval_module' })
    e.shaped('ppfluids:low_fluid_retrieval_module', [
        ' A ',
        'DBD',
        ' C '
    ], {
        A: 'minecraft:observer',
        B: 'prettypipes:blank_module',
        C: 'thermal:redstone_servo',
        D: 'thermal:cured_rubber'
    }).id('kubejs:prettypipes/shaped/low_fluid_retrieval_module')

    e.remove({ id: 'ppfluids:medium_fluid_retrieval_module' })
    e.shaped('ppfluids:medium_fluid_retrieval_module', [
        ' A ',
        'ABA',
        ' C '
    ], {
        A: '#forge:nuggets/aluminum',
        B: 'ppfluids:low_fluid_retrieval_module',
        C: '#forge:ingots/aluminum'
    }).id('kubejs:prettypipes/shaped/medium_fluid_retrieval_module')

    e.remove({ id: 'ppfluids:high_fluid_retrieval_module' })
    e.shaped('ppfluids:high_fluid_retrieval_module', [
        ' A ',
        'ABA',
        ' C '
    ]).id('kubejs:prettypipes/shaped/high_fluid_retrieval_module')
})