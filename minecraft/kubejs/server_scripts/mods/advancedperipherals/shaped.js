ServerEvents.recipes(e => {
    e.remove({ id: 'advancedperipherals:peripheral_casing' })
    e.shaped('advancedperipherals:peripheral_casing', [
        'CDC',
        'BAB',
        'CEC'
    ], {
        A: 'rftoolsbase:machine_frame',
        B: 'create:redstone_link',
        C: '#forge:sheetmetals/iron',
        D: 'integrateddynamics:part_world_reader',
        E: 'integratedtunnels:part_player_simulator'
    }).id('kubejs:advancedperipherals_peripheral_casing')

    e.remove({ id: 'advancedperipherals:chunk_controller' })
    e.shaped('advancedperipherals:chunk_controller', [
        'BCB',
        'DAE',
        'BCB'
    ], {
        A: 'advancedperipherals:peripheral_casing',
        B: 'dustrial_decor:anchor',
        C: '#forge:storage_blocks/redstone',
        D: 'minecraft:respawn_anchor',
        E: 'mekanism:upgrade_anchor'
    }).id('kubejs:advancedperipherals_chunk_controller')

    e.remove({ id: 'advancedperipherals:weak_automata_core' })
    e.shaped('advancedperipherals:weak_automata_core', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:gears/gold',
        B: 'advancedperipherals:peripheral_casing',
        C: 'tconstruct:soul_glass',
        D: 'quark:soul_bead',
        E: 'modularrouters:player_module'
    }).id('kubejs:advancedperipherals_weak_automata_core')

    e.remove({ id: 'advancedperipherals:end_automata_core' })
    e.shaped('advancedperipherals:end_automata_core', [
        'B B',
        ' A ',
        'B B'
    ], {
        A: 'advancedperipherals:weak_automata_core',
        B: Item.of('pneumaticcraft:spawner_core', '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:enderman":100}}')
    }).id('kubejs:advancedperipherals_end_automata_core')

    e.remove({ id: 'advancedperipherals:husbandry_automata_core' })
    e.shaped('advancedperipherals:husbandry_automata_core', [
        'B C',
        ' A ',
        'D E'
    ], {
        A: 'advancedperipherals:weak_automata_core',
        B: Item.of('pneumaticcraft:spawner_core', '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:cow":100}}'),
        C: Item.of('pneumaticcraft:spawner_core', '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:sheep":100}}'),
        D: Item.of('pneumaticcraft:spawner_core', '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:pig":100}}'),
        E: Item.of('pneumaticcraft:spawner_core', '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:chicken":100}}')
    }).id('kubejs:advancedperipherals_husbandry_automata_core')

    e.remove({ id: 'advancedperipherals:overpowered_weak_automata_core' })
    e.shaped('advancedperipherals:overpowered_weak_automata_core', [
        ' B ',
        'CAD',
        ' E '
    ], {
        A: 'advancedperipherals:weak_automata_core',
        B: 'bloodmagic:weakbloodshard',
        C: 'eidolon:shadow_gem',
        D: 'botania:dragonstone',
        E: 'minecraft:nether_star'
    }).id('kubejs:advancedperipherals_overpowered_weak_automata_core')

    e.remove({ id: 'advancedperipherals:overpowered_husbandry_automata_core' })
    e.shaped('advancedperipherals:overpowered_husbandry_automata_core', [
        ' B ',
        'CAD',
        ' E '
    ], {
        A: 'advancedperipherals:husbandry_automata_core',
        B: 'bloodmagic:weakbloodshard',
        C: 'eidolon:shadow_gem',
        D: 'botania:dragonstone',
        E: 'minecraft:nether_star'
    }).id('kubejs:advancedperipherals_overpowered_husbandry_automata_core')

    e.remove({ id: 'advancedperipherals:overpowered_end_automata_core' })
    e.shaped('advancedperipherals:overpowered_end_automata_core', [
        ' B ',
        'CAD',
        ' E '
    ], {
        A: 'advancedperipherals:end_automata_core',
        B: 'bloodmagic:weakbloodshard',
        C: 'eidolon:shadow_gem',
        D: 'botania:dragonstone',
        E: 'minecraft:nether_star'
    }).id('kubejs:advancedperipherals_overpowered_end_automata_core')
})