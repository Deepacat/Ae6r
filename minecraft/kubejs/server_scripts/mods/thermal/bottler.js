ServerEvents.recipes(e => {
    // const recipes = [
    e.recipes.thermal.bottler('industrialforegoing:dryrubber',
        [Fluid.of('industrialforegoing:latex', 900), '#forge:dusts/sulfur'])
        .energy(12000)
        .id(`kubejs:bottler/dryrubber`)
    e.recipes.thermal.bottler('tconstruct:foundry_controller', 
        [Fluid.of('tconstruct:scorched_stone', 144 * 8), '#forge:ingots/superheated_steel'])
        .energy(10000)
        .id(`kubejs:bottler/foundry_controller`)
    e.recipes.thermal.bottler('pneumaticcraft:reinforced_stone',
        [Fluid.of('kubejs:molten_compressed_iron', 18), '#minecraft:light_gray_concrete_powder'])
        .energy(8000)
        .id(`kubejs:bottler/reinforced_stone`)
    e.recipes.thermal.bottler('kubejs:memory_basic_filled',
        [Fluid.of('pneumaticcraft:memory_essence', 8000), 'kubejs:memory_basic_empty'])
        .energy(8000)
        .id(`kubejs:bottler/memory_basic_filled`)
    e.recipes.thermal.bottler('kubejs:memory_advanced_filled',
        [Fluid.of('pneumaticcraft:memory_essence', 8000 * 2), 'kubejs:memory_advanced_empty'])
        .energy(8000 * 2)
        .id(`kubejs:bottler/memory_advanced_filled`)
    e.recipes.thermal.bottler('kubejs:memory_elite_filled',
        [Fluid.of('pneumaticcraft:memory_essence', 8000 * 4), 'kubejs:memory_elite_empty'])
        .energy(8000 * 4)
        .id(`kubejs:bottler/memory_elite_filled`)
    e.recipes.thermal.bottler('kubejs:memory_ultimate_filled',
        [Fluid.of('pneumaticcraft:memory_essence', 8000 * 8), 'kubejs:memory_ultimate_empty'])
        .energy(8000 * 8)
        .id(`kubejs:bottler/memory_ultimate_filled`)
    e.recipes.thermal.bottler('botania:flare_chakram',
        [Fluid.of('tconstruct:blazing_blood', 1000), 'botania:thorn_chakram'])
        .energy(15000)
        .id(`kubejs:bottler/flare_chakram`)
})