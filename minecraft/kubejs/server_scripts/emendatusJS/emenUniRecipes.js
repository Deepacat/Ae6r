ServerEvents.recipes(e => {
    for (let matObj of Object.entries(global.emendatus_mats)) {
        let material = matObj[0]
        if (Item.exists(`emendatus:${material}_ingot`) && Item.exists(`emendatus:${material}_block`)) {
            e.shapeless(`emendatus:${material}_block`, [`9x emendatus:${material}_ingot`]).id(`ico:unification/unify_materials/emendatus_base/${material}_block`);
            e.shapeless(`9x emendatus:${material}_ingot`, `emendatus:${material}_block`).id(`ico:unification/unify_materials/emendatus_base/${material}_ingot_from_block`);
        }
        if (Item.exists(`emendatus:${material}_ingot`) && Item.exists(`emendatus:${material}_nugget`)) {
            e.shapeless(`emendatus:${material}_ingot`, [`9x emendatus:${material}_nugget`]).id(`ico:unification/unify_materials/emendatus_base/${material}_ingot_from_nugget`);
            e.shapeless(`9x emendatus:${material}_nugget`, `emendatus:${material}_ingot`).id(`ico:unification/unify_materials/emendatus_base/${material}_nugget`);
        }
        if (Item.exists(`emendatus:${material}_gem`) && Item.exists(`emendatus:${material}_block`)) {
            e.shapeless(`emendatus:${material}_block`, [`9x emendatus:${material}_gem`]).id(`ico:unification/unify_materials/emendatus_base/${material}_block`);
            e.shapeless(`9x emendatus:${material}_gem`, `emendatus:${material}_block`).id(`ico:unification/unify_materials/emendatus_base/${material}_gem`);
        }
        if (Item.exists(`emendatus:raw_${material}`) && Item.exists(`emendatus:raw_${material}_block`)) {
            e.shapeless(`emendatus:raw_${material}_block`, [`9x emendatus:raw_${material}`]).id(`ico:unification/unify_materials/emendatus_base/raw_${material}_block`);
            e.shapeless(`9x emendatus:raw_${material}`, `emendatus:raw_${material}_block`).id(`ico:unification/unify_materials/emendatus_base/raw_${material}`);
        }
    }

    /*     // load datagen with item ids in unified tags to replace them with prefered emendatus materials
        let unifData = JsonIO.read('kubejs/datagen/unify.json')
        for (let tagId in unifData) {
            for (let itemId of unifData[tagId]) {
                if (itemId.includes('emendatus')) {
                    // e.replaceInput({ input: `#${tagId}` }, `#${tagId}`, itemId)
                    // e.replaceOutput({ output: `#${tagId}` }, `#${tagId}`, itemId)
                    continue
                }
    
                // while replacing the in and output with tags DOES fix alot of unification, I'd prefer
                // to make recipe gen for my own recipes instead, which needs to be done anyway
                // e.replaceInput({ input: itemId }, itemId, `#${tagId}`)
                // e.replaceOutput({ output: itemId}, itemId, `#${tagId}`)
    
                e.remove({ output: itemId })
            }
        } */
})

ServerEvents.recipes(e => {
    const prefix = 'emendatus:'
    const smeltable = ['dust', 'ore', 'raw_ore']

    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]

        for (let flag of smeltable) {
            // smelting recipes
            if (matObj[1].flags.item.includes('ingot') && !checkTag(flag, matName).itemIds.isEmpty()) {
                console.log(`${flag} of ${matName} is not empty`)
                let input = '#' + getTagReplace(flag, matName)
                let outIngot = '#' + getTagReplace('ingot', matName)

                e.smelting(outIngot, input).xp(0.7)
                    .id(`${prefix}smelting/${matName}/${flag}_to_ingot`)
            }
        }

        // check if ingot exists for material, using tag instead of replaceable so that vanilla ingots work
        // TODO: make this work with gems + ingots lolmao
        // TODO: embers and magma crucible scrap melting
        // TODO: replace embers fluid outputs with tinkers if thats even possible in kjs god save me
        // TODO: unify alloying? maybe? or just keep it unique per method so they're all useful
        if (!checkTag('ingot', matName).itemIds.isEmpty()) {
            // plate recipes
            if (matObj[1].flags.item.includes('plate')) {
                let input = '#' + getTagReplace('ingot', matName)
                let output = prefix + getFlagReplace('plate', matName)

                if (Fluid.exists(`tconstruct:molten_${matName}`)) {
                    e.recipes.thermal.chiller(output, ['tconstruct:plate_cast', Fluid.of(`tconstruct:molten_${matName}`, 90)])
                        .id(`${prefix}thermal/chiller/${matName}_plate`)
                }
                e.recipes.create.pressing(Item.of(output), input)
                    .id(`${prefix}create/pressing/${matName}_plate`)
                e.recipes.thermal.press(output, input)
                    .id(`${prefix}thermal/press/${matName}_plate`)
                e.recipes.immersiveengineering.metal_press(`4x ${output}`, `4x ${input}`, 'immersiveengineering:mold_plate')
                    .id(`${prefix}immersiveengineering/metalpress/${matName}_plate`)
                e.custom({
                    type: "createdieselgenerators:hammering",
                    ingredients: [{ tag: getTagReplace('ingot', matName) }],
                    results: [{ item: output }]
                }).id(`${prefix}createdieselgenerators/hammering/${matName}_plate`)
                e.shaped(output, [
                    'H  ',
                    'I  ',
                    'I  ',
                ], {
                    H: 'immersiveengineering:hammer',
                    I: input
                }).id(`${prefix}hammer/${matName}_plate`)
            }

            // rod recipes
            if (matObj[1].flags.item.includes('rod')) {
                let input = '#' + getTagReplace('ingot', matName)
                let output = prefix + getFlagReplace('rod', matName)

                if (Fluid.exists(`tconstruct:molten_${matName}`)) {
                    e.recipes.thermal.chiller(output, ['tconstruct:rod_cast', Fluid.of(`tconstruct:molten_${matName}`, 45)])
                        .id(`${prefix}thermal/chiller/${matName}_rod`)
                }
                e.recipes.thermal.press(`2x ${output}`, [input, 'immersiveengineering:mold_rod'])
                    .id(`${prefix}thermal/press/${matName}_rod`)
                e.recipes.immersiveengineering.metal_press(`8x ${output}`, `4x ${input}`, 'immersiveengineering:mold_rod')
                    .id(`${prefix}immersiveengineering/metalpress/${matName}_rod`)
                e.custom({
                    type: "createaddition:rolling",
                    input: { tag: getTagReplace('ingot', matName) },
                    result: { item: output, count: 2 }
                }).id(`${prefix}createaddition/rolling/${matName}_rod`)
                e.custom({
                    type: "createdieselgenerators:wire_cutting",
                    ingredients: [{ tag: getTagReplace('ingot', matName) }],
                    results: [{ item: output, count: 2 }]
                }).id(`${prefix}createdieselgenerators/wire_cutting/${matName}_rod`)
                e.shaped(`2x ${output}`, [
                    'IH ',
                    'I  '
                ], {
                    H: 'immersiveengineering:hammer',
                    I: input
                }).id(`${prefix}hammer/${matName}_rod`)
            }

            // gear recipes
            if (matObj[1].flags.item.includes('gear')) {
                let input = '#' + getTagReplace('ingot', matName)
                let output = prefix + getFlagReplace('gear', matName)

                if (Fluid.exists(`tconstruct:molten_${matName}`)) {
                    e.recipes.thermal.chiller(output, ['tconstruct:gear_cast', Fluid.of(`tconstruct:molten_${matName}`, 360)])
                        .id(`${prefix}thermal/chiller/${matName}_gear`)
                    e.custom({
                        type: "embers:stamping",
                        fluid: {
                            amount: 360,
                            tag: `forge:molten_${matName}`
                        },
                        output: {
                            tag: `forge:gears/${matName}`
                        },
                        stamp: {
                            item: "embers:gear_stamp"
                        }
                    }).id(`${prefix}embers/stamping/${matName}_gear`)
                }
                e.recipes.thermal.press(output, [`4x ${input}`, 'immersiveengineering:mold_gear'])
                    .id(`${prefix}thermal/press/${matName}_gear`)
                e.recipes.immersiveengineering.metal_press(`4x ${output}`, `16x ${input}`, 'immersiveengineering:mold_gear')
                    .id(`${prefix}immersiveengineering/metalpress/${matName}_gear`)
                e.shaped(output, [
                    'NIN',
                    "IPI",
                    'NIN',
                ], {
                    N: '#forge:nuggets/aluminum',
                    I: input,
                    P: '#forge:plates/iron'
                }).id(`${prefix}shaped/${matName}_gear`)
            }
            // TODO: wires
            if (true) {

            }
        }
    }
})

function getFlagReplace(flagType, material) {
    return global.emenGetReplace(global.emendatus_all_types[flagType].replacer, material)
}

function getTagReplace(tag, material) {
    return global.emenGetReplace(global.emendatus_all_types[tag].tags[0], material)
}

function checkTag(tag, material) {
    let contents = Ingredient.of('#' + getTagReplace(tag, material))
    return contents
}