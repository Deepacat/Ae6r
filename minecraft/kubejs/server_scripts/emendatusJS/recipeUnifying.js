//priority: 900
ServerEvents.recipes(e => {
    // replace output types
    materialsToUnify.forEach((material) => {
        typesToUnify.forEach((type) => {
            if (!entryIsBlacklisted(material, type)) {
                var tagString = `#forge:${type}s/${material}`
                var tag = Ingredient.of(tagString)
                if (tag.stacks.size() > 1) {
                    var prefItem = getPreferredItemInTag(tag)
                    e.replaceOutput({}, tagString, prefItem)
                }
            }
        })
    })

    // generating and removing un unified recipes
    for (let materialName of materialsToUnify) {
        // general meterial types
        let block = getTaggedItem(`forge:storage_blocks/${materialName}`)
        let ingot = getTaggedItem(`forge:ingots/${materialName}`)
        let nugget = getTaggedItem(`forge:nuggets/${materialName}`)
        // gem specific
        let gem = getTaggedItem(`forge:gems/${materialName}`)
        let chunk = getTaggedItem(`forge:chunks/${materialName}`)
        // general oreproc
        let ore = getTaggedItem(`forge:ores/${materialName}`) /* getting *one* item of ore is kinda problematic, but .tag works for most things prolly */
        let raw_ore = getTaggedItem(`forge:raw_materials/${materialName}`)
        let raw_ore_block = getTaggedItem(`forge:storage_blocks/raw_${materialName}`)
        let crushed_ore = getTaggedItem(`forge:crushed_ores/${materialName}`)
        let dust = getTaggedItem(`forge:dusts/${materialName}`)
        let shard = getTaggedItem(`forge:shards/${materialName}`)
        let smeltable = [raw_ore, raw_ore_block, crushed_ore, dust]
        // mekanism oreproc
        let mek_crystal = getTaggedItem(`forge:crystals/${materialName}`)
        let mek_shard = getTaggedItem(`forge:shards/${materialName}`)
        let mek_clump = getTaggedItem(`forge:clumps/${materialName}`)
        let mek_dirty_dust = getTaggedItem(`forge:dirty_dusts/${materialName}`)
        // bloodmagic oreproc
        let fragment = getTaggedItem(`forge:fragments/${materialName}`)
        let gravel = getTaggedItem(`forge:gravels/${materialName}`)
        // enigmatica magic oreproc
        // var mana_cluster = getPreferredItemInTag(Ingredient.of(`#enigmatica:mana_clusters/${material}`)).id;
        // var fulminated_cluster = getPreferredItemInTag(Ingredient.of(`#enigmatica:fulminated_clusters/${material}`)).id;
        // var levigated_material = getPreferredItemInTag(Ingredient.of(`#enigmatica:levigated_materials/${material}`)).id;
        // var crystalline_sliver = getPreferredItemInTag(Ingredient.of(`#enigmatica:crystalline_slivers/${material}`)).id;
        // components
        let gear = getTaggedItem(`forge:gears/${materialName}`)
        let rod = getTaggedItem(`forge:rods/${materialName}`)
        let plate = getTaggedItem(`forge:plates/${materialName}`)
        let coin = getTaggedItem(`forge:coins/${materialName}`)

        let fluid = getFluid(materialName)

        let gemOrIngot = gem || ingot

        smeltingRecipes(e, materialName, gemOrIngot, ore, smeltable)
        plateRecipes(e, materialName, gemOrIngot, plate, fluid)
        rodRecipes(e, materialName, gemOrIngot, rod, fluid)
        gearRecipes(e, materialName, gemOrIngot, gear, fluid)
    }
})

function smeltingRecipes(e, materialName, gemOrIngot, ore, smeltable) {
    // added to an empty string to convert to a normal js string instead of java
    if (!gemOrIngot) { return }

    let gemOrIngotItem = gemOrIngot.item.id + ''

    let smeltableItems = []
    for (let smelt of smeltable) {
        if (smelt) { smeltableItems.push(smelt.item.id) }
    }
    if (ore) { smeltableItems.push(`#${ore.tag}`) }

    e.remove({ output: gemOrIngotItem, type: 'minecraft:smelting' })
    e.remove({ output: gemOrIngotItem, type: 'minecraft:blasting' })

    for (let toSmelt of smeltableItems) {
        if (!toSmelt) { continue }
        let smelt = e.blasting(gemOrIngotItem, toSmelt)
            .id(`emendatus:blasting/${toSmelt.split(':')[1]}_to_${materialName}_ingot`)
        if (toSmelt.includes('raw') && !toSmelt.includes('raw_redstone')) { smelt.xp(0.7) }
        if (toSmelt.includes('ores')) { smelt.xp(2) }
    }
}

function plateRecipes(e, materialName, gemOrIngot, plate, fluid) {
    if (!(gemOrIngot && plate)) { return }
    // added to an empty string to convert to a normal js string instead of java
    let gemOrIngotItem = gemOrIngot.item.id + ''
    let plateItem = plate.item.id + ''

    e.remove({ output: plate })

    if (fluid) {
        let fluidAmt = getFluidAmountForType(gemOrIngot.tag)

        e.recipes.thermal.chiller(plateItem, ['tconstruct:plate_cast', Fluid.of(fluid, fluidAmt)])
            .id(`emendatus:thermal/chiller/${materialName}_plate`)
        embersStamping(e, plateItem, makeFluidJson(Fluid.of(fluid, fluidAmt)), 'embers:plate_stamp')
            .id(`emendatus:embers/stamping/${materialName}_plate`)
    }
    e.recipes.create.pressing(plateItem, gemOrIngotItem)
        .id(`emendatus:create/pressing/${materialName}_plate`)
    e.recipes.thermal.press(plateItem, gemOrIngotItem)
        .id(`emendatus:thermal/press/${materialName}_plate`)
    e.recipes.immersiveengineering.metal_press(`4x ${plateItem}`, `4x ${gemOrIngotItem}`, 'immersiveengineering:mold_plate')
        .id(`emendatus:immersiveengineering/metalpress/${materialName}_plate`)

    e.custom({
        type: "createdieselgenerators:hammering",
        ingredients: makeJsonIngredients(gemOrIngotItem),
        results: makeJsonIngredients(plateItem)
    }).id(`emendatus:createdieselgenerators/hammering/${materialName}_plate`)

    e.shaped(plateItem, [
        'H  ',
        'I  ',
        'I  ',
    ], {
        H: 'immersiveengineering:hammer',
        I: gemOrIngotItem
    }).id(`emendatus:hammer/${materialName}_plate`)
}

// rod recipe gen for emendatus
function rodRecipes(e, materialName, gemOrIngot, rod, fluid) {
    if (!(gemOrIngot && rod)) { return }
    let gemOrIngotItem = gemOrIngot.item.id + ''
    let rodItem = rod.item.id + ''

    e.remove({ output: rod })

    if (fluid) {
        let fluidAmt = getFluidAmountForType(gemOrIngot.tag) / 2

        e.recipes.thermal.chiller(rodItem, ['tconstruct:plate_cast', Fluid.of(fluid, fluidAmt)])
            .id(`emendatus:thermal/chiller/${materialName}_rod`)
        embersStamping(e, rodItem, makeFluidJson(Fluid.of(fluid, fluidAmt)), 'immersiveengineering:mold_rod')
            .id(`emendatus:embers/stamping/${materialName}_rod`)
    }

    e.recipes.thermal.press(`2x ${rodItem}`, [gemOrIngotItem, 'immersiveengineering:mold_rod'])
        .id(`emendatus:thermal/press/${materialName}_rod`)
    e.recipes.immersiveengineering.metal_press(`8x ${rodItem}`, `4x ${gemOrIngotItem}`, 'immersiveengineering:mold_rod')
        .id(`emendatus:immersiveengineering/metalpress/${materialName}_rod`)

    e.custom({
        type: "createaddition:rolling",
        input: makeJsonIngredient(gemOrIngotItem),
        result: { item: rodItem, count: 2 }
    }).id(`emendatus:createaddition/rolling/${materialName}_rod`)

    e.custom({
        type: "createdieselgenerators:wire_cutting",
        ingredients: makeJsonIngredients(gemOrIngotItem),
        results: [{ item: rodItem, count: 2 }]
    }).id(`emendatus:createdieselgenerators/wire_cutting/${materialName}_rod`)

    e.shaped(`2x ${rodItem}`, [
        'IH ',
        'I  '
    ], {
        H: 'immersiveengineering:hammer',
        I: gemOrIngotItem
    }).id(`emendatus:hammer/${materialName}_rod`)
}

// gear recipe gen for emendatus
function gearRecipes(e, materialName, gemOrIngot, gear, fluid) {
    if (!(gemOrIngot && gear)) { return }

    let gemOrIngotItem = gemOrIngot.item.id + ''
    let gearItem = gear.item.id + ''

    e.remove({ output: gearItem })

    if (fluid) {
        let fluidAmt = getFluidAmountForType(gemOrIngot.tag) * 4

        e.recipes.thermal.chiller(gearItem, ['tconstruct:plate_cast', Fluid.of(fluid, fluidAmt)])
            .id(`emendatus:thermal/chiller/${materialName}_gear`)
        embersStamping(e, gearItem, makeFluidJson(Fluid.of(fluid, fluidAmt)), 'embers:gear_stamp')
            .id(`emendatus:embers/stamping/${materialName}_gear`)
    }

    e.recipes.thermal.press(gearItem, [`4x ${gemOrIngotItem}`, 'immersiveengineering:mold_gear'])
        .id(`emendatus:thermal/press/${materialName}_gear`)
    e.recipes.immersiveengineering.metal_press(`4x ${gearItem}`, `16x ${gemOrIngotItem}`, 'immersiveengineering:mold_gear')
        .id(`emendatus:immersiveengineering/metalpress/${materialName}_gear`)

    e.shaped(gearItem, [
        'NIN',
        "IPI",
        'NIN',
    ], {
        N: '#forge:nuggets/aluminum',
        I: gemOrIngotItem,
        P: '#forge:plates/iron_tin'
    }).id(`emendatus:shaped/${materialName}_gear`)

}