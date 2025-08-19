ServerEvents.recipes(e => {
    e.remove({ id: 'sophisticatedbackpacks:upgrade_base' })
    e.shaped('sophisticatedbackpacks:upgrade_base', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'kubejs:scented_stick',
        B: 'farmersdelight:canvas'
    }).id('kubejs:sophisticatedbackpacks_upgrade_base')

    e.remove({ id: 'sophisticatedbackpacks:backpack' })
    e.shaped('sophisticatedbackpacks:backpack', [
        'ABA',
        'ACA',
        'BBB'
    ], {
        A: 'kubejs:leather_stripe',
        B: 'farmersdelight:canvas',
        C: 'farmersdelight:basket'
    }).id('kubejs:sophisticatedbackpacks_backpack')

    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_1' })
    e.shaped('sophisticatedbackpacks:stack_upgrade_tier_1', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:ingots/pig_iron',
        B: 'immersiveengineering:hemp_fabric',
        C: '#sophisticatedbackpacks:upgrades/base'
    }).id('kubejs:sophisticatedbackpacks_stack_upgrade_tier_1')

    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_2' })
    e.shaped('sophisticatedbackpacks:stack_upgrade_tier_2', [
        'ADA',
        'B B',
        'ADA'
    ], {
        A: '#forge:storage_blocks/rose_gold',
        B: 'thermal:hazmat_fabric',
        D: '#sophisticatedbackpacks:upgrades/stack_tier_1'
    }).id('kubejs:sophisticatedbackpacks_stack_upgrade_tier_2')

    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_3' })
    e.shaped('sophisticatedbackpacks:stack_upgrade_tier_3', [
        'ADA',
        'B B',
        'ADA'
    ], {
        A: '#forge:storage_blocks/enderium',
        B: 'thermal:diving_fabric',
        D: '#sophisticatedbackpacks:upgrades/stack_tier_2'
    }).id('kubejs:sophisticatedbackpacks_stack_upgrade_tier_3')

    e.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_4' })
    e.shaped('sophisticatedbackpacks:stack_upgrade_tier_4', [
        'ADA',
        'B B',
        'ADA'
    ], {
        A: '#forge:storage_blocks/aeternium',
        B: 'botania:manaweave_cloth',
        D: '#sophisticatedbackpacks:upgrades/stack_tier_3'
    }).id('kubejs:sophisticatedbackpacks_stack_upgrade_tier_4')

    e.remove({ id: 'sophisticatedbackpacks:crafting_upgrade' })
    e.shaped('sophisticatedbackpacks:crafting_upgrade', [
        'A A',
        'BDB',
        'C C'
    ], {
        A: 'create:precision_mechanism',
        B: 'create:crafting_blueprint',
        C: 'minecraft:barrel',
        D: '#sophisticatedbackpacks:upgrades/base'
    }).id('kubejs:sophisticatedbackpacks_crafting_upgrade')

    e.remove({ id: 'sophisticatedbackpacks:pickup_upgrade' })
    e.shaped('sophisticatedbackpacks:pickup_upgrade', [
        ' A ',
        'BDB',
        ' C '
    ], {
        A: '#forge:slimeballs',
        B: 'thermal:redstone_servo',
        C: 'aquaculture:diamond_fishing_rod',
        D: '#sophisticatedbackpacks:upgrades/base'
    }).id('kubejs:sophisticatedbackpacks_pickup_upgrade')

    e.remove({ id: 'sophisticatedbackpacks:magnet_upgrade' })
    e.shaped('sophisticatedbackpacks:magnet_upgrade', [
        'BAA',
        'AC ',
        'BAA'
    ], {
        A: '#forge:ingots/iron',
        B: 'bloodmagic:reagentmagnetism',
        C: '#sophisticatedbackpacks:upgrades/pickup'
    }).id('kubejs:sophisticatedbackpacks_magnet_upgrade')

    e.remove({ id: 'sophisticatedbackpacks:advanced_magnet_upgrade' })
    e.shaped('sophisticatedbackpacks:advanced_magnet_upgrade', [
        'BAA',
        'AC ',
        'BAA'
    ], {
        A: '#forge:ingots/iron',
        B: 'bloodmagic:reagentmagnetism',
        C: '#sophisticatedbackpacks:upgrades/advanced_pickup'
    }).id('kubejs:sophisticatedbackpacks_advanced_magnet_upgrade')

    e.remove({ id: 'sophisticatedbackpacks:advanced_magnet_upgrade_from_basic' })
    e.shaped('sophisticatedbackpacks:advanced_magnet_upgrade', [
        ' A ',
        'BCB',
        'DDD'
    ], {
        A: 'naturesaura:hopper_upgrade',
        B: '#forge:gears/lumium',
        C: '#sophisticatedbackpacks:upgrades/magnet',
        D: 'create:electron_tube'
    }).id('kubejs:sophisticatedbackpacks_advanced_magnet_upgrade_from_basic')

    e.remove({ id: 'sophisticatedbackpacks:advanced_pickup_upgrade' })
    e.shaped('sophisticatedbackpacks:advanced_pickup_upgrade', [
        ' A ',
        'BCB',
        'DDD'
    ], {
        A: 'naturesaura:hopper_upgrade',
        B: '#forge:gears/lumium',
        C: '#sophisticatedbackpacks:upgrades/pickup',
        D: 'create:electron_tube'
    }).id('kubejs:sophisticatedbackpacks_advanced_pickup_upgrade')

    e.remove({ id: 'sophisticatedbackpacks:advanced_void_upgrade' })
    e.shaped('sophisticatedbackpacks:advanced_void_upgrade', [
        'EAE',
        'BCB',
        'DDD'
    ], {
        A: '#sophisticatedbackpacks:upgrades/advanced_filter',
        B: '#forge:gears/lumium',
        C: '#sophisticatedbackpacks:upgrades/void',
        D: 'create:electron_tube',
        E: 'create:precision_mechanism'
    }).id('kubejs:sophisticatedbackpacks_advanced_void_upgrade')

    e.remove({ id: 'sophisticatedbackpacks:tank_upgrade' })
    e.shaped('sophisticatedbackpacks:tank_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:fluid_pipe',
        B: 'create:fluid_tank',
        C: '#sophisticatedbackpacks:upgrades/base'
    }).id('kubejs:sophisticatedbackpacks_tank_upgrade')

    e.remove({ id: 'sophisticatedbackpacks:battery_upgrade' })
    e.shaped('sophisticatedbackpacks:battery_upgrade', [
        ' A ',
        'BCB',
        ' B '
    ], {
        A: 'thermal:flux_capacitor',
        B: 'thermal:rf_coil',
        C: '#sophisticatedbackpacks:upgrades/base'
    }).id('kubejs:sophisticatedbackpacks_battery_upgrade')

    e.remove({ id: 'sophisticatedbackpacks:everlasting_upgrade' })
    e.shaped('sophisticatedbackpacks:everlasting_upgrade', [
        'ABA',
        'CDE',
        'AFA'
    ], {
        A: 'quark:bottled_cloud',
        B: Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 1),
        C: Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 1),
        D: '#sophisticatedbackpacks:upgrades/base',
        E: Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 1),
        F: Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 1)
    }).id('kubejs:sophisticatedbackpacks_everlasting_upgrade')
})