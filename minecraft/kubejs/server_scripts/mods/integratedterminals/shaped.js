ServerEvents.recipes(e => {
    e.remove({ id: 'integratedterminals:crafting/part_terminal_storage' })
    e.shaped('integratedterminals:part_terminal_storage', [
        'AB',
        'CD',
        'AB'
    ], {
        A: 'thermal:lumium_glass',
        B: 'botania:corporea_funnel',
        C: 'botania:corporea_index',
        D: 'integrateddynamics:part_display_panel'
    }).id('kubejs:integratedterminals_crafting/part_terminal_storage')
})