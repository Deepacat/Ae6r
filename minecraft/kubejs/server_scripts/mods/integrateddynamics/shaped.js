ServerEvents.recipes(e => {
    e.remove({ id: 'integrateddynamics:crafting/variable' })
    e.shaped(Item.of('integrateddynamics:variable', 24), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'integrateddynamics:crystalized_menril_chunk',
        B: 'pneumaticcraft:upgrade_matrix'
    }).id('kubejs:integrateddynamics_crafting/variable')

    e.remove({ id: 'integrateddynamics:crafting/variablestore' })
    e.shaped('integrateddynamics:variablestore', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'kubejs:replaceme',
        B: 'integrateddynamics:crystalized_menril_block',
        C: 'integrateddynamics:menril_wood',
        D: 'pneumaticcraft:smart_chest',
        E: 'pneumaticcraft:upgrade_matrix',
        F: 'kubejs:memory_advanced_filled'
    }).id('kubejs:integrateddynamics_crafting/variablestore')

    e.remove({ id: 'integrateddynamics:crafting/part_connector_mono_directional' })
    e.shaped('integrateddynamics:part_connector_mono_directional', [
        ' A ',
        'CDC',
        ' B '
    ], {
        A: 'integrateddynamics:variable_transformer_output',
        B: 'integrateddynamics:variable_transformer_input',
        C: 'integrateddynamics:cable',
        D: 'botania:corporea_spark'
    }).id('kubejs:integrateddynamics_crafting/part_connector_mono_directional')

    e.remove({ id: 'integrateddynamics:crafting/part_static_light_panel' })
    e.shaped('integrateddynamics:part_static_light_panel', [
        'AB',
        'CD',
        'AB'
    ], {
        A: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
        B: 'integrateddynamics:menril_wood',
        C: '#forge:plates/lumium',
        D: 'kubejs:replaceme'
    }).id('kubejs:integrateddynamics_crafting/part_static_light_panel')

    e.remove({ id: 'integrateddynamics:crafting/part_display_panel' })
    e.shaped('integrateddynamics:part_display_panel', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
        B: 'integrateddynamics:part_static_light_panel'
    }).id('kubejs:integrateddynamics_crafting/part_display_panel')
})
