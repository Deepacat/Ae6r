ServerEvents.recipes(e => {
    // convert arcane debris to item form without netherite pickaxe (unstable and explodes! :D)
    e.custom({
        type: "lychee:block_interacting",
        item_in: {
            tag: "forge:dusts/arcanum"
        },
        block_in: "irons_spellbooks:arcane_debris",
        post: [
            {
                type: "place",
                block: "air"
            },
            {
                type: "custom",
                id: "real_explode",
                strength: 7
            },
            {
                type: "drop_item",
                item: "irons_spellbooks:arcane_debris",
            }
        ]
    }).id('kubejs:lychee/block_interacting/arcanum_arcane_debris')
})