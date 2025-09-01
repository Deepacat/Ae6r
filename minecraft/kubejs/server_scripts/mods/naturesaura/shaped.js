ServerEvents.recipes(e => {
    e.remove({ id: 'naturesaura:grated_chute' })
    e.shaped('naturesaura:grated_chute', [
        'A A',
        'ABA',
        ' A '
    ], {
        A: 'naturesaura:infused_iron',
        B: '#forge:chests'
    }).id('kubejs:naturesaura_grated_chute')

    e.remove({ id: 'naturesaura:offering_table' })
    e.shaped('naturesaura:offering_table', [
        'BAB',
        'CED',
        'EFE'
    ], {
        A: 'ars_nouveau:wilden_tribute',
        B: 'naturesaura:infused_stone',
        C: 'naturesaura:token_fear',
        D: 'naturesaura:token_sorrow',
        E: 'naturesaura:ancient_bark',
        F: 'minecraft:conduit'
    }).id('kubejs:naturesaura_offering_table')

    e.remove({ id: 'naturesaura:field_creator' })
    e.shaped(Item.of('naturesaura:field_creator', 2), [
        'AAA',
        'ACA',
        'ABA'
    ], {
        A: 'kubejs:replaceme',
        B: 'naturesaura:token_anger',
        C: 'botania:corporea_block'
    }).id('kubejs:naturesaura_field_creator')

    e.remove({ id: 'naturesaura:pickup_stopper' })
    e.shaped('naturesaura:pickup_stopper', [
        'CAC',
        'CBC',
        'CAC'
    ], {
        A: '#forge:ingots/infused_iron',
        B: '#forge:storage_blocks/lead',
        C: 'naturesaura:gold_brick'
    }).id('kubejs:naturesaura_pickup_stopper')

    e.remove({ id: 'naturesaura:hopper_upgrade' })
    e.shaped('naturesaura:hopper_upgrade', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        A: '#forge:ingots/infused_iron',
        B: '#forge:plates/lead',
        C: 'minecraft:lodestone'
    }).id('kubejs:naturesaura_hopper_upgrade')

    e.remove({ id: 'naturesaura:aura_cache' })
    e.shaped('naturesaura:aura_cache', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        A: '#forge:ingots/infused_iron',
        B: 'naturesaura:infused_stone',
        C: 'kubejs:replaceme'
    }).id('kubejs:naturesaura_aura_cache')

    e.remove({ id: 'naturesaura:animal_container' })
    e.shaped('naturesaura:animal_container', [
        'ABA',
        'CDC',
        'DDD'
    ], {
        A: '#resourcefulbees:resourceful_honeycomb',
        B: 'botania:forest_eye',
        C: '#forge:crops',
        D: 'naturesaura:infused_brick'
    }).id('kubejs:naturesaura_animal_container')

    e.remove({ id: 'naturesaura:aura_detector' })
    e.shaped('naturesaura:aura_detector', [
        'ADA',
        'DBD',
        'ACA'
    ], {
        A: 'naturesaura:infused_stone',
        B: 'botania:forest_eye',
        C: 'botania:redstone_root',
        D: '#forge:ingots/infused_iron'
    }).id('kubejs:naturesaura_aura_detector')

    e.remove({ id: 'naturesaura:placer' })
    e.shaped('naturesaura:placer', [
        'ACA',
        'ABA',
        'ACA'
    ], {
        A: 'naturesaura:gold_brick',
        B: 'botania:corporea_funnel',
        C: '#forge:ingots/infused_iron'
    }).id('kubejs:naturesaura_placer')

    e.remove({ id: 'naturesaura:spring' })
    e.shaped('naturesaura:spring', [
        'ACA',
        'ABA',
        'AAA'
    ], {
        A: '#upgrade_aquatic:coralstone/infused',
        B: Item.of('minecraft:water_bucket', '{Enchantments:[{lvl:1s,id:"minecraft:infinity"}],display:{Name:\'{"text":"#MLG-YOLO"}\'}}').weakNBT(),
        C: 'naturesaura:token_euphoria'
    }).id('kubejs:naturesaura_spring')

    e.remove({ id: 'naturesaura:netherite_finder' })
    e.shaped('naturesaura:netherite_finder', [
        ' BA',
        ' DC',
        'D  '
    ], {
        A: 'occultism:spirit_attuned_gem',
        B: 'minecraft:warped_roots',
        C: 'minecraft:crimson_roots',
        D: 'kubejs:replaceme'
    }).id('kubejs:naturesaura_netherite_finder')
})
