ServerEvents.recipes(e => {
    e.shaped('summoningrituals:altar', [
        'ABC',
        'DED',
        'FGF'
    ], {
        A: 'eidolon:candlestick',
        B: 'thermal:red_rockwool',
        C: 'minecraft:wither_skeleton_skull',
        D: 'eidolon:gold_inlay',
        E: 'kubejs:praecantatio_aspectus_shard',
        F: 'wizards_reborn:arcane_wood_slab',
        G: 'wizards_reborn:arcane_wood_planks_baulk'
    }).id('kubejs:summoningrituals/altar')
})