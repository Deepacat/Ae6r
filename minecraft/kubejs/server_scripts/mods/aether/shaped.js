ServerEvents.recipes(e => {
    e.remove({ output: 'aether:altar' })
    e.shaped('aether:altar', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: '#forge:ingots/dawnstone',
        B: '#forge:ingots/sunmetal',
        C: 'aether_redux:sentry_chip',
        D: 'minecraft:conduit',
        E: 'deep_aether:chiseled_holystone',
    })

    e.remove({ output: 'aether:freezer' })
    e.shaped('aether:freezer', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: 'aether_redux:sentry_chip',
        B: '#forge:ingots/froststeel',
        C: 'aether:icestone',
        D: 'thermal:machine_chiller',
        E: 'aether:skyroot_planks',
    })

    // e.remove({ output: 'aether:combiner' })
    // e.shaped('aether:combiner', [
    //     'ABA',
    //     'CDC',
    //     'EEE'
    // ], {
    //     A: '#forge:ingots/dawnstone',
    //     B: '#forge:ingots/sunmetal',
    //     C: 'aether_redux:sentry_chip',
    //     D: 'minecraft:conduit',
    //     E: 'deep_aether:chiseled_holystone',
    // })
})