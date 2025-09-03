//priority: 1000

const treeRegistry = [
    {
        type: 'tree',
        trees: [
            {
                sapling: 'ars_nouveau:blue_archwood_sapling',
                trunk: 'ars_nouveau:blue_archwood_log',
                leaf: 'ars_nouveau:blue_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:green_archwood_sapling',
                trunk: 'ars_nouveau:green_archwood_log',
                leaf: 'ars_nouveau:green_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:purple_archwood_sapling',
                trunk: 'ars_nouveau:purple_archwood_log',
                leaf: 'ars_nouveau:purple_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:red_archwood_sapling',
                trunk: 'ars_nouveau:red_archwood_log',
                leaf: 'ars_nouveau:red_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'biomeswevegone:araucaria_sapling',
                trunk: 'biomeswevegone:pine_log',
                leaf: 'biomeswevegone:araucaria_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:aspen_sapling',
                trunk: 'biomeswevegone:aspen_log',
                leaf: 'biomeswevegone:aspen_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'biomeswevegone:baobab_sapling',
                trunk: 'biomeswevegone:baobab_log',
                leaf: 'biomeswevegone:baobab_leaves',
                fruit: 'biomeswevegone:baobab_fruit',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:blue_enchanted_sapling',
                trunk: 'biomeswevegone:blue_enchanted_log',
                leaf: 'biomeswevegone:blue_enchanted_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:blue_spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'biomeswevegone:blue_spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:brown_birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'biomeswevegone:brown_birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:brown_oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'biomeswevegone:brown_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:brown_zelkova_sapling',
                trunk: 'biomeswevegone:zelkova_log',
                leaf: 'biomeswevegone:brown_zelkova_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:cika_sapling',
                trunk: 'biomeswevegone:cika_log',
                leaf: 'biomeswevegone:cika_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:cypress_sapling',
                trunk: 'biomeswevegone:cypress_log',
                leaf: 'biomeswevegone:cypress_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:ebony_sapling',
                trunk: 'biomeswevegone:ebony_log',
                leaf: 'biomeswevegone:ebony_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:fir_sapling',
                trunk: 'biomeswevegone:fir_log',
                leaf: 'biomeswevegone:fir_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:green_enchanted_sapling',
                trunk: 'biomeswevegone:green_enchanted_log',
                leaf: 'biomeswevegone:green_enchanted_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:holly_sapling',
                trunk: 'biomeswevegone:holly_log',
                leaf: 'biomeswevegone:holly_leaves',
                fruit: 'biomeswevegone:holly_berries',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:indigo_jacaranda_sapling',
                trunk: 'biomeswevegone:jacaranda_log',
                leaf: 'biomeswevegone:indigo_jacaranda_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:jacaranda_sapling',
                trunk: 'biomeswevegone:jacaranda_log',
                leaf: 'biomeswevegone:jacaranda_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:mahogany_sapling',
                trunk: 'biomeswevegone:mahogany_log',
                leaf: 'biomeswevegone:mahogany_leaves',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:maple_sapling',
                trunk: 'biomeswevegone:maple_log',
                leaf: 'biomeswevegone:maple_leaves',
                substrate: 'dirt',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:orange_birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'biomeswevegone:orange_birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:orange_oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'biomeswevegone:orange_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:orange_spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'biomeswevegone:orange_spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:orchard_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'biomeswevegone:orchard_leaves',
                extraDecoration: 'biomeswevegone:flowering_orchard_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:palm_sapling',
                trunk: 'biomeswevegone:palm_log',
                leaf: 'biomeswevegone:palm_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:palo_verde_sapling',
                trunk: 'biomeswevegone:palo_verde_log',
                leaf: 'biomeswevegone:palo_verde_leaves',
                extraDecoration: 'biomeswevegone:flowering_palo_verde_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:pine_sapling',
                trunk: 'biomeswevegone:pine_log',
                leaf: 'biomeswevegone:pine_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:rainbow_eucalyptus_sapling',
                trunk: 'biomeswevegone:rainbow_eucalyptus_log',
                leaf: 'biomeswevegone:rainbow_eucalyptus_leaves',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:red_birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'biomeswevegone:red_birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:red_maple_sapling',
                trunk: 'biomeswevegone:maple_log',
                leaf: 'biomeswevegone:maple_leaves',
                substrate: 'dirt',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:red_oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'biomeswevegone:red_oak_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:red_spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'biomeswevegone:red_spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:redwood_sapling',
                trunk: 'biomeswevegone:redwood_log',
                leaf: 'biomeswevegone:redwood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'biomeswevegone:silver_maple_sapling',
                trunk: 'biomeswevegone:maple_log',
                leaf: 'biomeswevegone:silver_maple_leaves',
                substrate: 'dirt',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:skyris_sapling',
                trunk: 'biomeswevegone:skyris_log',
                leaf: 'biomeswevegone:skyris_leaves',
                fruit: 'biomeswevegone:green_apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:willow_sapling',
                trunk: 'biomeswevegone:willow_log',
                leaf: 'biomeswevegone:willow_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:witch_hazel_sapling',
                trunk: 'biomeswevegone:witch_hazel_log',
                leaf: 'biomeswevegone:witch_hazel_leaves',
                extraDecoration: 'biomeswevegone:blooming_witch_hazel_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:yellow_birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'biomeswevegone:yellow_birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'biomeswevegone:yellow_spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'biomeswevegone:yellow_spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'biomeswevegone:zelkova_sapling',
                trunk: 'biomeswevegone:zelkova_log',
                leaf: 'biomeswevegone:zelkova_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:acacia_sapling',
                trunk: 'minecraft:acacia_log',
                leaf: 'minecraft:acacia_leaves',
                fruit: 'alexsmobs:acacia_blossom',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'minecraft:birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'minecraft:birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:dark_oak_sapling',
                trunk: 'minecraft:dark_oak_log',
                leaf: 'minecraft:dark_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:jungle_sapling',
                trunk: 'minecraft:jungle_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'alexsmobs:banana',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'minecraft:spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:blue_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:blue_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:lavender_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:lavender_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:orange_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:orange_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:red_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:red_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:yellow_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:yellow_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'undergarden:smogstem_sapling',
                trunk: 'undergarden:smogstem_log',
                leaf: 'undergarden:smogstem_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'undergarden:wigglewood_sapling',
                trunk: 'undergarden:wigglewood_log',
                leaf: 'undergarden:wigglewood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'integrateddynamics:menril_sapling',
                trunk: 'integrateddynamics:menril_log',
                leaf: 'integrateddynamics:menril_leaves',
                fruit: 'integrateddynamics:menril_berries',
                substrate: 'dirt',
                sap: 'integrateddynamics:menril_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:rosewood_sapling',
                trunk: 'atmospheric:rosewood_log',
                leaf: 'atmospheric:rosewood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:morado_sapling',
                trunk: 'atmospheric:morado_log',
                leaf: 'atmospheric:morado_leaves',
                extraDecoration: 'atmospheric:flowering_morado_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:yucca_sapling',
                trunk: 'atmospheric:yucca_log',
                leaf: 'atmospheric:yucca_leaves',
                fruit: 'atmospheric:yucca_bundle',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:kousa_sapling',
                trunk: 'atmospheric:kousa_log',
                leaf: 'atmospheric:kousa_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:aspen_sapling',
                trunk: 'atmospheric:aspen_log',
                leaf: 'atmospheric:aspen_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'atmospheric:grimwood_sapling',
                trunk: 'atmospheric:grimwood_log',
                leaf: 'atmospheric:grimwood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'upgrade_aquatic:river_sapling',
                trunk: 'upgrade_aquatic:river_log',
                leaf: 'upgrade_aquatic:river_leaves',
                fruit: 'upgrade_aquatic:mulberry',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'architects_palette:twisted_sapling',
                trunk: 'architects_palette:twisted_log',
                leaf: 'architects_palette:twisted_leaves',
                substrate: 'dirt',
                sap: 'tconstruct:liquid_soul',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:white_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:white_wisteria_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:purple_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:purple_wisteria_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:blue_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:blue_wisteria_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:pink_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:pink_wisteria_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:willow_sapling',
                trunk: 'environmental:willow_log',
                leaf: 'environmental:willow_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'undergarden:grongle_sapling',
                trunk: 'undergarden:grongle_log',
                leaf: 'undergarden:grongle_leaves',
                substrate: 'deepturf',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:earth_slime_sapling',
                trunk: 'tconstruct:greenheart_log',
                leaf: 'tconstruct:earth_slime_leaves',
                fruit: 'minecraft:slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:earth_slime',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:sky_slime_sapling',
                trunk: 'tconstruct:skyroot_log',
                leaf: 'tconstruct:sky_slime_leaves',
                fruit: 'tconstruct:sky_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:sky_slime',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:ender_slime_sapling',
                trunk: 'tconstruct:greenheart_log',
                leaf: 'tconstruct:ender_slime_leaves',
                fruit: 'tconstruct:ender_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:earth_slime',
                rate: { living: 25, dead: 4 }
            }
        ]
    },
    {
        type: 'tree_shroom',
        trees: [
            {
                sapling: 'biomeswevegone:black_puff',
                trunk: 'biomeswevegone:brown_mushroom_stem',
                leaf: 'biomeswevegone:black_puff_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'biomeswevegone:blue_glowshroom',
                trunk: 'biomeswevegone:yellow_glowshroom_stem',
                leaf: 'biomeswevegone:blue_glowshroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'biomeswevegone:bulbis_oddity',
                trunk: 'biomeswevegone:bulbis_wood',
                leaf: 'biomeswevegone:bulbis_shell',
                extraDecoration: 'biomeswevegone:purple_shroomlight',
                substrate: 'end_stone'
            },
            {
                sapling: 'biomeswevegone:death_cap',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'biomeswevegone:death_cap_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'biomeswevegone:embur_wart',
                trunk: 'biomeswevegone:embur_pedu',
                leaf: 'biomeswevegone:embur_gel_block',
                extraDecoration: 'minecraft:shroomlight',
                substrate: 'mushroom'
            },
            {
                sapling: 'biomeswevegone:green_mushroom',
                trunk: 'biomeswevegone:white_mushroom_stem',
                leaf: 'biomeswevegone:green_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'biomeswevegone:purple_bulbis_oddity',
                trunk: 'biomeswevegone:bulbis_wood',
                leaf: 'biomeswevegone:purple_bulbis_shell',
                extraDecoration: 'biomeswevegone:purple_shroomlight',
                substrate: 'end_stone'
            },
            {
                sapling: 'biomeswevegone:purple_glowshroom',
                trunk: 'biomeswevegone:red_glowshroom_stem',
                leaf: 'biomeswevegone:purple_glowshroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'biomeswevegone:shulkren_fungus',
                trunk: 'biomeswevegone:white_mushroom_stem',
                leaf: 'biomeswevegone:shulkren_wart_block',
                extraDecoration: 'biomeswevegone:purple_shroomlight',
                substrate: 'end_stone'
            },
            {
                sapling: 'biomeswevegone:soul_shroom',
                trunk: 'biomeswevegone:soul_shroom_stem',
                leaf: 'biomeswevegone:soul_shroom_block',
                substrate: 'netherrack'
            },
            {
                sapling: 'biomeswevegone:sythian_fungus',
                trunk: 'biomeswevegone:sythian_stem',
                leaf: 'biomeswevegone:sythian_wart_block',
                substrate: 'netherrack'
            },
            {
                sapling: 'biomeswevegone:weeping_milkcap',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'biomeswevegone:weeping_milkcap_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'biomeswevegone:wood_blewit',
                trunk: 'biomeswevegone:brown_mushroom_stem',
                leaf: 'biomeswevegone:wood_blewit_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:brown_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:brown_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:crimson_fungus',
                trunk: 'minecraft:crimson_stem',
                leaf: 'minecraft:nether_wart_block',
                extraDecoration: 'minecraft:shroomlight',
                substrate: 'crimson_nylium'
            },
            {
                sapling: 'minecraft:red_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:red_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:warped_fungus',
                trunk: 'minecraft:warped_stem',
                leaf: 'minecraft:warped_wart_block',
                extraDecoration: 'minecraft:shroomlight',
                substrate: 'warped_nylium'
            },
            {
                sapling: 'quark:glowshroom',
                trunk: 'quark:glowshroom_stem',
                leaf: 'quark:glowshroom_block',
                substrate: 'glowcelium'
            },
            {
                sapling: 'undergarden:blood_mushroom',
                trunk: 'undergarden:blood_mushroom_stalk',
                leaf: 'undergarden:blood_mushroom_cap',
                extraDecoration: 'undergarden:blood_mushroom_globule',
                substrate: 'deepturf',
                sap: 'tconstruct:liquid_soul',
                rate: { living: 0, dead: 4 }
            },

            {
                sapling: 'undergarden:indigo_mushroom',
                trunk: 'undergarden:indigo_mushroom_stalk',
                leaf: 'undergarden:indigo_mushroom_cap',
                substrate: 'deepturf'
            },
            {
                sapling: 'undergarden:ink_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'undergarden:ink_mushroom_cap',
                substrate: 'deepturf'
            },
            {
                sapling: 'undergarden:veil_mushroom',
                trunk: 'undergarden:veil_mushroom_stalk',
                leaf: 'undergarden:veil_mushroom_cap',
                substrate: 'deepturf'
            },
            {
                sapling: 'biomeswevegone:imparius_mushroom',
                trunk: 'biomeswevegone:imparius_stem',
                leaf: 'biomeswevegone:imparius_mushroom_block',
                extraDecoration: 'biomeswevegone:imparius_mushroom_branch',
                substrate: 'mushroom'
            },
            {
                sapling: 'biomeswevegone:fungal_imparius',
                trunk: 'biomeswevegone:fungal_imparius_stem',
                leaf: 'biomeswevegone:fungal_imparius_block',
                extraDecoration: 'biomeswevegone:fungal_imparius_filament_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'tconstruct:blood_slime_sapling',
                trunk: 'tconstruct:bloodshroom_log',
                leaf: 'tconstruct:blood_slime_leaves',
                fruit: 'tconstruct:ichor_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:liquid_soul',
                rate: { living: 0, dead: 4 }
            }
        ]
    }
];
