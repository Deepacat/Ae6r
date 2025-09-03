ServerEvents.recipes(event => {

    const id_prefix = 'enigmatica:expert/mythicbotany/infusion/'
    const recipes = [
        {
            inputs: [
                Item.of(/*'resourcefulbees:'*/ 'kubejs:replaceme', {
                    Entity: /*'resourcefulbees:'*/ 'kubejs:replaceme',
                    BeeType: 'mana',
                    Color: '#4c97ff'
                })
                    .weakNBT()
                    .toJson(),
                { item: 'botania:mana_pearl' },
                { item: 'botania:mana_diamond' },
                { item: 'botania:quartz_mana' }
            ],
            output: Item.of(/*'resourcefulbees:'*/ 'kubejs:replaceme', {
                Entity: /*'resourcefulbees:'*/ 'kubejs:replaceme',
                BeeType: 'terrestrial',
                Color: '#5bf23d'
            }).toJson(),
            mana: 2000000,
            fromColor: parseInt('0xFFFFFF'),
            toColor: parseInt('0x00FF00'),
            id: 'mythicbotany:terrestrial_bee_spawn_egg_infusion'
        },
        {
            inputs: [
                { tag: 'forge:ingots/sky' },
                { item: 'botania:mana_pearl' },
                { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
                { item: 'botania:mana_diamond' },
                { tag: 'forge:ingots/iesnium' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 300000,
            fromColor: parseInt('0xFFFFFF'),
            toColor: parseInt('0x00FF00'),
            id: 'mythicbotany:mythicbotany_infusion/terrasteel_ingot_honeycomb'
        },
        {
            inputs: [
                { tag: 'forge:ingots/sky' },
                { item: 'botania:mana_pearl' },
                { tag: 'forge:ingots/manasteel' },
                { item: 'botania:mana_diamond' },
                { tag: 'forge:ingots/iesnium' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 500000,
            fromColor: parseInt('0xFFFFFF'),
            toColor: parseInt('0x00FF00'),
            id: 'mythicbotany:mythicbotany_infusion/terrasteel_ingot'
        },
        {
            inputs: [
                { tag: 'forge:ingots/nebu' },
                { item: 'botania:pixie_dust' },
                { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
                { item: 'botania:dragonstone' },
                { tag: 'forge:ingots/utherium' },
                { item: 'create:polished_rose_quartz' }
            ],
            output: { item: 'mythicbotany:alfsteel_ingot' },
            mana: 1500000,
            fromColor: parseInt('0xFF008D'),
            toColor: parseInt('0xFF9600'),
            id: `${id_prefix}alfsteel_ingot_comb`
        },
        {
            inputs: [
                { tag: 'forge:ingots/nebu' },
                { item: 'botania:pixie_dust' },
                { tag: 'forge:ingots/elementium' },
                { item: 'botania:dragonstone' },
                { tag: 'forge:ingots/utherium' },
                { item: 'create:polished_rose_quartz' }
            ],
            output: { item: 'mythicbotany:alfsteel_ingot' },
            mana: 2000000,
            fromColor: parseInt('0xFF008D'),
            toColor: parseInt('0xFF9600'),
            id: 'mythicbotany:mythicbotany_infusion/alfsteel_ingot'
        },
        {
            inputs: [
                { item: 'botania:forest_eye' },
                { item: 'naturesaura:token_euphoria' },
                { item: 'naturesaura:token_rage' },
                { item: /*'atum:'*/ 'kubejs:replaceme' },
                { item: 'naturesaura:token_grief' },
                { item: 'naturesaura:token_terror' }
            ],
            output: { item: 'naturesaura:generator_limit_remover' },
            mana: 2000000,
            fromColor: parseInt('0xFF9900'),
            toColor: parseInt('0x00FF1A'),
            id: `${id_prefix}generator_limit_remover`
        },
        {
            inputs: [
                { item: /*'betterendforge:'*/ 'kubejs:replaceme' },
                { item: 'botania:mana_pearl' },
                { tag: 'forge:ingots/sky' },
                { item: /*'betterendforge:'*/ 'kubejs:replaceme' },
                { tag: 'forge:gems/source_diamond' },
                { tag: 'forge:ingots/starmetal' }
            ],
            output: { item: 'kubejs:celestial_mycelium_filaments' },
            mana: 6000000,
            fromColor: parseInt('0xE6E9ED'),
            toColor: parseInt('0x7CB3FC'),
            id: `${id_prefix}celestial_mycelial_filaments`
        }
    ]

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'mythicbotany:infuser',
                group: 'infuser',
                ingredients: recipe.inputs,
                output: recipe.output,
                mana: recipe.mana,
                fromColor: recipe.fromColor,
                toColor: recipe.toColor
            })
            .id(recipe.id)
    })
})
