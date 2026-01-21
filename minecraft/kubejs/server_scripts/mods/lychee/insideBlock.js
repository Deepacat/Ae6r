ServerEvents.recipes(e => {
    insideBlock(e, [
        { type: "drop_item", item: "kubejs:magic_clay", count: 2 }
    ],
        makeJsonIngredients(["2x eidolon:enchanted_ash", "#forge:clay", "#forge:dusts/mana", "#forge:dusts/lapis"]),
        "kubejs:magic_clay",
        "minecraft:water",
    ).id(`kubejs:lychee/inside_block/magic_clay`)

    insideBlock(e, [
        { type: "drop_item", item: "meetyourfight:spectres_eye", count: 1 }
    ],
        makeJsonIngredients(["eidolon:enchanted_ash", "kubejs:replaceme", "meetyourfight:phantoplasm", "#forge:dusts/mana", "#forge:dusts/lapis"]),
        "minecraft:water",
    ).id(`kubejs:lychee/inside_block/spectres_eye`)

    insideBlock(e, [
        { type: "drop_item", item: "pneumaticcraft:ingot_iron_compressed", count: 1 }
    ],
        makeJsonIngredient("kubejs:hot_compressed_iron_ingot"),
        "minecraft:water",
    ).id(`kubejs:lychee/inside_block/compressed_iron_ingot`)

    insideBlock(e, [{ type: "drop_item", item: "pneumaticcraft:compressed_iron_block", count: 1 }],
        makeJsonIngredient("kubejs:hot_compressed_iron_block"),
        "minecraft:water",
    ).id(`kubejs:lychee/inside_block/compressed_iron_block`)

    insideBlock(e, [
        { type: "drop_item", item: "immersiveengineering:treated_wood_horizontal", count: 8 },
        { type: "place", block: "*", contextual: { type: "chance", chance: 0.125 } }
    ],
        Ingredient.of('#minecraft:planks').toJson(),
        "immersiveengineering:creosote_fluid_block",
    ).id(`kubejs:lychee/inside_block/treated_wood_horizontal`)

    insideBlock(e, [
        { type: "drop_item", item: "immersiveengineering:stick_treated", count: 1 },
        { type: "place", block: "*", contextual: { type: "chance", chance: 0.005 } }
    ],
        Ingredient.of('#forge:rods/wooden').toJson(),
        "immersiveengineering:creosote_fluid_block",
    ).id(`kubejs:lychee/inside_block/stick_treated`)

    insideBlock(e, [
        { type: "drop_item", item: "upgrade_aquatic:driftwood_log", count: 16 },
        { type: "place", block: "*", contextual: { type: "chance", chance: 0.005 } }
    ],
        Ingredient.of('#minecraft:logs_that_burn').toJson(),
        "minecraft:water",
    ).id(`kubejs:lychee/inside_block/driftwood_log`)

    insideBlock(e, [
        { type: "drop_item", item: "alexsmobs:maggot", count: 32 },
        { type: "place", block: "*", contextual: { type: "chance", chance: 1.0 } }
    ],
        Ingredient.of('#minecraft:rotten_flesh').toJson(),
        "pneumaticcraft:yeast_culture",
    ).id(`kubejs:lychee/inside_block/maggot`)
})