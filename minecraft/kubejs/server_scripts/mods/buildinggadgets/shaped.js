ServerEvents.recipes(e => {
    e.remove({ id: 'buildinggadgets2:gadget_building' })
    e.shaped('buildinggadgets2:gadget_building', [
        'ABA',
        'CDC',
        'ECE'
    ], {
        A: '#forge:gems/ender',
        B: '#forge:glass_panes/lime',
        C: '#forge:plates/aluminum',
        D: 'thermal:flux_capacitor',
        E: '#forge:gears/lumium'
    }).id('kubejs:buildinggadgets2_gadget_building')

    e.remove({ id: 'buildinggadgets2:gadget_exchanging' })
    e.shaped('buildinggadgets2:gadget_exchanging', [
        'ABA',
        'CDC',
        'ECE'
    ], {
        A: '#forge:gems/ender',
        B: '#forge:glass_panes/lime',
        C: '#forge:plates/aluminum',
        D: 'thermal:flux_capacitor',
        E: '#forge:gears/signalum'
    }).id('kubejs:buildinggadgets2_gadget_exchanging')

    e.remove({ id: 'buildinggadgets2:gadget_copy_paste' })
    e.shaped('buildinggadgets2:gadget_copy_paste', [
        'ABA',
        'CDC',
        'ECE'
    ], {
        A: '#forge:gems/ender',
        B: '#forge:glass_panes/lime',
        C: '#forge:plates/aluminum',
        D: 'thermal:flux_capacitor',
        E: '#forge:gears/osmium'
    }).id('kubejs:buildinggadgets2_gadget_copy_paste')

    e.remove({ id: 'buildinggadgets2:gadget_destruction' })
    e.shaped('buildinggadgets2:gadget_destruction', [
        'ABA',
        'CDC',
        'ECE'
    ], {
        A: '#forge:gems/ender',
        B: '#forge:glass_panes/red',
        C: '#forge:plates/lead',
        D: 'thermal:flux_capacitor',
        E: '#forge:gears/enderium'
    }).id('kubejs:buildinggadgets2_gadget_destruction')
})