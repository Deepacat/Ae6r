ServerEvents.recipes(e => {
    e.shapeless(Item.of('prettypipes:crafting_terminal'), [
        'prettypipes:item_terminal',
        'prettypipes:low_crafting_module',
        'create:super_glue',
        'minecraft:string',
        'minecraft:string'
    ]).id('kubejs:prettypipes/shapeless/crafting_terminal')

    const moduletype = [
        'prettypipes:low_extraction_module',
        'prettypipes:medium_extraction_module',
        'prettypipes:high_extraction_module',
        'prettypipes:low_filter_module',
        'prettypipes:medium_filter_module',
        'prettypipes:high_filter_module',
        'prettypipes:low_retrieval_module',
        'prettypipes:medium_retrieval_module',
        'prettypipes:high_retrieval_module',
        'prettypipes:low_crafting_module',
        'prettypipes:medium_crafting_module',
        'prettypipes:high_crafting_module',
        'prettypipes:stack_size_module',
        'prettypipes:filter_increase_modifier',
        'ppfluids:low_fluid_extraction_module',
        'ppfluids:medium_fluid_extraction_module',
        'ppfluids:high_fluid_extraction_module',
        'ppfluids:low_fluid_filter_module',
        'ppfluids:medium_fluid_filter_module',
        'ppfluids:high_fluid_filter_module',
        'ppfluids:low_fluid_retrieval_module',
        'ppfluids:medium_fluid_retrieval_module',
        'ppfluids:high_fluid_retrieval_module'
    ];
    for (const module of moduletype) {
        e.shapeless(module, [Item.of(module).weakNBT()]).id(`kubejs:prettypipes/shapeless/${module.split(':')[1]}_clearnbt`)
    }
})