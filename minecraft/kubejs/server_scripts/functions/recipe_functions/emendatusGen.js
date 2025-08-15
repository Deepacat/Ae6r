// Recipe helper functions used for emendatus recipe generation

const prefix = 'emendatus:'
const smeltable = ['dust', 'raw_ore', 'ore']

// smelting recipe gen for emendatus
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
// plate recipe gen for emendatus
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
// rod recipe gen for emendatus
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
// gear recipe gen for emendatus
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