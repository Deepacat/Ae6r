ServerEvents.recipes(e => {
    e.remove({ id: 'botania:pure_daisy/livingwood'})
    e.recipes.botania.pure_daisy('botania:livingwood_log', 'ars_nouveau:green_archwood_wood')
        .id('kubejs:pure_daisy/livingwood')

    e.remove({ id: 'botania:pure_daisy/livingrock' })
    e.recipes.botania.pure_daisy('botania:livingrock', 'architects_palette:sunstone')
        .id('kubejs:pure_daisy/livingrock')
})