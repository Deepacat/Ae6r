ServerEvents.recipes(e => {
    e.shaped('kubejs:amadron_survey_tools', [
        'ABA',
        'CDE',
        'AFA'
    ], {
        A: Item.of('pneumaticcraft:air_canister', '{"pneumaticcraft:air":30000}').weakNBT(),
        B: 'pneumaticcraft:reinforced_chest',
        C: Item.of('mekanismtools:steel_paxel', '{Damage:0}').weakNBT(),
        D: 'mekanism:cardboard_box',
        E: 'minecraft:compass',
        F: 'immersiveengineering:survey_tools'
    })
    e.remove({ id: 'kubejs:basic_circuit_package' })
    e.shaped('kubejs:basic_circuit_package', [
        'AA ',
        'BB ',
        'CCD'
    ], {
        A: 'kubejs:replaceme',
        B: 'kubejs:memory_basic_filled',
        C: 'pneumaticcraft:printed_circuit_board',
        D: 'mekanism:cardboard_box'
    }).id('kubejs:kubejs_basic_circuit_package')

    e.remove({ id: 'kubejs:basic_lenses_package' })
    e.shaped('kubejs:basic_lenses_package', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'kubejs:replaceme',
        B: 'occultism:spirit_attuned_gem',
        C: 'mekanism:cardboard_box'
    }).id('kubejs:kubejs_basic_lenses_package')

    e.remove({ id: 'kubejs:red_nether_brick' })
    e.shaped(Item.of('kubejs:red_nether_brick', 2), [
        'AB',
        'BA'
    ], {
        A: 'minecraft:nether_brick',
        B: 'minecraft:nether_wart'
    }).id('kubejs:kubejs_red_nether_brick')

    e.remove({ id: 'kubejs:basic_memory_package' })
    e.shaped('kubejs:basic_memory_package', [
        'AAA',
        'AAA',
        'BC '
    ], {
        A: { 0: 'rftoolscontrol:ram_chip', 1: 'kubejs:advanced_ram_chip' },
        B: 'mekanism:cardboard_box',
        C: 'pneumaticcraft:unassembled_pcb'
    }).id('kubejs:kubejs_basic_memory_package')

    e.remove({ id: 'kubejs:scented_stick' })
    e.shaped(Item.of('8x kubejs:scented_stick'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:stick',
        B: '#forge:honeycombs'
    }).id('kubejs:kubejs_scented_stick')

    e.remove({ id: 'kubejs:cpu_core_500' })
    e.shaped('kubejs:cpu_core_500_package', [
        'BAB',
        'ADA',
        'BCB'
    ], {
        A: '#forge:wires/lead',
        B: 'kubejs:replaceme',
        C: 'pneumaticcraft:unassembled_pcb',
        D: 'mekanism:cardboard_box'
    }).id('kubejs:kubejs_cpu_core_500')

    e.remove({ id: 'kubejs:cpu_core_1000' })
    e.shaped('kubejs:cpu_core_1000_package', [
        'BAB',
        'ADA',
        'BCB'
    ], {
        A: '#forge:wires/copper',
        B: 'kubejs:replaceme',
        C: 'pneumaticcraft:unassembled_pcb',
        D: 'mekanism:cardboard_box'
    }).id('kubejs:kubejs_cpu_core_1000')

    e.remove({ id: 'kubejs:cpu_core_2000' })
    e.shaped('kubejs:cpu_core_2000_package', [
        'BAB',
        'ADA',
        'BCB'
    ], {
        A: '#forge:wires/electrum',
        B: 'kubejs:replaceme',
        C: 'pneumaticcraft:unassembled_pcb',
        D: 'mekanism:cardboard_box'
    }).id('kubejs:kubejs_cpu_core_2000')

    e.remove({ id: 'kubejs:mekasuit_helmet' })
    e.shaped('kubejs:mekasuit_helmet_package', [
        'AAA',
        'BCD',
        'EFF'
    ], {
        A: 'mekanism:hdpe_sheet',
        B: 'rftoolsbuilder:shield_block1',
        C: Item.of('kubejs:replaceme').weakNBT(),
        D: 'mekanism:basic_induction_cell',
        E: 'mekanism:cardboard_box',
        F: '#forge:circuits/elite'
    }).id('kubejs:kubejs_mekasuit_helmet')

    e.remove({ id: 'kubejs:mekasuit_bodyarmor' })
    e.shaped('kubejs:mekasuit_bodyarmor_package', [
        'AAA',
        'BCD',
        'EFF'
    ], {
        A: 'mekanism:hdpe_sheet',
        B: 'rftoolsbuilder:shield_block1',
        C: Item.of('kubejs:replaceme').weakNBT(),
        D: 'mekanism:basic_induction_cell',
        E: 'mekanism:cardboard_box',
        F: '#forge:circuits/elite'
    }).id('kubejs:kubejs_mekasuit_bodyarmor')

    e.remove({ id: 'kubejs:mekasuit_pants' })
    e.shaped('kubejs:mekasuit_pants_package', [
        'AAA',
        'BCD',
        'EFF'
    ], {
        A: 'mekanism:hdpe_sheet',
        B: 'rftoolsbuilder:shield_block1',
        C: Item.of('kubejs:replaceme').weakNBT(),
        D: 'mekanism:basic_induction_cell',
        E: 'mekanism:cardboard_box',
        F: '#forge:circuits/elite'
    }).id('kubejs:kubejs_mekasuit_pants')

    e.remove({ id: 'kubejs:mekasuit_boots' })
    e.shaped('kubejs:mekasuit_boots_package', [
        'AAA',
        'BCD',
        'EFF'
    ], {
        A: 'mekanism:hdpe_sheet',
        B: 'rftoolsbuilder:shield_block1',
        C: Item.of('kubejs:replaceme').weakNBT(),
        D: 'mekanism:basic_induction_cell',
        E: 'mekanism:cardboard_box',
        F: '#forge:circuits/elite'
    }).id('kubejs:kubejs_mekasuit_boots')

    e.remove({ id: 'kubejs:imaharas_indelible_electrodes' })
    e.shaped('kubejs:imaharas_indelible_electrodes', [
        'AAA',
        ' B '
    ], {
        A: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0,Unbreakable:1}'),
        B: 'mekanism:cardboard_box'
    }).id('kubejs:kubejs_imaharas_indelible_electrodes')

    e.remove({ id: 'kubejs:bright_constellation_box' })
    e.shaped('kubejs:bright_constellation_box', [
        'ABC',
        'DEF'
    ], {
        A: 'mekanism:cardboard_box',
        B: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:aevitas"}}').weakNBT(),
        C: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:armara"}}').weakNBT(),
        D: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:discidia"}}').weakNBT(),
        E: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:evorsio"}}').weakNBT(),
        F: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:vicio"}}').weakNBT()
    }).id('kubejs:kubejs_bright_constellation_box')

    e.remove({ id: 'kubejs:dim_constellation_box' })
    e.shaped('kubejs:dim_constellation_box', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'mekanism:cardboard_box',
        B: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"naturesstarlight:naritis"}}').weakNBT(),
        C: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:octans"}}').weakNBT(),
        D: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:horologium"}}').weakNBT(),
        E: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:lucerna"}}').weakNBT(),
        F: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:mineralis"}}').weakNBT(),
        G: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:bootes"}}').weakNBT(),
        H: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:fornax"}}').weakNBT(),
        I: Item.of('kubejs:replaceme', '{astralsorcery:{constellationName:"astralsorcery:pelotrio"}}').weakNBT()
    }).id('kubejs:kubejs/shaped/_dim_constellation_box')

    e.shaped('kubejs:marl', [
        'AB',
        'BA'
    ], {
        A: 'aether:quicksoil',
        B: 'minecraft:clay'
    }).id('kubejs:kubejs/shaped/marl')

    e.shaped('kubejs:aspectus_shard_block', [
        'AAA',
        'BBB',
        'AAA'
    ], {
        A: 'aether_redux:gravitite_ingot',
        B: '#kubejs:aspectus_shards'
    }).id('kubejs:kubejs/shaped/aspectus_shard_block')
})
