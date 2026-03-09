ServerEvents.recipes(e => {
    // Replace input for ids
    replaceExactInput(e, { id: 'entangled:block' }, 'minecraft:chest', '#forge:chests/wooden')
    replaceExactInput(e, { id: 'constructionwand:stone_wand' }, '#minecraft:stone_tool_materials', '#quark:stone_tool_materials')
    replaceExactInput(e, { id: 'archers_paradox:lightning_arrow' }, 'minecraft:nether_star', 'thermal:lightning_charge')
    replaceExactInput(e, { id: 'immersivecooking:fried_potato_cubes' }, 'immersivecooking:potato_slice', 'immersivecooking:potato_cubes')
    replaceExactInput(e, { not: [{ id: 'minecraft:dried_kelp_block' }] }, 'minecraft:dried_kelp', ['minecraft:dried_kelp', 'sushigocrafting:dried_seaweed'])
    replaceExactInput(e, { id: 'eidolon:stone_hand' }, 'minecraft:stone_slab', '#enigmatica:crafting_slabs')
    replaceExactInput(e, { id: 'culinaryconstruct:culinary_station' }, 'minecraft:stone_slab', '#enigmatica:crafting_slabs')
    replaceExactInput(e, { id: 'minecraft:grindstone' }, 'minecraft:stone_slab', '#enigmatica:crafting_slabs')
    replaceExactInput(e, { id: 'minecraft:nether_bricks' }, '#forge:ingots/nether_brick', 'minecraft:nether_brick')
    replaceExactInput(e, { id: 'thermal:machine/press/packing2x2/press_nether_bricks_packing' },
        '#forge:ingots/nether_brick',
        'minecraft:nether_brick'
    )
    replaceExactInput(e, { id: 'thermal:machine/press/unpacking/press_wool_unpacking' },
        'minecraft:white_wool',
        '#forge:wool'
    )
    replaceExactInput(e, { id: 'bloodmagic:alchemytable/basic_cutting_fluid' },
        'minecraft:potion',
        Item.of('minecraft:potion', { Potion: 'minecraft:water' })
    )
    replaceExactInput(e, { id: 'powah:crafting/solar_panel_basic' },
        'powah:solar_panel_starter',
        'powah:photoelectric_pane'
    )
    replaceExactInput(e, {
        type: 'minecraft:crafting_shaped',
        not: [{ id: 'minecraft:stone_slab' }, { id: 'minecraft:stone_stairs' }]
    },
        'minecraft:stone',
        '#forge:stone'
    )

    // Replace inputs for all recipes in a mod
    replaceExactInput(e, { mod: 'buildinggadgets' }, '#forge:ingots/iron', '#forge:ingots/iron_aluminum')
    replaceExactInput(e, { mod: 'powah' }, '#forge:ingots/iron', '#forge:ingots/iron_copper')
    replaceExactInput(e, { mod: 'powah' }, '#forge:nuggets/iron', '#forge:nuggets/iron_copper')
    replaceExactInput(e, { mod: 'powah' }, '#powah:magmator', 'mekanism:dynamic_tank')
    replaceExactInput(e, { mod: 'powah' }, '#powah:thermo_generator', 'powah:thermoelectric_plate')
    replaceExactInput(e, { mod: 'powah' }, '#powah:solar_panel', 'powah:photoelectric_pane')

    // Replace inputs for all recipes in a type
    replaceExactInput(e, { type: 'minecraft:crafting_shapeless' }, 'minecraft:stone', '#forge:stone')
    replaceExactInput(e, { type: 'minecraft:crafting_shaped' }, 'powah:uraninite', '#forge:ingots/radioactive')
    replaceExactInput(e, { type: 'minecraft:crafting_shaped' }, 'minecraft:netherrack', '#forge:netherrack')
    replaceExactInput(e,
        { type: 'minecraft:crafting_shaped', output: 'minecraft:piston' },
        '#forge:cobblestone',
        '#quark:stone_tool_materials'
    )
    replaceExactInput(e, {
        not: [{ type: 'ars_nouveau:glyph_recipe' }]
    },
        'minecraft:nether_brick',
        '#forge:ingots/nether_brick'
    )


    // Replace inputs on all recipes with no filter
    replaceExactInput(e, { input: 'architects_palette:withered_bone' }, 'architects_palette:withered_bone', '#forge:bones/wither')
    replaceExactInput(e, { input: 'mythicbotany:elementium_ore' }, 'mythicbotany:elementium_ore', '#forge:ores/elementium')
    e.replaceInput({}, 'thermal:rubber', 'industrialforegoing:dryrubber')
    replaceExactInput(e, { input: 'thermal:cinnabar' }, 'thermal:cinnabar', '#forge:gems/cinnabar')
    replaceExactInput(e, { input: 'thermal:sulfur' }, 'thermal:sulfur', '#forge:gems/sulfur')
    replaceExactInput(e, { input: 'thermal:apatite' }, 'thermal:apatite', '#forge:gems/apatite')
    replaceExactInput(e, { input: 'thermal:niter' }, 'thermal:niter', '#forge:gems/niter')
    replaceExactInput(e, { input: 'thermal:bitumen' }, 'thermal:bitumen', '#forge:bitumen')
    replaceExactInput(e, { input: 'thermal:coal_coke' }, 'thermal:coal_coke', '#forge:gems/coal_coke')
    replaceExactInput(e, { input: 'rftoolsbase:dimensionalshard' }, 'rftoolsbase:dimensionalshard', '#forge:gems/dimensional')
    replaceExactInput(e, { input: 'immersiveengineering:slag' }, 'immersiveengineering:slag', '#forge:slag')
    replaceExactInput(e, { input: 'thermal:slag' }, 'thermal:slag', '#forge:slag')
    replaceExactInput(e, { input: 'farmersdelight:fried_egg' }, 'farmersdelight:fried_egg', '#forge:cooked_eggs')
    replaceExactInput(e, { input: 'farmersdelight:brown_mushroom_colony' }, 'farmersdelight:brown_mushroom_colony', '#forge:mushroom_colonies/brown')
    replaceExactInput(e, { input: 'farmersdelight:red_mushroom_colony' }, 'farmersdelight:red_mushroom_colony', '#forge:mushroom_colonies/red')
    replaceExactInput(e, { input: 'upgrade_aquatic:beachgrass' }, 'upgrade_aquatic:beachgrass', '#forge:beach_grass')
    replaceExactInput(e, { input: 'environmental:cattail' }, 'environmental:cattail', '#forge:cattails')
    replaceExactInput(e, { input: 'pneumaticcraft:wheat_flour' }, 'pneumaticcraft:wheat_flour', '#forge:dusts/flour')
    replaceExactInput(e, { input: 'create:wheat_flour' }, 'create:wheat_flour', '#forge:dusts/flour')
    replaceExactInput(e, { input: 'create:dough' }, 'create:dough', '#forge:doughs')
    replaceExactInput(e, { input: 'farmersdelight:wheat_dough' }, 'farmersdelight:wheat_dough', '#forge:doughs')
    replaceExactInput(e, { input: 'create:bar_of_chocolate' }, 'create:bar_of_chocolate', '#forge:chocolate_bars')

    // Replace inputs for powah tiers
    powahTiers.forEach(function (tier) {
        var capacitor = `powah:capacitor_${tier}`
        replaceExactInput(e, { id: `powah:crafting/energy_cell_${tier}` }, '#powah:energy_cell', capacitor)
        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`
        }
        replaceExactInput(e, { id: `powah:crafting/battery_${tier}` }, '#powah:battery', capacitor)
    })

    // ['quark:tallow', 'eidolon:tallow', 'occultism:tallow'].forEach((tallow) => {
    //     replaceExactInput(e, {}, tallow, '#forge:tallow')
    // })


    // too lazy to reformat this one rn
    const alt_material_tag_replacements = [
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'aluminum',
            items: [
                'bloodmagic:soulforge',
                'mininggadgets:upgrade_fortune_1',
                'resourcefulbees:centrifuge_casing',
                'xnet:antenna_base'
            ]
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'brass',
            items: ['ars_nouveau:glyph_press']
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'invar',
            items: ['resourcefulbees:centrifuge_controller']
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'lead',
            items: [
                'travel_anchors:travel_anchor',
                'thermal:machine_press',
                'bloodmagic:alchemicalreactionchamber',
                'integrateddynamics:squeezer'
            ]
        },
        {
            type: 'storage_blocks',
            replace: 'iron',
            replaceWith: 'tin',
            items: ['aquaculture:tackle_box']
        },
        {
            type: 'dusts',
            replace: 'gold',
            replaceWith: 'copper',
            items: ['mekanism:upgrade_energy']
        },
        {
            type: 'gears',
            replace: 'gold',
            replaceWith: 'bronze',
            items: ['thermal:upgrade_augment_1']
        },
        {
            type: 'gears',
            replace: 'gold',
            replaceWith: 'copper',
            items: ['thermal:flux_drill', 'thermal:flux_saw']
        },
        {
            type: 'gears',
            replace: 'gold',
            replaceWith: 'silver',
            items: ['thermal:dynamo_lapidary']
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'brass',
            items: [
                'ars_nouveau:arcane_core',
                'ars_nouveau:crystallizer',
                'ars_nouveau:volcanic_accumulator',
                'pneumaticcraft:gun_ammo',
                'ars_nouveau:marvelous_clay',
                'ars_nouveau:ritual',
                'ars_nouveau:sconce',
                'ars_nouveau:mycelial_sourcelink',
                'ars_nouveau:vitalic_sourcelink',
                'ars_nouveau:alchemical_sourcelink',
                'ars_nouveau:mana_condenser'
            ]
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'bronze',
            items: [
                'bloodmagic:alchemytable',
                'bloodmagic:altar',
                'bloodmagic:sacrificialdagger',
                'bloodmagic:experiencebook',
                'bloodmagic:soulforge',
                'pneumaticcraft:minigun',
                'pneumaticcraft:pressure_gauge',
                'thermal:diving_helmet',
                'thermal:diving_chestplate',
                'thermal:diving_leggings',
                'thermal:diving_boots',
                'minecraft:clock'
            ]
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'copper',
            items: [
                'mekanismgenerators:electromagnetic_coil',
                'mekanism:energy_tablet',
                'mininggadgets:upgrade_magnet',
                'xnet:controller',
                'thermal:rf_coil_xfer_augment',
                'thermal:rf_coil_storage_augment',
                'thermal:rf_coil_augment',
                'thermal:rf_coil',
                'rftoolsstorage:storage_scanner',
                'rftoolsbuilder:shield_block1',
                'pneumaticcraft:vortex_tube',
                'pneumaticcraft:heat_sink',
                'modularrouters:speed_upgrade',
                'xnet:connector_blue',
                'xnet:connector_red',
                'xnet:connector_green'
            ]
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'silver',
            items: ['torchmaster:feral_flare_lantern', 'mekanism:teleportation_core', 'botania:mana_spreader']
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'tin',
            items: ['pneumaticcraft:memory_stick']
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'aluminum',
            items: [
                'immersiveengineering:conveyor_splitter',
                'immersiveengineering:conveyor_vertical',
                'immersiveengineering:conveyor_basic',
                'immersiveengineering:current_transformer',
                'immersiveengineering:transformer_hv',
                'immersiveengineering:transformer',
                'immersiveengineering:dynamo',
                'immersiveengineering:furnace_heater',
                'immersiveengineering:toolupgrade_drill_lube',
                'cookingforblockheads:preservation_chamber',
                'minecraft:compass',
                'minecraft:piston',
                'xnet:antenna_dish',
                'xnet:antenna_base',
                'xnet:antenna',
                'resourcefulbees:centrifuge_casing',
                'integrateddynamics:drying_basin'
            ]
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'brass',
            items: ['ars_nouveau:mana_condenser', 'ars_nouveau:enchanting_apparatus']
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'copper',
            items: [
                'shrink:shrinking_device',
                'immersiveengineering:charging_station',
                'cookingforblockheads:heating_unit',
                'aquaculture:tackle_box'
            ]
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'lead',
            items: ['travel_anchors:travel_anchor', 'travel_anchors:travel_staff', 'integrateddynamics:squeezer']
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'tin',
            items: ['bloodmagic:soulsnare', 'modularrouters:bulk_item_filter', 'chisel:auto_chisel']
        },
        {
            type: 'ingots',
            replace: 'iron',
            replaceWith: 'osmium',
            items: ['integrateddynamics:part_machine_reader', 'integratedcrafting:crafting/part_interface_crafting']
        },
        {
            type: 'nuggets',
            replace: 'gold',
            replaceWith: 'bronze',
            items: ['rftoolsstorage:storage_module0']
        },
        {
            type: 'nuggets',
            replace: 'gold',
            replaceWith: 'copper',
            items: [
                'xnet:connector_routing',
                'xnet:netcable_routing',
                'xnet:netcable_yellow',
                'xnet:netcable_blue',
                'xnet:netcable_green',
                'xnet:netcable_red',
                'rftoolsbase:machine_base',
                'rftoolsbase:machine_frame',
                'rftoolscontrol:card_base',
                'modularrouters:speed_upgrade',
                'modularrouters:blank_upgrade',
                'modularrouters:blank_module'
            ]
        },
        {
            type: 'nuggets',
            replace: 'gold',
            replaceWith: 'silver',
            items: ['botania:spark', 'chisel:hitech_chisel']
        }
    ]

    alt_material_tag_replacements.forEach((recipe) => {
        recipe.items.forEach((item) => {
            replaceExactInput(e,
                { output: item },
                `#forge:${recipe.type}/${recipe.replace}`,
                `#forge:${recipe.type}/${recipe.replace}_${recipe.replaceWith}`
            )
        })
    })
})
