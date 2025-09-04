ServerEvents.tags('item', e => {
    // hot items that burn you when in inventory
    e.add('kubejs:burning_hot', [
        'kubejs:hot_compressed_iron_ingot',
        'kubejs:superheated_steel_ingot',
        'kubejs:superheated_steel_block',
        'kubejs:hot_compressed_iron_block'
    ])
})