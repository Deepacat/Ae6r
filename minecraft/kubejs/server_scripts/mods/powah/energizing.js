ServerEvents.recipes(e => {
    e.remove({ id: 'xnet:antenna_dish' })
    e.recipes.powah.energizing('xnet:antenna_dish', [
        Ingredient.of('#forge:plates/enderium'),
        Ingredient.of('#forge:ingots/netherite'),
        Ingredient.of('#forge:storage_blocks/iron_osmium'),
        Ingredient.of('#forge:storage_blocks/iron_osmium')
    ]).energy(1000000).id('kubejs:powah/energizing/antenna_dish')

    e.remove({ id: 'xnet:redstone_proxy_upd' })
    e.remove({ id: 'xnet:redstone_proxy' })
    e.recipes.powah.energizing('xnet:redstone_proxy', [
        'thermal:energy_cell_frame',
        Ingredient.of('#forge:storage_blocks/redstone')
    ]).energy(250000).id('kubejs:powah/energizing/redstone_proxy')

    // swap back and forth
    e.recipes.powah.energizing('xnet:redstone_proxy_upd', [
        'xnet:redstone_proxy'
    ]).energy(100000).id('kubejs:powah/energizing/redstone_proxy_upd')
    e.recipes.powah.energizing('xnet:redstone_proxy', [
        'xnet:redstone_proxy_upd'
    ]).energy(100000).id('kubejs:powah/energizing/redstone_proxy_update')

    e.remove({ id: 'rftools:infused_diamond' })
    e.recipes.powah.energizing('rftoolsbase:infused_diamond', [
        Ingredient.of('#forge:storage_blocks/dimensional'),
        Ingredient.of('#forge:gems/diamond'),
        'integrateddynamics:crystalized_menril_block'
    ]).energy(9000000).id('kubejs:powah/energizing/infused_diamond')

    e.remove({ id: 'rftools:infused_enderpearl' })
    e.recipes.powah.energizing('rftoolsbase:infused_enderpearl', [
        Ingredient.of('#forge:storage_blocks/dimensional'),
        Ingredient.of('#forge:gems/ender'),
        'integrateddynamics:crystalized_chorus_block'
    ]).energy(18000000).id('kubejs:powah/energizing/infused_enderpearl')

    e.remove({ id: 'powah:energizing/energized_steel' })
    e.recipes.powah.energizing('2x powah:steel_energized', [
        Ingredient.of('#forge:ingots/froststeel'),
        Ingredient.of('#forge:ingots/electrum')
    ]).energy(10000).id('kubejs:powah/energizing/energized_steel')

    e.recipes.powah.energizing('powah:energized_steel_block', [
        Ingredient.of('#forge:storage_blocks/froststeel'),
        Ingredient.of('#forge:storage_blocks/electrum')
    ]).energy(100000).id('kubejs:powah/energizing/energized_steel_block')

    e.recipes.powah.energizing('2x powah:crystal_blazing', [
        'ars_nouveau:blaze_fiber',
        Ingredient.of('#forge:dusts/blazing'),
        Ingredient.of('#forge:dusts/blazing')
    ]).energy(240000).id('kubejs:powah/energizing/blazing_crystal')

    e.recipes.powah.energizing('2x powah:crystal_niotic', [
        'kubejs:replaceme', // astral sorcery resonating gem
        Ingredient.of('#forge:dusts/starmetal'),
        Ingredient.of('#forge:dusts/starmetal')
    ]).energy(600000).id('kubejs:powah/energizing/niotic_crystal')

    e.remove({ id: 'powah:energizing/spirited_crystal' })
    e.recipes.powah.energizing('4x powah:crystal_spirited', [
        'kubejs:terra_aspectus_shard',
        'kubejs:ordo_aspectus_shard',
        Ingredient.of('#forge:dusts/uranium'),
        Ingredient.of('#forge:dusts/uranium'),
        Ingredient.of('#forge:dusts/uranium')
    ]).energy(6000000).id('kubejs:powah/energizing/spirited_crystal')

    e.remove({ id: 'powah:energizing/nitro_crystal' })
    e.recipes.powah.energizing('16x powah:crystal_nitro', [
        'minecraft:nether_star',
        'bloodmagic:weakbloodshard',
        'bloodmagic:weakbloodshard',
        Ingredient.of('#forge:gems/blazing'),
        Ingredient.of('#forge:gems/blazing'),
        Ingredient.of('#forge:gems/blazing')
    ]).energy(100000000).id('kubejs:powah/energizing/nitro_crystal')

    e.remove({ id: 'powah:energizing/ender_core' })
    e.recipes.powah.energizing('powah:ender_core', [
        'botania:ender_eye_block',
        'powah:dielectric_casing',
        Item.of('pneumaticcraft:spawner_core', '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:enderman":100}}')
    ]).energy(20000000).id('kubejs:powah/energizing/ender_core')

    e.remove({ id: 'powah:energizing/uranium_to_uraninite' })
    e.recipes.powah.energizing('2x powah:uraninite', [
        Ingredient.of('#forge:ingots/uranium'),
        Ingredient.of('#forge:ingots/uranium'),
        Ingredient.of('#forge:dusts/sulfur'),
        Ingredient.of('#forge:dusts/fluorite')
    ]).energy(10000).id('kubejs:powah/energizing/uraninite')

    e.recipes.powah.energizing(Item.of('rftoolspower:blazing_rod', '{duration:5000.0f,time:0.0f,quality:200000.0f}'), [
        'minecraft:blaze_rod'
    ]).energy(10000000).id('kubejs:powah/energizing/blazing_rod')

    e.recipes.powah.energizing('rftoolspower:power_core2', [
        'rftoolsbase:machine_base',
        Ingredient.of('#forge:storage_blocks/blazing'),
        Ingredient.of('#forge:storage_blocks/blazing'),
        Ingredient.of('#forge:storage_blocks/blazing'),
        Ingredient.of('#forge:storage_blocks/blazing')
    ]).energy(500000).id('kubejs:powah/energizing/power_core2')

    e.recipes.powah.energizing('rftoolspower:power_core3', [
        'rftoolsbase:machine_base',
        Ingredient.of('#forge:storage_blocks/nitro'),
        Ingredient.of('#forge:storage_blocks/nitro'),
        Ingredient.of('#forge:storage_blocks/nitro'),
        Ingredient.of('#forge:storage_blocks/nitro')
    ]).energy(10000000).id('kubejs:powah/energizing/power_core3')

    e.recipes.powah.energizing('2x mekanism:teleportation_core', [
        Ingredient.of('#mekanism:alloys/atomic'),
        'rftoolsbase:infused_diamond',
        'fluxnetworks:flux_core',
        'rftoolsbase:infused_diamond',
        Ingredient.of('#mekanism:alloys/atomic')
    ]).energy(1000000000).id('kubejs:powah/energizing/teleportation_core')
})