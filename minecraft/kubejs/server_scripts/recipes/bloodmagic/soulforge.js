ServerEvents.recipes(e => {
    e.remove({ id: 'bloodmagic:soulforge/demon_crystallizer' })
    e.recipes.bloodmagic.soulforge('bloodmagic:demoncrystallizer', [
        'bloodmagic:soulforge',
        '#forge:ingots/iesnium',
        'occultism:spirit_attuned_crystal',
        'glassential:glass_ghostly']
    ).minimumDrain(500.0)
        .drain(100.0)
        .id('kubejs:soulforge/demon_crystallizer')

    e.remove({ id: 'bloodmagic:soulforge/demon_crucible' })
    e.recipes.bloodmagic.soulforge('bloodmagic:demoncrucible', [
        'bloodmagic:soulforge',
        '#forge:ingots/iesnium',
        'eidolon:crimson_essence',
        'occultism:spirit_attuned_gem']
    ).minimumDrain(400.0)
        .drain(100.0)
        .id('kubejs:soulforge/demon_crucible')

    e.remove({ id: 'bloodmagic:soulforge/pettytartaricgem' })
    e.recipes.bloodmagic.soulforge('bloodmagic:soulgempetty', [
        'eidolon:soul_shard',
        'naturesaura:infused_iron',
        'glassential:glass_ghostly',
        'minecraft:conduit']
    ).minimumDrain(1.0)
        .drain(1.0)
        .id('kubejs:soulforge/pettytartaricgem')

    e.remove({ id: 'bloodmagic:soulforge/lessertartaricgem' })
    e.recipes.bloodmagic.soulforge('bloodmagic:soulgemlesser', [
        'bloodmagic:soulgempetty',
        '#forge:ingots/forgotten_metal',
        'glassential:glass_ethereal',
        'quark:diamond_heart']
    ).minimumDrain(60.0)
        .drain(20.0)
        .id('kubejs:soulforge/lessertartaricgem')

    e.remove({ id: 'bloodmagic:soulforge/commontartaricgem' })
    e.recipes.bloodmagic.soulforge('bloodmagic:soulgemcommon', [
        'bloodmagic:soulgemlesser',
        '#forge:ingots/enderium',
        '#botania:runes/helheim',
        'bloodmagic:infusedslate']
    ).minimumDrain(240.0)
        .drain(50.0)
        .id('kubejs:soulforge/commontartaricgem')

    e.remove({ id: 'bloodmagic:soulforge/greatertartaricgem' })
    e.recipes.bloodmagic.soulforge('bloodmagic:soulgemgreater', [
        'bloodmagic:soulgemcommon',
        'bloodmagic:demonslate',
        '#forge:ingots/gaia_spirit',
        '#bloodmagic:crystals/demon']
    ).minimumDrain(1000.0)
        .drain(100.0)
        .id('kubejs:soulforge/greatertartaricgem')

    e.remove({ id: 'bloodmagic:soulforge/arcane_gold_ingot' })
    e.recipes.bloodmagic.soulforge('eidolon:arcane_gold_block', [
        '#forge:storage_blocks/gold',
        'eidolon:crimson_essence']
    ).minimumDrain(32.0)
        .drain(16.0)
        .id('kubejs:soulforge/arcane_gold_ingot')

    e.remove({ id: 'occultism:crafting/iesnium_pickaxe' })
    e.recipes.bloodmagic.soulforge('occultism:iesnium_pickaxe', [
        'bloodmagic:rawdemoncrystal',
        Item.of('bloodmagic:soulpickaxe', '{Damage:0}').weakNBT(),
        '#forge:storage_blocks/iesnium']
    ).minimumDrain(4000.0)
        .drain(2048.0)
        .id('occultism:crafting/iesnium_pickaxe')

    e.remove({ id: 'occultism:crafting/storage_controller' })
    e.recipes.bloodmagic.soulforge('occultism:storage_controller', [
        'occultism:dimensional_matrix',
        'occultism:storage_controller_base']
    ).minimumDrain(32.0)
        .drain(16.0)
        .id('occultism:crafting/storage_controller')

    e.remove({ id: 'bloodmagic:soulforge/primitive_crystalline_resonator' })
    e.recipes.bloodmagic.soulforge('bloodmagic:primitive_crystalline_resonator', [
        'bloodmagic:dungeon_stone',
        '#forge:ingots/tainted_gold',
        '#forge:gems/nitro']
    ).minimumDrain(1200.0)
        .drain(200.0)
        .id('kubejs:soulforge/primitive_crystalline_resonator')

    e.remove({ id: 'bloodmagic:soulforge/raw_catalyst' })
    e.recipes.bloodmagic.soulforge('bloodmagic:rawcatalyst', [
        'bloodmagic:tauoil',
        /*'atum:anputs_fingers_spores'*/ 'kubejs:replaceme',
        'eidolon:ender_calx',
        'quark:white_corundum_cluster']
    ).minimumDrain(400.0)
        .drain(20.0)
        .id('kubejs:soulforge/raw_catalyst')

    e.remove({ id: 'bloodmagic:soulforge/corrosive_catalyst' })
    e.recipes.bloodmagic.soulforge('bloodmagic:corrosivecatalyst', [
        'bloodmagic:tauoil',
        /*'atum:anputs_fingers_spores'*/ 'kubejs:replaceme',
        'eidolon:ender_calx',
        'quark:green_corundum_cluster']
    ).minimumDrain(400.0)
        .drain(20.0)
        .id('kubejs:soulforge/corrosive_catalyst')

    e.remove({ id: 'bloodmagic:soulforge/vengeful_catalyst' })
    e.recipes.bloodmagic.soulforge('bloodmagic:vengefulcatalyst', [
        'bloodmagic:tauoil',
        /*'atum:anputs_fingers_spores'*/ 'kubejs:replaceme',
        'eidolon:ender_calx',
        'quark:red_corundum_cluster']
    ).minimumDrain(400.0)
        .drain(20.0)
        .id('kubejs:soulforge/vengeful_catalyst')

    e.remove({ id: 'bloodmagic:soulforge/destructive_catalyst' })
    e.recipes.bloodmagic.soulforge('bloodmagic:destructivecatalyst', [
        'bloodmagic:tauoil',
        /*'atum:anputs_fingers_spores'*/ 'kubejs:replaceme',
        'eidolon:ender_calx',
        'quark:yellow_corundum_cluster']
    ).minimumDrain(400.0)
        .drain(20.0)
        .id('kubejs:soulforge/destructive_catalyst')

    e.remove({ id: 'bloodmagic:soulforge/steadfast_catalyst' })
    e.recipes.bloodmagic.soulforge('bloodmagic:steadfastcatalyst', [
        'bloodmagic:tauoil',
        /*'atum:anputs_fingers_spores'*/ 'kubejs:replaceme',
        'eidolon:ender_calx',
        'quark:yellow_corundum_cluster']
    ).minimumDrain(400.0)
        .drain(20.0)
        .id('kubejs:soulforge/steadfast_catalyst')
})