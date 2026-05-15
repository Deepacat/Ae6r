ServerEvents.recipes(e => {
    e.recipes.embers.stamping('kubejs:calculation_processor_base', 'ae2:calculation_processor_press')
        .input('kubejs:charged_certus_steel_coin')
        .fluid({ tag: '#forge:molten_aluminum', amount: 30 })
        .id('kubejs:embers/stamping/calculation_base')

    e.recipes.embers.stamping('kubejs:logic_processor_base', 'ae2:logic_processor_press')
        .input('thermal:electrum_coin')
        .fluid({ tag: '#forge:molten_aluminum', amount: 30 })
        .id('kubejs:embers/stamping/logic_base')

    e.recipes.embers.stamping('kubejs:engineering_processor_base', 'ae2:engineering_processor_press')
        .input('thermal:enderium_coin')
        .fluid({ tag: '#forge:molten_aluminum', amount: 30 })
        .id('kubejs:embers/stamping/engineering_base')
})