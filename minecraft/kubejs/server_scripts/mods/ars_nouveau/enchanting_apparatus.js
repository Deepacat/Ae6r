ServerEvents.recipes(e => {
    e.remove({ id: 'architects_palette:sunmetal_blend' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver'],
        '#forge:dusts/sulfur',
        Item.of('4x architects_palette:sunmetal_blend'), 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/sunmetal_blend')

    e.remove({ id: 'occultism:crafting/golden_sacrificial_bowl' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:gold_inlay', '#forge:dusts/mana', 'eidolon:gold_inlay', 'eidolon:gold_inlay', 'eidolon:gold_inlay'],
        'occultism:sacrificial_bowl',
        'occultism:golden_sacrificial_bowl', 5000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/crafting/golden_sacrificial_bowl')

    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:pewter_inlay', 'occultism:stable_wormhole', 'eidolon:pewter_inlay', 'bloodmagic:reinforcedslate', 'bloodmagic:reinforcedslate', 'eidolon:pewter_inlay', 'occultism:otherstone_pedestal', 'eidolon:pewter_inlay'],
        'farmersdelight:cooking_pot',
        'bloodmagic:soulforge', 5000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/soulforge')

    e.remove({ id: 'undergarden:catalyst' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:gold_inlay', '#forge:ingots/silver', 'eidolon:gold_inlay', '#forge:ingots/silver', '#forge:ingots/silver', 'eidolon:gold_inlay', '#forge:ingots/silver', 'eidolon:gold_inlay'],
        'wizards_reborn:arcanum',
        'undergarden:catalyst', 5000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/catalyst')

    e.recipes.ars_nouveau.enchanting_apparatus(
        ['quark:white_candle', 'quark:white_candle', 'quark:white_candle', 'quark:white_candle', 'quark:white_candle', 'quark:white_candle', 'quark:white_candle', 'quark:white_candle'],
        'bloodmagic:holy_water_anointment',
        Item.of('8x eidolon:candle')
    ).id('kubejs:ars_nouveau/enchanting_apparatus/eidolon_candle')

    e.remove({ id: 'ars_nouveau:volcanic_sourcelink' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:nuggets/brass', 'bloodmagic:lavacrystal', '#forge:nuggets/brass', '#forge:ingots/brass', '#forge:ingots/brass', 'eidolon:gold_inlay', 'eidolon:gold_inlay', 'eidolon:gold_inlay'],
        'minecraft:conduit',
        'ars_nouveau:volcanic_sourcelink'
    ).id('kubejs:ars_nouveau/enchanting_apparatus/volcanic_sourcelink')

    e.remove({ id: 'ars_nouveau:agronomic_sourcelink' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:nuggets/brass', 'create:tree_fertilizer', '#forge:nuggets/brass', '#forge:ingots/brass', '#forge:ingots/brass', 'eidolon:gold_inlay', 'eidolon:gold_inlay', 'eidolon:gold_inlay'],
        'minecraft:conduit',
        'ars_nouveau:agronomic_sourcelink'
    ).id('kubejs:ars_nouveau/enchanting_apparatus/agronomic_sourcelink')

    e.remove({ id: 'ars_nouveau:mycelial_sourcelink' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:nuggets/brass', 'eidolon:fungus_sprouts', '#forge:nuggets/brass', '#forge:ingots/brass', '#forge:ingots/brass', 'eidolon:gold_inlay', 'eidolon:gold_inlay', 'eidolon:gold_inlay'],
        'minecraft:conduit',
        'ars_nouveau:mycelial_sourcelink'
    ).id('kubejs:ars_nouveau/enchanting_apparatus/mycelial_sourcelink')

    e.remove({ id: 'ars_nouveau:vitalic_sourcelink' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:nuggets/brass', 'minecraft:glistering_melon', '#forge:nuggets/brass', '#forge:ingots/brass', '#forge:ingots/brass', 'eidolon:gold_inlay', 'eidolon:gold_inlay', 'eidolon:gold_inlay'],
        'minecraft:conduit',
        'ars_nouveau:vitalic_sourcelink'
    ).id('kubejs:ars_nouveau/enchanting_apparatus/vitalic_sourcelink')

    e.remove({ id: 'ars_nouveau:alchemical_sourcelink' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:nuggets/brass', 'minecraft:brewing_stand', '#forge:nuggets/brass', '#forge:ingots/brass', '#forge:ingots/brass', 'eidolon:gold_inlay', 'eidolon:gold_inlay', 'eidolon:gold_inlay'],
        'minecraft:conduit',
        'ars_nouveau:alchemical_sourcelink'
    ).id('kubejs:ars_nouveau/enchanting_apparatus/alchemical_sourcelink')

    e.remove({ id: 'ars_nouveau:imbuement_chamber' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:gold_inlay', 'kubejs:warding_stone', 'eidolon:gold_inlay', '#forge:nuggets/arcane_gold', '#forge:nuggets/arcane_gold', 'eidolon:gold_inlay', 'kubejs:warding_stone', 'eidolon:gold_inlay'],
        '#forge:gems/source',
        'ars_nouveau:imbuement_chamber', 2500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/imbuement_chamber_enchanting')

    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:ingots/brass', 'kubejs:warding_stone', '#forge:ingots/brass', 'ars_nouveau:glyph_extract', 'ars_nouveau:glyph_extract', 'kubejs:replaceme', 'kubejs:replaceme', 'kubejs:replaceme'],
        'ars_nouveau:potion_jar',
        'ars_nouveau:potion_melder', 10
    ).id('kubejs:ars_nouveau/enchanting_apparatus/potion_melder')

    e.remove({ id: 'ars_nouveau:wand' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:ingots/brass', 'ars_nouveau:glyph_projectile', 'minecraft:conduit', '#forge:gems/source', 'ars_nouveau:glyph_accelerate', 'ars_nouveau:spell_parchment', '#forge:gems/source', '#forge:ingots/brass'],
        'botania:livingwood',
        'ars_nouveau:wand', 6000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/wand')

    e.remove({ id: 'ars_nouveau:enchanters_sword' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:glyph_amplify', '#forge:storage_blocks/regalium', '#forge:storage_blocks/regalium', '#forge:storage_blocks/source', '#forge:storage_blocks/source'],
        Item.of('undergarden:utherium_sword', '{Damage:0}').weakNBT(),
        'ars_nouveau:enchanters_sword', 6000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/enchanters_sword')

    e.remove({ id: 'ars_nouveau:ring_of_lesser_discount' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:ingots/terminite', 'ars_nouveau:greater_experience_gem', '#forge:ingots/terminite', '#forge:gems/source', '#forge:gems/source', '#forge:ingots/terminite', 'ars_nouveau:greater_experience_gem', '#forge:ingots/terminite'],
        'kubejs:replaceme',
        'ars_nouveau:ring_of_lesser_discount', 300
    ).id('kubejs:ars_nouveau/enchanting_apparatus/ring_of_lesser_discount')

    e.remove({ id: 'ars_nouveau:ring_of_greater_discount' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:ingots/thallasium', '#forge:ingots/regalium', '#forge:ingots/thallasium', '#forge:gems/source', '#forge:gems/source', '#forge:ingots/thallasium', '#forge:ingots/regalium', '#forge:ingots/thallasium'],
        'ars_nouveau:ring_of_lesser_discount',
        'ars_nouveau:ring_of_greater_discount', 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/ring_of_greater_discount')

    e.remove({ id: 'ars_nouveau:amulet_of_mana_regen' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:gems/arcanum', 'naturesaura:birth_spirit', '#forge:gems/arcanum', '#forge:ingots/regalium', '#forge:ingots/regalium', '#forge:gems/source', '#forge:gems/source', '#forge:gems/source'],
        'kubejs:replaceme',
        'ars_nouveau:amulet_of_mana_regen', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/amulet_of_mana_regen')

    e.remove({ id: 'ars_nouveau:amulet_of_mana_boost' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:gems/arcanum', 'minecraft:conduit', '#forge:gems/arcanum', '#forge:ingots/regalium', '#forge:ingots/regalium', '#forge:gems/source', '#forge:gems/source', '#forge:gems/source'],
        'kubejs:replaceme',
        'ars_nouveau:amulet_of_mana_boost', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/amulet_of_mana_boost')

    e.remove({ id: 'ars_nouveau:belt_of_levitation' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:glyph_launch', 'kubejs:replaceme', 'kubejs:aer_aspectus_shard', 'kubejs:replaceme', 'kubejs:replaceme', 'quark:bottled_cloud', 'quark:bottled_cloud', 'quark:bottled_cloud'],
        'eidolon:basic_belt',
        'ars_nouveau:belt_of_levitation', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/belt_of_levitation')

    e.remove({ id: 'ars_nouveau:belt_of_unstable_gifts' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:sugar', '#forge:crops/nether_wart', '#forge:rods/blaze', '#forge:dusts/glowstone', 'minecraft:fermented_spider_eye', '#forge:dusts/redstone', 'kubejs:perditio_aspectus_shard', '#forge:feathers'],
        'eidolon:basic_belt',
        'ars_nouveau:belt_of_unstable_gifts', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/belt_of_unstable_gifts')

    e.remove({ id: 'botania:mana_tablet' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:livingrock', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock'],
        'botania:rune_mana',
        'botania:mana_tablet', 300
    ).id('kubejs:ars_nouveau/enchanting_apparatus/mana_tablet')

    e.remove({ id: 'bloodmagic:ritualdiviner' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:gems/source_diamond', Item.of('bloodmagic:firescribetool', '{Damage:0}').weakNBT(), '#forge:gems/source_diamond', Item.of('bloodmagic:airscribetool', '{Damage:0}').weakNBT(), Item.of('bloodmagic:earthscribetool', '{Damage:0}').weakNBT(), '#forge:gems/source_diamond', Item.of('bloodmagic:waterscribetool', '{Damage:0}').weakNBT(), '#forge:gems/source_diamond'],
        'botania:livingwood_twig',
        'bloodmagic:ritualdiviner', 5000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/ritualdiviner')

    e.remove({ id: 'ars_nouveau:spell_bow' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:storage_blocks/source', '#forge:storage_blocks/brass', 'ars_nouveau:glyph_projectile', 'botania:rune_air', 'botania:rune_air'],
        Item.of('botania:livingwood_bow', '{Damage:0}').weakNBT(),
        'ars_nouveau:spell_bow', 10000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/spell_bow')

    e.remove({ id: 'ars_nouveau:sorcerer_hood' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber'],
        Item.of('kubejs:replaceme').weakNBT(),
        'ars_nouveau:sorcerer_hood', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/sorcerer_hood')

    e.remove({ id: 'ars_nouveau:sorcerer_robes' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber'],
        Item.of('kubejs:replaceme').weakNBT(),
        'ars_nouveau:sorcerer_robes', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/sorcerer_robes')

    e.remove({ id: 'ars_nouveau:sorcerer_leggings' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber'],
        Item.of('kubejs:replaceme').weakNBT(),
        'ars_nouveau:sorcerer_leggings', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/sorcerer_leggings')

    e.remove({ id: 'ars_nouveau:sorcerer_boots' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber', 'tconstruct:silky_cloth', 'ars_nouveau:magebloom_fiber'],
        Item.of('kubejs:replaceme').weakNBT(),
        'ars_nouveau:sorcerer_boots', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/sorcerer_boots')

    e.remove({ id: 'ars_nouveau:arcanist_hood' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme'],
        Item.of('kubejs:replaceme').weakNBT(),
        'ars_nouveau:arcanist_hood', 1500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/arcanist_hood')

    e.remove({ id: 'ars_nouveau:arcanist_robes' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme'],
        Item.of('kubejs:replaceme').weakNBT(),
        'ars_nouveau:arcanist_robes', 1500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/arcanist_robes')

    e.remove({ id: 'ars_nouveau:arcanist_leggings' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme'],
        Item.of('kubejs:replaceme').weakNBT(),
        'ars_nouveau:arcanist_leggings', 1500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/arcanist_leggings')

    e.remove({ id: 'ars_nouveau:arcanist_boots' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme'],
        Item.of('kubejs:replaceme').weakNBT(),
        'ars_nouveau:arcanist_boots', 1500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/arcanist_boots')

    e.remove({ id: 'ars_nouveau:battlemage_hood' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme'],
        Item.of('botania:manaweave_helmet', '{Damage:0}').weakNBT(),
        'ars_nouveau:battlemage_hood', 5000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/battlemage_hood')

    e.remove({ id: 'ars_nouveau:battlemage_robes' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme'],
        Item.of('botania:manaweave_chestplate', '{Damage:0}').weakNBT(),
        'ars_nouveau:battlemage_robes', 5000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/battlemage_robes')

    e.remove({ id: 'ars_nouveau:battlemage_leggings' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme'],
        Item.of('botania:manaweave_leggings', '{Damage:0}').weakNBT(),
        'ars_nouveau:battlemage_leggings', 5000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/battlemage_leggings')

    e.remove({ id: 'ars_nouveau:battlemage_boots' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'kubejs:replaceme', 'eidolon:wicked_weave', 'kubejs:replaceme'],
        Item.of('botania:manaweave_boots', '{Damage:0}').weakNBT(),
        'ars_nouveau:battlemage_boots', 5000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/battlemage_boots')

    e.remove({ id: 'botania:terrasteel_helmet' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:livingwood_twig', 'botania:rune_spring', 'botania:livingwood_twig', '#forge:ingots/terrasteel', '#forge:ingots/terrasteel', 'kubejs:replaceme', '#forge:ingots/terrasteel', 'kubejs:replaceme'],
        Item.of('botania:manasteel_helmet', '{Damage:0}').weakNBT(),
        'botania:terrasteel_helmet', 10000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/terrasteel_helmet')

    e.remove({ id: 'botania:terrasteel_chestplate' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:livingwood_twig', 'botania:rune_summer', 'botania:livingwood_twig', '#forge:ingots/terrasteel', '#forge:ingots/terrasteel', 'kubejs:replaceme', '#forge:ingots/terrasteel', 'kubejs:replaceme'],
        Item.of('botania:manasteel_chestplate', '{Damage:0}').weakNBT(),
        'botania:terrasteel_chestplate', 10000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/terrasteel_chestplate')

    e.remove({ id: 'botania:terrasteel_leggings' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:livingwood_twig', 'botania:rune_autumn', 'botania:livingwood_twig', '#forge:ingots/terrasteel', '#forge:ingots/terrasteel', 'kubejs:replaceme', '#forge:ingots/terrasteel', 'kubejs:replaceme'],
        Item.of('botania:manasteel_leggings', '{Damage:0}').weakNBT(),
        'botania:terrasteel_leggings', 10000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/terrasteel_leggings')

    e.remove({ id: 'botania:terrasteel_boots' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:livingwood_twig', 'botania:rune_winter', 'botania:livingwood_twig', '#forge:ingots/terrasteel', '#forge:ingots/terrasteel', 'kubejs:replaceme', '#forge:ingots/terrasteel', 'kubejs:replaceme'],
        Item.of('botania:manasteel_boots', '{Damage:0}').weakNBT(),
        'botania:terrasteel_boots', 10000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/terrasteel_boots')

    e.remove({ id: 'ars_nouveau:drygmy_charm' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['alexsmobs:moose_antler', 'kubejs:replaceme', 'alexsmobs:moose_antler', 'kubejs:replaceme', 'kubejs:replaceme', '#forge:storage_blocks/source', 'naturesaura:netherite_finder', '#forge:storage_blocks/source'],
        'ars_nouveau:drygmy_shard',
        'ars_nouveau:drygmy_charm', 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/drygmy_charm')

    e.remove({ id: 'ars_nouveau:whirlisprig_charm' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:mana_bloom_crop', 'ars_nouveau:mana_bloom', 'ars_nouveau:mana_bloom_crop', 'naturesaura:ancient_sapling', 'naturesaura:ancient_sapling', '#forge:gems/source', 'botania:goddess_charm', '#forge:gems/source'],
        'ars_nouveau:whirlisprig_shards',
        'ars_nouveau:whirlisprig_charm', 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/whirlisprig_charm')

    e.remove({ id: 'naturesaura:death_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:replaceme', '#forge:ingots/arcane_gold', '#forge:ingots/arcane_gold', 'naturesaura:token_fear'],
        'kubejs:replaceme',
        'naturesaura:death_ring', 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/death_ring')

    e.remove({ id: 'occultism:wormhole_frame' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:nuggets/nebu', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), '#forge:nuggets/nebu', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), '#forge:nuggets/nebu', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), '#forge:nuggets/nebu'],
        'occultism:otherstone_frame',
        'occultism:wormhole_frame', 10
    ).id('kubejs:ars_nouveau/enchanting_apparatus/crafting/wormhole_frame')

    e.remove({ id: 'occultism:otherstone_tablet' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['fluxnetworks:flux_dust', 'occultism:otherstone_slab', 'fluxnetworks:flux_dust', 'occultism:otherstone_slab', 'occultism:otherstone_slab', 'fluxnetworks:flux_dust', 'occultism:otherstone_slab', 'fluxnetworks:flux_dust'],
        '#forge:gems/source',
        Item.of('4x occultism:otherstone_tablet'), 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/crafting/otherstone_tablet')

    e.remove({ id: 'botania:natura_pylon' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:glimmering_livingwood', 'powah:crystal_spirited', 'botania:glimmering_livingwood', '#forge:ingots/terrasteel', '#forge:ingots/terrasteel', 'botania:glimmering_livingwood', 'powah:crystal_spirited', 'botania:glimmering_livingwood'],
        'botania:mana_pylon',
        'botania:natura_pylon', 1000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/natura_pylon')

    e.remove({ id: 'botania:gaia_pylon' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:ingots/elementium', 'powah:crystal_nitro', '#forge:ingots/elementium', 'botania:pixie_dust', 'botania:pixie_dust', '#forge:ingots/elementium', 'powah:crystal_nitro', '#forge:ingots/elementium'],
        'botania:natura_pylon',
        'botania:gaia_pylon', 2000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/gaia_pylon')

    e.remove({ id: 'mythicbotany:alfsteel_pylon' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#chipped:crying_obsidian', 'kubejs:replaceme', '#chipped:crying_obsidian', '#forge:ingots/alfsteel', '#forge:ingots/alfsteel', '#chipped:crying_obsidian', 'kubejs:replaceme', '#chipped:crying_obsidian'],
        'botania:gaia_pylon',
        'mythicbotany:alfsteel_pylon', 4000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/alfsteel_pylon')

    e.remove({ id: 'botania:mana_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:mana_tablet', '#forge:ingots/manasteel', '#forge:ingots/manasteel', '#forge:gems/source_diamond'],
        'ars_nouveau:ring_of_greater_discount',
        'botania:mana_ring', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/mana_ring')

    e.remove({ id: 'botania:gaia_ingot' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:life_essence', 'kubejs:replaceme', 'botania:life_essence', 'kubejs:replaceme', 'kubejs:replaceme', 'botania:life_essence', 'kubejs:replaceme', 'botania:life_essence'],
        '#forge:ingots/terrasteel',
        Item.of('2x botania:gaia_ingot'), 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/gaia_ingot')

    e.remove({ id: 'botania:mining_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:rune_earth', '#forge:ingots/manasteel', '#forge:ingots/manasteel', 'bloodmagic:reagentfastminer'],
        'kubejs:replaceme',
        'botania:mining_ring', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/mining_ring')

    e.remove({ id: 'botania:dodge_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:rune_air', '#forge:ingots/manasteel', '#forge:ingots/manasteel', 'alexsmobs:roadrunner_feather'],
        'kubejs:replaceme',
        'botania:dodge_ring', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/dodge_ring')

    e.remove({ id: 'botania:swap_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:magic_clay', '#forge:ingots/manasteel', '#forge:ingots/manasteel'],
        'kubejs:replaceme', /*atum non dirty ring */
        'botania:swap_ring', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/swap_ring')

    e.remove({ id: 'botania:water_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:rune_water', '#forge:ingots/manasteel', '#forge:ingots/manasteel', 'minecraft:heart_of_the_sea'],
        'kubejs:replaceme',
        'botania:water_ring', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/water_ring')

    e.remove({ id: 'botania:magnet_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:lens_magnet', '#forge:ingots/manasteel', '#forge:ingots/manasteel'],
        'kubejs:replaceme',
        'botania:magnet_ring', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/magnet_ring')

    e.remove({ id: 'botania:aura_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:rune_mana', '#forge:ingots/manasteel', '#forge:ingots/manasteel', 'naturesaura:aura_cache'],
        'kubejs:replaceme',
        'botania:aura_ring', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/aura_ring')

    e.remove({ id: 'botania:pixie_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:pixie_dust', '#forge:ingots/elementium', '#forge:ingots/elementium', 'naturesaura:calling_spirit'],
        'botania:aura_ring',
        'botania:pixie_ring', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/pixie_ring')

    e.remove({ id: 'botania:reach_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:rune_pride', '#forge:ingots/elementium', '#forge:ingots/elementium', '#forge:ingots/sky'],
        'botania:aura_ring',
        'botania:reach_ring', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/reach_ring')

    e.remove({ id: 'mythicbotany:fire_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['mythicbotany:muspelheim_rune', '#forge:ingots/elementium', '#forge:ingots/elementium', 'ars_nouveau:glyph_shield'],
        'botania:aura_ring',
        'mythicbotany:fire_ring', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/fire_ring')

    e.remove({ id: 'mythicbotany:ice_ring' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:niflheim_rune', '#forge:ingots/elementium', '#forge:ingots/elementium', 'ars_nouveau:glyph_shield'],
        'botania:aura_ring',
        'mythicbotany:ice_ring', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/ice_ring')

    e.remove({ id: 'ars_nouveau:split_arrow' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:storage_blocks/source', 'ars_nouveau:glyph_split'],
        'kubejs:scented_stick',
        Item.of('32x ars_nouveau:split_arrow'), 10
    ).id('kubejs:ars_nouveau/enchanting_apparatus/split_arrow')

    e.remove({ id: 'ars_nouveau:amplify_arrow' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:storage_blocks/source', 'ars_nouveau:glyph_amplify'],
        'kubejs:scented_stick',
        Item.of('32x ars_nouveau:amplify_arrow'), 10
    ).id('kubejs:ars_nouveau/enchanting_apparatus/amplify_arrow')

    e.remove({ id: 'ars_nouveau:pierce_arrow' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:storage_blocks/source', 'ars_nouveau:glyph_pierce'],
        'kubejs:scented_stick',
        Item.of('32x ars_nouveau:pierce_arrow'), 10
    ).id('kubejs:ars_nouveau/enchanting_apparatus/pierce_arrow')

    e.remove({ id: 'ars_nouveau:starbuncle_charm' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:gems/source', '#forge:gems/source', '#forge:gems/source', '#forge:nuggets/gold', '#forge:nuggets/gold', '#forge:nuggets/gold', '#forge:nuggets/gold', '#forge:nuggets/gold'],
        'ars_nouveau:starbuncle_shards',
        'ars_nouveau:starbuncle_charm', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/starbuncle_charm')

    e.remove({ id: 'ars_nouveau:dominion_wand' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:gems/source', '#forge:gems/source', '#forge:gems/source', '#forge:ingots/tinkers_bronze', '#forge:ingots/tinkers_bronze'],
        'kubejs:scented_stick',
        'ars_nouveau:dominion_wand', 1000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/dominion_wand')

    e.remove({ id: 'ars_nouveau:relay_splitter' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:quartz_lavender', '#forge:gems/fluorite', 'botania:quartz_lavender', '#forge:ingots/tinkers_bronze', '#forge:ingots/tinkers_bronze', 'botania:quartz_lavender', '#forge:gems/fluorite', 'botania:quartz_lavender'],
        'ars_nouveau:relay',
        'ars_nouveau:relay_splitter', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/relay_splitter')

    e.remove({ id: 'ars_nouveau:relay_deposit' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:quartz_lavender', '#forge:gems/apatite', 'botania:quartz_lavender', '#forge:ingots/tinkers_bronze', '#forge:ingots/tinkers_bronze', 'botania:quartz_lavender', '#forge:gems/apatite', 'botania:quartz_lavender'],
        'ars_nouveau:relay',
        'ars_nouveau:relay_deposit', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/relay_deposit')

    e.remove({ id: 'ars_nouveau:relay' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:gems/prismarine', '#forge:gems/source', '#forge:gems/prismarine', '#forge:ingots/gold', '#forge:ingots/gold', '#forge:gems/prismarine', '#forge:gems/source', '#forge:gems/prismarine'],
        'ars_nouveau:source_jar',
        'ars_nouveau:relay', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/relay')

    e.remove({ id: 'ars_nouveau:relay_warp' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['waystones:warp_dust', '#forge:gems/ender', 'waystones:warp_dust', '#forge:ingots/tinkers_bronze', '#forge:ingots/tinkers_bronze', 'waystones:warp_dust', '#forge:gems/ender', 'waystones:warp_dust'],
        'ars_nouveau:relay',
        'ars_nouveau:relay_warp', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/relay_warp')

    e.remove({ id: 'ars_nouveau:wixie_charm' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:soul_shard', Item.of('minecraft:potion', '{Potion:"apotheosis:knowledge"}'), 'eidolon:soul_shard', '#forge:ingots/osmium', '#forge:ingots/osmium', '#forge:ingots/osmium', 'ars_nouveau:novice_spell_book', '#forge:ingots/osmium'],
        '#forge:eggs',
        'ars_nouveau:wixie_charm', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/wixie_charm_soul_shard')

    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:nuggets/arcane_gold', 'create:polished_rose_quartz', '#forge:nuggets/arcane_gold', 'eidolon:gold_inlay', 'eidolon:gold_inlay', '#forge:nuggets/arcane_gold', 'create:polished_rose_quartz', '#forge:nuggets/arcane_gold'],
        'ars_nouveau:basic_spell_turret',
        'ars_nouveau:spell_turret', 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/enchanting/spell_turret')

    e.remove({ id: 'ars_nouveau:timer_spell_turret' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:nuggets/tinkers_bronze', 'minecraft:clock', '#forge:nuggets/tinkers_bronze', '#forge:ingots/tinkers_bronze', '#forge:ingots/tinkers_bronze', '#forge:nuggets/tinkers_bronze', 'create:polished_rose_quartz', '#forge:nuggets/tinkers_bronze'],
        'ars_nouveau:basic_spell_turret',
        'ars_nouveau:timer_spell_turret', 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/timer_spell_turret')

    e.remove({ id: 'ars_nouveau:enchanters_shield' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:gold_inlay', '#forge:storage_blocks/source', 'eidolon:gold_inlay', '#forge:storage_blocks/tinkers_bronze', '#forge:storage_blocks/tinkers_bronze', 'eidolon:gold_inlay', '#forge:storage_blocks/source', 'eidolon:gold_inlay'],
        Item.of('mekanismtools:osmium_shield', '{Damage:0}').weakNBT(),
        Item.of('ars_nouveau:enchanters_shield', '{Damage:0}').weakNBT(), 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/enchanters_shield')

    e.remove({ id: 'ars_nouveau:enchanters_mirror' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:glyph_self', 'kubejs:replaceme', 'ars_nouveau:glyph_self', '#forge:ingots/tinkers_bronze', '#forge:ingots/tinkers_bronze', '#forge:gems/source', 'ars_nouveau:purple_archwood_log', '#forge:gems/source'],
        '#forge:plates/silver',
        'ars_nouveau:enchanters_mirror', 1000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/enchanters_mirror')

    e.remove({ id: 'ars_nouveau:summon_focus' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:ingots/tinkers_bronze', 'ars_nouveau:wilden_tribute', '#forge:ingots/tinkers_bronze', 'ars_nouveau:wilden_spike', 'ars_nouveau:wilden_wing', '#forge:ingots/tinkers_bronze', 'ars_nouveau:wilden_horn', '#forge:ingots/tinkers_bronze'],
        'minecraft:conduit',
        'ars_nouveau:summon_focus', 10000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/summon_focus')

    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:nuggets/arcane_gold', 'ars_nouveau:glyph_craft', '#forge:nuggets/arcane_gold', 'architects_palette:twisted_sapling', 'minecraft:brewing_stand', '#forge:nuggets/arcane_gold', '#forge:coins/electrum', '#forge:nuggets/arcane_gold'],
        'ars_nouveau:wixie_shards',
        'ars_nouveau:wixie_charm', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/wixie_charm_arcane_gold')

    e.remove({ id: 'ars_nouveau:potion_flask' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber', '#forge:gems/source', 'ars_nouveau:magebloom_fiber', '#forge:ingots/tinkers_bronze', '#forge:ingots/tinkers_bronze', 'ars_nouveau:magebloom_fiber', '#forge:ingots/tinkers_bronze', 'ars_nouveau:magebloom_fiber'],
        Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
        'ars_nouveau:potion_flask', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/potion_flask')

    e.remove({ id: 'ars_nouveau:potion_flask_extend_time' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:glyph_extend_time', '#forge:gems/source', 'ars_nouveau:glyph_extend_time', '#forge:ingots/arcane_gold', '#forge:ingots/arcane_gold', 'ars_nouveau:glyph_extend_time', '#forge:gems/source', 'ars_nouveau:glyph_extend_time'],
        'ars_nouveau:potion_flask',
        'ars_nouveau:potion_flask_extend_time', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/potion_flask_extend_time')

    e.remove({ id: 'ars_nouveau:potion_flask_amplify' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:glyph_amplify', '#forge:gems/source', 'ars_nouveau:glyph_amplify', '#forge:ingots/arcane_gold', '#forge:ingots/arcane_gold', 'ars_nouveau:glyph_amplify', '#forge:gems/source', 'ars_nouveau:glyph_amplify'],
        'ars_nouveau:potion_flask',
        'ars_nouveau:potion_flask_amplify', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/potion_flask_amplify')

    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:ingots/gold', 'eidolon:enchanted_ash', '#forge:ingots/gold', '#forge:dusts/redstone', '#forge:dusts/redstone'],
        'eidolon:soul_shard',
        Item.of('2x wizards_reborn:arcane_gold_ingot'), 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/arcane_gold_ingot')

    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:ingots/gold', 'eidolon:soul_shard', '#forge:ingots/gold', '#forge:dusts/redstone', '#forge:dusts/redstone'],
        'minecraft:conduit',
        Item.of('2x wizards_reborn:arcane_gold_ingot')
    ).id('kubejs:ars_nouveau/enchanting_apparatus/arcane_gold_ingot_starter')

    e.recipes.ars_nouveau.enchanting_apparatus(
        ['bloodmagic:blankslate', 'eidolon:ender_calx', 'bloodmagic:blankslate', 'bloodmagic:blankslate', 'bloodmagic:blankslate', 'bloodmagic:blankslate', 'eidolon:ender_calx', 'bloodmagic:blankslate'],
        'botania:livingwood',
        Item.of('2x bloodmagic:blankrune'), 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/blood_rune_blank')

    e.remove({ id: 'thermal:tools/xp_crystal' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:greater_experience_gem', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), 'ars_nouveau:greater_experience_gem', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), 'ars_nouveau:greater_experience_gem', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), 'ars_nouveau:greater_experience_gem'],
        'kubejs:replaceme',
        'thermal:xp_crystal', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/tools/xp_crystal')

    e.remove({ id: 'mythicbotany:central_rune_holder' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:dusts/mana', '#forge:ingots/terrasteel', '#forge:dusts/mana', '#forge:ingots/terrasteel', '#forge:ingots/terrasteel'],
        'minecraft:conduit',
        'mythicbotany:central_rune_holder', 10000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/central_rune_holder')

    e.remove({ id: 'sophisticatedbackpacks:compacting_upgrade' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:nuggets/arcane_gold', 'botania:auto_crafting_halo', '#forge:nuggets/arcane_gold', '#forge:gears/osmium', '#forge:gears/osmium', '#forge:nuggets/arcane_gold', 'botania:corporea_spark', '#forge:nuggets/arcane_gold'],
        '#sophisticatedbackpacks:upgrades/crafting',
        'sophisticatedbackpacks:compacting_upgrade', 200
    ).id('kubejs:ars_nouveau/enchanting_apparatus/compacting_upgrade')

    e.remove({ id: 'ars_nouveau:light_relay' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:red_string', '#forge:dusts/lumium', 'botania:red_string', '#forge:dusts/lumium', '#forge:dusts/lumium', 'botania:red_string', '#forge:dusts/lumium', 'botania:red_string'],
        '#forge:gems/source',
        Item.of('4x botania:light_relay'), 10
    ).id('kubejs:ars_nouveau/enchanting_apparatus/light_relay')

    e.remove({ id: 'naturesaura:ender_crate' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['occultism:otherstone_slab', 'botania:corporea_spark', 'occultism:otherstone_slab', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), 'occultism:otherstone_tablet', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), 'occultism:otherstone_tablet'],
        'ars_nouveau:archwood_chest',
        'naturesaura:ender_crate', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/ender_crate')

    e.remove({ id: 'naturesaura:ender_access' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['occultism:otherstone_slab', 'botania:corporea_spark', 'occultism:otherstone_slab', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), 'occultism:otherstone_tablet', Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), 'occultism:otherstone_tablet'],
        'thermal:satchel',
        'naturesaura:ender_access', 50
    ).id('kubejs:ars_nouveau/enchanting_apparatus/ender_access')

    e.remove({ id: 'eidolon:warded_mail' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:pewter_inlay', 'eidolon:lesser_soul_gem', 'eidolon:pewter_inlay', 'quark:soul_bead', 'quark:soul_bead', 'eidolon:pewter_inlay', 'quark:soul_bead', 'eidolon:pewter_inlay'],
        Item.of('minecraft:chainmail_chestplate', '{Damage:0}').weakNBT(),
        'eidolon:warded_mail', 10000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/warded_mail')

    e.remove({ id: 'eidolon:mind_shielding_plate' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:plates/lead', 'kubejs:replaceme', '#forge:plates/lead', '#forge:plates/lead', '#forge:plates/lead', 'eidolon:soul_shard', 'ars_nouveau:glyph_shield', 'eidolon:soul_shard'],
        'eidolon:basic_belt',
        'eidolon:mind_shielding_plate', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/mind_shielding_plate')

    e.remove({ id: 'eidolon:resolute_belt' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:soul_shard', '#forge:gems/apatite', 'eidolon:soul_shard', '#forge:rods/basalz', '#forge:rods/basalz', 'eidolon:gold_inlay', 'ars_nouveau:glyph_dampen', 'eidolon:gold_inlay'],
        'eidolon:basic_belt',
        'eidolon:resolute_belt', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/resolute_belt')

    e.remove({ id: 'eidolon:gravity_belt' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:soul_shard', 'quark:bottled_cloud', 'eidolon:soul_shard', '#forge:rods/blitz', '#forge:rods/blitz', 'eidolon:pewter_inlay', 'ars_nouveau:glyph_slowfall', 'eidolon:pewter_inlay'],
        'eidolon:basic_belt',
        'eidolon:gravity_belt', 500
    ).id('kubejs:ars_nouveau/enchanting_apparatus/gravity_belt')

    e.remove('eidolon:warlock_boots')
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:wicked_weave', 'eidolon:soul_shard', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'eidolon:soul_shard', 'eidolon:wicked_weave'],
        'kubejs:replaceme',
        'eidolon:warlock_boots', 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/warlock_boots')

    e.remove('eidolon:warlock_cloak')
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:wicked_weave', 'eidolon:soul_shard', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'eidolon:soul_shard', 'eidolon:wicked_weave'],
        'kubejs:replaceme',
        'eidolon:warlock_cloak', 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/warlock_cloak')

    e.remove('eidolon:warlock_hat')
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:wicked_weave', 'eidolon:soul_shard', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'eidolon:wicked_weave', 'eidolon:soul_shard', 'eidolon:wicked_weave'],
        'kubejs:replaceme',
        'eidolon:warlock_hat', 100
    ).id('kubejs:ars_nouveau/enchanting_apparatus/warlock_hat')

    e.recipes.ars_nouveau.enchanting_apparatus(
        ['bloodmagic:etherealslate', 'mythicbotany:nidaveller_rune', 'bloodmagic:etherealslate', '#forge:pellets/antimatter', '#forge:pellets/antimatter', 'bloodmagic:etherealslate', 'naturesaura:break_prevention', 'bloodmagic:etherealslate'],
        Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0}'),
        Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0,Unbreakable:1}'), 5000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/unbreakable_graphite_electrode')

    e.remove({ id: 'integrateddynamics:crafting/logic_director' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:pixie_dust', 'integratedterminals:chorus_glass', 'botania:pixie_dust', 'naturesaura:token_fear', 'botania:rune_mana', 'botania:pixie_dust', 'integratedterminals:chorus_glass', 'botania:pixie_dust'],
        '#forge:gems/source_diamond',
        'integrateddynamics:logic_director', 300
    ).id('kubejs:ars_nouveau/enchanting_apparatus/logic_director')

    e.remove({ id: 'bloodmagic:soulforge/demon_pylon' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:ingots/iesnium', '#bloodmagic:crystals/demon', '#forge:ingots/iesnium', '#bloodmagic:dusts/corrupted', '#bloodmagic:dusts/corrupted', '#forge:ingots/iesnium', '#bloodmagic:crystals/demon', '#forge:ingots/iesnium'],
        'botania:gaia_pylon',
        'bloodmagic:demonpylon', 2000
    ).id('kubejs:ars_nouveau/enchanting_apparatus/demonpylon')
})