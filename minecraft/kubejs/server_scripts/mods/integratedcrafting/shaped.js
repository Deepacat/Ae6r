ServerEvents.recipes(e => {
    e.remove({ id: 'integratedcrafting:crafting/part_interface_crafting' })
    e.shaped(Item.of('3x integratedcrafting:part_interface_crafting'), [
        ' A ',
        'BAC',
        ' A '
    ], {
        A: 'create:mechanical_crafter',
        B: 'integrateddynamics:variable_transformer_output',
        C: 'integrateddynamics:variable_transformer_input'
    }).id('kubejs:integratedcrafting_crafting/part_interface_crafting')
})