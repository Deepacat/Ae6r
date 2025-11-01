// priority: 1000
// high priority so the tags load before unification (removals etc)

// item tags
ServerEvents.tags('item', e => {
    // restriction tags (item tag)
    for (let [resKey, resObj] of Object.entries(global.restrictions)) {
        let items = resObj.regex ?
            Ingredient.of(resObj.regex).itemIds.toArray() :
            Ingredient.of(resKey).itemIds.toArray()

        for (let item of items) {
            e.add(`kubejs:restrictions/${resKey.split(':')[1]}`, item)
            e.add(`kubejs:restrictions`, item)
        }
    }

    // Making material substitute tags
    const substitutionMaterials = [
        ['gold', 'brass'],
        ['gold', 'copper'],
        ['gold', 'bronze'],
        ['gold', 'silver'],
        ['iron', 'aluminum'],
        ['iron', 'tin'],
        ['iron', 'copper'],
        ['iron', 'osmium'],
        ['copper', 'tin'],
        ['source', 'diamond'],
    ]

    for (let mats of substitutionMaterials) {
        e.add(`forge:ingots/${mats[0]}_${mats[1]}`, [`#forge:ingots/${mats[0]}`, `#forge:ingots/${mats[1]}`])
        e.add(`forge:gems/${mats[0]}_${mats[1]}`, [`#forge:gems/${mats[0]}`, `#forge:gems/${mats[1]}`])
        e.add(`forge:dusts/${mats[0]}_${mats[1]}`, [`#forge:dusts/${mats[0]}`, `#forge:dusts/${mats[1]}`])
        e.add(`forge:nuggets/${mats[0]}_${mats[1]}`, [`#forge:nuggets/${mats[0]}`, `#forge:nuggets/${mats[1]}`])
        e.add(`forge:storage_blocks/${mats[0]}_${mats[1]}`, [`#forge:storage_blocks/${mats[0]}`, `#forge:storage_blocks/${mats[1]}`])
        e.add(`forge:plates/${mats[0]}_${mats[1]}`, [`#forge:plates/${mats[0]}`, `#forge:plates/${mats[1]}`])
        e.add(`forge:gears/${mats[0]}_${mats[1]}`, [`#forge:gears/${mats[0]}`, `#forge:gears/${mats[1]}`])
        e.add(`forge:rods/${mats[0]}_${mats[1]}`, [`#forge:rods/${mats[0]}`, `#forge:rods/${mats[1]}`])
    }

    const quickTags = [
        ['sky', ['naturesaura:sky_ingot'], 'forge:ingots'],
        ['tainted_gold', ['naturesaura:tainted_gold'], 'forge:ingots'],
        ['infused_iron', ['naturesaura:infused_iron'], 'forge:ingots'],
        ['alfsteel', ['mythicbotany:alfsteel_ingot'], 'forge:ingots'],
        ['sunmetal', ['architects_palette:sunmetal_brick'], 'forge:ingots'],
        ['andesite_alloy', ['create:andesite_alloy'], 'forge:ingots'],
        ['superheated_steel', ['kubejs:superheated_steel_ingot'], 'forge:ingots'],
        ['gaia', ['botania:gaia_ingot'], 'forge:ingots'],
        ['gaia_spirit', ['botania:gaia_ingot'], 'forge:ingots'],
        ['uraninite', ['powah:uraninite'], 'forge:ingots'],
        ['energized_steel', ['powah:steel_energized'], 'forge:ingots'],
    ]

    for (let entry of quickTags) {
        e.add(`${entry[2]}/${entry[0]}`, entry[1])
        e.add(`${entry[2]}`, entry[1])
    }

    // adding gem tag to coals for unification
    let coals = ['minecraft:coal', 'thermal:coal_coke', 'thermal:bitumen', 'immersiveengineering:coal_coke']
    for (let coal of coals) {
        e.add('forge:gems', coal)
        e.add(`forge:gems/${coal.split(':')[1]}`, coal)
    }

    e.add('forge:ingots/radioactive', ['#forge:ingots/uraninite', '#forge:ingots/uranium'])
    // blood magic is dumb and only applied this tag in blocks so their recipes dont work LMAO
    e.add('minecraft:mushroom_hyphae', [
        "minecraft:brown_mushroom_block", "minecraft:red_mushroom_block", "minecraft:crimson_hyphae", "minecraft:warped_hyphae",
        "minecraft:stripped_crimson_hyphae", "minecraft:stripped_warped_hyphae", "minecraft:nether_wart_block", "minecraft:warped_wart_block",
        "minecraft:shroomlight"
    ])
    // locator wands tag
    e.add('kubejs:locator_wands', ['wizards_reborn:wissen_wand', 'wizards_reborn:arcane_wand'])
    // paper tag
    e.add('forge:paper', 'minecraft:paper')
    // blood slimeball tag
    e.add('forge:slimeballs/blood', 'kubejs:blood_slime_ball')
    // ender pearl tag mixing for unif
    e.add('forge:dusts/ender_pearl', '#forge:dusts/ender')
    e.add('forge:dusts/ender', '#forge:dusts/ender_pearl')
    e.add('forge:gems/ender', '#forge:ender_pearls')
    // adding source to mana tag so they unify
    e.add('forge:gems/mana', '#forge:gems/source')
    e.add('forge:storage_blocks/mana', '#forge:storage_blocks/source')
    // rename this to like kubejs namespace when recipe porting is done lol
    e.add('enigmatica:crafting_slabs', [
        'quark:smooth_basalt_slab', 'quark:polished_basalt_slab', 'quark:basalt_slab',
        'quark:deepslate_tiles_slab', 'quark:polished_deepslate_slab', 'quark:polished_slate_slab',
        'quark:slate_slab', 'quark:polished_jasper_slab', 'quark:jasper_slab',
        'quark:polished_marble_slab', 'quark:marble_slab', 'architects_palette:limestone_slab',
        'create:polished_weathered_limestone_slab', 'create:polished_limestone_slab',
        'quark:polished_limestone_slab', 'quark:limestone_slab', 'create:polished_dolomite_slab',
        'create:polished_gabbro_slab', 'create:polished_dark_scoria_slab', 'create:polished_scoria_slab',
        'quark:basalt', 'minecraft:polished_diorite_slab', 'minecraft:diorite_slab',
        'minecraft:polished_granite_slab', 'minecraft:granite_slab', 'minecraft:polished_andesite_slab',
        'minecraft:andesite_slab', 'minecraft:smooth_stone_slab', 'minecraft:stone_slab'
    ])
})

// block tags
ServerEvents.tags('block', e => {
    // restriction tags (block tag)
    for (let [resKey, resObj] of Object.entries(global.restrictions)) {
        let items = resObj.regex ?
            Ingredient.of(resObj.regex).itemIds.toArray() :
            Ingredient.of(resKey).itemIds.toArray()

        for (let item of items) {
            e.add(`kubejs:restrictions/${resKey.split(':')[1]}`, item)
            e.add(`kubejs:restrictions`, item)
        }
    }

    // Mineable tags
    e.add('minecraft:mineable/axe', ['bountiful:bountyboard'])
    e.add('minecraft:mineable/pickaxe', [''])
    e.add('minecraft:mineable/shovel', [''])
    e.add('minecraft:mineable/hoe', [''])
})

// fluid tags
ServerEvents.tags('fluid', e => {
    // fluids to hide (maybe fix fluid unif if the tags align)
    e.add('c:hidden_from_recipe_viewers', [
        'thermal:latex', 'thermal:creosote'
    ])
})

