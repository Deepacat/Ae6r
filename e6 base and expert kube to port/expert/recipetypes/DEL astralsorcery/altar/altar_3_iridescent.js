// ServerEvents.recipes(event => {
//     /*
//     Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level

//     Iridescent Altar
//     altar_type: 3
//     max_starlight: 8000

//     */


//     const id_prefix = 'enigmatica:expert/astralsorcery/altar/'
//     const recipes = [
//         /// Iridescent Altar Recipes
//         {
//             output: Item.of('kubejs:observatory_lens', 1),
//             pattern: ['_DCD_', 'DEBED', 'CBABC', 'DEBED', '_DCD_'],
//             key: {
//                 A: {
//                     type: /*'astralsorcery:'*/ 'kubejs:replaceme',
//                     hasToBeAttuned: true,
//                     hasToBeCelestial: true,
//                     canBeAttuned: true,
//                     canBeCelestialCrystal: true
//                 },
//                 B: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { tag: 'botania:runes/air' },
//                 D: { item: 'create:shadow_steel' },
//                 E: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             relay_inputs: [
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             ],
//             altar_type: 3,
//             duration: 600,
//             starlight: 7500,
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'resourcefulbees:'*/ 'kubejs:replaceme', 1),
//             pattern: ['__B__', '_C_D_', 'E_A_E', '_D_C_', '__B__'],
//             key: {
//                 A: { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
//                 B: Item.of('naturesaura:effect_powder', { effect: 'naturesaura:animal' }).toJson(),
//                 C: { tag: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
//                 D: { tag: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
//                 E: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             relay_inputs: [
//                 { item: 'naturesaura:token_euphoria' },
//                 { item: 'botania:rune_lust' },
//                 { item: 'ars_nouveau:ritual_fertility' }
//             ],
//             altar_type: 3,
//             duration: 600,
//             starlight: 7500,
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'resourcefulbees:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of('pedestals:coin/xpenchanter', 1),
//             pattern: ['AA_AA', 'ACB_A', '_DED_', 'A_FCA', 'AA_AA'],
//             key: {
//                 A: { item: 'ars_nouveau:greater_experience_gem' },
//                 B: { item: 'botania:gaia_pylon' },
//                 C: { tag: 'botania:runes/vanaheim' },
//                 D: { tag: 'botania:runes/mana' },
//                 E: { item: 'pedestals:coin/default' },
//                 F: { item: 'ars_nouveau:glyph_pickup' }
//             },
//             relay_inputs: [
//                 { item: 'eidolon:shadow_gem' },
//                 { item: 'eidolon:gold_inlay' },
//                 { item: 'eidolon:gold_inlay' }
//             ],
//             altar_type: 3,
//             duration: 600,
//             starlight: 7500,
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: 'pedestals:upgrades/enchanter'
//         },
//         {
//             output: Item.of('pedestals:coin/xpanvil', 1),
//             pattern: ['AA_AA', 'ACB_A', '_DED_', 'A_FCA', 'AA_AA'],
//             key: {
//                 A: { item: 'ars_nouveau:greater_experience_gem' },
//                 B: { item: 'mythicbotany:alfsteel_pylon' },
//                 C: { tag: 'botania:runes/vanaheim' },
//                 D: { tag: 'botania:runes/mana' },
//                 E: { item: 'pedestals:coin/default' },
//                 F: { item: 'ars_nouveau:glyph_pickup' }
//             },
//             relay_inputs: [
//                 { item: /*'betterendforge:'*/ 'kubejs:replaceme' },
//                 { item: 'minecraft:netherite_ingot' },
//                 { item: 'minecraft:netherite_ingot' }
//             ],
//             altar_type: 3,
//             duration: 600,
//             starlight: 7500,
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: 'pedestals:upgrades/anvil'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 1),
//             pattern: ['_____', 'A_B_A', 'ACDCA', 'ECFCE', 'E___E'],
//             key: {
//                 A: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 B: {
//                     type: /*'astralsorcery:'*/ 'kubejs:replaceme',
//                     hasToBeAttuned: false,
//                     hasToBeCelestial: true,
//                     canBeAttuned: true,
//                     canBeCelestialCrystal: true
//                 },
//                 C: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 D: { item: 'botania:balance_cloak' },
//                 E: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 F: { tag: 'botania:runes/mana' }
//             },
//             relay_inputs: [
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'botania:rune_envy' },
//                 { item: 'magicfeather:magicfeather' },
//                 { item: 'botania:rune_pride' }
//             ],
//             altar_type: 3,
//             duration: 600,
//             starlight: 4800,
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },

//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme'),
//             altar_type: 3,
//             duration: 600,
//             starlight: 4800,
//             pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
//             key: {
//                 A: { item: 'bloodmagic:reagentbinding' },
//                 B: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 D: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             relay_inputs: [
//                 { item: 'bloodmagic:steadfastcrystal' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'bloodmagic:steadfastcrystal' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             ],
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme'),
//             altar_type: 3,
//             duration: 600,
//             starlight: 4800,
//             pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
//             key: {
//                 A: { item: 'bloodmagic:reagentlava' },
//                 B: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 D: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             relay_inputs: [
//                 { item: 'bloodmagic:vengefulcrystal' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'bloodmagic:vengefulcrystal' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             ],
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme'),
//             altar_type: 3,
//             duration: 600,
//             starlight: 4800,
//             pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
//             key: {
//                 A: { item: 'bloodmagic:reagentfastminer' },
//                 B: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 D: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             relay_inputs: [
//                 { item: 'bloodmagic:destructivecrystal' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'bloodmagic:destructivecrystal' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             ],
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme'),
//             altar_type: 3,
//             duration: 600,
//             starlight: 4800,
//             pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
//             key: {
//                 A: { item: 'bloodmagic:reagentair' },
//                 B: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 D: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             relay_inputs: [
//                 { item: 'bloodmagic:defaultcrystal' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'bloodmagic:defaultcrystal' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             ],
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme'),
//             altar_type: 3,
//             duration: 600,
//             starlight: 4800,
//             pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
//             key: {
//                 A: { item: 'bloodmagic:reagentgrowth' },
//                 B: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 D: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             relay_inputs: [
//                 { item: 'bloodmagic:corrosivecrystal' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'bloodmagic:corrosivecrystal' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             ],
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of('botania:gaia_spreader'),
//             altar_type: 3,
//             duration: 720,
//             starlight: 6400,
//             pattern: ['_____', '_AAA_', '_BCD_', '_AAA_', '_____'],
//             key: {
//                 A: { item: 'botania:bifrost_perm' },
//                 B: { tag: 'forge:gems/dragonstone' },
//                 C: { item: 'botania:elven_spreader' },
//                 D: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             focus_constellation: 'naturesstarlight:naritis',
//             relay_inputs: [
//                 { item: 'mythicbotany:dream_cherry' },
//                 { item: 'botania:life_essence' },
//                 { item: 'mythicbotany:midgard_rune' },
//                 { item: 'botania:life_essence' },
//                 { item: 'naturesaura:ancient_sapling' },
//                 { item: 'botania:life_essence' },
//                 { item: 'mythicbotany:midgard_rune' },
//                 { item: 'botania:life_essence' }
//             ],
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}gaia_spreader`
//         },
//         {
//             output: Item.of('2x mekanism:solar_neutron_activator'),
//             altar_type: 3,
//             duration: 720,
//             starlight: 7500,
//             pattern: ['A___A', 'BAAAB', 'CBBBC', '_CCC_', 'DEFED'],
//             key: {
//                 A: { item: 'kubejs:observatory_lens' },
//                 B: { item: 'powah:solar_panel_niotic' },
//                 C: { item: 'mekanism:hdpe_sheet' },
//                 D: { tag: 'forge:plates/enderium' },
//                 E: { tag: 'forge:circuits/elite' },
//                 F: { tag: 'industrialforegoing:machine_frame/advanced' }
//             },
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             relay_inputs: [
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'occultism:crushed_end_stone' },
//                 { item: 'occultism:iesnium_dust' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'occultism:crushed_end_stone' },
//                 { item: 'occultism:iesnium_dust' }
//             ],
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: 'mekanism:solar_neutron_activator'
//         },
//         {
//             output: Item.of(/* 'masterfulmachinery:' */ 'kubejs:replaceme', 1),
//             pattern: ['ABCBA', 'BADAB', 'CDEDC', 'BADAB', 'ABCBA'],
//             key: {
//                 A: { tag: 'forge:dusts/starmetal' },
//                 B: { tag: 'forge:gems/niotic' },
//                 C: { item: 'bloodmagic:etherealslate' },
//                 D: { tag: 'forge:pellets/polonium' },
//                 E: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             relay_inputs: [
//                 { item: 'bloodmagic:steadfastcrystal' },
//                 { item: 'bloodmagic:steadfastcrystal' },
//                 { item: 'bloodmagic:steadfastcrystal' },
//                 { item: 'bloodmagic:steadfastcrystal' },
//                 { item: 'bloodmagic:steadfastcrystal' },
//                 { item: 'bloodmagic:steadfastcrystal' }
//             ],
//             altar_type: 3,
//             duration: 600,
//             starlight: 4800,
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}auto_iridescent_altar_starlight_port_astral_starlight_input`
//         },
//         {
//             output: Item.of('kubejs:worldshaper_handle'),
//             altar_type: 3,
//             duration: 600,
//             starlight: 7000,
//             pattern: ['AA___', 'ABA__', '_ACA_', '__ABA', '___AA'],
//             key: {
//                 A: { item: 'botania:dreamwood' },
//                 B: { item: 'kubejs:laputian_ingot' },
//                 C: { tag: 'botania:runes/vanaheim' }
//             },
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             relay_inputs: [
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'mythicbotany:dream_cherry' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'mythicbotany:dream_cherry' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'mythicbotany:dream_cherry' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'mythicbotany:dream_cherry' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'mythicbotany:dream_cherry' },
//                 { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 { item: 'mythicbotany:dream_cherry' }
//             ],
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}worldshaper_handle`
//         },
//         {
//             output: Item.of('kubejs:worldshaper_barrel'),
//             altar_type: 3,
//             duration: 600,
//             starlight: 7000,
//             pattern: ['_____', 'AAAAA', 'BCDEF', 'AAAAA', '_____'],
//             key: {
//                 A: { item: 'kubejs:laputian_ingot' },
//                 B: { item: 'botania:lens_gravity' },
//                 C: { item: 'botania:lens_influence' },
//                 D: { item: 'botania:lens_warp' },
//                 E: { item: 'mekanism:laser_tractor_beam' },
//                 F: { item: 'industrialforegoing:laser_drill' }
//             },
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             relay_inputs: [
//                 { item: 'bloodmagic:chargingrune' },
//                 { item: 'bloodmagic:dislocationrune' },
//                 { item: 'bloodmagic:accelerationrune' },
//                 { item: 'bloodmagic:chargingrune' },
//                 { item: 'bloodmagic:dislocationrune' },
//                 { item: 'bloodmagic:accelerationrune' },
//                 { item: 'bloodmagic:chargingrune' },
//                 { item: 'bloodmagic:dislocationrune' },
//                 { item: 'bloodmagic:accelerationrune' }
//             ],
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}worldshaper_barrel`
//         },
//         {
//             output: Item.of('create:handheld_worldshaper'),
//             altar_type: 3,
//             duration: 1200,
//             starlight: 7000,
//             pattern: ['_____', '_AAB_', '___C_', '_____', '_____'],
//             key: {
//                 A: { item: 'kubejs:worldshaper_barrel' },
//                 B: { item: 'kubejs:worldshaper_cog' },
//                 C: { item: 'kubejs:worldshaper_handle' }
//             },
//             focus_constellation: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             relay_inputs: [
//                 { item: 'kubejs:automation_mastery_token' },
//                 { item: 'kubejs:botanical_mastery_token' },
//                 { item: 'kubejs:engineering_mastery_token' },
//                 { item: 'kubejs:astronomy_mastery_token' },
//                 { item: 'kubejs:energistics_mastery_token' },
//                 { item: 'kubejs:alchemy_mastery_token' },
//                 { item: 'kubejs:dimensional_mastery_token' },
//                 { item: 'kubejs:ritual_mastery_token' },
//                 { item: 'kubejs:battle_mastery_token' },
//                 { item: 'kubejs:aura_mastery_token' },
//                 { item: 'kubejs:excavation_mastery_token' },
//                 { item: 'kubejs:culinary_mastery_token' }
//             ],
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}handheld_worldshaper`
//         }
//     ]

//     recipes.forEach((recipe) => {
//         let constructed_recipe = {
//             type: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             altar_type: recipe.altar_type,
//             duration: recipe.duration,
//             starlight: recipe.starlight,
//             pattern: recipe.pattern,
//             key: recipe.key,
//             output: [recipe.output.toResultJson()],
//             effects: recipe.effects
//         }

//         if (recipe.relay_inputs) {
//             constructed_recipe.relay_inputs = recipe.relay_inputs
//         }
//         if (recipe.focus_constellation) {
//             constructed_recipe.focus_constellation = recipe.focus_constellation
//         }
//         if (recipe.recipe_class) {
//             constructed_recipe.recipe_class = recipe.recipe_class
//         }

//         event.custom(constructed_recipe).id(recipe.id)
//     })
// })
