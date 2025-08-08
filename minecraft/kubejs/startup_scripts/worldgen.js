WorldgenEvents.remove(event => {
    // print all features for a given biome filter
    // event.printFeatures('', 'minecraft:plains')
    // event.printFeatures('underground_ores', '#minecraft:is_overworld')
    // event.removeFeatureById('lakes', 'pneumaticcraft:oil_lake_surface')
    // event.removeFeatureById('lakes', 'pneumaticcraft:oil_lake_underground')
    event.removeOres(props => {
        props.blocks = [
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
        ]
    })
})
