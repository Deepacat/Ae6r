ServerEvents.recipes(e => {
    e.remove({ output: 'create:tree_fertilizer' })
    e.shapeless('4x create:tree_fertilizer', [
        Ingredient.of('#minecraft:small_flowers'),
        Ingredient.of('#minecraft:small_flowers'),
        Ingredient.of('#minecraft:saplings'),
        'thermal:phytogro',
        'minecraft:moss_block',
    ]).id('kubejs:create/shapeless/tree_fertilizer')
})