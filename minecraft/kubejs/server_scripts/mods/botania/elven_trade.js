ServerEvents.recipes(e => {
    e.remove({ id: 'botania:elven_trade/elementium' })
    e.recipes.botania.elven_trade('botania:elementium_ingot',
        [{ tag: 'forge:ingots/infused_iron' }, { tag: 'forge:ingots/tainted_gold' }]
    )
    e.remove({ id: 'botania:elven_trade/elementium_block' })
    e.recipes.botania.elven_trade('botania:elementium_block',
        [{ tag: 'forge:storage_blocks/infused_iron' }, { tag: 'forge:storage_blocks/tainted_gold' }]
    )
    e.remove({ id: 'botania:elven_trade/dreamwood_log' })
    e.remove({ id: 'botania:elven_trade/dreamwood' })
    e.recipes.botania.elven_trade('botania:dreamwood_log',
        [{ item: 'eidolon:polished_planks' },
        { item: 'eidolon:polished_planks' },
        { item: 'eidolon:polished_planks' },
        { item: 'eidolon:polished_planks' }]
    )
})