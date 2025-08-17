ServerEvents.recipes(e => {
    e.shapeless('botania:enchanted_soil',
        ['minecraft:grass_block', 'botania:overgrowth_seed']
    ).id('kubejs:shapeless/enchanted_soil')

    e.shapeless('minecraft:sticky_piston',
        ['minecraft:piston', '#forge:slimeballs']
    ).id('kubejs:shapeless/sticky_piston')

    e.shapeless('minecraft:flint',
        ['#forge:gravel', '#forge:gravel', '#forge:gravel']
    ).id('kubejs:shapeless/flint')

    e.shapeless('minecraft:chest',
        ['#forge:chests/wooden']
    ).id('kubejs:shapeless/chest')

    e.shapeless(Item.of('powah:uraninite', 9),
        ['#forge:storage_blocks/uraninite']
    ).id('kubejs:shapeless/uraninite')

    e.shapeless(Item.of('farmersdelight:milk_bottle', 4),
        ['minecraft:milk_bucket', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle']
    ).id('kubejs:shapeless/milk_bottle')

    e.shapeless('minecraft:milk_bucket',
        ['minecraft:bucket', 'farmersdelight:milk_bottle', 'farmersdelight:milk_bottle', 'farmersdelight:milk_bottle', 'farmersdelight:milk_bottle']
    ).id('kubejs:shapeless/milk_bucket')

    e.shapeless('minecraft:wheat_seeds',
        ['minecraft:wheat']
    ).id('kubejs:shapeless/wheat_seeds')

    e.shapeless('minecraft:crafting_table',
        ['#forge:workbenches']
    ).id('kubejs:shapeless/crafting_table')
    
    e.shapeless('botania:fertilizer',
        ['#forge:fertilizer', '#forge:dyes', '#forge:dyes', '#forge:dyes', '#forge:dyes']
    ).id('kubejs:shapeless/fertilizer')

    e.shapeless('emendatus:dimensional_gem',
        ['rftoolsbase:dimensionalshard']
    ).id('kubejs:shapeless/dimensional_gem')

    e.shapeless('rftoolsbase:dimensionalshard',
        ['emendatus:dimensional_gem']
    ).id('kubejs:shapeless/dimensionalshard')

    // e.shapeless(Item.of('#forge:shards/ender'),
    //     ['#forge:ores/ender', '#forge:tools/crafting_hammer']
    // ).id('kubejs:shapeless/shards/ender')

    // e.shapeless(Item.of('#forge:shards/amber'),
    //     ['#forge:ores/amber', '#forge:tools/crafting_hammer']
    // ).id('kubejs:shapeless/shards/amber')

    // e.shapeless(Item.of('#forge:shards/ender'),
    //     ['#forge:ores/ender', 'thermal:earth_charge']
    // ).id('kubejs:shapeless/shards/ender')

    // e.shapeless(Item.of('#forge:shards/amber'),
    //     ['#forge:ores/amber', 'thermal:earth_charge']
    // ).id('kubejs:shapeless/shards/amber')

    e.shapeless('emendatus:fluorite_dust',
        ['thermal:earth_charge', '#forge:ores/fluorite']
    ).id('kubejs:shapeless/fluorite_dust')

    e.shapeless('emendatus:dimensional_dust',
        ['thermal:earth_charge', '#forge:ores/dimensional']
    ).id('kubejs:shapeless/dimensional_dust')

    e.shapeless('emendatus:potassium_nitrate_dust',
        ['thermal:earth_charge', '#forge:ores/potassium_nitrate']
    ).id('kubejs:shapeless/potassium_nitrate_dust')

    e.shapeless('minecraft:writable_book',
        ['minecraft:book', '#forge:dyes/black', '#forge:feathers']
    ).id('kubejs:shapeless/writable_book')

    e.shapeless(Item.of('minecraft:honeycomb', 9),
        ['minecraft:honeycomb_block']
    ).id('kubejs:shapeless/honeycomb')

    e.shapeless(Item.of('minecraft:paper', 3),
        ['minecraft:sugar_cane', 'minecraft:sugar_cane', 'minecraft:sugar_cane']
    ).id('kubejs:shapeless/paper')

    e.shapeless('supplementaries:flax_seeds',
        ['supplementaries:flax']
    ).id('kubejs:shapeless/flax_seeds')

    e.shapeless('kubejs:quintuple_alfsteel_ingot',
        ['#forge:ingots/alfsteel', '#forge:ingots/alfsteel', '#forge:ingots/alfsteel', '#forge:ingots/alfsteel', '#forge:ingots/alfsteel', '#forge:dusts/mana']
    ).id('kubejs:shapeless/quintuple_alfsteel_ingot')

    e.shapeless(Item.of('minecraft:terracotta'),
        ['#enigmatica:washables/terracotta', 'minecraft:water_bucket']
    ).id('kubejs:shapeless/terracotta')

    e.shapeless('mythicbotany:raindeletia_floating',
        ['kubejs:disabled_recipe_indicator']
    ).id('kubejs:shapeless/raindeletia_floating')

    e.shapeless('mythicbotany:wither_aconite_floating',
        ['kubejs:disabled_recipe_indicator']
    ).id('kubejs:shapeless/wither_aconite_floating')

    e.shapeless(Item.of('eidolon:pewter_blend', 2),
        ['#forge:dusts/lead', '#forge:dusts/iron']
    ).id('kubejs:shapeless/pewter_blend')

    e.shapeless(Item.of('minecraft:string', 3),
        ['#forge:crops/kenaf', '#forge:crops/kenaf', '#forge:crops/kenaf']
    ).id('kubejs:shapeless/string_kenaf')

    e.shapeless(Item.of('minecraft:string', 3),
        ['#forge:crops/flax', '#forge:crops/flax', '#forge:crops/flax']
    ).id('kubejs:shapeless/string_flax')

    e.shapeless(Item.of('minecraft:green_dye', 2),
        ['#forge:dyes/blue', '#forge:dyes/yellow']
    ).id('kubejs:shapeless/green_dye')

    e.shapeless(Item.of('minecraft:brown_dye', 2),
        ['#forge:dyes/red', '#forge:dyes/green']
    ).id('kubejs:shapeless/brown_dye')

    e.shapeless(Item.of('ars_nouveau:source_berry_roll', 3),
        ['farmersdelight:wheat_dough', 'farmersdelight:wheat_dough', 'farmersdelight:wheat_dough', '#forge:fruits/mana_berry']
    ).id('kubejs:shapeless/source_berry_roll')

    e.shapeless('minecraft:charcoal',
        ['#chisel:charcoal']
    ).id('kubejs:shapeless/charcoal')

    e.remove({ output: 'akashictome:tome' })
    e.shapeless(Item.of('akashictome:tome', akashicTomeData),
        ['minecraft:book', '#forge:bookshelves']
    ).id('kubejs:shapeless/tome')
})

const akashicTomeData = 
`{
    "akashictome:data": {
        "advancedperipherals": {
            "Count": 1,
            "id": "patchouli:guide_book",
            "tag": {
                "patchouli:book": "advancedperipherals:manual"
            }
        },
        "alexsmobs": {
            "Count": 1,
            "id": "alexsmobs:animal_dictionary"
        },
        "apotheosis": {
            "Count": 1,
            "id": "patchouli:guide_book",
            "tag": {
                "patchouli:book": "apotheosis:apoth_chronicle"
            }
        },
        "ars_nouveau": {
            "Count": 1,
            "id": "ars_nouveau:worn_notebook"
        },
        "bloodmagic": {
            "Count": 1,
            "id": "patchouli:guide_book",
            "tag": {
                "patchouli:book": "bloodmagic:guide"
            }
        },
        "botania": {
            "Count": 1,
            "id": "botania:lexicon",
            "tag": {
                "botania:elven_unlock": 1
            }
        },
        "buildinggadgets2": {
            "Count": 1,
            "id": "patchouli:guide_book",
            "tag": {
                "patchouli:book": "buildinggadgets2:buildinggadgets2book"
            }
        },
        "cookingforblockheads": {
            "Count": 1,
            "id": "cookingforblockheads:crafting_book"
        },
        "eidolon": {
            "Count": 1,
            "id": "eidolon:codex"
        },
        "embers": {
            "Count": 1,
            "id": "embers:ancient_codex"
        },
        "ftbquests": {
            "Count": 1,
            "id": "ftbquests:book"
        },
        "immersiveengineering": {
            "Count": 1,
            "id": "immersiveengineering:manual"
        },
        "industrialforegoing": {
            "Count": 1,
            "id": "patchouli:guide_book",
            "tag": {
                "patchouli:book": "industrialforegoing:industrial_foregoing"
            }
        },
        "integratedtunnels": {
            "Count": 1,
            "id": "integrateddynamics:on_the_dynamics_of_integration"
        },
        "laserio": {
            "Count": 1,
            "id": "patchouli:guide_book",
            "tag": {
                "patchouli:book": "laserio:laseriobook"
            }
        },
        "littlelogistics": {
            "Count": 1,
            "id": "patchouli:guide_book",
            "tag": {
                "patchouli:book": "littlelogistics:guide"
            }
        },
        "modularrouters": {
            "Count": 1,
            "id": "patchouli:guide_book",
            "tag": {
                "patchouli:book": "modularrouters:book"
            }
        },
        "naturesaura": {
            "Count": 1,
            "id": "patchouli:guide_book",
            "tag": {
                "patchouli:book": "naturesaura:book"
            }
        },
        "occultism": {
            "Count": 1,
            "id": "occultism:dictionary_of_spirits",
            "tag": {
                "modonomicon:book_id": "occultism:dictionary_of_spirits"
            }
        },
        "pneumaticcraft": {
            "Count": 1,
            "id": "patchouli:guide_book",
            "tag": {
                "patchouli:book": "pneumaticcraft:book"
            }
        },
        "powah": {
            "Count": 1,
            "id": "powah:book"
        },
        "rftoolsbase": {
            "Count": 1,
            "id": "rftoolsbase:manual"
        },
        "tconstruct": {
            "Count": 1,
            "id": "tconstruct:materials_and_you"
        },
        "tconstruct_0": {
            "Count": 1,
            "id": "tconstruct:puny_smelting",
            "tag": {
                "akashictome:definedMod": "tconstruct_0"
            }
        },
        "tconstruct_1": {
            "Count": 1,
            "id": "tconstruct:mighty_smelting",
            "tag": {
                "akashictome:definedMod": "tconstruct_1"
            }
        },
        "tconstruct_2": {
            "Count": 1,
            "id": "tconstruct:tinkers_gadgetry",
            "tag": {
                "akashictome:definedMod": "tconstruct_2"
            }
        },
        "tconstruct_3": {
            "Count": 1,
            "id": "tconstruct:fantastic_foundry",
            "tag": {
                "akashictome:definedMod": "tconstruct_3"
            }
        },
        "tconstruct_4": {
            "Count": 1,
            "id": "tconstruct:encyclopedia",
            "tag": {
                "akashictome:definedMod": "tconstruct_4",
                "mantle": {
                    "book": {
                        "current_page": ""
                    }
                }
            }
        },
        "thermal": {
            "Count": 1,
            "id": "patchouli:guide_book",
            "tag": {
                "patchouli:book": "thermal:guidebook"
            }
        },
        "wizards_reborn": {
            "Count": 1,
            "id": "wizards_reborn:arcanemicon"
        },
    }
}`