ServerEvents.recipes(e => {
    e.remove({ type: 'ae2:inscriber' })

    // completed processors (stage 3)
    e.recipes.ae2.inscriber('ae2:calculation_processor',
        'ae2:printed_silicon',
        '#forge:ingots/redstone_alloy',
        'ae2:printed_calculation_processor'
    ).id('kubejs:ae2/inscriber/calculation_processor')

    e.recipes.ae2.inscriber('ae2:logic_processor',
        'ae2:printed_silicon',
        '#forge:ingots/redstone_alloy',
        'ae2:printed_logic_processor'
    ).id('kubejs:ae2/inscriber/logic_processor')

    e.recipes.ae2.inscriber('ae2:engineering_processor',
        'ae2:printed_silicon',
        '#forge:ingots/redstone_alloy',
        'ae2:printed_engineering_processor'
    ).id('kubejs:ae2/inscriber/engineering_processor')

    e.recipes.ae2.inscriber('megacells:accumulation_processor',
        'ae2:printed_silicon',
        '#forge:ingots/redstone_alloy',
        'megacells:printed_accumulation_processor'
    ).id('kubejs:ae2/inscriber/accumulation_processor')

    // processor bases (stage 1)
    e.recipes.ae2.inscriber('kubejs:silicon_base',
        'ae2:silicon_press',
        'ae2:silicon',
        'immersiveengineering:circuit_board'
    ).id('kubejs:ae2/inscriber/silicon_base')

    e.recipes.ae2.inscriber('kubejs:calculation_processor_base',
        'ae2:calculation_processor_press',
        '#forge:coins/charged_certus_steel',
        'fluxnetworks:flux_dust'
    ).id('kubejs:ae2/inscriber/calculation_processor_base')

    e.recipes.ae2.inscriber('kubejs:logic_processor_base',
        'ae2:logic_processor_press',
        '#forge:coins/electrum',
        'fluxnetworks:flux_dust'
    ).id('kubejs:ae2/inscriber/logic_processor_base')

    e.recipes.ae2.inscriber('kubejs:engineering_processor_base',
        'ae2:engineering_processor_press',
        '#forge:coins/enderium',
        'fluxnetworks:flux_dust'
    ).id('kubejs:ae2/inscriber/engineering_processor_base')

    e.recipes.ae2.inscriber('kubejs:accumulation_processor_base',
        'megacells:accumulation_processor_press',
        '#forge:coins/sky_steel',
        'fluxnetworks:flux_dust'
    ).id('kubejs:ae2/inscriber/accumulation_processor_base')
})
