// ServerEvents.recipes(event => {
//     /*
//     Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level

//     Celestial Altar
//     altar_type: 2
//     max_starlight: 4000
//     */


//     const id_prefix = 'enigmatica:expert/astralsorcery/altar/'
//     const recipes = [
//         /// Celestial Altar Recipes
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 1),
//             pattern: ['BC_CB', 'DEFED', '_JAK_', 'DGHGD', 'BC_CB'],
//             key: {
//                 A: {
//                     type: /*'astralsorcery:'*/ 'kubejs:replaceme',
//                     hasToBeAttuned: false,
//                     hasToBeCelestial: true,
//                     canBeAttuned: true,
//                     canBeCelestialCrystal: true
//                 },
//                 B: { item: 'create:shadow_steel_casing' },
//                 C: { item: 'eidolon:shadow_gem' },
//                 D: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 E: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 F: { tag: 'botania:runes/asgard' },
//                 G: { item: 'bloodmagic:etherealslate' },
//                 H: { tag: 'botania:runes/niflheim' },
//                 J: { tag: 'botania:runes/alfheim' },
//                 K: { tag: 'botania:runes/midgard' }
//             },
//             altar_type: 2,
//             duration: 400,
//             starlight: 3500,
//             recipe_class: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             effects: [
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
//             output: Item.of('apotheosis:endshelf', 1),
//             pattern: ['AG__A', 'G_BC_', '_DED_', '_FB_G', 'A__GA'],
//             key: {
//                 A: { item: /*'betterendforge:'*/ 'kubejs:replaceme' },
//                 B: { tag: 'botania:runes/mana' },
//                 C: { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
//                 D: { tag: 'botania:runes/nidavellir' },
//                 E: { tag: 'forge:bookshelves' },
//                 F: { item: /*'betterendforge:'*/ 'kubejs:replaceme' },
//                 G: { item: 'bloodmagic:reagentvoid' }
//             },
//             altar_type: 2,
//             duration: 200,
//             starlight: 3000,
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}endshelf`
//         },
//         {
//             output: Item.of('mythicbotany:mana_infuser', 1),
//             pattern: ['AE_EB', 'EGHGE', '_IJI_', 'FKLKF', 'CF_FD'],
//             key: {
//                 A: { tag: 'botania:runes/spring' },
//                 B: { tag: 'botania:runes/summer' },
//                 C: { tag: 'botania:runes/winter' },
//                 D: { tag: 'botania:runes/autumn' },
//                 E: { tag: 'forge:ingots/refined_radiance' },
//                 F: { tag: 'forge:ingots/shadow_steel' },
//                 G: { tag: 'forge:ingots/elementium' },
//                 H: { tag: 'botania:runes/muspelheim' },
//                 I: { item: 'kubejs:firmament' },
//                 J: { tag: 'botania:runes/asgard' },
//                 K: { item: 'botania:glimmering_dreamwood' },
//                 L: { tag: 'botania:runes/niflheim' }
//             },
//             altar_type: 2,
//             duration: 400,
//             starlight: 3500,
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}mana_infuser`
//         },
//         {
//             output: Item.of('botania:flight_tiara', '{variant:0}'),
//             pattern: ['B___B', '_CDC_', '_EAE_', '_FEG_', 'B___B'],
//             key: {
//                 A: {
//                     type: /*'astralsorcery:'*/ 'kubejs:replaceme',
//                     hasToBeAttuned: true,
//                     hasToBeCelestial: false,
//                     canBeAttuned: true,
//                     canBeCelestialCrystal: true
//                 },
//                 B: { item: 'botania:life_essence' },
//                 C: { tag: 'botania:runes/mana' },
//                 D: { item: 'magicfeather:magicfeather' },
//                 E: { tag: 'forge:ingots/elementium' },
//                 F: { item: 'bloodmagic:airsigil' },
//                 G: { item: 'ars_nouveau:ritual_flight' }
//             },
//             altar_type: 2,
//             duration: 400,
//             starlight: 3500,
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}flight_tiara`
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 3),
//             altar_type: 2,
//             duration: 400,
//             starlight: 2000,
//             pattern: ['_S_S_', 'R_Q_R', '_ALA_', 'S_Q_S', 'R___R'],
//             key: {
//                 R: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 S: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 A: { item: 'bloodmagic:holy_water_anointment_l' },
//                 Q: { item: 'quark:pink_rune' },
//                 L: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 3),
//             altar_type: 2,
//             duration: 400,
//             starlight: 2000,
//             pattern: ['_S_S_', 'R_Q_R', '_ALA_', '_SQS_', 'R___R'],
//             key: {
//                 R: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 S: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 A: { item: 'bloodmagic:melee_anointment_l' },
//                 Q: { item: 'quark:red_rune' },
//                 L: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 3),
//             altar_type: 2,
//             duration: 400,
//             starlight: 2000,
//             pattern: ['_S_S_', 'S_Q_S', '_ALA_', 'R_Q_R', '_R_R_'],
//             key: {
//                 R: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 S: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 A: { item: 'bloodmagic:smelting_anointment_l' },
//                 Q: { item: 'quark:orange_rune' },
//                 L: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 3),
//             altar_type: 2,
//             duration: 400,
//             starlight: 2000,
//             pattern: ['R___R', 'RSQSR', '_ALA_', '_SQS_', '_____'],
//             key: {
//                 R: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 S: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 A: { item: 'bloodmagic:hidden_knowledge_anointment_l' },
//                 Q: { item: 'quark:yellow_rune' },
//                 L: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 3),
//             altar_type: 2,
//             duration: 400,
//             starlight: 2000,
//             pattern: ['_R_R_', 'R_Q_R', '_ALA_', '_SQS_', 'S___S'],
//             key: {
//                 R: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 S: { item: 'naturesaura:gold_powder' },
//                 A: { item: 'bloodmagic:fortune_anointment_l' },
//                 Q: { item: 'quark:lime_rune' },
//                 L: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 3),
//             altar_type: 2,
//             duration: 400,
//             starlight: 2000,
//             pattern: ['___R_', 'SSQR_', '_ALA_', '_RQSS', '_R___'],
//             key: {
//                 R: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 S: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 A: { item: 'bloodmagic:bow_velocity_anointment_l' },
//                 Q: { item: 'quark:light_blue_rune' },
//                 L: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 3),
//             altar_type: 2,
//             duration: 400,
//             starlight: 2000,
//             pattern: ['S___S', '_SQS_', '_ALA_', 'R_Q_R', '_R_R_'],
//             key: {
//                 R: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 S: { item: /*'atum:'*/ 'kubejs:replaceme' },
//                 A: { item: 'bloodmagic:silk_touch_anointment_l' },
//                 Q: { item: 'quark:purple_rune' },
//                 L: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of('botania:elven_spreader'),
//             pattern: ['_C_C_', 'CADAC', '_FEG_', 'CBDBC', '_C_C_'],
//             key: {
//                 A: { tag: 'botania:runes/air' },
//                 B: { tag: 'botania:runes/summer' },
//                 C: { item: 'botania:dreamwood' },
//                 D: { item: 'botania:glimmering_dreamwood' },
//                 E: { item: 'botania:spark' },
//                 F: { tag: 'forge:ingots/elementium' },
//                 G: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             altar_type: 2,
//             duration: 400,
//             starlight: 3500,
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}elven_spreader`
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
