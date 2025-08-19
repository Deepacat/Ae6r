ServerEvents.recipes(e => {
    e.replaceInput({ id: 'thermal:machine_bottler'},
        'thermal:machine_frame', 'thermal:fluid_cell_frame'
    )
})