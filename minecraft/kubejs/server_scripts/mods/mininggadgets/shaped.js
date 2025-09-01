ServerEvents.recipes(e => {
    e.remove({ id: 'mininggadgets:upgrade_silk' })
    e.shaped('mininggadgets:upgrade_silk', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'tconstruct:silky_cloth',
        B: '#forge:circuits/basic',
        C: '#forge:alloys/elite',
        D: 'mekanism:module_base'
    }).id('kubejs:mininggadgets_upgrade_silk')

    e.remove({ id: 'mininggadgets:upgrade_void_junk' })
    e.shaped('mininggadgets:upgrade_void_junk', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'trashcans:item_trash_can',
        B: '#forge:circuits/basic',
        C: '#forge:ingots/andesite_alloy',
        D: 'mekanism:module_base'
    }).id('kubejs:mininggadgets_upgrade_void_junk')

    e.remove({ id: 'mininggadgets:upgrade_magnet' })
    e.shaped('mininggadgets:upgrade_magnet', [
        'ABA',
        'ADA',
        'ACA'
    ], {
        A: 'immersiveengineering:coil_lv',
        B: '#forge:circuits/basic',
        C: 'thermal:flux_magnet',
        D: 'mekanism:module_base'
    }).id('kubejs:mininggadgets_upgrade_magnet')

    e.remove({ id: 'mininggadgets:upgrade_size_1' })
    e.shaped('mininggadgets:upgrade_size_1', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'immersiveengineering:insulating_glass',
        B: '#forge:circuits/basic',
        C: 'mekanismgenerators:laser_focus_matrix',
        D: 'mekanism:module_base'
    }).id('kubejs:mininggadgets_upgrade_size_1')

    e.remove({ id: 'mininggadgets:upgrade_light_placer' })
    e.shaped('mininggadgets:upgrade_light_placer', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:gears/lumium',
        B: '#forge:circuits/basic',
        C: 'thermal:lumium_glass',
        D: 'mekanism:module_base'
    }).id('kubejs:mininggadgets_upgrade_light_placer')

    e.remove({ id: 'mininggadgets:upgrade_freezing' })
    e.shaped('mininggadgets:upgrade_freezing', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'cookingforblockheads:preservation_chamber',
        B: '#forge:circuits/basic',
        C: 'powah:dry_ice',
        D: 'mekanism:module_base'
    }).id('kubejs:mininggadgets_upgrade_freezing')

    e.remove({ id: 'mininggadgets:upgrade_fortune_1' })
    e.shaped('mininggadgets:upgrade_fortune_1', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:storage_blocks/emerald',
        B: '#forge:circuits/basic',
        C: 'create:polished_rose_quartz',
        D: 'mekanism:module_base',
        E: 'bloodmagic:fortune_anointment'
    }).id('kubejs:mininggadgets_upgrade_fortune_1')

    e.remove({ id: 'mininggadgets:upgrade_fortune_2' })
    e.shaped('mininggadgets:upgrade_fortune_2', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:storage_blocks/gold',
        B: '#forge:circuits/advanced',
        C: 'create:polished_rose_quartz',
        D: 'mininggadgets:upgrade_fortune_1',
        E: 'kubejs:replaceme'
    }).id('kubejs:mininggadgets_upgrade_fortune_2')

    e.remove({ id: 'mininggadgets:upgrade_fortune_3' })
    e.shaped('mininggadgets:upgrade_fortune_3', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:storage_blocks/rose_gold',
        B: '#forge:circuits/elite',
        C: 'create:polished_rose_quartz',
        D: 'mininggadgets:upgrade_fortune_2',
        E: 'tconstruct:jeweled_apple'
    }).id('kubejs:mininggadgets_upgrade_fortune_3')

    e.remove({ id: 'mininggadgets:upgrade_range_1' })
    e.shaped('mininggadgets:upgrade_range_1', [
        'ABA',
        'ADA',
        'ACA'
    ], {
        A: 'immersiveengineering:coil_lv',
        B: '#forge:circuits/basic',
        C: 'mekanism:laser_amplifier',
        D: 'mekanism:module_base'
    }).id('kubejs:mininggadgets_upgrade_range_1')

    e.remove({ id: 'mininggadgets:upgrade_range_2' })
    e.shaped('mininggadgets:upgrade_range_2', [
        'ABA',
        'ADA',
        'ACA'
    ], {
        A: 'immersiveengineering:coil_mv',
        B: '#forge:circuits/advanced',
        C: 'mekanism:laser_amplifier',
        D: 'mininggadgets:upgrade_range_1'
    }).id('kubejs:mininggadgets_upgrade_range_2')

    e.remove({ id: 'mininggadgets:upgrade_range_3' })
    e.shaped('mininggadgets:upgrade_range_3', [
        'ABA',
        'ADA',
        'ACA'
    ], {
        A: 'immersiveengineering:coil_hv',
        B: '#forge:circuits/elite',
        C: 'mekanism:laser_amplifier',
        D: 'mininggadgets:upgrade_range_2'
    }).id('kubejs:mininggadgets_upgrade_range_3')

    e.remove({ id: 'mininggadgets:upgrade_battery_1' })
    e.shaped('mininggadgets:upgrade_battery_1', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'immersiveengineering:insulating_glass',
        B: '#forge:circuits/basic',
        C: 'mekanism:basic_energy_cube',
        D: 'mekanism:module_base'
    }).id('kubejs:mininggadgets_upgrade_battery_1')

    e.remove({ id: 'mininggadgets:upgrade_battery_2' })
    e.shaped('mininggadgets:upgrade_battery_2', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'immersiveengineering:insulating_glass',
        B: '#forge:circuits/advanced',
        C: 'mekanism:advanced_energy_cube',
        D: 'mininggadgets:upgrade_battery_1'
    }).id('kubejs:mininggadgets_upgrade_battery_2')

    e.remove({ id: 'mininggadgets:upgrade_battery_3' })
    e.shaped('mininggadgets:upgrade_battery_3', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'immersiveengineering:insulating_glass',
        B: '#forge:circuits/elite',
        C: 'mekanism:elite_energy_cube',
        D: 'mininggadgets:upgrade_battery_2'
    }).id('kubejs:mininggadgets_upgrade_battery_3')

    e.remove({ id: 'mininggadgets:upgrade_efficiency_1' })
    e.shaped('mininggadgets:upgrade_efficiency_1', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'mekanism:basic_thermodynamic_conductor',
        B: '#forge:circuits/basic',
        C: 'immersiveengineering:toolupgrade_railgun_capacitors',
        D: 'mekanism:module_base',
        E: 'powah:energizing_rod_hardened'
    }).id('kubejs:mininggadgets_upgrade_efficiency_1')

    e.remove({ id: 'mininggadgets:upgrade_efficiency_2' })
    e.shaped('mininggadgets:upgrade_efficiency_2', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'mekanism:advanced_thermodynamic_conductor',
        B: '#forge:circuits/advanced',
        C: 'immersiveengineering:toolupgrade_railgun_capacitors',
        D: 'mininggadgets:upgrade_efficiency_1',
        E: 'powah:energizing_rod_blazing'
    }).id('kubejs:mininggadgets_upgrade_efficiency_2')

    e.remove({ id: 'mininggadgets:upgrade_efficiency_3' })
    e.shaped('mininggadgets:upgrade_efficiency_3', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'mekanism:advanced_thermodynamic_conductor',
        B: '#forge:circuits/advanced',
        C: 'immersiveengineering:toolupgrade_railgun_capacitors',
        D: 'mininggadgets:upgrade_efficiency_2',
        E: 'powah:energizing_rod_niotic'
    }).id('kubejs:mininggadgets_upgrade_efficiency_3')

    e.remove({ id: 'mininggadgets:upgrade_efficiency_4' })
    e.shaped('mininggadgets:upgrade_efficiency_4', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'mekanism:elite_thermodynamic_conductor',
        B: '#forge:circuits/elite',
        C: 'immersiveengineering:toolupgrade_railgun_capacitors',
        D: 'mininggadgets:upgrade_efficiency_3',
        E: 'powah:energizing_rod_spirited'
    }).id('kubejs:mininggadgets_upgrade_efficiency_4')

    e.remove({ id: 'mininggadgets:upgrade_efficiency_5' })
    e.shaped('mininggadgets:upgrade_efficiency_5', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'mekanism:elite_thermodynamic_conductor',
        B: '#forge:circuits/elite',
        C: 'immersiveengineering:toolupgrade_railgun_capacitors',
        D: 'mininggadgets:upgrade_efficiency_4',
        E: 'powah:energizing_rod_nitro'
    }).id('kubejs:mininggadgets_upgrade_efficiency_5')

    e.remove({ id: 'mininggadgets:modificationtable' })
    e.shaped('mininggadgets:modificationtable', [
        'BAB',
        'BCB'
    ], {
        A: 'rftoolsbase:tablet',
        B: 'mekanism:hdpe_sheet',
        C: 'thermal:tinker_bench'
    }).id('kubejs:mininggadgets_modificationtable')
})
