ServerEvents.recipes(e => {
    e.remove({ id: 'architects_palette:sunmetal_brick' })
    e.shapeless('9x architects_palette:sunmetal_brick', ['architects_palette:sunmetal_block'])
        .id('kubejs:sunmetal_brick')

})