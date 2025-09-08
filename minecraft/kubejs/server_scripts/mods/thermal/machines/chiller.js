ServerEvents.recipes(e => {  
    e.recipes.thermal.chiller('minecraft:brick',
        [Fluid.of('tconstruct:molten_clay', 90), 'tconstruct:ingot_cast'])
        .energy(5000)
        .id('kubejs:thermal/chiller/tconstruct_clay_ingot')
    
    e.recipes.thermal.chiller('minecraft:netherite_ingot',
        [Fluid.of('tconstruct:molten_netherite', 90), 'tconstruct:ingot_cast'])
        .energy(5000)
        .id('kubejs:thermal/chiller/tconstruct_netherite_ingot')
    
    e.recipes.thermal.chiller('minecraft:netherite_scrap',
        [Fluid.of('tconstruct:molten_debris', 90), 'tconstruct:ingot_cast'])
        .energy(5000)
        .id('kubejs:thermal/chiller/tconstruct_molten_debris')
    
    e.recipes.thermal.chiller('tconstruct:netherite_nugget',
        [Fluid.of('tconstruct:molten_netherite', 10), 'tconstruct:nugget_cast'])
        .energy(555)
        .id('kubejs:thermal/chiller/tconstruct_netherite_nugget')
    
    e.recipes.thermal.chiller('tconstruct:debris_nugget',
        [Fluid.of('tconstruct:molten_debris', 10), 'tconstruct:nugget_cast'])
        .energy(555)
        .id('kubejs:thermal/chiller/tconstruct_debris_nugget')
    
    // e.recipes.thermal.chiller('create:shadow_steel',
    //     [Fluid.of('materialis:molten_shadow_steel', 90), 'tconstruct:ingot_cast'])
    //     .energy(5000)
    //     .id('kubejs:shadow_steel')
    
    // e.recipes.thermal.chiller('create:refined_radiance',
    //     [Fluid.of('materialis:molten_refined_radiance', 90), 'tconstruct:ingot_cast'])
    //     .energy(5000)
    //     .id('kubejs:refined_radiance')
    
    e.recipes.thermal.chiller('undergarden:forgotten_ingot',
        [Fluid.of('tcintegrations:molten_forgotten_metal', 90), 'tconstruct:ingot_cast'])
        .energy(5000)
        .id('kubejs:thermal/chiller/forgotten_ingot')
    
    e.recipes.thermal.chiller('undergarden:forgotten_nugget',
        [Fluid.of('tcintegrations:molten_forgotten_metal', 10), 'tconstruct:nugget_cast'])
        .energy(555)
        .id('kubejs:thermal/chiller/forgotten_nugget')
    
    // e.recipes.thermal.chiller('materialis:fairy_ingot',
    //     [Fluid.of('materialis:molten_fairy', 90), 'tconstruct:ingot_cast'])
    //     .energy(5000)
    //     .id('kubejs:fairy_ingot')
    
    // e.recipes.thermal.chiller('materialis:fairy_nugget',
    //     [Fluid.of('materialis:molten_fairy', 10), 'tconstruct:nugget_cast'])
    //     .energy(555)
    //     .id('kubejs:fairy_nugget')
    
    // e.recipes.thermal.chiller('eidolon:arcane_gold_ingot',
    //     [Fluid.of('materialis:molten_arcane_gold', 90), 'tconstruct:ingot_cast'])
    //     .energy(5000)
    //     .id('kubejs:arcane_gold_ingot')
    
    // e.recipes.thermal.chiller('eidolon:arcane_gold_nugget',
    //     [Fluid.of('materialis:molten_arcane_gold', 10), 'tconstruct:nugget_cast'])
    //     .energy(555)
    //     .id('kubejs:arcane_gold_nugget')
    
    e.recipes.thermal.chiller('mekanism:ingot_refined_obsidian',
        [Fluid.of('tconstruct:molten_refined_obsidian', 90), 'tconstruct:ingot_cast'])
        .energy(5000)
        .id('kubejs:thermal/chiller/mekanism_ingot_refined_obsidian')
    
    e.recipes.thermal.chiller('mekanism:nugget_refined_obsidian',
        [Fluid.of('tconstruct:molten_refined_obsidian', 10), 'tconstruct:nugget_cast'])
        .energy(555)
        .id('kubejs:thermal/chiller/mekanism_nugget_refined_obsidian')
    
    e.recipes.thermal.chiller('mekanism:ingot_refined_glowstone',
        [Fluid.of('tconstruct:molten_refined_glowstone', 90), 'tconstruct:ingot_cast'])
        .energy(5000)
        .id('kubejs:thermal/chiller/mekanism_ingot_refined_glowstone')
    
    e.recipes.thermal.chiller('mekanism:nugget_refined_glowstone',
        [Fluid.of('tconstruct:molten_refined_glowstone', 10), 'tconstruct:nugget_cast'])
        .energy(555)
        .id('kubejs:thermal/chiller/mekanism_nugget_refined_glowstone')
    
    e.recipes.thermal.chiller('industrialforegoing:pink_slime_ingot',
        [Fluid.of('materialis:molten_pink_slime', 90), 'tconstruct:ingot_cast'])
        .energy(5000)
        .id('kubejs:thermal/chiller/pink_slime_ingot')
    
    e.recipes.thermal.chiller('aquaculture:neptunium_ingot',
        [Fluid.of('tcintegrations:molten_neptunium', 90), 'tconstruct:ingot_cast'])
        .energy(5000)
        .id('kubejs:thermal/chiller/neptunium_ingot')
    
    e.recipes.thermal.chiller('aquaculture:neptunium_nugget',
        [Fluid.of('tcintegrations:molten_neptunium', 10), 'tconstruct:nugget_cast'])
        .energy(555)
        .id('kubejs:thermal/chiller/neptunium_nugget')
    
    e.recipes.thermal.chiller('minecraft:blaze_rod',
        [Fluid.of('tconstruct:blazing_blood', 100), 'tconstruct:rod_cast'])
        .energy(2000)
        .id('kubejs:thermal/chiller/blaze_rod_from_blazing_blood')
    
    e.recipes.thermal.chiller('minecraft:magma_cream',
        [Fluid.of('tconstruct:blazing_blood', 50), '#forge:slimeballs'])
        .energy(2000)
        .id('kubejs:thermal/chiller/magma_cream_from_blazing_blood')
    
    e.recipes.thermal.chiller('minecraft:magma_cream',
        [Fluid.of('tconstruct:magma', 250), 'thermal:chiller_ball_cast'])
        .energy(2000)
        .id('kubejs:thermal/chiller/magma_cream_from_magma')
    
    e.recipes.thermal.chiller('minecraft:slime_ball',
        [Fluid.of('tconstruct:earth_slime', 250), 'thermal:chiller_ball_cast'])
        .energy(2000)
        .id('kubejs:thermal/chiller/slime_ball_from_earth_slime')
    
    e.recipes.thermal.chiller('kubejs:blood_slime_ball',
        [Fluid.of('tconstruct:liquid_soul', 250), 'thermal:chiller_ball_cast'])
        .energy(2000)
        .id('kubejs:thermal/chiller/blood_slime_ball_from_blood')
    
    e.recipes.thermal.chiller('tconstruct:ender_slime_ball',
        [Fluid.of('tconstruct:ender_slime', 250), 'thermal:chiller_ball_cast'])
        .energy(2000)
        .id('kubejs:thermal/chiller/ender_slime_ball_from_ender')
    
    e.recipes.thermal.chiller('tconstruct:sky_slime_ball',
        [Fluid.of('tconstruct:sky_slime', 250), 'thermal:chiller_ball_cast'])
        .energy(2000)
        .id('kubejs:thermal/chiller/sky_slime_ball_from_ender')
})