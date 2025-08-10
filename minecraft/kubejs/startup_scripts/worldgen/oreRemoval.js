// i dont know which works for what ore but whatever i have here removed all i wanted i think

WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", [
        "thermal:apatite_ore",
        "thermal:cinnabar_ore",
        "thermal:lead_ore",
        "thermal:nickel_ore",
        "thermal:niter_ore",
        "thermal:silver_ore",
        "thermal:sulfur_ore",
        "thermal:tin_ore",
        
        "mekanism:ore_fluorite_normal",
        "mekanism:ore_fluorite_buried",
        "mekanism:ore_lead_normal",
        "mekanism:ore_osmium_small",
        "mekanism:ore_osmium_middle",
        "mekanism:ore_osmium_upper",
        "mekanism:ore_tin_large",
        "mekanism:ore_tin_small",
        "mekanism:ore_uranium_buried",
        "mekanism:ore_uranium_small",

        "immersiveengineering:bauxite",
        "immersiveengineering:deep_nickel",
        "immersiveengineering:lead",
        "immersiveengineering:mineral_veins",
        "immersiveengineering:nickel",
        "immersiveengineering:silver",
        "immersiveengineering:uranium",
    ])
})

WorldgenEvents.remove(event => {
    // print all features for a given biome filter
    // event.printFeatures('', 'minecraft:plains')
    event.printFeatures('underground_ores')
    // event.removeFeatureById('lakes', 'pneumaticcraft:oil_lake_surface')
    // event.removeFeatureById('lakes', 'pneumaticcraft:oil_lake_underground')
    // coal copper diamond emerald gold iron lapis quartz redstone
    event.removeOres(props => {
        props.blocks = [
            "minecraft:coal_ore",
            "minecraft:deepslate_coal_ore",
            "minecraft:copper_ore",
            "minecraft:deepslate_copper_ore",
            "minecraft:diamond_ore",
            "minecraft:deepslate_diamond_ore",
            "minecraft:emerald_ore",
            "minecraft:deepslate_emerald_ore",
            "minecraft:gold_ore",
            "minecraft:deepslate_gold_ore",
            "minecraft:nether_gold_ore",
            "minecraft:iron_ore",
            "minecraft:deepslate_iron_ore",
            "minecraft:lapis_ore",
            "minecraft:deepslate_lapis_ore",
            "minecraft:nether_quartz_ore",
            "minecraft:redstone_ore",
            "minecraft:deepslate_redstone_ore",

            "thermal:apatite_ore",
            "thermal:deepslate_apatite_ore",

            "thermal:cinnabar_ore",
            "thermal:deepslate_cinnabar_ore",

            "thermal:sapphire_ore",
            "thermal:deepslate_sapphire_ore",

            "thermal:sulfur_ore",
            "thermal:deepslate_sulfur_ore",

            "mekanism:fluorite_ore",
            "mekanism:deepslate_fluorite_ore",

            "thermal:ruby_ore",
            "thermal:deepslate_ruby_ore",

            "immersiveengineering:ore_aluminum",
            "immersiveengineering:deepslate_ore_aluminum",

            "thermal:lead_ore",
            "thermal:deepslate_lead_ore",
            "mekanism:lead_ore",
            "mekanism:deepslate_lead_ore",
            "immersiveengineering:ore_lead",
            "immersiveengineering:deepslate_ore_lead",
            "embers:lead_ore",
            "embers:deepslate_lead_ore",
            "eidolon:lead_ore",
            "eidolon:deep_lead_ore",

            "thermal:nickel_ore",
            "thermal:deepslate_nickel_ore",
            "immersiveengineering:ore_nickel",
            "immersiveengineering:deepslate_ore_nickel",

            "thermal:silver_ore",
            "thermal:deepslate_silver_ore",
            "immersiveengineering:ore_silver",
            "immersiveengineering:deepslate_ore_silver",
            "embers:silver_ore",
            "embers:deepslate_silver_ore",
            "occultism:silver_ore",
            "occultism:silver_ore_deepslate",
            "eidolon:silver_ore",
            "eidolon:deep_silver_ore",

            "thermal:tin_ore",
            "thermal:deepslate_tin_ore",
            "mekanism:tin_ore",
            "mekanism:deepslate_tin_ore",

            "mekanism:uranium_ore",
            "mekanism:deepslate_uranium_ore",
            "immersiveengineering:ore_uranium",
            "immersiveengineering:deepslate_ore_uranium",

            "create:zinc_ore",
            "create:deepslate_zinc_ore",

            "mekanism:osmium_ore",
            "mekanism:deepslate_osmium_ore",

            "miniutilities:ender_ore",

            "rftoolsbase:dimensionalshard_overworld",
            "rftoolsbase:dimensionalshard_nether",
            "rftoolsbase:dimensionalshard_end"
        ]
    })
})
