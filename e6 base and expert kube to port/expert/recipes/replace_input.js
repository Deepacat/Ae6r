ServerEvents.recipes(event => {
    const recipes = [
        {
            filter: { id: 'create:crafting/kinetics/mechanical_piston' },
            toReplace: '#minecraft:planks',
            replaceWith: ['minecraft:piston', 'minecraft:sticky_piston']
        },
        // {
        //     filter: { id: 'occultism:crafting/goggles' },
        //     toReplace: 'minecraft:leather',
        //     replaceWith: /*'betterendforge:'*/ 'kubejs:replaceme'
        // },
        {
            filter: { id: 'glassential:glass_ghostly' },
            toReplace: 'minecraft:ender_pearl',
            replaceWith: Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:nether' })
        },
        {
            filter: { id: /*'atum:'*/ 'kubejs:replaceme' },
            toReplace: '#forge:ingots/gold',
            replaceWith: '#forge:nuggets/nebu'
        },
        {
            filter: { id: 'occultism:crafting/storage_remote_inert' },
            toReplace: '#forge:ingots/gold',
            replaceWith: '#forge:ingots/nebu'
        },
        {
            filter: { id: 'occultism:crafting/storage_remote_inert' },
            toReplace: 'minecraft:stone_button',
            replaceWith: '#forge:nuggets/silver'
        },
        {
            filter: { id: '/wilden_summon/' },
            toReplace: 'minecraft:lapis_block',
            replaceWith: 'meetyourfight:velvet_fortune'
        },
        {
            filter: { mod: 'powah' },
            toReplace: 'powah:capacitor_basic',
            replaceWith: 'powah:capacitor_basic_large'
        },
        {
            filter: { id: '/pressure_chamber_glass/' },
            toReplace: '#forge:glass',
            replaceWith: '#thermal:glass/hardened'
        },
        {
            filter: { mod: 'storagedrawers' },
            toReplace: '#forge:chests/wooden',
            replaceWith: 'farmersdelight:basket'
        },
        {
            filter: { mod: 'storagedrawers' },
            toReplace: '#forge:rods/wooden',
            replaceWith: 'kubejs:scented_stick'
        },
        {
            filter: { mod: 'framedcompactdrawers' },
            toReplace: '#forge:chests/wooden',
            replaceWith: 'farmersdelight:basket'
        },
        {
            filter: { mod: 'framedcompactdrawers', id: '/framed_half/' },
            toReplace: '#minecraft:wooden_slabs',
            replaceWith: 'framedblocks:framed_slab'
        },
        {
            filter: { mod: 'framedcompactdrawers', id: '/framed_half/' },
            toReplace: '#forge:rods/wooden',
            replaceWith: 'framedblocks:framed_slab'
        },
        {
            filter: { mod: 'framedcompactdrawers', id: '/framed_full/' },
            toReplace: '#forge:rods/wooden',
            replaceWith: 'framedblocks:framed_cube'
        },
        {
            filter: { mod: 'framedcompactdrawers', id: '/framed_trim/' },
            toReplace: '#minecraft:planks',
            replaceWith: 'framedblocks:framed_cube'
        },
        {
            filter: { mod: 'framedcompactdrawers', id: '/framed_trim/' },
            toReplace: '#forge:rods/wooden',
            replaceWith: 'kubejs:scented_stick'
        },
        {
            filter: { mod: 'framedcompactdrawers' },
            toReplace: '#forge:rods/wooden',
            replaceWith: 'framedblocks:framed_cube'
        },
        {
            filter: { id: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
            toReplace: 'minecraft:ender_pearl',
            replaceWith: 'naturesaura:token_joy'
        },
        // {
        //     filter: { id: 'botania:abstruse_platform' },
        //     toReplace: 'botania:mana_pearl',
        //     replaceWith: /*'atum:'*/ 'kubejs:replaceme'
        // },
        // {
        //     filter: { id: 'botania:spectral_platform' },
        //     toReplace: 'botania:pixie_dust',
        //     replaceWith: /*'atum:'*/ 'kubejs:replaceme'
        // },
        {
            filter: { id: 'integratednbt:nbt_extractor' },
            toReplace: 'integrateddynamics:logic_programmer',
            replaceWith: 'integrateddynamics:variable_transformer_input'
        },
        {
            filter: { id: 'integratednbt:nbt_extractor_remote' },
            toReplace: 'integrateddynamics:logic_programmer',
            replaceWith: 'integrateddynamics:variable_transformer_input'
        },
        {
            filter: { mod: 'littlelogistics' },
            toReplace: '#forge:stone',
            replaceWith: 'minecraft:gray_concrete'
        },
        {
            filter: { mod: 'modularrouters' },
            toReplace: 'minecraft:ender_pearl',
            replaceWith: 'botania:corporea_spark'
        }
    ]

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith)
    })
})
