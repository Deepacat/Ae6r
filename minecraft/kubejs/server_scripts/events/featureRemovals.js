ServerEvents.highPriorityData(e => {
    let ores = [
        'minecraft:ore_coal',
        'minecraft:ore_coal_buried',
        'minecraft:ore_copper_large',
        'minecraft:ore_copper_small',
        'minecraft:ore_iron',
        'minecraft:ore_iron_small',
        'minecraft:ore_gold',
        'minecraft:ore_gold_buried',
        'minecraft:ore_nether_gold',
        'minecraft:ore_quartz',
        'minecraft:ore_lapis',
        'minecraft:ore_lapis_buried',
        'minecraft:ore_redstone',
        'minecraft:ore_diamond_buried',
        'minecraft:ore_diamond_large',
        'minecraft:ore_diamond_small',

        'embers:ore_lead',
        'embers:ore_silver',

        'eidolon:lead_ore',
        'eidolon:silver_ore',

        'create:zinc_ore',

        'occultism:ore_silver',
        'occultism:ore_silver_deepslate',

        'miniutilities:overworld_ender_ore',

        'rftoolsbase:dimshard_dimensions',
        'rftoolsbase:dimshard_overworld',
        'rftoolsbase:dimshard_nether',
        'rftoolsbase:dimshard_end',

        'thermal:apatite_ore',
        'thermal:cinnabar_ore',
        'thermal:lead_ore',
        'thermal:nickel_ore',
        'thermal:niter_ore',
        'thermal:silver_ore',
        'thermal:sulfur_ore',
        'thermal:tin_ore',

        'mekanism:ore_fluorite_normal',
        'mekanism:ore_fluorite_buried',
        'mekanism:ore_lead_normal',
        'mekanism:ore_osmium_small',
        'mekanism:ore_osmium_middle',
        'mekanism:ore_osmium_upper',
        'mekanism:ore_tin_large',
        'mekanism:ore_tin_small',
        'mekanism:ore_uranium_buried',
        'mekanism:ore_uranium_small',

        'immersiveengineering:bauxite',
        'immersiveengineering:deep_nickel',
        'immersiveengineering:lead',
        'immersiveengineering:mineral_veins',
        'immersiveengineering:nickel',
        'immersiveengineering:silver',
        'immersiveengineering:uranium',
    ]

    function removeFeatures(idArray) {
        let noop = {
            "type": "minecraft:no_op",
            "config": {}
        }
        for (let id of idArray) {
            e.addJson(`${id.namespace}:worldgen/configured_feature/${id.path}`, noop)
        }
    }

    removeFeatures(ores)

    // couldnt get to work
    // for (let dim of Object.entries(global.dimensionsOreData)) {
    //     let modifier = JsonIO.toObject({
    //         type: "forge:remove_features",
    //         biomes: dim[1].biomeTag,
    //         features: features
    //     })
    //     console.log(`emendatus:forge/biome_modifier/remove_ores_${dim[0].split(':')[1]}`)
    //     console.log(modifier)
    //     e.addJson(`emendatus:forge/biome_modifier/remove_ores_${dim[0].split(':')[1]}`, modifier)
    // }
})