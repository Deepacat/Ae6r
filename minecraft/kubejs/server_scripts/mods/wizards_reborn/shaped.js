ServerEvents.recipes(e => {
    e.remove({ output: 'wizards_reborn:wissen_wand' })
    e.shaped('wizards_reborn:wissen_wand', [
        ' AB',
        ' CD',
        'E  '
    ], {
        A: 'deep_aether:skyjade',
        B: '#forge:storage_blocks/arcanum',
        C: 'wizards_reborn:arcane_wood_branch',
        D: 'undergarden:utherium_crystal',
        E: '#forge:rods/silver'
    }).id('kubejs:wizards_reborn/shaped/wissen_wand')
})