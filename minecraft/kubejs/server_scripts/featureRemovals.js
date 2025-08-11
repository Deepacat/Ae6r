ServerEvents.highPriorityData(e => {
    function removeFeature(path) {
        let noop = {
            "type": "minecraft:no_op",
            "config": {}
        }
        e.addJson(path, noop)
    }
    // ores
    removeFeature('minecraft:worldgen/configured_feature/ore_coal')
    removeFeature('minecraft:worldgen/configured_feature/ore_coal_buried')
    removeFeature('minecraft:worldgen/configured_feature/ore_copper_large')
    removeFeature('minecraft:worldgen/configured_feature/ore_copper_small')
    removeFeature('minecraft:worldgen/configured_feature/ore_iron')
    removeFeature('minecraft:worldgen/configured_feature/ore_iron_small')
    removeFeature('minecraft:worldgen/configured_feature/ore_gold')
    removeFeature('minecraft:worldgen/configured_feature/ore_gold_buried')
    removeFeature('minecraft:worldgen/configured_feature/ore_nether_gold')
    removeFeature('minecraft:worldgen/configured_feature/ore_quartz')
    removeFeature('minecraft:worldgen/configured_feature/ore_lapis')
    removeFeature('minecraft:worldgen/configured_feature/ore_lapis_buried')
    removeFeature('minecraft:worldgen/configured_feature/ore_redstone')
    removeFeature('minecraft:worldgen/configured_feature/ore_diamond_buried')
    removeFeature('minecraft:worldgen/configured_feature/ore_diamond_large')
    removeFeature('minecraft:worldgen/configured_feature/ore_diamond_small')
    
    removeFeature('embers:worldgen/configured_feature/ore_lead')
    removeFeature('embers:worldgen/configured_feature/ore_silver')

    removeFeature('eidolon:worldgen/configured_feature/lead_ore')
    removeFeature('eidolon:worldgen/configured_feature/silver_ore')

    removeFeature('create:worldgen/configured_feature/zinc_ore')

    removeFeature('occultism:worldgen/configured_feature/ore_silver')
    removeFeature('occultism:worldgen/configured_feature/ore_silver_deepslate')

    removeFeature('miniutilities:worldgen/configured_feature/overworld_ender_ore')

    removeFeature('rftoolsbase:worldgen/configured_feature/dimshard_dimensions')
    removeFeature('rftoolsbase:worldgen/configured_feature/dimshard_overworld')
    removeFeature('rftoolsbase:worldgen/configured_feature/dimshard_nether')
    removeFeature('rftoolsbase:worldgen/configured_feature/dimshard_end')

    removeFeature('thermal:worldgen/configured_feature/apatite_ore')
    removeFeature('thermal:worldgen/configured_feature/cinnabar_ore')
    removeFeature('thermal:worldgen/configured_feature/lead_ore')
    removeFeature('thermal:worldgen/configured_feature/nickel_ore')
    removeFeature('thermal:worldgen/configured_feature/niter_ore')
    removeFeature('thermal:worldgen/configured_feature/silver_ore')
    removeFeature('thermal:worldgen/configured_feature/sulfur_ore')
    removeFeature('thermal:worldgen/configured_feature/tin_ore')

    removeFeature('mekanism:worldgen/configured_feature/ore_fluorite_normal')
    removeFeature('mekanism:worldgen/configured_feature/ore_fluorite_buried')
    removeFeature('mekanism:worldgen/configured_feature/ore_lead_normal')
    removeFeature('mekanism:worldgen/configured_feature/ore_osmium_small')
    removeFeature('mekanism:worldgen/configured_feature/ore_osmium_middle')
    removeFeature('mekanism:worldgen/configured_feature/ore_osmium_upper')
    removeFeature('mekanism:worldgen/configured_feature/ore_tin_large')
    removeFeature('mekanism:worldgen/configured_feature/ore_tin_small')
    removeFeature('mekanism:worldgen/configured_feature/ore_uranium_buried')
    removeFeature('mekanism:worldgen/configured_feature/ore_uranium_small')
    
    removeFeature('immersiveengineering:worldgen/configured_feature/bauxite')
    removeFeature('immersiveengineering:worldgen/configured_feature/deep_nickel')
    removeFeature('immersiveengineering:worldgen/configured_feature/lead')
    removeFeature('immersiveengineering:worldgen/configured_feature/mineral_veins')
    removeFeature('immersiveengineering:worldgen/configured_feature/nickel')
    removeFeature('immersiveengineering:worldgen/configured_feature/silver')
    removeFeature('immersiveengineering:worldgen/configured_feature/uranium')

    removeFeature('aether:worldgen/configured_feature/zanite_ore')
    removeFeature('aether:worldgen/configured_feature/ambrosium_ore')
    removeFeature('aether:worldgen/configured_feature/gravitite_ore')
    removeFeature('aether:worldgen/configured_feature/gravitite_ore_buried')
})