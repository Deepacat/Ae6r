ServerEvents.recipes(e => {
    // https://github.com/Ellpeck/NaturesAura/commit/9294a90e1a25819d5449028876493dd9551e12d7#diff-1a58c739fcfb6038c1d5e7c017e2c297b042ded3dac6eda4dec3248e99cab4f8
    // they removed aura type requirements (nether altar)
    // recipe removals should likely be patchouli safe
    // Altar's Max Fill rate is 300 aura per tick. If a recipe draws faster than this, it'll still work, but will slow the craft down to that rate if a large enough batch goes through.
    e.recipes.naturesaura.altar('naturesaura:infused_iron',
        '#forge:ingots/sunmetal'
    ).time(50).aura(15000)
        .id('kubejs:naturesaura/altar/infused_iron')

    e.recipes.naturesaura.altar('naturesaura:infused_iron_block',
        'architects_palette:sunmetal_block'
    ).time(50 * 8).aura(15000 * 8)
        .id('kubejs:naturesaura/altar/infused_iron_block')

    e.recipes.naturesaura.altar('naturesaura:tainted_gold',
        '#forge:ingots/arcane_gold'
    ).time(50).aura(15000)
        .id('kubejs:naturesaura/altar/tainted_gold')

    e.recipes.naturesaura.altar('naturesaura:tainted_gold_block',
        '#forge:storage_blocks/arcane_gold'
    ).time(50 * 8).aura(15000 * 8)
        .id('kubejs:naturesaura/altar/tainted_gold_block')

    // //         {
    // //             input: { item: 'eidolon:candle' },
    // //             output: { item: 'occultism:candle_white' },
    // //             aura_type: 'naturesaura:nether',
    // //             aura: 18000,
    // //             time: 60,
    // //             id: 'occultism:crafting/candle'
    // //         },

    e.recipes.naturesaura.altar('architects_palette:sunstone',
        'kubejs:firmament'
    ).time(20).aura(5000)
        .id('kubejs:naturesaura/altar/sunstone')

    e.recipes.naturesaura.altar('naturesaura:infused_stone',
        'ars_nouveau:sourcestone'
    ).time(40).aura(12000)
        .id('kubejs:naturesaura/altar/infused_stone')

    e.recipes.naturesaura.altar('glassential:glass_ghostly',
        'minecraft:glass'
    ).time(20).aura(100)
        .id('kubejs:naturesaura/altar/glass_ghostly')

    e.recipes.naturesaura.altar('integrateddynamics:proto_chorus',
        'minecraft:ender_pearl'
    ).time(20).aura(5000)
        .id('kubejs:naturesaura/altar/proto_chorus')

    e.recipes.naturesaura.altar('aquaculture:fish_bones',
        '#minecraft:fishes'
    ).time(60).aura(1000).catalyst('naturesaura:crushing_catalyst')
        .id('kubejs:naturesaura/altar/fish_bones')

    e.recipes.naturesaura.altar('upgrade_aquatic:lionfish',
        'minecraft:pufferfish'
    ).time(80).aura(15000).catalyst('naturesaura:conversion_catalyst')
        .id('kubejs:naturesaura/altar/lionfish')

    e.recipes.naturesaura.altar('integrateddynamics:part_display_panel',
        'integrateddynamics:part_static_light_panel'
    ).time(20).aura(100)
        .id('kubejs:naturesaura/altar/part_display_panel')

    e.recipes.naturesaura.altar('botania:root',
        'botania:redstone_root'
    ).time(20).aura(1500).catalyst('naturesaura:conversion_catalyst')
        .id('kubejs:naturesaura/altar/root')

    e.recipes.naturesaura.altar('environmental:duckweed',
        'minecraft:lily_pad'
    ).time(80).aura(15000).catalyst('naturesaura:conversion_catalyst')
        .id('kubejs:naturesaura/altar/duckweed')

    e.recipes.naturesaura.altar('kubejs:warding_stone',
        'ars_nouveau:sourcestone'
    ).time(450).aura(135000)
        .id('kubejs:naturesaura/altar/warding_stone')

    e.recipes.naturesaura.altar('4x botania:mana_powder',
        '#forge:gems/source'
    ).time(20).aura(6000).catalyst('naturesaura:crushing_catalyst')
        .id('kubejs:naturesaura/altar/mana_powder')

    e.recipes.naturesaura.altar('32x botania:fertilizer',
        'thermal:phytogro'
    ).time(200).aura(50000)
        .id('kubejs:naturesaura/altar/floral_fertilizer')

    e.recipes.naturesaura.altar('tconstruct:ichor_slime_ball',
        'minecraft:slime_ball'
    ).time(20).aura(5000)
        .id('kubejs:naturesaura/altar/ichor_slime_ball')

    e.recipes.naturesaura.altar('tconstruct:sky_slime_ball',
        'minecraft:slime_ball'
    ).time(20).aura(5000)
        .id('kubejs:naturesaura/altar/sky_slime_ball')

    e.recipes.naturesaura.altar('tconstruct:ichor_congealed_slime',
        'tconstruct:earth_congealed_slime'
    ).time(20 * 3).aura(5000 * 3)
        .id('kubejs:naturesaura/altar/ichor_congealed_slime')

    e.recipes.naturesaura.altar('tconstruct:sky_congealed_slime',
        'tconstruct:earth_congealed_slime'
    ).time(20 * 3).aura(5000 * 3)
        .id('kubejs:naturesaura/altar/sky_congealed_slime')

    e.recipes.naturesaura.altar('create:polished_rose_quartz',
        'create:rose_quartz'
    ).time(20).aura(5000)
        .id('kubejs:naturesaura/altar/polished_rose_quartz')

    e.recipes.naturesaura.altar('botania:thorn_chakram',
        'botania:vine_ball'
    ).time(500).aura(135000)
        .id('kubejs:naturesaura/altar/thorn_chakram')

    e.recipes.naturesaura.altar('botania:overgrowth_seed',
        'ars_nouveau:magebloom_crop'
    ).time(1000).aura(500000)
        .id('kubejs:naturesaura/altar/overgrowth_seed')

    e.recipes.naturesaura.altar('kubejs:marvelous_clay',
        'kubejs:magic_clay'
    ).time(50).aura(15000)
        .id('kubejs:naturesaura/altar/marvelous_clay')

    e.recipes.naturesaura.altar('bloodmagic:slate_ampoule',
        'eidolon:soul_shard'
    ).time(50).aura(15000)
        .id('kubejs:naturesaura/altar/slate_ampoule')

    e.recipes.naturesaura.altar('naturesaura:birth_spirit',
        'ars_nouveau:ritual_fertility'
    ).time(1000).aura(300000).catalyst('naturesaura:conversion_catalyst')
        .id('kubejs:naturesaura/altar/birth_spirit')
})