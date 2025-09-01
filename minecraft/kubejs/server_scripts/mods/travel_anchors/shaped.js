ServerEvents.recipes(e => {
    e.remove({ id: 'travelanchors:travel_staff' })
    e.shaped('travelanchors:travel_staff', [
        '  C',
        ' B ',
        'A  '
    ], {
        A: '#forge:rods/lead',
        B: 'entangled:item',
        C: 'kubejs:replaceme'
    }).id('kubejs:travelanchors_travel_staff')
})
