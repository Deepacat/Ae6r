ServerEvents.recipes(event => {
    const allAlloyingTypes = [
        'create:mixing',
        'immersiveengineering:alloy',
        'immersiveengineering:arc_furnace',
        'thermal:smelter',
        'tconstruct:alloy',
        'embers:mixing'
    ]
    let allButTinkers = allAlloyingTypes.filter(type => type !== 'tconstruct:alloy')
    let allButThermal = allAlloyingTypes.filter(type => type !== 'thermal:smelter')

    // temp > 500 means heated mixing in create
    // temp > 1000 means superheated mixing in create and tcon blazing blood
    // the higher number also may use more fuel in tcon unsure

    // steel
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/iron'), Ingredient.of('#forge:dusts/coal_coke')],
            output: Item.of('emendatus:steel_ingot')
        },
        processTime: 300,
        energy: 6400,
        removeExisting: true,
        temperature: 750,
        idSuffix: `steel_coke_dust`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: ['create:mixing'],
        item: {
            inputs: [Ingredient.of('#forge:ingots/iron', 4), Ingredient.of('#forge:coal_coke')],
            output: Item.of('4x emendatus:steel_ingot')
        },
        processTime: 300,
        temperature: 9001,
        idSuffix: `steel_create_superheat`,
        idPrefix: `kubejs:alloying`
    })

    // generic alloys
    allAlloying(event, {
        types: allAlloyingTypes,
        item: {
            inputs: ['minecraft:andesite', [Ingredient.of('#forge:nuggets/iron')]],
            output: Item.of('create:andesite_alloy')
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 300,
        idSuffix: `andesite_alloy_iron`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allAlloyingTypes,
        item: {
            inputs: ['minecraft:andesite', [Ingredient.of('#forge:nuggets/zinc')]],
            output: Item.of('create:andesite_alloy')
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 300,
        idSuffix: `andesite_alloy_zinc`,
        idPrefix: `kubejs:alloying`
    })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_pewter' })
    allAlloying(event, {
        types: allAlloyingTypes,
        item: {
            inputs: [Ingredient.of('#forge:ingots/iron'), Ingredient.of('#forge:ingots/lead')],
            output: Item.of('2x eidolon:pewter_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_iron', 90), Fluid.of('tconstruct:molten_lead', 90)],
            output: Fluid.of('tconstruct:molten_pewter', 180)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 400,
        idSuffix: `pewter`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/iron', 2), Ingredient.of('#forge:ingots/nickel')],
            output: Item.of('emendatus:invar_ingot', 3)
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_iron', 180), Fluid.of('tconstruct:molten_nickel', 90)],
            output: Fluid.of('tconstruct:molten_invar', 270)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 900,
        idSuffix: `invar`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#forge:gems/amethyst')],
            output: Item.of('tconstruct:amethyst_bronze_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_amethyst', 100)],
            output: Fluid.of('tconstruct:molten_amethyst_bronze', 90)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 820,
        idSuffix: `amethyst_bronze`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#forge:ingots/zinc')],
            output: Item.of('2x emendatus:brass_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_zinc', 90)],
            output: Fluid.of('tconstruct:molten_brass', 180)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 605,
        idSuffix: `brass`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/copper', 3), Ingredient.of('#forge:ingots/tin')],
            output: Item.of('4x thermal:bronze_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_copper', 270), Fluid.of('tconstruct:molten_tin', 90)],
            output: Fluid.of('tconstruct:molten_bronze', 360)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 700,
        idSuffix: `bronze`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#forge:ingots/nickel')],
            output: Item.of('2x emendatus:constantan_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_nickel', 90)],
            output: Fluid.of('tconstruct:molten_constantan', 180)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 920,
        idSuffix: `constantan`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/gold'), Ingredient.of('#forge:ingots/silver')],
            output: Item.of('2x thermal:electrum_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_gold', 90), Fluid.of('tconstruct:molten_silver', 90)],
            output: Fluid.of('tconstruct:molten_electrum', 180)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 920,
        idSuffix: `electrum`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/iron'), Ingredient.of('#forge:slimeballs/blood', 2), 'minecraft:honey_bottle'],
            output: Item.of('2x tconstruct:pig_iron_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_iron', 90), Fluid.of('tconstruct:meat_soup', 500), { tag: '#forge:honey', amount: 250 }],
            output: Fluid.of('tconstruct:molten_pig_iron', 180)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 811,
        idSuffix: `pig_iron`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers.filter(type => type !== 'embers:mixing'),
        item: {
            inputs: [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#forge:ingots/gold')],
            output: Item.of('2x tconstruct:rose_gold_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_gold', 90)],
            output: Fluid.of('tconstruct:molten_rose_gold', 180)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 550,
        idSuffix: `rose_gold`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/iron'), Ingredient.of('#forge:slimeball/sky'), 'tconstruct:seared_brick'],
            output: Item.of('2x tconstruct:slimesteel_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_iron', 90), Fluid.of('tconstruct:sky_slime', 250), Fluid.of('tconstruct:seared_stone', 250)],
            output: Fluid.of('tconstruct:molten_slimesteel', 180)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 999,
        idSuffix: `slimesteel`,
        idPrefix: `kubejs:alloying`
    })
    // thermal alloys
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/lead', 3), Ingredient.of('#forge:gems/diamond'), '2x minecraft:ender_pearl'],
            output: Item.of('2x thermal:enderium_ingot')
        },
        processTime: 300,
        energy: 6400,
        removeExisting: true,
        temperature: 950,
        idSuffix: `enderium`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/copper', 3), Ingredient.of('#forge:ingots/silver'), Ingredient.of('#forge:dusts/redstone', 4)],
            output: Item.of('4x thermal:signalum_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_copper', 270), Fluid.of('tconstruct:molten_silver', 90), { tag: '#forge:redstone', amount: 360 }],
            output: Fluid.of('tconstruct:molten_signalum', 360)
        },
        processTime: 300,
        energy: 6400,
        removeExisting: true,
        temperature: 980,
        idSuffix: `signalum`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/tin', 3), Ingredient.of('#forge:ingots/silver'), Ingredient.of('#forge:dusts/glowstone', 2)],
            output: Item.of('4x thermal:lumium_ingot')
        },
        processTime: 300,
        energy: 6400,
        removeExisting: true,
        temperature: 900,
        idSuffix: `lumium`,
        idPrefix: `kubejs:alloying`
    })
    // thermal glass
    allAlloying(event, {
        types: allButThermal,
        item: {
            inputs: [Ingredient.of('#forge:sand'), Ingredient.of('#forge:obsidian'), Ingredient.of('#forge:gems/quartz')],
            output: Item.of('2x thermal:obsidian_glass')
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 500,
        idSuffix: `obsidian_glass`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButThermal,
        item: {
            inputs: [Ingredient.of('#forge:ingots/enderium'), '2x thermal:obsidian_glass'],
            output: Item.of('2x thermal:enderium_glass')
        },
        processTime: 300,
        energy: 6400,
        removeExisting: true,
        temperature: 500,
        idSuffix: `enderium_glass`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButThermal,
        item: {
            inputs: [Ingredient.of('#forge:ingots/signalum'), '2x thermal:obsidian_glass'],
            output: Item.of('2x thermal:signalum_glass')
        },
        processTime: 300,
        energy: 6400,
        removeExisting: true,
        temperature: 500,
        idSuffix: `signalum_glass`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButThermal,
        item: {
            inputs: [Ingredient.of('#forge:ingots/lumium'), '2x thermal:obsidian_glass'],
            output: Item.of('2x thermal:lumium_glass')
        },
        processTime: 300,
        energy: 6400,
        removeExisting: true,
        temperature: 500,
        idSuffix: `lumium_glass`,
        idPrefix: `kubejs:alloying`
    })

    // blazing tcon alloys
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/copper', 2), Ingredient.of('#forge:ingots/cobalt'), Ingredient.of('#forge:gems/quartz')],
            output: Item.of('2x thermal:enderium_ingot')
        },
        processTime: 300,
        energy: 32000,
        removeExisting: true,
        temperature: 1400,
        idSuffix: `hepatizon`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/cobalt', 3), 'minecraft:ancient_debris'],
            output: Item.of('4x tconstruct:manyullyn_ingot')
        },
        processTime: 300,
        energy: 32000,
        removeExisting: true,
        temperature: 1200,
        idSuffix: `manyullyn`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/gold'), 'tconstruct:ichor_slime_ball', 'tconstruct:scorched_brick'],
            output: Item.of('2x tconstruct:cinderslime_ingot')
        },
        processTime: 300,
        energy: 32000,
        removeExisting: true,
        temperature: 1050,
        idSuffix: `cinderslime`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allButTinkers,
        item: {
            inputs: [Ingredient.of('#forge:ingots/cobalt'), Ingredient.of('#forge:ingots/gold'), 'minecraft:magma_cream'],
            output: Item.of('2x tconstruct:queens_slime_ingot')
        },
        processTime: 300,
        energy: 32000,
        removeExisting: true,
        temperature: 1150,
        idSuffix: `queens_slime`,
        idPrefix: `kubejs:alloying`
    })

    // superheated netherite cheaper in later machines
    allAlloying(event, {
        types: ['create:mixing', 'immersiveengineering:arc_furnace', 'tconstruct:alloy'],
        item: {
            inputs: ['4x minecraft:netherite_scrap', Ingredient.of('#forge:ingots/gold', 2)],
            output: Item.of('minecraft:netherite_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_gold', 180), Fluid.of('tconstruct:molten_debris', 180)],
            output: Fluid.of('tconstruct:molten_netherite', 90)
        },
        processTime: 300,
        energy: 32000,
        removeExisting: true,
        temperature: 1250,
        idSuffix: `netherite_superheat`,
        idPrefix: `kubejs:alloying`
    })
    // warm netherite cheaper in earlier machines
    allAlloying(event, {
        types: ['thermal:smelting', 'immersiveengineering:alloy'],
        item: {
            inputs: ['4x minecraft:netherite_scrap', Ingredient.of('#forge:ingots/gold', 3)],
            output: Item.of('minecraft:netherite_ingot')
        },
        processTime: 300,
        energy: 6400,
        removeExisting: true,
        temperature: 999,
        idSuffix: `netherite`,
        idPrefix: `kubejs:alloying`
    })

})
