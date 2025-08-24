ServerEvents.tags('item', e => {
    // Making material substitute tags
    const substitutions = [
        ['gold', 'brass'],
        ['iron', 'aluminum'],
        ['iron', 'tin'],
        ['iron', 'copper'],
        ['copper', 'tin'],
    ]
    for (let mats of substitutions) {
        e.add(`forge:ingots/${mats[0]}_${mats[1]}`, [`#forge:ingots/${mats[0]}`, `#forge:ingots/${mats[1]}`])
        e.add(`forge:nuggets/${mats[0]}_${mats[1]}`, [`#forge:nuggets/${mats[0]}`, `#forge:nuggets/${mats[1]}`])
        e.add(`forge:storage_blocks/${mats[0]}_${mats[1]}`, [`#forge:storage_blocks/${mats[0]}`, `#forge:storage_blocks/${mats[1]}`])
        e.add(`forge:plates/${mats[0]}_${mats[1]}`, [`#forge:plates/${mats[0]}`, `#forge:plates/${mats[1]}`])
        e.add(`forge:gears/${mats[0]}_${mats[1]}`, [`#forge:gears/${mats[0]}`, `#forge:gears/${mats[1]}`])
        e.add(`forge:rods/${mats[0]}_${mats[1]}`, [`#forge:rods/${mats[0]}`, `#forge:rods/${mats[1]}`])
    }

    e.add('forge:rods/basalz', 'thermal:basalz_rod')
    e.add('forge:rods/blitz', 'thermal:blitz_rod')
    e.add('forge:rods/blaze', 'minecraft:blaze_rod')
    e.add('forge:rods/blizz', 'thermal:blizz_rod')

    e.add('forge:gems/source_diamond', ['ars_nouveau:source_gem', 'minecraft:diamond'])

    e.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')

    e.add('forge:ingots/superheated_steel', 'kubejs:superheated_steel_ingot')

    const botaniaRunes = [
        'water', 'fire', 'earth', 'air', 'spring', 'summer', 'autumn', 'winter', 'mana',
        'lust', 'gluttony', 'greed', 'sloth', 'wrath', 'envy', 'pride',
        'asgard', 'vanaheim', 'alfheim', 'midgard', 'joetunheim', 'muspelheim', 'niflheim', 'nidavellir', 'helheim'
    ]

    for (let rune of botaniaRunes) {
        e.add(`botania:runes/${rune}`, `botania:rune_${rune}`)
        e.add(`botania:runes/${rune}`, `mythicbotany:${rune}_rune`)
    }

    e.add('mythicbotany:ritua_runes', [
        // /*'astralsorcery:'*/ 'kubejs:replaceme',
        // /*'astralsorcery:'*/ 'kubejs:replaceme',
        'ars_nouveau:ritual_sunrise',
        'ars_nouveau:ritual_moonfall',
        'ars_nouveau:ritual_awakening',
        'botania:livingwood',
        'mythicbotany:yggdrasil_branch',
        'kubejs:crystalline_oak_leaves',
        'kubejs:crystalline_flowering_palo_verde_leaves',
        'naturesaura:generator_limit_remover',
        'quark:root_item',
        'mekanism:pellet_antimatter',
        'mekanism:ultimate_control_circuit',
        'kubejs:laputian_ingot',
        'botania:mana_diamond_block',
        'botania:dragonstone_block',
        'powah:ender_core'
    ])

    e.add('forge:ingots/gaia', 'botania:gaia_ingot')
    e.add('forge:ingots/gaia_spirit', 'botania:gaia_ingot')
    e.add('forge:ingots/alfsteel', 'mythicbotany:alfsteel_ingot')


    e.add('forge:ingots/sky', ['naturesaura:sky_ingot'])
    e.add('forge:ingots/tainted_gold', ['naturesaura:tainted_gold'])
    e.add('forge:ingots/infused_iron', ['naturesaura:infused_iron'])
    e.add('forge:ingots/sunmetal', ['architects_palette:sunmetal_brick'])

    e.add('forge:inlays/arcane_gold', 'eidolon:gold_inlay')
    e.add('forge:inlays/pewter', 'eidolon:pewter_inlay')

    e.add('forge:ingots/uraninite', 'powah:uraninite');
    e.add('forge:ingots/energized_steel', 'powah:steel_energized');
    e.add('forge:ingots/radioactive', ['#forge:ingots/uraninite', '#forge:ingots/uranium']);

    e.add('quark:runes', ['kubejs:white_rune', 'kubejs:light_gray_rune', 'kubejs:gray_rune',
        'kubejs:black_rune', 'kubejs:brown_rune', 'kubejs:red_rune', 'kubejs:orange_rune',
        'kubejs:yellow_rune', 'kubejs:lime_rune', 'kubejs:green_rune', 'kubejs:cyan_rune',
        'kubejs:light_blue_rune', 'kubejs:blue_rune', 'kubejs:purple_rune', 'kubejs:magenta_rune',
        'kubejs:pink_rune',
    ])

    // blood magic is dumb and only applied this tag in blocks so their recipes dont work LMAO
    e.add('minecraft:mushroom_hyphae', [
        "minecraft:brown_mushroom_block", "minecraft:red_mushroom_block", "minecraft:crimson_hyphae", "minecraft:warped_hyphae",
        "minecraft:stripped_crimson_hyphae", "minecraft:stripped_warped_hyphae", "minecraft:nether_wart_block", "minecraft:warped_wart_block",
        "minecraft:shroomlight"
    ])

    e.add('forge:storage_blocks/energized_steel', 'powah:energized_steel_block')
    e.add('forge:storage_blocks/blazing', 'powah:blazing_crystal_block')
    e.add('forge:storage_blocks/niotic', 'powah:niotic_crystal_block')
    e.add('forge:storage_blocks/spirited', 'powah:spirited_crystal_block')
    e.add('forge:storage_blocks/nitro', 'powah:nitro_crystal_block')

    e.add('forge:gems/blazing', 'powah:blazing_crystal')
    e.add('forge:gems/niotic', 'powah:niotic_crystal')
    e.add('forge:gems/spirited', 'powah:spirited_crystal')
    e.add('forge:gems/nitro', 'powah:nitro_crystal')

    e.add('powah:energizing_rod', ['powah:energizing_rod_starter', 'powah:energizing_rod_basic', 'powah:energizing_rod_hardened',
        'powah:energizing_rod_blazing', 'powah:energizing_rod_niotic', 'powah:energizing_rod_spirited', 'powah:energizing_rod_nitro'])

    e.add('forge:paper', 'minecraft:paper')

    e.add('forge:dough', 'farmersdelight:wheat_dough')
    e.add('forge:doughs', 'farmersdelight:wheat_dough')

    e.add('kubejs:burning_hot', [
        'kubejs:hot_compressed_iron_ingot',
        'kubejs:superheated_steel_ingot',
        'kubejs:superheated_steel_block',
        'kubejs:hot_compressed_iron_block'
    ])
    e.add('forge:gems/mana', '#forge:gems/source')
    e.add('forge:storage_blocks/mana', '#forge:storage_blocks/source')

    e.add('forge:ammo', 'immersiveengineering:casull')
    e.add('forge:ammo', 'immersiveengineering:armor_piercing')
    e.add('forge:ammo', 'immersiveengineering:buckshot')
    e.add('forge:ammo', 'immersiveengineering:he')
    e.add('forge:ammo', 'immersiveengineering:silver')
    e.add('forge:ammo', 'immersiveengineering:dragons_breath')
    e.add('forge:ammo', 'immersiveengineering:potion')
    e.add('forge:ammo', 'immersiveengineering:flare')
    e.add('forge:ammo', 'immersiveengineering:firework')
    e.add('forge:ammo', 'immersiveengineering:homing')
    e.add('forge:ammo', 'immersiveengineering:wolfpack')
})

ServerEvents.tags('block', e => {

})