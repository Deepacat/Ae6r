ServerEvents.recipes(e => {
    e.remove({ type: 'ae2:inscriber' })
    
    // completed processors (stage 3)
    e.recipes.ae2.inscriber('ae2:calculation_processor',
        'ae2:printed_silicon',
        '#forge:ingots/redstone_alloy',
        'ae2:printed_calculation_processor'
    ).mode('press')
        .id('kubejs:ae2/inscriber/calculation_processor')

    e.recipes.ae2.inscriber('ae2:logic_processor',
        'ae2:printed_silicon',
        '#forge:ingots/redstone_alloy',
        'ae2:printed_logic_processor'
    ).mode('press')
        .id('kubejs:ae2/inscriber/logic_processor')

    e.recipes.ae2.inscriber('ae2:engineering_processor',
        'ae2:printed_silicon',
        '#forge:ingots/redstone_alloy',
        'ae2:printed_engineering_processor'
    ).mode('press')
        .id('kubejs:ae2/inscriber/engineering_processor')

    e.recipes.ae2.inscriber('megacells:accumulation_processor',
        'ae2:printed_silicon',
        '#forge:ingots/redstone_alloy',
        'megacells:printed_accumulation_processor'
    ).mode('press')
        .id('kubejs:ae2/inscriber/accumulation_processor')
})
