ServerEvents.recipes(e => {
    insideBlock(e, [{ type: "drop_item", item: "ars_nouveau:sourcestone", count: 4 }],
        makeJsonIngredients(["minecraft:stone", "2x minecraft:oak_planks"]),
        "minecraft:water",
        "sourcestone_test"
    )
    insideBlock(e, [{ type: "drop_item", item: "kubejs:magic_clay", count: 2 }],
        makeJsonIngredients(["2x eidolon:enchanted_ash", "#forge:clay", "#forge:dusts/mana", "#forge:dusts/lapis"]),
        "minecraft:water",
        "magic_clay"
    )
    insideBlock(e, [{ type: "drop_item", item: "meetyourfight:spectres_eye", count: 1 }],
        makeJsonIngredients(["eidolon:enchanted_ash", "kubejs:replaceme", "meetyourfight:phantoplasm", "#forge:dusts/mana", "#forge:dusts/lapis"]),
        "minecraft:water",
        "spectres_eye"
    )
    insideBlock(e, [{ type: "drop_item", item: "pneumaticcraft:ingot_iron_compressed", count: 1 }],
        makeJsonIngredients(["kubejs:hot_compressed_iron_ingot"]),
        "minecraft:water",
        "ingot_iron_compressed"
    )
    insideBlock(e, [{ type: "drop_item", item: "pneumaticcraft:compressed_iron_block", count: 1 }],
        makeJsonIngredients(["kubejs:hot_compressed_iron_block"]),
        "minecraft:water",
        "compressed_iron_block"
    )
})