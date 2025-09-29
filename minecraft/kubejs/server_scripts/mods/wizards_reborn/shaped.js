ServerEvents.recipes(e => {
    e.remove({ output: 'wizards_reborn:arcane_wand' })
    e.shaped('wizards_reborn:arcane_wand', [
        ' AB',
        ' CA',
        'D  '
    ], {
        A: '#forge:ingots/arcane_gold',
        B: '#kubejs:aspectus_shards',
        C: 'wizards_reborn:arcane_wood_branch',
        D: '#forge:storage_blocks/arcane_gold'
    }).id('kubejs:wizards_reborn/shaped/arcane_wand')

    e.remove({ output: 'wizards_reborn:wissen_wand' })
    e.shaped('wizards_reborn:wissen_wand', [
        ' AB',
        ' CA',
        'D  '
    ], {
        A: 'irons_spellbooks:upgrade_orb',
        B: '#forge:storage_blocks/arcanum',
        C: 'wizards_reborn:arcane_wood_branch',
        D: '#forge:rods/silver'
    }).id('kubejs:wizards_reborn/shaped/wissen_wand')
})