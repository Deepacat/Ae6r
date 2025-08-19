ServerEvents.recipes(e => {
    e.remove({ id: "bloodmagic:alchemytable/arcane_ash" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:arcaneashes', 1),
        ['kubejs:magic_clay', 'minecraft:blaze_powder'])
        .syphon(500)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/arcane_ash')

    e.recipes.bloodmagic.alchemytable(Item.of('kubejs:cutting_essence', 8),
        ['alexsmobs:komodo_spit', 'alexsmobs:rattlesnake_rattle', '#forge:dusts/charcoal'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/cutting_essence')

    e.remove({ id: "bloodmagic:alchemytable/basic_cutting_fluid" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:basiccuttingfluid', 1),
        ['bloodmagic:plantoil', 'kubejs:cutting_essence'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/basic_cutting_fluid')

    e.remove({ id: "occultism:crafting/chalk_white_impure" })
    e.recipes.bloodmagic.alchemytable(Item.of('occultism:chalk_white_impure', 1),
        ['bloodmagic:plantoil', 'occultism:burnt_otherstone', 'occultism:burnt_otherstone', 'occultism:otherworld_ashes', 'occultism:otherworld_ashes', 'occultism:otherworld_ashes'])
        .syphon(500)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:crafting/chalk_white_impure')

    e.remove({ id: "occultism:crafting/chalk_gold_impure" })
    e.recipes.bloodmagic.alchemytable(Item.of('occultism:chalk_gold_impure', 1),
        ['bloodmagic:plantoil', 'occultism:chalk_white_impure', 'architects_palette:sunmetal_blend', 'naturesaura:gold_powder'])
        .syphon(1000)
        .ticks(200)
        .upgradeLevel(2)
        .id('kubejs:crafting/chalk_gold_impure')

    e.remove({ id: "occultism:crafting/chalk_purple_impure" })
    e.recipes.bloodmagic.alchemytable(Item.of('occultism:chalk_purple_impure', 1),
        ['bloodmagic:plantoil', 'occultism:chalk_white_impure', 'kubejs:replaceme', 'eidolon:ender_calx'])
        .syphon(1500)
        .ticks(200)
        .upgradeLevel(3)
        .id('kubejs:crafting/chalk_purple_impure')

    e.remove({ id: "occultism:crafting/chalk_red_impure" })
    e.recipes.bloodmagic.alchemytable(Item.of('occultism:chalk_red_impure', 1),
        ['bloodmagic:plantoil', 'occultism:chalk_white_impure', 'occultism:afrit_essence', 'create:cinder_flour'])
        .syphon(5000)
        .ticks(200)
        .upgradeLevel(4)
        .id('kubejs:crafting/chalk_red_impure')

    e.remove({ id: "bloodmagic:alchemytable/reagent_lava" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:reagentlava', 1),
        ['alexsmobs:bone_serpent_tooth', '#forge:dusts/sulfur', 'minecraft:magma_cream', 'ars_nouveau:red_archwood_wood'])
        .syphon(1000)
        .ticks(200)
        .upgradeLevel(0)
        .id('kubejs:alchemytable/reagent_lava')

    e.remove({ id: "bloodmagic:alchemytable/reagent_growth" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:reagentgrowth', 1),
        ['#minecraft:saplings', '#minecraft:saplings', 'minecraft:sugar_cane', 'thermal:phytogro'])
        .syphon(2000)
        .ticks(200)
        .upgradeLevel(2)
        .id('kubejs:alchemytable/reagent_growth')

    e.remove({ id: "bloodmagic:alchemytable/reagent_air" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:reagentair', 1),
        ['quark:bottled_cloud', 'alexsmobs:tarantula_hawk_wing_fragment', 'ars_nouveau:wilden_wing'])
        .syphon(2000)
        .ticks(200)
        .upgradeLevel(2)
        .id('kubejs:alchemytable/reagent_air')

    e.remove({ id: "bloodmagic:alchemytable/reagent_water" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:reagentwater', 1),
        ['upgrade_aquatic:thrasher_tooth', '#forge:dusts/lapis', 'minecraft:prismarine_shard', 'minecraft:kelp'])
        .syphon(300)
        .ticks(200)
        .upgradeLevel(2)
        .id('kubejs:alchemytable/reagent_water')

    e.remove({ id: "bloodmagic:alchemytable/reagent_holding" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:reagentholding', 1),
        ['alexsmobs:kangaroo_hide', 'alexsmobs:kangaroo_hide', 'ars_nouveau:mana_fiber', 'ars_nouveau:mana_fiber'])
        .syphon(2000)
        .ticks(200)
        .upgradeLevel(2)
        .id('kubejs:alchemytable/reagent_holding')

    e.remove({ id: "bloodmagic:alchemytable/reagent_magnetism" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:reagentmagnetism', 1),
        ['minecraft:lodestone', 'ars_nouveau:mana_fiber', 'eidolon:gold_inlay'])
        .syphon(1000)
        .ticks(200)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/reagent_magnetism')

    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:weakbloodshard', 1),
        ['occultism:afrit_essence', Item.of('botania:brew_vial', '{brewKey:"botania:bloodthirst"}'), 'eidolon:crimson_essence'])
        .syphon(20000)
        .ticks(200)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/weakbloodshard_from_vial')

    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:weakbloodshard', 2),
        ['occultism:afrit_essence', Item.of('botania:brew_flask', '{brewKey:"botania:bloodthirst"}'), 'eidolon:crimson_essence'])
        .syphon(20000)
        .ticks(200)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/weakbloodshard_from_flask')

    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:weakbloodshard', 10),
        ['occultism:afrit_essence', Item.of('botania:incense_stick', '{brewKey:"botania:bloodthirst"}'), 'eidolon:crimson_essence'])
        .syphon(20000)
        .ticks(200)
        .upgradeLevel(4)
        .id('kubejs:alchemytable/weakbloodshard_from_incense')

    e.recipes.bloodmagic.alchemytable(Item.of('eidolon:crimson_essence', 2),
        [['minecraft:crimson_roots', 'undergarden:blisterberry'], '#forge:crops/nether_wart', '#forge:dusts/sulfur'])
        .syphon(200)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/crimson_essence')

    e.recipes.bloodmagic.alchemytable(Item.of('eidolon:death_essence', 4),
        ['eidolon:zombie_heart', 'undergarden:raw_dweller_meat', 'undergarden:ditchbulb', 'projectvibrantjourneys:charred_bones', 'undergarden:ink_mushroom'])
        .syphon(200)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/death_essence')

    e.recipes.bloodmagic.alchemytable(Item.of('meetyourfight:fossil_bait', 1),
        ['aquaculture:fish_bones', '#forge:dusts/lapis', 'minecraft:fermented_spider_eye', 'undergarden:raw_dweller_meat'])
        .syphon(1000)
        .ticks(200)
        .upgradeLevel(2)
        .id('kubejs:alchemytable/fossil_bait')

    e.remove({ id: "bloodmagic:alchemytable/holy_water_anointment" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:holy_water_anointment', 1),
        ['bloodmagic:slate_vial', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), '#forge:nuggets/silver', 'undergarden:shimmerweed'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/holy_water_anointment')

    e.remove({ id: "bloodmagic:alchemytable/looting_anointment" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:looting_anointment', 1),
        ['bloodmagic:slate_vial', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), '#forge:nuggets/regalium', 'undergarden:underbeans'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/looting_anointment')

    e.remove({ id: "bloodmagic:alchemytable/melee_damage_anointment" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:melee_anointment', 1),
        ['bloodmagic:slate_vial', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), '#forge:nuggets/froststeel', 'undergarden:dweller_steak'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/melee_damage_anointment')

    e.remove({ id: "bloodmagic:alchemytable/hidden_knowledge_anointment" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:hidden_knowledge_anointment', 1),
        ['bloodmagic:slate_vial', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), '#forge:nuggets/cloggrum', 'undergarden:veil_mushroom'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/hidden_knowledge_anointment')

    e.remove({ id: "bloodmagic:alchemytable/fortune_anointment" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:fortune_anointment', 1),
        ['bloodmagic:slate_vial', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), '#forge:nuggets/regalium', 'undergarden:indigo_mushroom'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/fortune_anointment')

    e.remove({ id: "bloodmagic:alchemytable/bow_power_anointment" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:bow_power_anointment', 1),
        ['bloodmagic:slate_vial', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), '#forge:nuggets/iron', 'undergarden:depthrock_pebble'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/bow_power_anointment')

    e.remove({ id: "bloodmagic:alchemytable/smelting_anointment" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:smelting_anointment', 1),
        ['bloodmagic:slate_vial', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), '#forge:nuggets/uranium', 'undergarden:ditchbulb'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/smelting_anointment')

    e.remove({ id: "bloodmagic:alchemytable/silk_touch_anointment" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:silk_touch_anointment', 1),
        ['bloodmagic:slate_vial', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), '#forge:nuggets/cloggrum', 'undergarden:goo_ball'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/silk_touch_anointment')

    e.remove({ id: "bloodmagic:alchemytable/quick_draw_anointment" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:quick_draw_anointment', 1),
        ['bloodmagic:slate_vial', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), '#forge:nuggets/aluminum', 'undergarden:raw_gloomper_leg'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/quick_draw_anointment')

    e.remove({ id: "bloodmagic:alchemytable/bow_velocity_anointment" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:bow_velocity_anointment', 1),
        ['bloodmagic:slate_vial', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), 'undergarden:utheric_shard', 'undergarden:raw_gwibling'])
        .syphon(500)
        .ticks(100)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/bow_velocity_anointment')

    e.remove({ id: "bloodmagic:alchemytable/reagent_sight" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:reagentsight', 1),
        ['undergarden:glowing_kelp', 'glassential:glass_ghostly', 'glassential:glass_ghostly', 'bloodmagic:divinationsigil'])
        .syphon(500)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/reagent_sight')

    e.remove({ id: "bloodmagic:alchemytable/reagent_fastminer" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:reagentfastminer', 1),
        ['undergarden:roasted_underbeans', 'undergarden:roasted_underbeans', 'undergarden:roasted_underbeans', 'undergarden:gloomper_leg', 'undergarden:cloggrum_ingot', 'undergarden:blisterberry'])
        .syphon(2000)
        .ticks(200)
        .upgradeLevel(2)
        .id('kubejs:alchemytable/reagent_fastminer')

    e.remove({ id: "bloodmagic:alchemytable/reagent_blood_light" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:reagentbloodlight', 1),
        ['undergarden:glowing_kelp', 'undergarden:droopvine_item', 'undergarden:droopvine_item', 'undergarden:shard_torch'])
        .syphon(1000)
        .ticks(200)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/reagent_blood_light')

    e.remove({ id: "bloodmagic:alchemytable/reagent_binding" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:reagentbinding', 1),
        ['#forge:ingots/utherium', 'undergarden:blood_mushroom', 'undergarden:goo_ball', '#forge:nuggets/regalium'])
        .syphon(1000)
        .ticks(200)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/reagent_binding')

    e.recipes.bloodmagic.alchemytable(Item.of('kubejs:brown_rune', 2),
        ['kubejs:green_rune', 'kubejs:red_rune'])
        .syphon(500)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/brown_rune')

    e.recipes.bloodmagic.alchemytable(Item.of('kubejs:purple_rune', 2),
        ['kubejs:blue_rune', 'kubejs:red_rune'])
        .syphon(500)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/purple_rune')

    e.recipes.bloodmagic.alchemytable(Item.of('kubejs:green_rune', 2),
        ['kubejs:blue_rune', 'kubejs:yellow_rune'])
        .syphon(500)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/green_rune')

    e.recipes.bloodmagic.alchemytable(Item.of('kubejs:cyan_rune', 2),
        ['kubejs:blue_rune', 'kubejs:green_rune'])
        .syphon(500)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/cyan_rune')

    e.recipes.bloodmagic.alchemytable(Item.of('kubejs:pink_rune', 2),
        ['kubejs:white_rune', 'kubejs:red_rune'])
        .syphon(500)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/pink_rune')

    e.recipes.bloodmagic.alchemytable(Item.of('kubejs:gray_rune', 2),
        ['kubejs:white_rune', 'kubejs:black_rune'])
        .syphon(500)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/gray_rune')

    e.recipes.bloodmagic.alchemytable(Item.of('kubejs:light_gray_rune', 2),
        ['kubejs:white_rune', 'kubejs:gray_rune'])
        .syphon(500)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/light_gray_rune')

    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:intermediatecuttingfluid', 2),
        ['bloodmagic:basiccuttingfluid', 'bloodmagic:tauoil', 'bloodmagic:lavasigil'])
        .syphon(2100)
        .ticks(200)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/intermediatecuttingfluid')

    e.remove({ id: "darkutils:crafting/hunger_plate" })
    e.recipes.bloodmagic.alchemytable(Item.of('darkutils:hunger_plate', 1),
        ['darkutils:blank_plate', Item.of('minecraft:potion', '{Potion:"atmospheric:worsening"}'), 'bloodmagic:watersigil'])
        .syphon(300)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:crafting/hunger_plate')

    e.remove({ id: "darkutils:crafting/alert_plate" })
    e.recipes.bloodmagic.alchemytable(Item.of('darkutils:alert_plate', 1),
        ['darkutils:blank_plate', Item.of('minecraft:potion', '{Potion:"undergarden:glowing"}'), 'bloodmagic:watersigil'])
        .syphon(300)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:crafting/alert_plate')

    e.remove({ id: "darkutils:crafting/fatigue_plate" })
    e.recipes.bloodmagic.alchemytable(Item.of('darkutils:fatigue_plate', 1),
        ['darkutils:blank_plate', Item.of('minecraft:potion', '{Potion:"apotheosis:fatigue"}'), 'bloodmagic:watersigil'])
        .syphon(300)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:crafting/fatigue_plate')

    e.remove({ id: "darkutils:crafting/wither_plate" })
    e.recipes.bloodmagic.alchemytable(Item.of('darkutils:wither_plate', 1),
        ['darkutils:blank_plate', Item.of('minecraft:potion', '{Potion:"apotheosis:wither"}'), 'bloodmagic:watersigil'])
        .syphon(300)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:crafting/wither_plate')

    e.remove({ id: "darkutils:crafting/slowness_plate" })
    e.recipes.bloodmagic.alchemytable(Item.of('darkutils:slowness_plate', 1),
        ['darkutils:blank_plate', Item.of('minecraft:potion', '{Potion:"minecraft:slowness"}'), 'bloodmagic:watersigil'])
        .syphon(300)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:crafting/slowness_plate')

    e.remove({ id: "darkutils:crafting/weakness_plate" })
    e.recipes.bloodmagic.alchemytable(Item.of('darkutils:weakness_plate', 1),
        ['darkutils:blank_plate', Item.of('minecraft:potion', '{Potion:"minecraft:weakness"}'), 'bloodmagic:watersigil'])
        .syphon(300)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:crafting/weakness_plate')

    e.remove({ id: "darkutils:crafting/poison_plate" })
    e.recipes.bloodmagic.alchemytable(Item.of('darkutils:poison_plate', 1),
        ['darkutils:blank_plate', Item.of('minecraft:potion', '{Potion:"minecraft:poison"}'), 'bloodmagic:watersigil'])
        .syphon(300)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:crafting/poison_plate')

    e.remove({ id: "darkutils:crafting/damage_plate" })
    e.recipes.bloodmagic.alchemytable(Item.of('darkutils:damage_plate', 1),
        ['darkutils:blank_plate', Item.of('minecraft:potion', '{Potion:"minecraft:harming"}'), 'bloodmagic:watersigil'])
        .syphon(300)
        .ticks(200)
        .upgradeLevel(1)
        .id('kubejs:crafting/damage_plate')

    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:teleposerfocus', 1),
        ['#forge:ingots/silicon_bronze', '#forge:shards/ender', 'eidolon:enchanted_ash'])
        .syphon(50)
        .ticks(20)
        .upgradeLevel(1)
        .id('kubejs:alchemytable/teleposerfocus')

    e.remove({ id: "bloodmagic:alchemytable/holy_water_anointment_l" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:holy_water_anointment_l', 1),
        ['bloodmagic:holy_water_anointment', 'bloodmagic:tauoil'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/holy_water_anointment_l')

    e.remove({ id: "bloodmagic:alchemytable/holy_water_anointment_2" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:holy_water_anointment_2', 1),
        ['bloodmagic:holy_water_anointment', 'bloodmagic:strong_tau'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/holy_water_anointment_2')

    e.remove({ id: "bloodmagic:alchemytable/looting_anointment_l" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:looting_anointment_l', 1),
        ['bloodmagic:looting_anointment', 'bloodmagic:tauoil'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/looting_anointment_l')

    e.remove({ id: "bloodmagic:alchemytable/looting_anointment_2" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:looting_anointment_2', 1),
        ['bloodmagic:looting_anointment', 'bloodmagic:strong_tau'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/looting_anointment_2')

    e.remove({ id: "bloodmagic:alchemytable/melee_anointment_l" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:melee_anointment_l', 1),
        ['bloodmagic:melee_anointment', 'bloodmagic:tauoil'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/melee_anointment_l')

    e.remove({ id: "bloodmagic:alchemytable/melee_anointment_2" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:melee_anointment_2', 1),
        ['bloodmagic:melee_anointment', 'bloodmagic:strong_tau'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/melee_anointment_2')

    e.remove({ id: "bloodmagic:alchemytable/hidden_knowledge_anointment_l" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:hidden_knowledge_anointment_l', 1),
        ['bloodmagic:hidden_knowledge_anointment', 'bloodmagic:tauoil'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/hidden_knowledge_anointment_l')

    e.remove({ id: "bloodmagic:alchemytable/hidden_knowledge_anointment_2" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:hidden_knowledge_anointment_2', 1),
        ['bloodmagic:hidden_knowledge_anointment', 'bloodmagic:strong_tau'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/hidden_knowledge_anointment_2')

    e.remove({ id: "bloodmagic:alchemytable/fortune_anointment_l" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:fortune_anointment_l', 1),
        ['bloodmagic:fortune_anointment', 'bloodmagic:tauoil'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/fortune_anointment_l')

    e.remove({ id: "bloodmagic:alchemytable/fortune_anointment_2" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:fortune_anointment_2', 1),
        ['bloodmagic:fortune_anointment', 'bloodmagic:strong_tau'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/fortune_anointment_2')

    e.remove({ id: "bloodmagic:alchemytable/bow_power_anointment_l" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:bow_power_anointment_l', 1),
        ['bloodmagic:bow_power_anointment', 'bloodmagic:tauoil'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/bow_power_anointment_l')

    e.remove({ id: "bloodmagic:alchemytable/bow_power_anointment_2" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:bow_power_anointment_2', 1),
        ['bloodmagic:bow_power_anointment', 'bloodmagic:strong_tau'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/bow_power_anointment_2')

    e.remove({ id: "bloodmagic:alchemytable/smelting_anointment_l" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:smelting_anointment_l', 1),
        ['bloodmagic:smelting_anointment', 'bloodmagic:tauoil'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/smelting_anointment_l')

    e.remove({ id: "bloodmagic:alchemytable/silk_touch_anointment_l" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:silk_touch_anointment_l', 1),
        ['bloodmagic:silk_touch_anointment', 'bloodmagic:tauoil'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/silk_touch_anointment_l')

    e.remove({ id: "bloodmagic:alchemytable/quick_draw_anointment_l" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:quick_draw_anointment_l', 1),
        ['bloodmagic:quick_draw_anointment', 'bloodmagic:tauoil'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/quick_draw_anointment_l')

    e.remove({ id: "bloodmagic:alchemytable/quick_draw_anointment_2" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:quick_draw_anointment_2', 1),
        ['bloodmagic:quick_draw_anointment', 'bloodmagic:strong_tau'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/quick_draw_anointment_2')

    e.remove({ id: "bloodmagic:alchemytable/bow_velocity_anointment_l" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:bow_velocity_anointment_l', 1),
        ['bloodmagic:bow_velocity_anointment', 'bloodmagic:tauoil'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/bow_velocity_anointment_l')

    e.remove({ id: "bloodmagic:alchemytable/bow_velocity_anointment_2" })
    e.recipes.bloodmagic.alchemytable(Item.of('bloodmagic:bow_velocity_anointment_2', 1),
        ['bloodmagic:bow_velocity_anointment', 'bloodmagic:strong_tau'])
        .syphon(1000)
        .ticks(100)
        .upgradeLevel(3)
        .id('kubejs:alchemytable/bow_velocity_anointment_2')
})
