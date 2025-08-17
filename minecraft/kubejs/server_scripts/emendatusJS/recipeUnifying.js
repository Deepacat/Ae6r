//priority: 900
ServerEvents.recipes(e => {
    // replace output types
    materialsToUnify.forEach((material) => {
        typesToUnify.forEach((type) => {
            if (!entryIsBlacklisted(material, type)) {
                var tagString = `#forge:${type}s/${material}`
                var tag = Ingredient.of(tagString)
                console.log(tag.itemIds)
                if (tag.stacks.size() > 1) {
                    var prefItem = getPreferredItemInTag(tag)
                    e.replaceOutput({}, tagString, prefItem)
                }
            }
        })
    })

    // generating and removing un unified recipes
    for (let materialName of materialsToUnify) {

        // getting *one* item of ore is kinda problematic
        // let ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`))

        let block = getPreferredItemInTag(Ingredient.of(`#forge:storage_blocks/${materialName}`))
        let ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${materialName}`))
        let nugget = getPreferredItemInTag(Ingredient.of(`#forge:nuggets/${materialName}`))

        let gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${materialName}`))
        let chunk = getPreferredItemInTag(Ingredient.of(`#forge:chunks/${materialName}`))

        let crushed_ore = getPreferredItemInTag(Ingredient.of(`#forge:crushed_ores/${materialName}`))
        let dust = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${materialName}`))
        let shard = getPreferredItemInTag(Ingredient.of(`#forge:shards/${materialName}`))

        let mek_crystal = getPreferredItemInTag(Ingredient.of(`#forge:crystals/${materialName}`))
        let mek_shard = getPreferredItemInTag(Ingredient.of(`#forge:shards/${materialName}`))
        let mek_clump = getPreferredItemInTag(Ingredient.of(`#forge:clumps/${materialName}`))
        let mek_dirty_dust = getPreferredItemInTag(Ingredient.of(`#forge:dirty_dusts/${materialName}`))

        let fragment = getPreferredItemInTag(Ingredient.of(`#forge:fragments/${materialName}`))
        let gravel = getPreferredItemInTag(Ingredient.of(`#forge:gravels/${materialName}`))

        let gear = getPreferredItemInTag(Ingredient.of(`#forge:gears/${materialName}`))
        let rod = getPreferredItemInTag(Ingredient.of(`#forge:rods/${materialName}`))
        let plate = getPreferredItemInTag(Ingredient.of(`#forge:plates/${materialName}`))

        // console.log(block, ingot, nugget, gem, chunk, crushed_ore, dust, shard, mek_crystal, mek_shard, mek_clump, mek_dirty_dust, fragment, gravel, gear, rod, plate)
        // let coin = getPreferredItemInTag(Ingredient.of(`#forge:coins/${material}`))

        let gemOrIngot = gem || ingot

        plateRecipes(e, materialName, gemOrIngot, plate)
        rodRecipes(e, materialName, gemOrIngot, rod)
        gearRecipes(e, materialName, gemOrIngot, gear)
    }
})

function plateRecipes(e, materialName, gemOrIngot, plate) {
    if (!(gemOrIngot && plate)) { return }
    // added to an empty string to convert to a normal js string instead of java
    gemOrIngot = gemOrIngot.id + ''
    plate = plate.id + ''

    e.remove({ output: plate })

    e.recipes.create.pressing(plate, gemOrIngot)
        .id(`emendatus:create/pressing/${materialName}_plate`)

    e.recipes.thermal.press(plate, gemOrIngot)
        .id(`emendatus:thermal/press/${materialName}_plate`)

    e.recipes.immersiveengineering.metal_press(`4x ${plate}`, `4x ${gemOrIngot}`, 'immersiveengineering:mold_plate')
        .id(`emendatus:immersiveengineering/metalpress/${materialName}_plate`)

    e.custom({
        type: "createdieselgenerators:hammering",
        ingredients: makeJsonIngredients(gemOrIngot),
        results: makeJsonIngredients(plate)
    }).id(`emendatus:createdieselgenerators/hammering/${materialName}_plate`)

    e.shaped(plate, [
        'H  ',
        'I  ',
        'I  ',
    ], {
        H: 'immersiveengineering:hammer',
        I: gemOrIngot
    }).id(`emendatus:hammer/${materialName}_plate`)
}
function plateCasting() {

}

// rod recipe gen for emendatus
function rodRecipes(e, materialName, gemOrIngot, rod) {
    if (!(gemOrIngot && rod)) { return }
    gemOrIngot = gemOrIngot.id + ''
    rod = rod.id + ''

    e.remove({ output: rod })

    e.recipes.thermal.press(`2x ${rod}`, [gemOrIngot, 'immersiveengineering:mold_rod'])
        .id(`emendatus:thermal/press/${materialName}_rod`)

    e.recipes.immersiveengineering.metal_press(`8x ${rod}`, `4x ${gemOrIngot}`, 'immersiveengineering:mold_rod')
        .id(`emendatus:immersiveengineering/metalpress/${materialName}_rod`)

    e.custom({
        type: "createaddition:rolling",
        input: makeJsonIngredients(gemOrIngot)[0],
        result: { item: rod, count: 2 }
    }).id(`emendatus:createaddition/rolling/${materialName}_rod`)

    e.custom({
        type: "createdieselgenerators:wire_cutting",
        ingredients: makeJsonIngredients(gemOrIngot),
        results: [{ item: rod, count: 2 }]
    }).id(`emendatus:createdieselgenerators/wire_cutting/${materialName}_rod`)

    e.shaped(`2x ${rod}`, [
        'IH ',
        'I  '
    ], {
        H: 'immersiveengineering:hammer',
        I: gemOrIngot
    }).id(`emendatus:hammer/${materialName}_rod`)
}

// if (Fluid.exists(`tconstruct:molten_${materialName}`)) {
//     let fluidAmt = 45
//     if (inputFlagType == 'gem') { fluidAmt = 50 }
//     e.recipes.thermal.chiller(output, ['tconstruct:rod_cast', Fluid.of(`tconstruct:molten_${materialName}`, 45)])
//         .id(`emendatus:thermal/chiller/${materialName}_rod`)

//     e.recipes.thermal.crucible(Fluid.of(`tconstruct:molten_${materialName}`, 45), '#' + getTagReplace('rod', materialName), 0, 1000)
//         .id(`emendatus:thermal/crucible/${materialName}_rod`)

//     embersMelting(e, Fluid.of(`tconstruct:molten_${materialName}`, fluidAmt), `forge:rods/${materialName}`)
// }


// gear recipe gen for emendatus
function gearRecipes(e, materialName, gemOrIngot, gear) {
    if (!(gemOrIngot && gear)) { return }

    gemOrIngot = gemOrIngot.id + ''
    gear = gear.id + ''

    e.remove({ output: gear })

    e.recipes.thermal.press(gear, [`4x ${gemOrIngot}`, 'immersiveengineering:mold_gear'])
        .id(`emendatus:thermal/press/${materialName}_gear`)

    e.remove({ output: gear, type: 'immersiveengineering:metal_press' })
    e.recipes.immersiveengineering.metal_press(`4x ${gear}`, `16x ${gemOrIngot}`, 'immersiveengineering:mold_gear')
        .id(`emendatus:immersiveengineering/metalpress/${materialName}_gear`)

    e.shaped(gear, [
        'NIN',
        "IPI",
        'NIN',
    ], {
        N: '#forge:nuggets/aluminum',
        I: gemOrIngot,
        P: '#forge:plates/iron_tin'
    }).id(`emendatus:shaped/${materialName}_gear`)

}
// if (Fluid.exists(`tconstruct:molten_${materialName}`)) {
//     let fluidAmt = 360
//     if (inputFlagType == 'gem') { fluidAmt = 400 }
//     e.recipes.thermal.chiller(output, ['tconstruct:gear_cast', Fluid.of(`tconstruct:molten_${materialName}`, fluidAmt)])
//         .id(`emendatus:thermal/chiller/${materialName}_gear`)

//     embersStamping(e, output, { fluid: `tconstruct:molten_${materialName}`, amount: fluidAmt }, 'embers:gear_stamp')

//     e.recipes.thermal.crucible(Fluid.of(`tconstruct:molten_${materialName}`, fluidAmt), '#' + getTagReplace('gear', materialName), 0, 8000)
//         .id(`emendatus:thermal/crucible/${materialName}_gear`)

//     embersMelting(e, Fluid.of(`tconstruct:molten_${materialName}`, fluidAmt), `forge:gears/${materialName}`)
// }