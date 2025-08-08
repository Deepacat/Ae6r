WorldgenEvents.remove(event => {
    // print all features for a given biome filter
    // event.printFeatures('', 'minecraft:plains')
    // event.printFeatures('underground_ores', '#minecraft:is_overworld')
    // event.removeFeatureById('lakes', 'pneumaticcraft:oil_lake_surface')
    // event.removeFeatureById('lakes', 'pneumaticcraft:oil_lake_underground')
    event.removeOres(props => {
        props.blocks = [
            //create
            'create:zinc_ore',
            'create:deepslate_zinc_ore'
        ]
    })
})
