ServerEvents.recipes(e => {
    e.remove({ id: 'irons_spellbooks:magic_cloth' })
    e.shaped('irons_spellbooks:magic_cloth', [
        'AAA',
        'ABA',
        'AAA',
    ], {
        A: 'irons_spellbooks:arcane_essence',
        B: 'ars_nouveau:magebloom_fiber'
    }).id('kubejs:irons_spellbooks/shaped/arcane_cloth')
})