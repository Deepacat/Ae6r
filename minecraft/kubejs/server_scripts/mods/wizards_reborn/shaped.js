ServerEvents.recipes(e => {
    e.remove({ output: 'wizards_reborn:arcane_wand' })
    e.shaped('wizards_reborn:arcane_wand', [
        ' AB',
        ' CA',
        'D  '
    ], {
        A: '#forge:ingots/arcane_gold',
        B: ['minecraft:conduit', 'kubejs:cognitio_aspectus_shard'],
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
        C: 'wizards_reborn:arcane_wand',
        D: 'kubejs:treated_arcane_handle'
    }).id('kubejs:wizards_reborn/shaped/wissen_wand')

    e.remove({ output: 'wizards_reborn:arcane_workbench' })
    e.shaped('wizards_reborn:arcane_workbench', [
        'AAA',
        'BCB',
        'DED',
    ], {
        A: 'thermal:red_rockwool',
        B: 'irons_spellbooks:arcane_salvage',
        C: '#forge:storage_blocks/arcane_gold',
        D: 'naturesaura:ancient_slab',
        E: 'naturesaura:ancient_planks'
    }).id('kubejs:wizards_reborn/shaped/arcane_workbench')
})