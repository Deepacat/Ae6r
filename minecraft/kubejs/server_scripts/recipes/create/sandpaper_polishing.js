ServerEvents.recipes(e => {
    e.remove({ id: 'minecraft:red_nether_bricks' })
    e.remove({ id: 'quark:building/crafting/red_nether_bricks' })
    e.recipes.create.sandpaper_polishing('minecraft:red_nether_bricks', 'minecraft:nether_bricks')

    e.recipes.create.sandpaper_polishing('kubejs:red_nether_brick', 'minecraft:nether_brick')
})