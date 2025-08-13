ServerEvents.recipes(e => {
    // load datagen with item ids in unified tags to replace them with prefered emendatus materials
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
            e.replaceOutput({ output: itemId }, itemId, `#${tagId}`)
            e.remove({ output: itemId })
        }
    }

    for (let matObj of Object.entries(global.emendatus_mats)) {
        let material = matObj[0]
        e.remove({ output: `emendatus:${material}_block`, mod: 'tconstruct'})
        e.remove({ output: `emendatus:${material}_ingot`, mod: 'tconstruct'})
        e.remove({ output: `emendatus:${material}_nugget`, mod: 'tconstruct'})
        if (Item.exists(`emendatus:${material}_ingot`) && Item.exists(`emendatus:${material}_block`)) {
            e.shapeless(`emendatus:${material}_block`, [`9x emendatus:${material}_ingot`]).id(`emendatus:shaped/${material}_block`);
            e.shapeless(`9x emendatus:${material}_ingot`, `emendatus:${material}_block`).id(`emendatus:shaped/${material}_ingot_from_block`);
        }
        if (Item.exists(`emendatus:${material}_ingot`) && Item.exists(`emendatus:${material}_nugget`)) {
            e.shapeless(`emendatus:${material}_ingot`, [`9x emendatus:${material}_nugget`]).id(`emendatus:shaped/${material}_ingot_from_nugget`);
            e.shapeless(`9x emendatus:${material}_nugget`, `emendatus:${material}_ingot`).id(`emendatus:shaped/${material}_nugget`);
        }
        if (Item.exists(`emendatus:${material}_gem`) && Item.exists(`emendatus:${material}_block`)) {
            e.shapeless(`emendatus:${material}_block`, [`9x emendatus:${material}_gem`]).id(`emendatus:shaped/${material}_block`);
            e.shapeless(`9x emendatus:${material}_gem`, `emendatus:${material}_block`).id(`emendatus:shaped/${material}_gem`);
        }
        if (Item.exists(`emendatus:raw_${material}`) && Item.exists(`emendatus:raw_${material}_block`)) {
            e.shapeless(`emendatus:raw_${material}_block`, [`9x emendatus:raw_${material}`]).id(`emendatus:shaped/raw_${material}_block`);
            e.shapeless(`9x emendatus:raw_${material}`, `emendatus:raw_${material}_block`).id(`emendatus:shaped/raw_${material}`);
        }
    }

    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]

        // TODO: make this work with gems + ingots lolmao
        // TODO: embers and magma crucible scrap melting
        // TODO: replace embers fluid outputs with tinkers if thats even possible in kjs god save me
        // TODO: unify alloying? maybe? or just keep it unique per method so they're all useful
        // TODO: wires
        let gemOrIngot = ''
        if (!validateTag('ingot', matName)) {
            gemOrIngot = 'ingot'
        } else if (!validateTag('gem', matName)) {
            gemOrIngot = 'gem'
        }

        if (gemOrIngot) {
            smeltingRecipes(e, matObj[1], matName, gemOrIngot)
            plateRecipes(e, matObj[1], matName, gemOrIngot)
            rodRecipes(e, matObj[1], matName, gemOrIngot)
            gearRecipes(e, matObj[1], matName, gemOrIngot)
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

function validateFlag(flag, matObj) {
    return matObj.flags.all.includes(flag)
}

function validateTag(flag, matName) {
    return checkTag(flag, matName).itemIds.isEmpty()
}

const prefix = 'emendatus:'
const smeltable = ['dust', 'raw_ore', 'ore']

function smeltingRecipes(e, matObj, matName, inputFlagType) {
    // smelting recipes
    for (let flag of smeltable) {
        if (validateFlag(flag, matObj) && !validateTag(flag, matName)) {
            let input = '#' + getTagReplace(flag, matName)
            let outputId = '#' + getTagReplace(inputFlagType, matName)

            e.remove({ output: outputId, type: 'minecraft:smelting' })
            e.remove({ output: outputId, type: 'minecraft:blasting' })
            let smelt = e.blasting(outputId, input)
                .id(`${prefix}blasting/${matName}/${flag}_to_${inputFlagType}`)
            switch (flag) {
                case 'raw_ore': smelt.xp(0.7); break
                case 'ore': smelt.xp(2); break
            }
        }
    }

    if (validateFlag(inputFlagType, matObj)) {
        let itemTag = getTagReplace(inputFlagType, matName)
        let fluidAmt = 90
        if (inputFlagType == 'gem') { fluidAmt = 100 }
        // scrap melting
        if (Fluid.exists(`tconstruct:molten_${matName}`)) {
            e.recipes.thermal.crucible(Fluid.of(`tconstruct:molten_${matName}`, fluidAmt), `#${itemTag}`, 0, 2000)
                .id(`${prefix}thermal/crucible/${matName}_${inputFlagType}`)
            embersMelting(e, Fluid.of(`tconstruct:molten_${matName}`, fluidAmt), `forge:${inputFlagType}s/${matName}`)
        }
    }
}

function plateRecipes(e, matObj, matName, inputFlagType) {
    if (validateFlag('plate', matObj)) {
        let input = '#' + getTagReplace(inputFlagType, matName)
        let output = prefix + getFlagReplace('plate', matName)

        // fluid recipes
        if (Fluid.exists(`tconstruct:molten_${matName}`)) {
            let fluidAmt = 90
            if (inputFlagType == 'gem') { fluidAmt = 100 }
            e.recipes.thermal.chiller(output, ['tconstruct:plate_cast', Fluid.of(`tconstruct:molten_${matName}`, fluidAmt)])
                .id(`${prefix}thermal/chiller/${matName}_plate`)

            e.recipes.thermal.crucible(Fluid.of(`tconstruct:molten_${matName}`, fluidAmt), '#' + getTagReplace('plate', matName), 0, 2000)
                .id(`${prefix}thermal/crucible/${matName}_plate`)

            embersMelting(e, Fluid.of(`tconstruct:molten_${matName}`, fluidAmt), `forge:plates/${matName}`)
        }

        e.remove({ output: output, type: 'create:pressing' })
        e.recipes.create.pressing(Item.of(output), input)
            .id(`${prefix}create/pressing/${matName}_plate`)

        e.remove({ output: output, type: 'thermal:press' })
        e.recipes.thermal.press(output, input)
            .id(`${prefix}thermal/press/${matName}_plate`)

        e.remove({ output: output, type: 'immersiveengineering:metal_press' })
        e.recipes.immersiveengineering.metal_press(`4x ${output}`, `4x ${input}`, 'immersiveengineering:mold_plate')
            .id(`${prefix}immersiveengineering/metalpress/${matName}_plate`)

        e.remove({ output: output, type: 'createdieselgenerators:hammering' })
        e.custom({
            type: "createdieselgenerators:hammering",
            ingredients: [{ tag: getTagReplace(inputFlagType, matName) }],
            results: [{ item: output }]
        }).id(`${prefix}createdieselgenerators/hammering/${matName}_plate`)

        e.remove({ output: output, type: 'immersiveengineering:hammer' })

        e.shaped(output, [
            'H  ',
            'I  ',
            'I  ',
        ], {
            H: 'immersiveengineering:hammer',
            I: input
        }).id(`${prefix}hammer/${matName}_plate`)
    }
}

function rodRecipes(e, matObj, matName, inputFlagType) {
    if (validateFlag('rod', matObj)) {
        let input = '#' + getTagReplace(inputFlagType, matName)
        let output = prefix + getFlagReplace('rod', matName)
        // recipes using fluid
        if (Fluid.exists(`tconstruct:molten_${matName}`)) {
            let fluidAmt = 45
            if (inputFlagType == 'gem') { fluidAmt = 50 }
            e.recipes.thermal.chiller(output, ['tconstruct:rod_cast', Fluid.of(`tconstruct:molten_${matName}`, 45)])
                .id(`${prefix}thermal/chiller/${matName}_rod`)

            e.recipes.thermal.crucible(Fluid.of(`tconstruct:molten_${matName}`, 45), '#' + getTagReplace('rod', matName), 0, 1000)
                .id(`${prefix}thermal/crucible/${matName}_rod`)

            embersMelting(e, Fluid.of(`tconstruct:molten_${matName}`, fluidAmt), `forge:rods/${matName}`)
        }

        e.remove({ output: output, type: 'thermal:press' })
        e.recipes.thermal.press(`2x ${output}`, [input, 'immersiveengineering:mold_rod'])
            .id(`${prefix}thermal/press/${matName}_rod`)

        e.remove({ output: output, type: 'immersiveengineering:metal_press' })
        e.recipes.immersiveengineering.metal_press(`8x ${output}`, `4x ${input}`, 'immersiveengineering:mold_rod')
            .id(`${prefix}immersiveengineering/metalpress/${matName}_rod`)

        e.remove({ output: output, type: 'createaddition:rolling' })
        e.custom({
            type: "createaddition:rolling",
            input: { tag: getTagReplace(inputFlagType, matName) },
            result: { item: output, count: 2 }
        }).id(`${prefix}createaddition/rolling/${matName}_rod`)

        e.remove({ output: output, type: 'createdieselgenerators:wire_cutting' })
        e.custom({
            type: "createdieselgenerators:wire_cutting",
            ingredients: [{ tag: getTagReplace(inputFlagType, matName) }],
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
}

function gearRecipes(e, matObj, matName, inputFlagType) {
    if (validateFlag('gear', matObj)) {
        let input = '#' + getTagReplace(inputFlagType, matName)
        let output = prefix + getFlagReplace('gear', matName)
        // recipes using fluid
        if (Fluid.exists(`tconstruct:molten_${matName}`)) {
            let fluidAmt = 360
            if (inputFlagType == 'gem') { fluidAmt = 400 }
            e.recipes.thermal.chiller(output, ['tconstruct:gear_cast', Fluid.of(`tconstruct:molten_${matName}`, fluidAmt)])
                .id(`${prefix}thermal/chiller/${matName}_gear`)

            embersStamping(e, output, { fluid: `tconstruct:molten_${matName}`, amount: fluidAmt }, 'embers:gear_stamp')

            e.recipes.thermal.crucible(Fluid.of(`tconstruct:molten_${matName}`, fluidAmt), '#' + getTagReplace('gear', matName), 0, 8000)
                .id(`${prefix}thermal/crucible/${matName}_gear`)

            embersMelting(e, Fluid.of(`tconstruct:molten_${matName}`, fluidAmt), `forge:gears/${matName}`)
        }
        e.remove({ output: output, type: 'thermal:press' })
        e.recipes.thermal.press(output, [`4x ${input}`, 'immersiveengineering:mold_gear'])
            .id(`${prefix}thermal/press/${matName}_gear`)

        e.remove({ output: output, type: 'immersiveengineering:metal_press' })
        e.recipes.immersiveengineering.metal_press(`4x ${output}`, `16x ${input}`, 'immersiveengineering:mold_gear')
            .id(`${prefix}immersiveengineering/metalpress/${matName}_gear`)

        e.shaped(output, [
            'NIN',
            "IPI",
            'NIN',
        ], {
            N: '#forge:nuggets/aluminum',
            I: input,
            P: '#forge:plates/iron_tin'
        }).id(`${prefix}shaped/${matName}_gear`)
    }
}

function embersMelting(e, output, input) {
    output = Fluid.of(output)
    input = input.includes('/') ? { tag: input } : { item: input }
    e.custom({
        type: "embers:melting",
        input: input,
        output: {
            amount: output.amount,
            fluid: output.id
        }
    }).id(`${prefix}embers/melting/${input.tag ? input.tag.split(':')[1] : input.item.split(':')[1]}`)
}

function embersStamping(e, itemOutput, fluidInput, stamp) {
    itemOutput = Item.of(itemOutput)
    e.custom({
        type: "embers:stamping",
        fluid: fluidInput,
        output: itemOutput,
        stamp: {
            item: stamp
        }
    }).id(`${prefix}embers/stamping/${itemOutput.id.split(':')[1]}`)
}