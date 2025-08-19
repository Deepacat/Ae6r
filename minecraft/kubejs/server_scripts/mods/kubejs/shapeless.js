ServerEvents.recipes(e => {
    e.shapeless('kubejs:engineers_school_project',
        ['kubejs:construction_tools', 'kubejs:engineering_student_meals', 'kubejs:landscaping_materials', 'kubejs:foundation_materials', 'kubejs:building_materials', 'kubejs:building_materials', 'kubejs:building_materials', 'kubejs:building_materials', 'kubejs:building_materials']
    ).id('kubejs:shapeless/shapeless/engineers_school_project')

    e.shapeless('kubejs:engineers_school_upgrades',
        ['kubejs:computer_package', 'kubejs:fluid_drill_package']
    ).id('kubejs:shapeless/shapeless/engineers_school_upgrades')

    e.shapeless('kubejs:cpu_core_mk_1026',
        ['rftoolscontrol:cpu_core_500']
    ).id('kubejs:shapeless/shapeless/cpu_tier_one_conversion')

    e.shapeless('rftoolscontrol:cpu_core_500',
        ['kubejs:cpu_core_mk_1026']
    ).id('kubejs:shapeless/shapeless/cpu_tier_one_reversion')

    e.shapeless('kubejs:cpu_core_eg_28222',
        ['rftoolscontrol:cpu_core_1000']
    ).id('kubejs:shapeless/shapeless/cpu_tier_two_conversion')

    e.shapeless('rftoolscontrol:cpu_core_1000',
        ['kubejs:cpu_core_eg_28222']
    ).id('kubejs:shapeless/shapeless/cpu_tier_two_reversion')

    e.shapeless('kubejs:cpu_core_as_81221',
        ['rftoolscontrol:cpu_core_2000']
    ).id('kubejs:shapeless/shapeless/cpu_tier_three_conversion')

    e.shapeless('rftoolscontrol:cpu_core_2000',
        ['kubejs:cpu_core_as_81221']
    ).id('kubejs:shapeless/shapeless/cpu_tier_three_reversion')
})