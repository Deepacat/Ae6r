ServerEvents.recipes(e => {
    e.remove({ id: 'industrialforegoing:item_transporter_type' })
    e.shaped('4x industrialforegoing:item_transporter_type', [
        'ABA',
        'CEC',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'minecraft:ender_pearl',
        C: 'minecraft:gold_ingot',
        D: 'minecraft:piston',
        E: 'thermal:machine_frame',
    })

    e.remove({ id: 'industrialforegoing:fluid_transporter_type' })
    e.shaped('4x industrialforegoing:fluid_transporter_type', [
        'ABA',
        'CEC',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'minecraft:ender_pearl',
        C: 'minecraft:lapis_lazuli',
        D: 'minecraft:piston',
        E: 'thermal:machine_frame',
    })

    e.remove({ id: 'industrialforegoing:world_transporter_type' })
    e.shaped('4x industrialforegoing:world_transporter_type', [
        'ABA',
        'CEC',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'minecraft:ender_pearl',
        C: 'minecraft:hopper',
        D: 'minecraft:dropper',
        E: 'thermal:machine_frame',
    })

    e.remove({ id: 'industrialforegoing:machine_frame_pity' })
    e.shaped('industrialforegoing:machine_frame_pity', [
        'CDC',
        'ABA',
        'CDC'
    ], {
        A: 'immersiveengineering:concrete_leaded',
        B: 'thermal:machine_frame',
        C: 'create:andesite_casing',
        D: 'immersiveengineering:component_iron'
    }).id('kubejs:industrialforegoing_machine_frame_pity')

    e.remove({ id: 'industrialforegoing:laser_drill' })
    e.shaped('industrialforegoing:laser_drill', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:plastic',
        B: 'mekanismgenerators:laser_focus_matrix',
        C: '#forge:gears/enderium',
        D: 'mekanism:laser'
    }).id('kubejs:industrialforegoing_laser_drill')

    e.remove({ id: 'industrialforegoing:ore_laser_base' })
    e.shaped('industrialforegoing:ore_laser_base', [
        'ABA',
        'CDC',
        'BEB'
    ], {
        A: '#forge:plastic',
        B: '#forge:gears/lumium',
        C: 'thermal:enderium_glass',
        D: '#industrialforegoing:machine_frame/supreme',
        E: 'pneumaticcraft:smart_chest'
    }).id('kubejs:industrialforegoing_ore_laser_base')

    e.remove({ id: 'industrialforegoing:fluid_laser_base' })
    e.shaped('industrialforegoing:fluid_laser_base', [
        'ABA',
        'CDC',
        'BEB'
    ], {
        A: '#forge:plastic',
        B: '#forge:gears/lumium',
        C: 'thermal:enderium_glass',
        D: '#industrialforegoing:machine_frame/advanced',
        E: 'mekanism:dynamic_tank'
    }).id('kubejs:industrialforegoing_fluid_laser_base')

    e.remove({ id: 'industrialforegoing:plant_fertilizer' })
    e.shaped('industrialforegoing:plant_fertilizer', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: ['#forge:plastic', 'mekanism:hdpe_sheet'],
        B: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
        C: 'create:mechanical_pump',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'create:nozzle',
        F: '#forge:gears/lumium',
        G: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_plant_fertilizer')

    e.remove({ id: 'industrialforegoing:hydroponic_bed' })
    e.shaped('industrialforegoing:hydroponic_bed', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: ['#forge:plastic', 'mekanism:hdpe_sheet'],
        B: 'industrialforegoing:fertilizer',
        C: 'mekanism:dynamic_tank',
        D: 'supplementaries:planter_rich',
        E: '#industrialforegoing:machine_frame/pity',
        F: '#forge:gears/lumium'
    }).id('kubejs:industrialforegoing_hydroponic_bed')

    e.remove({ id: 'industrialforegoing:mob_detector' })
    e.shaped('industrialforegoing:mob_detector', [
        'ABA',
        'CDE',
        'ABA'
    ], {
        A: '#forge:plastic',
        B: 'minecraft:comparator',
        C: 'pneumaticcraft:module_expansion_card',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'botania:ender_eye_block'
    }).id('kubejs:industrialforegoing_mob_detector')

    e.remove({ id: 'industrialforegoing:enchantment_sorter' })
    e.shaped('industrialforegoing:enchantment_sorter', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plastic',
        B: 'pneumaticcraft:module_expansion_card',
        C: '#forge:storage_blocks/source',
        D: '#industrialforegoing:machine_frame/pity',
        E: '#forge:gears/osmium',
        F: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_enchantment_sorter')

    e.remove({ id: 'industrialforegoing:potion_brewer' })
    e.shaped('industrialforegoing:potion_brewer', [
        ' B ',
        'ACA',
        'DED'
    ], {
        A: '#forge:plastic',
        B: 'minecraft:brewing_stand',
        C: '#industrialforegoing:machine_frame/pity',
        D: '#forge:gears/constantan',
        E: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_potion_brewer')

    e.remove({ id: 'industrialforegoing:marine_fisher' })
    e.shaped('industrialforegoing:marine_fisher', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: '#forge:plastic',
        B: Item.of('aquaculture:neptunium_fishing_rod', '{Damage:0}').weakNBT(),
        C: 'aquaculture:nether_star_hook',
        D: '#industrialforegoing:machine_frame/simple',
        E: 'aquaculture:worm',
        F: '#forge:gears/bronze',
        G: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_marine_fisher')

    e.remove({ id: 'industrialforegoing:enchantment_extractor' })
    e.shaped('industrialforegoing:enchantment_extractor', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plastic',
        B: '#botania:runes/mana',
        C: 'botania:pump',
        D: '#industrialforegoing:machine_frame/simple',
        E: '#forge:gears/osmium',
        F: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_enchantment_extractor')

    e.remove({ id: 'industrialforegoing:washing_factory' })
    e.shaped('industrialforegoing:washing_factory', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plastic',
        B: '#forge:ingots/slimesteel',
        C: 'create:fluid_tank',
        D: 'thermal:machine_frame',
        E: '#forge:gears/compressed_iron',
        F: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_washing_factory')

    e.remove({ id: 'industrialforegoing:fermentation_station' })
    e.shaped('industrialforegoing:fermentation_station', [
        'ABA',
        'CDC',
        'CEC'
    ], {
        A: '#forge:plastic',
        B: '#forge:ingots/slimesteel',
        C: 'pneumaticcraft:reinforced_bricks',
        D: 'sushigocrafting:fermentation_barrel',
        E: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_fermentation_station')

    e.remove({ id: 'industrialforegoing:fluid_sieving_machine' })
    e.shaped('industrialforegoing:fluid_sieving_machine', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: '#forge:plastic',
        B: '#forge:ingots/slimesteel',
        C: 'create:fluid_tank',
        D: 'thermal:machine_frame',
        E: 'create:smart_fluid_pipe',
        F: '#forge:gears/compressed_iron',
        G: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_fluid_sieving_machine')

    e.remove({ id: 'industrialforegoing:material_stonework_factory' })
    e.shaped('industrialforegoing:material_stonework_factory', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: '#forge:plastic',
        B: 'rftoolsutility:crafter1',
        C: 'immersiveengineering:drillhead_steel',
        D: '#industrialforegoing:machine_frame/advanced',
        E: 'mekanism:energized_smelter',
        F: '#forge:gears/compressed_iron',
        G: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_material_stonework_factory')

    e.remove({ id: 'industrialforegoing:stasis_chamber' })
    e.shaped('industrialforegoing:stasis_chamber', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: '#forge:plastic',
        B: 'rftoolsutility:regenerationplus_module',
        C: 'rftoolsutility:noteleport_module',
        D: '#industrialforegoing:machine_frame/advanced',
        E: 'rftoolsutility:slowness_module',
        F: '#forge:gears/uranium',
        G: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_stasis_chamber')

    e.remove({ id: 'industrialforegoing:mob_crusher' })
    e.shaped('industrialforegoing:mob_crusher', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: '#forge:plastic',
        B: 'thermal:device_collector',
        C: 'create:mechanical_arm',
        D: '#industrialforegoing:machine_frame/advanced',
        E: 'industrialforegoing:infinity_hammer',
        F: '#forge:gears/uranium',
        G: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_mob_crusher')

    e.remove({ id: 'industrialforegoing:black_hole_controller' })
    e.shaped('industrialforegoing:black_hole_controller', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:plastic',
        B: 'kubejs:replaceme',
        C: 'kubejs:replaceme',
        D: 'enderstorage:ender_chest',
        E: 'kubejs:replaceme'
    }).id('kubejs:industrialforegoing_black_hole_controller')

    e.remove({ id: 'industrialforegoing:infinity_charger' })
    e.shaped('industrialforegoing:infinity_charger', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: '#forge:plastic',
        B: 'mekanism:ultimate_universal_cable',
        C: 'mekanism:ultimate_induction_cell',
        D: '#forge:gears/signalum',
        E: '#industrialforegoing:machine_frame/advanced'
    }).id('kubejs:industrialforegoing_infinity_charger')

    e.remove({ id: 'industrialforegoing:enchantment_factory' })
    e.shaped('industrialforegoing:enchantment_factory', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plastic',
        B: 'botania:rosa_arcana',
        C: 'kubejs:memory_ultimate_filled',
        D: 'botania:enchanted_soil',
        E: 'botania:mana_pylon',
        F: '#industrialforegoing:machine_frame/advanced'
    }).id('kubejs:industrialforegoing_enchantment_factory')

    e.remove({ id: 'industrialforegoing:enchantment_applicator' })
    e.shaped('industrialforegoing:enchantment_applicator', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plastic',
        B: 'kubejs:replaceme',
        C: 'kubejs:memory_ultimate_filled',
        D: 'mekanism:dynamic_tank',
        E: '#forge:gears/osmium',
        F: '#industrialforegoing:machine_frame/simple'
    }).id('kubejs:industrialforegoing_enchantment_applicator')

    e.remove({ id: 'industrialforegoing:mob_imprisonment_tool' })
    e.shaped('industrialforegoing:mob_imprisonment_tool', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:plastic',
        B: 'pneumaticcraft:spawner_core'
    }).id('kubejs:industrialforegoing_mob_imprisonment_tool')

    e.remove({ id: 'industrialforegoing:wither_builder' })
    e.shaped('industrialforegoing:wither_builder', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: 'ars_nouveau:glyph_wither',
        B: 'rftoolsutility:matter_beamer',
        C: 'rftoolsutility:spawner',
        D: Item.of('rftoolsutility:syringe', '{mobName:"minecraft:wither",mobId:"minecraft:wither",level:10}'),
        E: '#industrialforegoing:machine_frame/supreme'
    }).id('kubejs:industrialforegoing_wither_builder')

    e.remove({ id: 'industrialforegoing:sewer' })
    e.shaped('industrialforegoing:sewer', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: 'quark:grate',
        B: 'create:fluid_pipe',
        C: 'industrialforegoing:common_black_hole_tank',
        D: 'environmental:mud_bricks',
        E: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_sewer')

    e.remove({ id: 'industrialforegoing:sewage_composter' })
    e.shaped('industrialforegoing:sewage_composter', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'aquaculture:worm',
        B: 'minecraft:composter',
        C: '#minecraft:sand',
        D: 'environmental:kiln',
        E: 'environmental:mud_bricks',
        F: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_sewage_composter')

    e.remove({ id: 'industrialforegoing:animal_baby_separator' })
    e.shaped('industrialforegoing:animal_baby_separator', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: 'immersiveengineering:sheetmetal_colored_white',
        B: 'minecraft:golden_carrot',
        C: 'minecraft:tripwire_hook',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'create:weighted_ejector',
        F: '#forge:gears/invar',
        G: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_animal_baby_separator')

    e.remove({ id: 'industrialforegoing:animal_rancher' })
    e.shaped('industrialforegoing:animal_rancher', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: 'immersiveengineering:sheetmetal_colored_white',
        B: 'minecraft:milk_bucket',
        C: 'minecraft:shears',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'create:deployer',
        F: '#forge:gears/invar',
        G: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_animal_rancher')

    e.remove({ id: 'kubejs:range_addon0' })
    e.shaped(Item.of('industrialforegoing:range_addon0', '{TitaniumAugment:{Range:0.0f}}'), [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#forge:dyes/gray',
        B: '#forge:dusts/redstone',
        C: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip']
    }).id('kubejs:kubejs_range_addon0')

    e.remove({ id: 'kubejs:range_addon1' })
    e.shaped(Item.of('industrialforegoing:range_addon1', '{TitaniumAugment:{Range:1.0f}}'), [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#forge:dyes/blue',
        B: '#forge:dusts/redstone',
        C: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip']
    }).id('kubejs:kubejs_range_addon1')

    e.remove({ id: 'kubejs:range_addon2' })
    e.shaped(Item.of('industrialforegoing:range_addon2', '{TitaniumAugment:{Range:2.0f}}'), [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#forge:dyes/light_gray',
        B: '#forge:dusts/redstone',
        C: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip']
    }).id('kubejs:kubejs_range_addon2')

    e.remove({ id: 'industrialforegoing:fluid_placer' })
    e.shaped('industrialforegoing:fluid_placer', [
        'AAA',
        'ABC',
        'DED'
    ], {
        A: 'immersiveengineering:fluid_pipe',
        B: 'create:propeller',
        C: 'industrialforegoing:common_black_hole_tank',
        D: 'minecraft:smooth_stone',
        E: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_fluid_placer')

    e.remove({ id: 'industrialforegoing:water_condensator' })
    e.shaped('industrialforegoing:water_condensator', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:sheetmetals/aluminum',
        B: 'industrialforegoing:common_black_hole_tank',
        C: 'create:fluid_pipe',
        D: 'create:mechanical_pump',
        E: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_water_condensator')

    e.remove({ id: 'industrialforegoing:block_placer' })
    e.shaped('industrialforegoing:block_placer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:plastic',
        B: 'minecraft:dispenser',
        C: 'industrialforegoing:dryrubber',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_block_placer')

    e.remove({ id: 'industrialforegoing:block_breaker' })
    e.shaped('industrialforegoing:block_breaker', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:plastic',
        B: 'immersiveengineering:drillhead_steel',
        C: '#forge:gears/steel',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_block_breaker')

    e.remove({ id: 'industrialforegoing:spores_recreator' })
    e.shaped('industrialforegoing:spores_recreator', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plastic',
        B: 'kubejs:replaceme',
        C: '#forge:mushrooms',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'minecraft:mycelium',
        F: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_spores_recreator')

    e.remove({ id: 'industrialforegoing:plant_sower' })
    e.shaped('industrialforegoing:plant_sower', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plastic',
        B: 'create:weighted_ejector',
        C: '#forge:slimeballs',
        D: '#industrialforegoing:machine_frame/pity',
        E: '#forge:gears/lumium',
        F: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_plant_sower')

    e.remove({ id: 'industrialforegoing:plant_gatherer' })
    e.shaped('industrialforegoing:plant_gatherer', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: '#forge:plastic',
        B: 'create:mechanical_arm',
        C: 'naturesaura:infused_iron_axe',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'naturesaura:infused_iron_hoe',
        F: '#forge:gears/lumium',
        G: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_plant_gatherer')

    e.remove({ id: 'industrialforegoing:sludge_refiner' })
    e.shaped('industrialforegoing:sludge_refiner', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plastic',
        B: '#forge:plates/brass',
        C: 'immersiveengineering:alloybrick',
        D: 'create:basin',
        E: '#forge:gears/uranium',
        F: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_sludge_refiner')

    e.remove({ id: 'industrialforegoing:fluid_extractor' })
    e.shaped('industrialforegoing:fluid_extractor', [
        'AAA',
        'BCD',
        'AEA'
    ], {
        A: 'immersiveengineering:sheetmetal_colored_white',
        B: 'industrialforegoing:common_black_hole_tank',
        C: 'tconstruct:seared_channel',
        D: 'create:mechanical_drill',
        E: '#industrialforegoing:machine_frame/pity'
    }).id('kubejs:industrialforegoing_fluid_extractor')

    e.remove({ id: 'industrialforegoing:latex_processing_unit' })
    e.shaped('industrialforegoing:latex_processing_unit', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: 'immersiveengineering:fluid_pipe',
        B: 'industrialforegoing:common_black_hole_tank',
        C: '#industrialforegoing:machine_frame/pity',
        D: '#forge:gears/uranium',
        E: 'thermal:rf_coil'
    }).id('kubejs:industrialforegoing_latex_processing_unit')

    e.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_backpack' })
    e.shaped('industrialforegoing:infinity_backpack', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: 'mekanism:hdpe_sheet',
        B: Item.of('thermal:fluid_cell'),
        C: 'tconstruct:piggy_backpack',
        D: Item.of('kubejs:replaceme', '{oldId:"dankstorage:dank_3"}'),
        E: Item.of('thermal:energy_cell')
    }).id('kubejs:industrialforegoing_dissolution_chamber/infinity_backpack')
})