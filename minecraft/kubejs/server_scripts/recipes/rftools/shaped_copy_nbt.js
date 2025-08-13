ServerEvents.recipes(e => {
    function rftoolsShapedCopyNbt(result, pattern, key) {
        e.custom({
            type: 'mcjtylib:copy_nbt',
            result: makeJsonIngredients([result])[0],
            pattern: pattern,
            key: key
        }).id(`kubejs:shaped/${result.replace(':', '_')}`)
    }

    rftoolsShapedCopyNbt('rftoolsstorage:storage_module1', [
        'AEA',
        'CDC',
        'ABA'
    ], {
        A: { tag: 'thermal:glass/hardened' },
        B: { item: 'sophisticatedstorage:iron_chest' },
        C: { item: 'create:pulp' },
        D: { item: 'rftoolsstorage:storage_module0' },
        E: { tag: 'forge:gears/osmium' }
    })
    rftoolsShapedCopyNbt('rftoolsstorage:storage_module2', [
        'AEA',
        'CDC',
        'ABA'
    ], {
        A: { tag: 'thermal:glass/hardened' },
        B: { item: 'sophisticatedstorage:gold_chest' },
        C: { item: 'create:pulp' },
        D: { item: 'rftoolsstorage:storage_module1' },
        E: { tag: 'forge:gears/osmium' }
    })
    rftoolsShapedCopyNbt('rftoolsstorage:storage_module3', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: { tag: 'thermal:glass/hardened' },
        B: { item: 'sophisticatedstorage:diamond_chest' },
        C: { item: 'create:pulp' },
        D: { item: 'rftoolsstorage:storage_module2' }
    })
    rftoolsShapedCopyNbt('rftoolsutility:advanced_charged_porter', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: { item: 'powah:capacitor_nitro' },
        B: { item: 'kubejs:dimensional_storage_crystal' },
        C: { item: 'rftoolsutility:charged_porter' }
    })
})