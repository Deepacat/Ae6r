//priority: 900
ServerEvents.recipes(e => {
    let itemUnifTagData = JsonIO.read('kubejs/datagen/itemTagUnificationData.json')
    if (!(itemUnifTagData == null)) {
        for (let tagObj of Object.entries(itemUnifTagData)) {
            if (tagObj[0].includes('ores')) { continue }
            e.replaceOutput({}, `#${tagObj[0]}`, tagObj[1].prefItem)
            for (let item of tagObj[1].toUnify) {
                if (item.includes('emendatus')) { continue }
                e.replaceOutput({}, item, tagObj[1].prefItem)
                e.replaceInput({}, item, tagObj[1].prefItem)
                e.remove({ output: item })
            }
        }
    }
    for (let recipe of e.findRecipes({ output: Fluid.of('embers:molten_brass')})){
        console.log(recipe)
        console.log(recipe.json)
    }
    // basically just wanted this for embers sake but embers isnt kubejs plugin so replaces dont work :p
    // let fluidUnifTagData = JsonIO.read('kubejs/datagen/fluidTagUnificationData.json')
    // if (!(fluidUnifTagData == null)) {
    //     for (let fluidObj of Object.entries(fluidUnifTagData)) {
    //         for (let fluidToUnify of fluidObj[1].toUnify) {
    //             console.log(`replacing ${fluidToUnify} with ${fluidObj[1].prefFluid}`)
    //             e.replaceOutput({}, Fluid.of(fluidToUnify), Fluid.of(fluidObj[1].prefFluid))
    //             e.replaceInput({}, Fluid.of(fluidToUnify), Fluid.of(fluidObj[1].prefFluid))
    //             e.remove({ output: Fluid.of(fluidToUnify) })
    //         }
    //     }
    // }


    // generating and removing un unified recipes
    for (let materialName of materialsToUnify) {
        let typesObj = {
            // general meterial types
            block: getTaggedItem(`forge:storage_blocks/${materialName}`),
            ingot: getTaggedItem(`forge:ingots/${materialName}`),
            nugget: getTaggedItem(`forge:nuggets/${materialName}`),
            // gem specific
            gem: getTaggedItem(`forge:gems/${materialName}`),
            chunk: getTaggedItem(`forge:chunks/${materialName}`),
            // general oreproc
            ore: getTaggedItem(`forge:ores/${materialName}`),
            raw_ore: getTaggedItem(`forge:raw_materials/${materialName}`),
            raw_ore_block: getTaggedItem(`forge:storage_blocks/raw_${materialName}`),
            crushed_ore: getTaggedItem(`forge:crushed_ores/${materialName}`),
            dust: getTaggedItem(`forge:dusts/${materialName}`),
            shard: getTaggedItem(`forge:shards/${materialName}`),
            // mekanism oreproc
            mek_crystal: getTaggedItem(`forge:crystals/${materialName}`),
            mek_shard: getTaggedItem(`forge:shards/${materialName}`),
            mek_clump: getTaggedItem(`forge:clumps/${materialName}`),
            // bloodmagic oreproc
            fragment: getTaggedItem(`forge:fragments/${materialName}`),
            gravel: getTaggedItem(`forge:gravels/${materialName}`),
            // enigmatica magic oreproc
            mana_cluster: getTaggedItem(`enigmatica:mana_clusters/${materialName}`),
            fulminated_cluster: getTaggedItem(`enigmatica:fulminated_clusters/${materialName}`),
            levigated_material: getTaggedItem(`enigmatica:levigated_materials/${materialName}`),
            crystalline_sliver: getTaggedItem(`enigmatica:crystalline_slivers/${materialName}`),
            // components
            gear: getTaggedItem(`forge:gears/${materialName}`),
            rod: getTaggedItem(`forge:rods/${materialName}`),
            plate: getTaggedItem(`forge:plates/${materialName}`),
            wire: getTaggedItem(`forge:wires/${materialName}`),
            coin: getTaggedItem(`forge:coins/${materialName}`),
            // special
            fluid: getFluid(materialName),
        }
        typesObj['gemOrIngot'] = typesObj.gem || typesObj.ingot
        typesObj['smeltable'] = [typesObj.raw_ore, typesObj.crushed_ore, typesObj.dust]

        smeltingRecipes(e, materialName, typesObj) // gemOrIngot, fluid, ore, smeltable
        plateRecipes(e, materialName, typesObj) // gemOrIngot, fluid, plate
        rodRecipes(e, materialName, typesObj) // gemOrIngot, fluid, rod
        gearRecipes(e, materialName, typesObj) // gemOrIngot, fluid, gear
        wireRecipes(e, materialName, typesObj)
        materialCompacting(e, materialName, typesObj)
        scrapMelting(e, materialName, typesObj)
        materialScrapping(e, materialName, typesObj)
        castingRecipes(e, materialName, typesObj)
    }
})

function smeltingXp(materialType, recipe) {
    if (/raw.*block/.test(materialType) && !materialType.includes('raw_redstone')) { recipe.xp(6); return }
    if (materialType.includes('raw') && !materialType.includes('raw_redstone')) { recipe.xp(0.7); return }
    if (materialType.includes('ores')) { recipe.xp(2); return }
}

function smeltingRecipes(e, materialName, typesObj) {
    // added to an empty string to convert to a normal js string instead of java
    if (!typesObj.gemOrIngot) { return }

    let gemOrIngotItem = typesObj.gemOrIngot.item.id + ''

    let smeltableItems = []
    for (let smelt of typesObj.smeltable) {
        if (smelt) { smeltableItems.push(smelt.item.id) }
    }
    if (typesObj.ore) { smeltableItems.push(`#${typesObj.ore.tag}`) }

    e.remove({ output: gemOrIngotItem, type: 'minecraft:smelting' })
    e.remove({ output: gemOrIngotItem, type: 'minecraft:blasting' })

    for (let toSmelt of smeltableItems) {
        if (!toSmelt) { continue }

        let blast = e.blasting(gemOrIngotItem, toSmelt)
            .id(`emendatus:blasting/${toSmelt.split(':')[1]}_to_${materialName}_ingot`)
        smeltingXp(toSmelt, blast)

        let furnace = e.recipes.thermal.furnace(gemOrIngotItem, toSmelt)
            .id(`emendatus:thermal/furnace/${toSmelt.split(':')[1]}_to_${materialName}_ingot`)
        smeltingXp(toSmelt, furnace)

        e.recipes.mekanism.smelting(gemOrIngotItem, toSmelt)
            .id(`emendatus:mekanism/smelting/${toSmelt.split(':')[1]}_to_${materialName}_ingot`)
    }

    if (typesObj.raw_ore_block && typesObj.block) {
        let toSmelt = typesObj.raw_ore_block.item.id
        let block = typesObj.block.item.id
        let blast = e.blasting(block, toSmelt)
            .id(`emendatus:blasting/${toSmelt.split(':')[1]}_to_${materialName}_ingot`)
        smeltingXp(toSmelt, blast)

        let furnace = e.recipes.thermal.furnace(block, toSmelt)
            .id(`emendatus:thermal/furnace/${toSmelt.split(':')[1]}_to_${materialName}_ingot`)
        smeltingXp(toSmelt, furnace)

        e.recipes.mekanism.smelting(block, toSmelt)
            .id(`emendatus:mekanism/smelting/${toSmelt.split(':')[1]}_to_${materialName}_ingot`)
    }

    if (typesObj.fluid) {
        let fluidAmt = getFluidAmountForType(typesObj.gemOrIngot.tag)
        let fluid = typesObj.fluid

        e.recipes.thermal.chiller(gemOrIngotItem, ['tconstruct:ingot_cast', Fluid.of(fluid, fluidAmt)])
            .id(`emendatus:thermal/chiller/${materialName}_ingot`)
        embersStamping(e, gemOrIngotItem, Fluid.of(fluid, fluidAmt), 'embers:ingot_stamp')
            .id(`emendatus:embers/stamping/${materialName}_ingot`)
    }
}

function plateRecipes(e, materialName, typesObj) {
    if (!(typesObj.gemOrIngot && typesObj.plate)) { return }
    // added to an empty string to convert to a normal js string instead of java
    let gemOrIngotItem = typesObj.gemOrIngot.item.id + ''
    let plateItem = typesObj.plate.item.id + ''

    e.remove({ output: plateItem })

    if (typesObj.fluid) {
        let fluid = typesObj.fluid
        let fluidAmt = getFluidAmountForType(typesObj.gemOrIngot.tag)

        e.recipes.thermal.chiller(plateItem, ['tconstruct:plate_cast', Fluid.of(fluid, fluidAmt)])
            .id(`emendatus:thermal/chiller/${materialName}_plate`)
        embersStamping(e, plateItem, Fluid.of(fluid, fluidAmt), 'embers:plate_stamp')
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

function rodRecipes(e, materialName, typesObj) {
    if (!(typesObj.gemOrIngot && typesObj.rod)) { return }
    let gemOrIngotItem = typesObj.gemOrIngot.item.id + ''
    let rodItem = typesObj.rod.item.id + ''

    e.remove({ output: rodItem })

    if (typesObj.fluid) {
        let fluid = typesObj.fluid
        let fluidAmt = getFluidAmountForType(typesObj.gemOrIngot.tag) / 2

        e.recipes.thermal.chiller(rodItem, ['tconstruct:plate_cast', Fluid.of(fluid, fluidAmt)])
            .id(`emendatus:thermal/chiller/${materialName}_rod`)
        embersStamping(e, rodItem, Fluid.of(fluid, fluidAmt), 'immersiveengineering:mold_rod')
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

function gearRecipes(e, materialName, typesObj) {
    if (!(typesObj.gemOrIngot && typesObj.gear)) { return }

    let gemOrIngotItem = typesObj.gemOrIngot.item.id + ''
    let gearItem = typesObj.gear.item.id + ''

    e.remove({ output: gearItem })

    if (typesObj.fluid) {
        let fluid = typesObj.fluid
        let fluidAmt = getFluidAmountForType(typesObj.gemOrIngot.tag) * 4

        e.recipes.thermal.chiller(gearItem, ['tconstruct:plate_cast', Fluid.of(fluid, fluidAmt)])
            .id(`emendatus:thermal/chiller/${materialName}_gear`)
        embersStamping(e, gearItem, Fluid.of(fluid, fluidAmt), 'embers:gear_stamp')
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

function wireRecipes(e, materialName, typesObj) {
    if (!typesObj.wire || !typesObj.gemOrIngot) { return }

    let gemOrIngotItem = typesObj.gemOrIngot.item.id + ''
    let wireItem = typesObj.wire.item.id + ''

    e.remove({ output: wireItem })

    if (typesObj.fluid) {
        let fluid = typesObj.fluid
        let fluidAmt = getFluidAmountForType(typesObj.gemOrIngot.tag) / 2

        e.recipes.thermal.chiller(wireItem, ['tconstruct:plate_cast', Fluid.of(fluid, fluidAmt)])
            .id(`emendatus:thermal/chiller/${materialName}_wire`)
        embersStamping(e, wireItem, Fluid.of(fluid, fluidAmt), 'immersiveengineering:mold_wire')
            .id(`emendatus:embers/stamping/${materialName}_wire`)
    }
    e.recipes.thermal.press(`2x ${wireItem}`, [gemOrIngotItem, 'immersiveengineering:mold_wire'])
        .id(`emendatus:thermal/press/${materialName}_wire`)
    e.recipes.immersiveengineering.metal_press(`8x ${wireItem}`, `4x ${gemOrIngotItem}`, 'immersiveengineering:mold_wire')
        .id(`emendatus:immersiveengineering/metalpress/${materialName}_wire`)
    if (typesObj.plate) {
        let plate = typesObj.plate.item.id + ''
        e.recipes.create.cutting(`2x ${wireItem}`, plate)
            .id(`emendatus:create/cutting/${materialName}_wire`)
        e.custom({
            type: "createdieselgenerators:wire_cutting",
            ingredients: makeJsonIngredients(plate),
            results: makeJsonIngredients(`2x ${wireItem}`)
        }).id(`emendatus:createdieselgenerators/wire_cutting/${materialName}_wire`)
        e.shaped(wireItem, [
            'AB '
        ], {
            A: plate,
            B: 'immersiveengineering:wirecutter'
        }).id(`emendatus:shaped/${materialName}_wire`)
    }
}

function materialCompacting(e, materialName, typesObj) {
    if (!(typesObj.gemOrIngot)) { return }
    let gemOrIngotItem = typesObj.gemOrIngot.item.id + ''
    if (typesObj.gemOrIngot && typesObj.block) {
        let block = typesObj.block.item.id + ''
        e.remove({ output: block, input: gemOrIngotItem })
        e.remove({ output: gemOrIngotItem, input: block })
        e.shaped(block, [
            'III',
            'III',
            'III'
        ], {
            I: gemOrIngotItem
        }).id(`emendatus:shaped/${materialName}_ingot_to_block`)
        e.recipes.thermal.press(block, [`9x ${gemOrIngotItem}`, 'thermal:press_packing_3x3_die'])
            .id(`emendatus:thermal/press/${materialName}_ingot_to_block`)
        e.shapeless(`9x ${gemOrIngotItem}`, block)
            .id(`emendatus:shapeless/${materialName}_block_to_ingot`)
        e.recipes.thermal.press(`9x ${gemOrIngotItem}`, [block, 'thermal:press_unpacking_die'])
            .id(`emendatus:thermal/press/${materialName}_block_to_ingot`)
    }
    if (typesObj.gemOrIngot && typesObj.nugget) {
        let nugget = typesObj.nugget.item.id + ''
        e.remove({ output: gemOrIngotItem, input: nugget })
        e.remove({ output: nugget, input: gemOrIngotItem })
        e.shaped(gemOrIngotItem, [
            'III',
            'III',
            'III'
        ], {
            I: nugget
        }).id(`emendatus:shaped/${materialName}_nugget_to_ingot`)
        e.recipes.thermal.press(gemOrIngotItem, [`9x ${nugget}`, 'thermal:press_packing_3x3_die'])
            .id(`emendatus:thermal/press/${materialName}_nugget_to_ingot`)
        e.shapeless(`9x ${nugget}`, gemOrIngotItem)
            .id(`emendatus:shapeless/${materialName}_ingot_to_nugget`)
        e.recipes.thermal.press(`9x ${nugget}`, [gemOrIngotItem, 'thermal:press_unpacking_die'])
            .id(`emendatus:thermal/press/${materialName}_ingot_to_nugget`)
    }
}

function scrapMelting(e, materialName, typesObj) {
    if (!typesObj.fluid || !typesObj.gemOrIngot) { return }
    let fluid = typesObj.fluid

    for (let itemType of typesToUnify) {
        if (!typesObj[itemType]) { continue }
        let melt = meltingValues(getFluidAmountForType(typesObj.gemOrIngot.tag))[itemType]
        if (!melt) { continue }

        let item = typesObj[itemType].item.id + ''
        let fluidAmt = melt.amount
        let energy = melt.energy

        e.recipes.thermal.crucible(Fluid.of(fluid.id, fluidAmt), item, 0, energy)
            .id(`emendatus:thermal/crucible/${item.split(':')[1]}`)
        if (500 > fluidAmt) {
            embersMelting(e, Fluid.of(fluid.id, fluidAmt), item)
                .id(`emendatus:embers/melting/${item.split(':')[1]}`)
        }
    }
}

function materialScrapping(e, materialName, typesObj) {

}

function castingRecipes(e, materialName, typesObj) {

}