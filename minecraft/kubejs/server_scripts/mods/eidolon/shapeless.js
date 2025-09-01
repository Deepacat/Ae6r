ServerEvents.recipes(e => {
    e.remove('eidolon:pewter_blend')
    e.shapeless('2x eidolon:pewter_blend',
        ['#forge:dusts/lead', '#forge:dusts/iron']
    ).id('kubejs:shapeless/pewter_blend')
})