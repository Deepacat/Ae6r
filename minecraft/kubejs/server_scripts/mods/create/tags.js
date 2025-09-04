ServerEvents.tags('item', e => {
    // create raw material forge tags
    const createOreMaterials = [
        'copper', 'iron', 'gold', 'zinc',
        'silver', 'lead', 'uranium', 'osmium',
        'tin', 'aluminum', 'nickel'
    ]

    for (let material of createOreMaterials) {
        e.add(`create:crushed_raw_materials/${material}`, `create:crushed_raw_${material}`)
        e.add(`forge:crushed_ores/${material}`, `create:crushed_raw_${material}`)
    }
})