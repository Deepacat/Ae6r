ServerEvents.recipes(e => {
    e.remove({ type: 'ae2:inscriber' })
    e.recipes.ae2.inscriber('ae2:calculation_processor',
        'ae2:printed_silicon',
        'minecraft:redstone',
        'ae2:printed_calculation_processor'
    ).id('kubejs:ae2/inscriber/calculation_processor')

    e.recipes.ae2.inscriber('ae2:logic_processor',
        'ae2:printed_silicon',
        'minecraft:redstone',
        'ae2:printed_logic_processor'
    ).id('kubejs:ae2/inscriber/logic_processor')

    e.recipes.ae2.inscriber('ae2:engineering_processor',
        'ae2:printed_silicon',
        'minecraft:redstone',
        'ae2:printed_engineering_processor'
    ).id('kubejs:ae2/inscriber/engineering_processor')
})