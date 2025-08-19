ServerEvents.recipes(e => {
    e.remove({ id: 'scannable:scanner' })
    e.shaped('scannable:scanner', [
        'ABA',
        'CDC',
        'CEC'
    ], {
        A: '#forge:rods/copper',
        B: 'occultism:spirit_attuned_gem',
        C: '#forge:plates/aluminum',
        D: '#forge:glass_panes/cyan',
        E: 'tconstruct:sky_slime_crystal'
    }).id('kubejs:scannable_scanner')

    e.remove({ id: 'scannable:blank_module' })
    e.shaped('scannable:blank_module', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:nuggets/silver',
        B: 'tconstruct:greenheart_pressure_plate',
        C: 'kubejs:magic_clay',
        D: 'ars_nouveau:ritual_scrying',
        E: '#forge:nuggets/copper',
        F: 'create:polished_rose_quartz'
    }).id('kubejs:scannable_blank_module')
})