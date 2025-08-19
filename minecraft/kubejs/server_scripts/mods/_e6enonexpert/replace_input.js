ServerEvents.recipes(e => {
    // Replace input for ids
    e.replaceInput({ id: 'entangled:block' }, 'minecraft:chest', '#forge:chests/wooden')
    e.replaceInput({ id: 'constructionwand:stone_wand' }, '#minecraft:stone_tool_materials', '#quark:stone_tool_materials')
    e.replaceInput({ id: 'archers_paradox:lightning_arrow' }, 'minecraft:nether_star', 'thermal:lightning_charge')
    e.replaceInput({ id: 'immersivecooking:fried_potato_cubes' }, 'immersivecooking:potato_slice', 'immersivecooking:potato_cubes')
    e.replaceInput({ not: [{ id: 'minecraft:dried_kelp_block' }] }, 'minecraft:dried_kelp', ['minecraft:dried_kelp', 'sushigocrafting:dried_seaweed'])
    e.replaceInput({ id: 'eidolon:stone_hand' }, 'minecraft:stone_slab', '#enigmatica:crafting_slabs')
    e.replaceInput({ id: 'culinaryconstruct:culinary_station' }, 'minecraft:stone_slab', '#enigmatica:crafting_slabs')
    e.replaceInput({ id: 'minecraft:grindstone' }, 'minecraft:stone_slab', '#enigmatica:crafting_slabs')
    e.replaceInput({ id: 'minecraft:nether_bricks' }, '#forge:ingots/nether_brick', 'minecraft:nether_brick')
    e.replaceInput({ id: 'thermal:machine/press/packing2x2/press_nether_bricks_packing' },
        '#forge:ingots/nether_brick',
        'minecraft:nether_brick'
    )
    e.replaceInput({ id: 'thermal:machine/press/unpacking/press_wool_unpacking' },
        'minecraft:white_wool',
        '#forge:wool'
    )
    e.replaceInput({ id: 'bloodmagic:alchemytable/basic_cutting_fluid' },
        'minecraft:potion',
        Item.of('minecraft:potion', { Potion: 'minecraft:water' })
    )
    e.replaceInput({ id: 'powah:crafting/solar_panel_basic' },
        'powah:solar_panel_starter',
        'powah:photoelectric_pane'
    )
    e.replaceInput({
        type: 'minecraft:crafting_shaped',
        not: [{ id: 'minecraft:stone_slab' }, { id: 'minecraft:stone_stairs' }]
    },
        'minecraft:stone',
        '#forge:stone'
    )

    // Replace inputs for all recipes in a mod
    e.replaceInput({ mod: 'buildinggadgets' }, '#forge:ingots/iron', '#forge:ingots/iron_aluminum')
    e.replaceInput({ mod: 'powah' }, '#forge:ingots/iron', '#forge:ingots/iron_copper')
    e.replaceInput({ mod: 'powah' }, '#forge:nuggets/iron', '#forge:nuggets/iron_copper')
    e.replaceInput({ mod: 'powah' }, '#powah:magmator', 'mekanism:dynamic_tank')
    e.replaceInput({ mod: 'powah' }, '#powah:thermo_generator', 'powah:thermoelectric_plate')
    e.replaceInput({ mod: 'powah' }, '#powah:solar_panel', 'powah:photoelectric_pane')

    // Replace inputs for all recipes in a type
    e.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:stone', '#forge:stone')
    e.replaceInput({ type: 'minecraft:crafting_shaped' }, 'powah:uraninite', '#forge:ingots/radioactive')
    e.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:netherrack', '#forge:netherrack')
    e.replaceInput(
        { type: 'minecraft:crafting_shaped', output: 'minecraft:piston' },
        '#forge:cobblestone',
        '#quark:stone_tool_materials'
    )
    e.replaceInput({
        not: [{ type: 'ars_nouveau:glyph_recipe' }]
    },
        'minecraft:nether_brick',
        '#forge:ingots/nether_brick'
    )


    // Replace inputs on all recipes with no filter
    e.replaceInput({}, 'architects_palette:withered_bone', '#forge:bones/wither')
    e.replaceInput({}, 'mythicbotany:elementium_ore', '#forge:ores/elementium')
    e.replaceInput({}, 'thermal:rubber', 'industrialforegoing:dryrubber')
    e.replaceInput({}, 'thermal:cinnabar', '#forge:gems/cinnabar')
    e.replaceInput({}, 'thermal:sulfur', '#forge:gems/sulfur')
    e.replaceInput({}, 'thermal:apatite', '#forge:gems/apatite')
    e.replaceInput({}, 'thermal:niter', '#forge:gems/niter')
    e.replaceInput({}, 'thermal:bitumen', '#forge:bitumen')
    e.replaceInput({}, 'thermal:coal_coke', '#forge:coal_coke')
    e.replaceInput({}, 'rftoolsbase:dimensionalshard', '#forge:gems/dimensional')
    e.replaceInput({}, 'ars_nouveau:mana_gem', '#forge:gems/mana')
    e.replaceInput({}, 'immersiveengineering:slag', '#forge:slag')
    e.replaceInput({}, 'thermal:slag', '#forge:slag')
    e.replaceInput({}, 'farmersdelight:fried_egg', '#forge:cooked_eggs')
    e.replaceInput({}, 'farmersdelight:brown_mushroom_colony', '#forge:mushroom_colonies/brown')
    e.replaceInput({}, 'farmersdelight:red_mushroom_colony', '#forge:mushroom_colonies/red')
    e.replaceInput({}, 'minecraft:iron_ore', '#forge:ores/iron')
    e.replaceInput({}, 'minecraft:gold_ore', '#forge:ores/gold')
    e.replaceInput({}, 'upgrade_aquatic:beachgrass', '#forge:beach_grass')
    e.replaceInput({}, 'environmental:cattail', '#forge:cattails')
    e.replaceInput({}, 'pneumaticcraft:wheat_flour', '#forge:dusts/flour')
    e.replaceInput({}, 'create:wheat_flour', '#forge:dusts/flour')
    e.replaceInput({}, 'create:dough', '#forge:doughs')
    e.replaceInput({}, 'farmersdelight:wheat_dough', '#forge:doughs')
    e.replaceInput({}, 'create:bar_of_chocolate', '#forge:chocolate_bars')
    e.replaceInput({}, 'tconstruct:cobalt_nugget', '#forge:nuggets/cobalt')
    e.replaceInput({}, 'minecraft:nether_bricks', '#forge:netherbricks')

    // Replace inputs for powah tiers
    powahTiers.forEach(function (tier) {
        var capacitor = `powah:capacitor_${tier}`
        e.replaceInput({ id: `powah:crafting/energy_cell_${tier}` }, '#powah:energy_cell', capacitor)
        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`
        }
        e.replaceInput({ id: `powah:crafting/battery_${tier}` }, '#powah:battery', capacitor)
    })

    // ['quark:tallow', 'eidolon:tallow', 'occultism:tallow'].forEach((tallow) => {
    //     e.replaceInput({}, tallow, '#forge:tallow')
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
            e.replaceInput(
                { output: item },
                `#forge:${recipe.type}/${recipe.replace}`,
                `#forge:${recipe.type}/${recipe.replace}_${recipe.replaceWith}`
            )
        })
    })
})
