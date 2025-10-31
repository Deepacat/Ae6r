ServerEvents.recipes(e => {
    e.recipes.create.sequenced_assembly(['minecraft:book'], 'minecraft:leather',
        [
            e.recipes.create.deploying('kubejs:incomplete_book', ['kubejs:incomplete_book', '#forge:string']),
            e.recipes.create.deploying('kubejs:incomplete_book', ['kubejs:incomplete_book', '#forge:paper']),
            e.recipes.create.deploying('kubejs:incomplete_book', ['kubejs:incomplete_book', '#forge:paper']),
            e.recipes.create.deploying('kubejs:incomplete_book', ['kubejs:incomplete_book', '#forge:paper'])
        ], 'kubejs:incomplete_book', 4
    ).id('kubejs:sequenced_assembly/book_from_leather')

    e.recipes.create.sequenced_assembly(['minecraft:book'], 'tconstruct:pattern',
        [
            e.recipes.create.deploying('kubejs:incomplete_book', ['kubejs:incomplete_book', '#forge:slimeballs']),
            e.recipes.create.deploying('kubejs:incomplete_book', ['kubejs:incomplete_book', '#forge:paper']),
            e.recipes.create.deploying('kubejs:incomplete_book', ['kubejs:incomplete_book', '#forge:paper']),
            e.recipes.create.deploying('kubejs:incomplete_book', ['kubejs:incomplete_book', '#forge:paper'])
        ], 'kubejs:incomplete_book', 4
    ).id('kubejs:sequenced_assembly/book_from_pattern')

    e.remove({ id: "powah:crafting/capacitor_basic_large" })
    e.recipes.create.sequenced_assembly([Item.of('powah:capacitor_basic_large', 2)], 'pneumaticcraft:plastic',
        [
            e.recipes.create.deploying('kubejs:incomplete_capacitor_basic_large', ['kubejs:incomplete_capacitor_basic_large', '#forge:plates/aluminum']),
            e.recipes.create.deploying('kubejs:incomplete_capacitor_basic_large', ['kubejs:incomplete_capacitor_basic_large', 'powah:dielectric_paste']),
            e.recipes.create.deploying('kubejs:incomplete_capacitor_basic_large', ['kubejs:incomplete_capacitor_basic_large', '#forge:plates/signalum']),
            e.recipes.create.pressing('kubejs:incomplete_capacitor_basic_large', 'kubejs:incomplete_capacitor_basic_large')
        ], 'kubejs:incomplete_capacitor_basic_large', 4
    ).id('kubejs:crafting/capacitor_basic_large')

    e.recipes.create.sequenced_assembly([Item.of('immersiveengineering:cokebrick', 3)], 'minecraft:paper',
        [
            e.recipes.create.deploying('kubejs:partial_cokebrick', ['kubejs:partial_cokebrick', 'kubejs:coke_brick']),
            e.recipes.create.deploying('kubejs:partial_cokebrick', ['kubejs:partial_cokebrick', 'kubejs:coke_brick']),
            e.recipes.create.deploying('kubejs:partial_cokebrick', ['kubejs:partial_cokebrick', 'kubejs:coke_brick']),
            e.recipes.create.deploying('kubejs:partial_cokebrick', ['kubejs:partial_cokebrick', 'create:pulp'])
        ], 'kubejs:partial_cokebrick', 4
    ).id('kubejs:sequenced_assembly/cokebricks')

    e.recipes.create.sequenced_assembly([Item.of('immersiveengineering:blastbrick', 3)], 'minecraft:paper',
        [
            e.recipes.create.deploying('kubejs:partial_blastbrick', ['kubejs:partial_blastbrick', 'kubejs:red_nether_brick']),
            e.recipes.create.deploying('kubejs:partial_blastbrick', ['kubejs:partial_blastbrick', 'kubejs:coke_brick']),
            e.recipes.create.deploying('kubejs:partial_blastbrick', ['kubejs:partial_blastbrick', 'kubejs:blast_brick']),
            e.recipes.create.deploying('kubejs:partial_blastbrick', ['kubejs:partial_blastbrick', 'create:pulp'])
        ], 'kubejs:partial_blastbrick', 4
    ).id('kubejs:sequenced_assembly/blastbricks')

    e.recipes.create.sequenced_assembly([Item.of('immersiveengineering:alloybrick', 4)], 'kubejs:smoldering_lapis_lazuli_compound',
        [
            e.recipes.create.deploying('kubejs:partial_alloybrick', ['kubejs:partial_alloybrick', 'kubejs:blast_brick']),
            e.recipes.create.deploying('kubejs:partial_alloybrick', ['kubejs:partial_alloybrick', 'kubejs:blast_brick']),
            e.recipes.create.deploying('kubejs:partial_alloybrick', ['kubejs:partial_alloybrick', 'kubejs:blast_brick']),
            e.recipes.create.deploying('kubejs:partial_alloybrick', ['kubejs:partial_alloybrick', 'minecraft:mud_bricks']),
            e.recipes.create.deploying('kubejs:partial_alloybrick', ['kubejs:partial_alloybrick', 'create:pulp'])
        ], 'kubejs:partial_alloybrick', 4
    ).id('kubejs:sequenced_assembly/alloybricks')

    e.recipes.create.sequenced_assembly(['immersiveengineering:circuit_board'], 'immersiveengineering:insulating_glass',
        [
            e.recipes.create.deploying('immersiveengineering:insulating_glass', ['immersiveengineering:insulating_glass', '#forge:plates/copper']),
            e.recipes.create.deploying('immersiveengineering:insulating_glass', ['immersiveengineering:insulating_glass', 'powah:dielectric_paste'])
        ], 'immersiveengineering:insulating_glass', 1
    ).id('kubejs:sequenced_assembly/backplane_alternate')

    e.recipes.create.sequenced_assembly(['kubejs:engineering_student_meals'], 'mekanism:cardboard_box',
        [
            e.recipes.create.deploying('kubejs:partial_engineering_student_meals', ['kubejs:partial_engineering_student_meals', 'create:builders_tea']),
            e.recipes.create.deploying('kubejs:partial_engineering_student_meals', ['kubejs:partial_engineering_student_meals', 'create:builders_tea']),
            e.recipes.create.deploying('kubejs:partial_engineering_student_meals', ['kubejs:partial_engineering_student_meals', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_engineering_student_meals', ['kubejs:partial_engineering_student_meals', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_engineering_student_meals', ['kubejs:partial_engineering_student_meals', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_engineering_student_meals', ['kubejs:partial_engineering_student_meals', 'minecraft:enchanted_golden_apple'])
        ], 'kubejs:partial_engineering_student_meals', 60
    ).id('kubejs:sequenced_assembly/engineering_student_meals')

    e.recipes.create.sequenced_assembly(['kubejs:building_materials'], 'mekanism:cardboard_box',
        [
            e.recipes.create.deploying('kubejs:partial_building_materials', ['kubejs:partial_building_materials', '#forge:treated_wood']),
            e.recipes.create.deploying('kubejs:partial_building_materials', ['kubejs:partial_building_materials', '#forge:treated_wood']),
            e.recipes.create.deploying('kubejs:partial_building_materials', ['kubejs:partial_building_materials', '#forge:treated_wood']),
            e.recipes.create.deploying('kubejs:partial_building_materials', ['kubejs:partial_building_materials', '#forge:treated_wood']),
            e.recipes.create.deploying('kubejs:partial_building_materials', ['kubejs:partial_building_materials', 'create:copper_shingles']),
            e.recipes.create.deploying('kubejs:partial_building_materials', ['kubejs:partial_building_materials', 'quark:framed_glass'])
        ], 'kubejs:partial_building_materials', 500
    ).id('kubejs:sequenced_assembly/building_materials')

    e.recipes.create.sequenced_assembly(['kubejs:landscaping_materials'], 'mekanism:cardboard_box',
        [
            e.recipes.create.deploying('kubejs:partial_landscaping_materials', ['kubejs:partial_landscaping_materials', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_landscaping_materials', ['kubejs:partial_landscaping_materials', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_landscaping_materials', ['kubejs:partial_landscaping_materials', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_landscaping_materials', ['kubejs:partial_landscaping_materials', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_landscaping_materials', ['kubejs:partial_landscaping_materials', '#minecraft:small_flowers']),
            e.recipes.create.deploying('kubejs:partial_landscaping_materials', ['kubejs:partial_landscaping_materials', '#minecraft:leaves'])
        ], 'kubejs:partial_landscaping_materials', 250
    ).id('kubejs:sequenced_assembly/landscaping_materials')

    e.recipes.create.sequenced_assembly(['kubejs:construction_tools'], 'mekanism:cardboard_box',
        [
            e.recipes.create.deploying('kubejs:partial_construction_tools', ['kubejs:partial_construction_tools', 'pneumaticcraft:jackhammer']),
            e.recipes.create.deploying('kubejs:partial_construction_tools', ['kubejs:partial_construction_tools', 'pneumaticcraft:drill_bit_compressed_iron']),
            e.recipes.create.deploying('kubejs:partial_construction_tools', ['kubejs:partial_construction_tools', 'pneumaticcraft:bandage']),
            e.recipes.create.deploying('kubejs:partial_construction_tools', ['kubejs:partial_construction_tools', 'pneumaticcraft:bandage']),
            e.recipes.create.deploying('kubejs:partial_construction_tools', ['kubejs:partial_construction_tools', 'pneumaticcraft:bandage']),
            e.recipes.create.deploying('kubejs:partial_construction_tools', ['kubejs:partial_construction_tools', 'pneumaticcraft:bandage'])
        ], 'kubejs:partial_construction_tools', 5
    ).id('kubejs:sequenced_assembly/construction_tools')

    e.recipes.create.sequenced_assembly(['kubejs:foundation_materials'], 'mekanism:cardboard_box',
        [
            e.recipes.create.deploying('kubejs:partial_foundation_materials', ['kubejs:partial_foundation_materials', 'immersiveengineering:concrete']),
            e.recipes.create.deploying('kubejs:partial_foundation_materials', ['kubejs:partial_foundation_materials', 'immersiveengineering:concrete']),
            e.recipes.create.deploying('kubejs:partial_foundation_materials', ['kubejs:partial_foundation_materials', 'immersiveengineering:concrete']),
            e.recipes.create.deploying('kubejs:partial_foundation_materials', ['kubejs:partial_foundation_materials', '#immersiveengineering:scaffoldings/steel']),
            e.recipes.create.deploying('kubejs:partial_foundation_materials', ['kubejs:partial_foundation_materials', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_foundation_materials', ['kubejs:partial_foundation_materials', 'kubejs:replaceme'])
        ], 'kubejs:partial_foundation_materials', 500
    ).id('kubejs:sequenced_assembly/foundation_materials')

    e.recipes.create.sequenced_assembly(['kubejs:computer_package'], 'mekanism:cardboard_box',
        [
            e.recipes.create.deploying('kubejs:partial_computer_package', ['kubejs:partial_computer_package', 'rftoolsbase:tablet']),
            e.recipes.create.deploying('kubejs:partial_computer_package', ['kubejs:partial_computer_package', 'rftoolsbase:tablet']),
            e.recipes.create.deploying('kubejs:partial_computer_package', ['kubejs:partial_computer_package', 'rftoolsbase:tablet']),
            e.recipes.create.deploying('kubejs:partial_computer_package', ['kubejs:partial_computer_package', 'rftoolsbase:tablet'])
        ], 'kubejs:partial_computer_package', 5
    ).id('kubejs:sequenced_assembly/computer_package')

    e.recipes.create.sequenced_assembly(['kubejs:big_box_o_boom'], 'mekanism:cardboard_box',
        [
            e.recipes.create.deploying('kubejs:partial_big_box_o_boom', ['kubejs:partial_big_box_o_boom', 'minecraft:firework_rocket']),
            e.recipes.create.deploying('kubejs:partial_big_box_o_boom', ['kubejs:partial_big_box_o_boom', 'minecraft:firework_rocket']),
            e.recipes.create.deploying('kubejs:partial_big_box_o_boom', ['kubejs:partial_big_box_o_boom', 'minecraft:firework_rocket']),
            e.recipes.create.deploying('kubejs:partial_big_box_o_boom', ['kubejs:partial_big_box_o_boom', 'minecraft:firework_rocket'])
        ], 'kubejs:partial_big_box_o_boom', 64
    ).id('kubejs:sequenced_assembly/big_box_o_boom')

    e.recipes.create.sequenced_assembly(['kubejs:mimirs_memory_box'], 'mekanism:cardboard_box',
        [
            e.recipes.create.deploying('kubejs:partial_mimirs_memory_box', ['kubejs:partial_mimirs_memory_box', 'minecraft:experience_bottle']),
            e.recipes.create.deploying('kubejs:partial_mimirs_memory_box', ['kubejs:partial_mimirs_memory_box', 'minecraft:experience_bottle']),
            e.recipes.create.deploying('kubejs:partial_mimirs_memory_box', ['kubejs:partial_mimirs_memory_box', 'minecraft:experience_bottle']),
            e.recipes.create.deploying('kubejs:partial_mimirs_memory_box', ['kubejs:partial_mimirs_memory_box', 'minecraft:experience_bottle'])
        ], 'kubejs:partial_mimirs_memory_box', 64
    ).id('kubejs:sequenced_assembly/mimirs_memory_box')

    e.recipes.create.sequenced_assembly(['kubejs:box_of_thankful_dinners'], 'mekanism:cardboard_box',
        [
            e.recipes.create.deploying('kubejs:partial_box_of_thankful_dinners', ['kubejs:partial_box_of_thankful_dinners', 'farmersdelight:roast_chicken']),
            e.recipes.create.deploying('kubejs:partial_box_of_thankful_dinners', ['kubejs:partial_box_of_thankful_dinners', 'farmersdelight:stuffed_pumpkin']),
            e.recipes.create.deploying('kubejs:partial_box_of_thankful_dinners', ['kubejs:partial_box_of_thankful_dinners', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_box_of_thankful_dinners', ['kubejs:partial_box_of_thankful_dinners', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_box_of_thankful_dinners', ['kubejs:partial_box_of_thankful_dinners', 'minecraft:pumpkin_pie']),
            e.recipes.create.deploying('kubejs:partial_box_of_thankful_dinners', ['kubejs:partial_box_of_thankful_dinners', 'farmersdelight:apple_cider'])
        ], 'kubejs:partial_box_of_thankful_dinners', 60
    ).id('kubejs:sequenced_assembly/box_of_thankful_dinners')

    e.recipes.create.sequenced_assembly(['kubejs:stim_pack'], 'mekanism:cardboard_box',
        [
            e.recipes.create.deploying('kubejs:partial_stim_pack', ['kubejs:partial_stim_pack', Item.of('botania:incense_stick', { brewKey: "botania:emptiness" })]),
            e.recipes.create.deploying('kubejs:partial_stim_pack', ['kubejs:partial_stim_pack', [Item.of('ars_nouveau:potion_flask', { count: 8, CustomPotionEffects: [{ Ambient: 0, CurativeItems: [{ id: "minecraft:milk_bucket", Count: 1 }], ShowIcon: 1, ShowParticles: 1, Duration: 9600, Id: 1, Amplifier: 0 }], Potion: "minecraft:strong_regeneration" }), Item.of('ars_nouveau:potion_flask', { count: 8, CustomPotionEffects: [{ Ambient: 0, CurativeItems: [{ id: "minecraft:milk_bucket", Count: 1 }], ShowIcon: 1, ShowParticles: 1, Duration: 450, Id: 10, Amplifier: 1 }], Potion: "minecraft:long_swiftness" })]]),
            e.recipes.create.deploying('kubejs:partial_stim_pack', ['kubejs:partial_stim_pack', [Item.of('ars_nouveau:potion_flask', { count: 8, CustomPotionEffects: [{ Ambient: 0, CurativeItems: [{ id: "minecraft:milk_bucket", Count: 1 }], ShowIcon: 1, ShowParticles: 1, Duration: 1800, Id: 11, Amplifier: 1 }], Potion: "apotheosis:long_absorption" }), Item.of('ars_nouveau:potion_flask', { count: 8, CustomPotionEffects: [{ Ambient: 0, CurativeItems: [{ id: "minecraft:milk_bucket", Count: 1 }], ShowIcon: 1, ShowParticles: 1, Duration: 3600, Id: 22, Amplifier: 1 }], Potion: "apotheosis:strong_resistance" })]]),
            e.recipes.create.deploying('kubejs:partial_stim_pack', ['kubejs:partial_stim_pack', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_stim_pack', ['kubejs:partial_stim_pack', 'kubejs:replaceme']),
            e.recipes.create.deploying('kubejs:partial_stim_pack', ['kubejs:partial_stim_pack', 'kubejs:replaceme'])
        ], 'kubejs:partial_stim_pack', 30
    ).id('kubejs:sequenced_assembly/stim_pack')

    e.recipes.create.sequenced_assembly(['kubejs:treated_arcane_handle'], 'wizards_reborn:arcane_wood_branch',
        [
            e.recipes.create.deploying('wizards_reborn:arcane_wood_branch', ['wizards_reborn:arcane_wood_branch', 'naturesaura:ancient_planks']),
            e.recipes.create.filling('wizards_reborn:arcane_wood_branch', ['wizards_reborn:arcane_wood_branch', Fluid.of('immersiveengineering:creosote', 250)]),
            e.recipes.create.filling('wizards_reborn:arcane_wood_branch', ['wizards_reborn:arcane_wood_branch', Fluid.of('starbunclemania:source_fluid', 250)]),
            e.recipes.create.deploying('wizards_reborn:arcane_wood_branch', ['wizards_reborn:arcane_wood_branch', 'kubejs:leather_stripe']),
        ], 'wizards_reborn:arcane_wood_branch', 4
    ).id('kubejs:sequenced_assembly/treated_arcane_handle')

    e.recipes.create.sequenced_assembly(['emendatus:charged_certus_steel_ingot'], 'kubejs:superheated_steel_ingot',
        [
            e.recipes.create.deploying('kubejs:superheated_steel_ingot', ['kubejs:superheated_steel_ingot', 'ae2:charged_certus_quartz_crystal']),
            e.recipes.create.deploying('kubejs:superheated_steel_ingot', ['kubejs:superheated_steel_ingot', 'ae2:charged_certus_quartz_crystal']),
            e.recipes.create.pressing('kubejs:superheated_steel_ingot', 'kubejs:superheated_steel_ingot')
        ], 'kubejs:superheated_steel_ingot', 2
    ).id('kubejs:sequenced_assembly/charged_certus_steel_ingot')
})
