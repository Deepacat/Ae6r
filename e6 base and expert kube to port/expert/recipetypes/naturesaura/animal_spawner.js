ServerEvents.recipes(event => {


    const id_prefix = 'enigmatica:base/naturesaura/animal_spawner/'
    const recipes = [
        {
            inputs: [
                'naturesaura:birth_spirit',
                'quark:bottled_cloud',
                /*'resourcefulbees:'*/ 'kubejs:replaceme',
                'minecraft:sand'
            ],
            entity: 'alexsmobs:guster',
            aura: 150000,
            time: 120,
            id: `${id_prefix}guster`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/fluorite',
                /*'resourcefulbees:'*/ 'kubejs:replaceme',
                'powah:charged_snowball'
            ],
            entity: 'thermal:blitz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blitz`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/lapis',
                /*'resourcefulbees:'*/ 'kubejs:replaceme',
                'minecraft:blue_ice'
            ],
            entity: 'thermal:blizz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blizz`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/apatite',
                /*'resourcefulbees:'*/ 'kubejs:replaceme',
                'minecraft:basalt'
            ],
            entity: 'thermal:basalz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}basalz`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/sulfur',
                /*'resourcefulbees:'*/ 'kubejs:replaceme',
                'minecraft:nether_bricks'
            ],
            entity: 'minecraft:blaze',
            aura: 150000,
            time: 120,
            id: 'naturesaura:animal_spawner/blaze'
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'ars_nouveau:wilden_guardian',
            aura: 250000,
            time: 120,
            id: `${id_prefix}wilden_guardian`
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'ars_nouveau:wilden_hunter',
            aura: 150000,
            time: 120,
            id: `${id_prefix}wilden_hunter`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:forest_honeycomb', /*'astralsorcery:'*/ 'kubejs:replaceme'],
            entity: 'ars_nouveau:wilden_stalker',
            aura: 150000,
            time: 120,
            id: `${id_prefix}wilden_stalker`
        },
        {
            inputs: [
                'farmersdelight:honey_glazed_ham_block',
                'naturesaura:token_anger',
                'eidolon:shadow_gem',
                '#forge:ingots/forgotten_metal'
            ],
            entity: 'undergarden:masticator',
            aura: 5000000,
            time: 200,
            id: `${id_prefix}masticator`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                /*'resourcefulbees:'*/ 'kubejs:replaceme',
                'architects_palette:rotten_flesh_block'
            ],
            entity: 'alexsmobs:komodo_dragon',
            aura: 50000,
            time: 60,
            id: `${id_prefix}komodo_dragon`
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'alexsmobs:rattlesnake',
            aura: 30000,
            time: 40,
            id: `${id_prefix}rattlesnake`
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: /*'atum:'*/ 'kubejs:replaceme',
            aura: 50000,
            time: 60,
            id: `${id_prefix}camel`
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'minecraft:sheep',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/sheep_white'
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'minecraft:ghast',
            aura: 120000,
            time: 150,
            id: 'naturesaura:animal_spawner/ghast'
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'minecraft:guardian',
            aura: 120000,
            time: 150,
            id: 'naturesaura:animal_spawner/guardian'
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'minecraft:elder_guardian',
            aura: 5000000,
            time: 200,
            id: `${id_prefix}elder_guardian`
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'minecraft:shulker',
            aura: 150000,
            time: 100,
            id: 'naturesaura:animal_spawner/shulker'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'botania:red_string', 'minecraft:end_stone'],
            entity: 'minecraft:enderman',
            aura: 120000,
            time: 120,
            id: 'naturesaura:animal_spawner/enderman'
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'alexsmobs:moose',
            aura: 100000,
            time: 100,
            id: `${id_prefix}moose`
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'minecraft:squid',
            aura: 50000,
            time: 40,
            id: 'naturesaura:animal_spawner/squid'
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'minecraft:pig',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/pig'
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'minecraft:cow',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/cow'
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'minecraft:horse',
            aura: 100000,
            time: 100,
            id: 'naturesaura:animal_spawner/horse'
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'minecraft:creeper',
            aura: 100000,
            time: 120,
            id: 'naturesaura:animal_spawner/creeper'
        },
        {
            inputs: ['naturesaura:birth_spirit', '#forge:carpet', 'minecraft:chest'],
            entity: 'minecraft:llama',
            aura: 100000,
            time: 120,
            id: 'naturesaura:animal_spawner/llama'
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'minecraft:chicken',
            aura: 30000,
            time: 40,
            id: 'naturesaura:animal_spawner/chicken'
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'quark:stoneling',
            aura: 2000000,
            time: 200,
            id: `${id_prefix}stoneling`
        },
        {
            inputs: ['naturesaura:birth_spirit', /*'resourcefulbees:'*/ 'kubejs:replaceme'],
            entity: 'upgrade_aquatic:nautilus',
            aura: 30000,
            time: 40,
            id: `${id_prefix}nautilus`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#botania:runes/asgard',
                '#botania:runes/vanaheim',
                'bloodmagic:seersigil'
            ],
            entity: 'minecraft:wandering_trader',
            aura: 2000000,
            time: 400,
            id: `${id_prefix}wandering_trader`
        }
    ]

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner'
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson())
        event.custom(recipe).id(recipe.id)
    })
})
