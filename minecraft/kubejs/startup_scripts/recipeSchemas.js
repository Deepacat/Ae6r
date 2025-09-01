// priority: 100

import { errors } from "../../../../../../../Local/Microsoft/TypeScript/5.9/node_modules/undici-types/index"

StartupEvents.recipeSchemaRegistry(e => {
    const $RecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.RecipeSchema')
    const $RecipeComponentBuilder = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilder')

    // Input/output component types
    const Components = e.components

    const anyFloatNumber = Components.get('anyFloatNumber')()
    const anyString = Components.get('anyString')()
    const blockTag = Components.get('blockTag')()
    const bool = Components.get('bool')()
    const id = Components.get('id')()
    const intNumber = Components.get('intNumber')()
    const filteredString = Components.get('filteredString')
    const nonBlankString = Components.get('nonBlankString')()
    const floatNumber = Components.get('floatNumber')()

    const inputItem = Components.get('inputItem')()
    const outputItem = Components.get('outputItem')()
    const inputFluid = Components.get('inputFluid')()
    const fluidTag = Components.get('tag')({ registry: 'fluid' })

    const fluidOrTagInput = (tagKeyId) => inputFluid.or(
        new $RecipeComponentBuilder(2)
            .add(fluidTag.key(tagKeyId))
            .add(intNumber.key('amount'))
            .inputRole()
    )
    const outputFluid = Components.get('outputFluid')()

    const inputFluidOrItem = Components.get('inputFluidOrItem')()
    const outputFluidOrItem = Components.get('outputFluidOrItem')()

    let $HeatCondition, heatCondition
    if (Platform.isLoaded('create')) {
        $HeatCondition = Java.loadClass('com.simibubi.create.content.processing.recipe.HeatCondition'
        )
        heatCondition = Components.get('enum')({ class: $HeatCondition })
    }

    // Apotheosis
    if (Platform.isLoaded('apotheosis')) {
        let enchantingRequirements = new $RecipeComponentBuilder(3)
            .add(intNumber.key('eterna').optional(-1))
            .add(intNumber.key('quanta').optional(-1))
            .add(intNumber.key('arcana').optional(-1))
        e.register('apotheosis:enchanting',
            new $RecipeSchema(
                inputItem.key('input'),
                outputItem.key('result'),
                enchantingRequirements.key('requirements').defaultOptional(),
                enchantingRequirements.key('max_requirements').defaultOptional(),
                intNumber.key('display_level').optional(0)
            )
        )
        console.log('Recipe Schemas for apotheosis loaded.')
    }

    // Create Crafts & Additions
    if (Platform.isLoaded('createaddition')) {
        e.register('createaddition:rolling',
            new $RecipeSchema(outputItem.key('result'), inputItem.key('input'))
        )
        e.register('createaddition:charging',
            new $RecipeSchema(
                outputItem.key('result'),
                inputItem.key('input'),
                intNumber.key('energy'),
                intNumber.key('maxChargeRate').optional(0)
            )
        )
        e.register('createaddition:liquid_burning',
            new $RecipeSchema(
                fluidOrTagInput('fluidTag').key('input'),
                intNumber.key('burnTime'),
                bool.key('superheated').optional(false)
            )
        )
        console.log('Recipe Schemas for createaddition loaded.')
    }

    // Farmer's Delight
    if (Platform.isLoaded('farmersdelight')) {
        e.register('farmersdelight:cooking',
            new $RecipeSchema(
                inputItem.asArray().key('ingredients'),
                outputItem.key('result'),
                intNumber.key('cookingtime'),
                floatNumber.key('experience').optional(1),
                inputItem.key('container').defaultOptional(),
                anyString.key('recipe_book_tab').optional('meals')
            )
        )
        let itemOrAction = inputItem.or(
            new $RecipeComponentBuilder(2)
                .add(
                    anyString
                        .key('type')
                        .alwaysWrite()
                        .optional('farmersdelight:tool_action')
                )
                .add(anyString.key('action'))
        )
        e.register('farmersdelight:cutting',
            new $RecipeSchema(
                inputItem.asArray().key('ingredients'),
                outputItem.asArray().key('result'),
                itemOrAction.key('tool'),
                anyString.key('sound').defaultOptional()
            )
        )
    }

    // PneumaticCraft: Repressurized
    if (Platform.isLoaded('pneumaticcraft')) {
        let $MapRecipeComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.MapRecipeComponent'
        )

        let pncrAmadronIO = new $RecipeComponentBuilder(3)
            .add(
                filteredString({
                    error: 'must be ITEM or FLUID',
                    filter: (s) => {
                        return s === 'ITEM' || s === 'FLUID'
                    },
                }).key('type')
            )
            .add(intNumber.key('amount'))
            .add(id.key('id'))
            .inputRole()

        let pncrFluidInput = inputFluid
            .or(
                new $RecipeComponentBuilder(2)
                    .add(fluidTag.key('tag'))
                    .add(intNumber.key('amount'))
                    .inputRole()
            )
            .mapOut((json) => {
                json.getAsJsonObject().addProperty('type', 'pneumaticcraft:fluid')
                return json
            })
        // This is not a typo. We must use an outputItem here since inputItem does
        // not support item counts.
        let pncrItemInput = outputItem.mapOut((json) => {
            json.getAsJsonObject().addProperty('type', 'pneumaticcraft:stacked_item')
            return json
        })

        let pncrBonusOutput = new $RecipeComponentBuilder(2)
            .add(floatNumber.key('limit'))
            .add(floatNumber.key('multiplier'))
            .key('bonus_output')
        let pncrTempRange = new $RecipeComponentBuilder(2)
            .add(intNumber.key('min_temp').optional(0))
            .add(intNumber.key('max_temp').optional(0))
            .key('temperature')

        e.register('pneumaticcraft:amadron',
            new $RecipeSchema(
                pncrAmadronIO.asArray().key('input'),
                pncrAmadronIO.asArray().key('output'),
                intNumber.key('level').optional(0),
                bool.key('static').alwaysWrite().optional(true)
            )
        )
        e.register('pneumaticcraft:assembly_drill',
            new $RecipeSchema(
                pncrItemInput.key('input'),
                outputItem.key('result'),
                anyString.key('program').alwaysWrite().optional('drill')
            )
        )
        e.register('pneumaticcraft:assembly_laser',
            new $RecipeSchema(
                pncrItemInput.key('input'),
                outputItem.key('result'),
                anyString.key('program').alwaysWrite().optional('laser')
            )
        )
        e.register('pneumaticcraft:explosion_crafting',
            new $RecipeSchema(
                pncrItemInput.key('input'),
                outputItem.asArray().key('results'),
                intNumber.key('loss_rate').alwaysWrite().optional(20)
            )
        )
        e.register('pneumaticcraft:fluid_mixer',
            new $RecipeSchema(
                pncrFluidInput.key('input1'),
                pncrFluidInput.key('input2'),
                floatNumber.key('pressure').optional(1),
                intNumber.key('time').optional(40),
                outputItem.key('item_output').defaultOptional(),
                outputFluid.key('fluid_output').defaultOptional()
            )
        )
        e.register('pneumaticcraft:heat_frame_cooling',
            new $RecipeSchema(
                pncrFluidInput.or(pncrItemInput).key('input'),
                outputItem.key('result'),
                intNumber.key('max_temp').optional(0),
                pncrBonusOutput.defaultOptional()
            )
        )
        e.register('pneumaticcraft:fuel_quality',
            new $RecipeSchema(
                pncrFluidInput.key('fluid'),
                intNumber.key('air_per_bucket'),
                floatNumber.key('burn_rate')
            )
        )
        e.register('pneumaticcraft:pressure_chamber',
            new $RecipeSchema(
                pncrItemInput.asArray().key('inputs'),
                outputItem.asArray().key('results'),
                floatNumber.key('pressure')
            )
        )
        e.register('pneumaticcraft:refinery',
            new $RecipeSchema(
                pncrFluidInput.key('input'),
                outputFluid.asArray().key('results'),
                pncrTempRange
            )
        )
        e.register('pneumaticcraft:thermo_plant',
            new $RecipeSchema(
                pncrFluidInput.key('fluid_input').defaultOptional(),
                inputItem.key('item_input').defaultOptional(),
                outputFluid.key('fluid_output').defaultOptional(),
                outputItem.key('item_output').defaultOptional(),
                pncrTempRange.defaultOptional(),
                bool.key('exothermic').alwaysWrite().optional(false),
                anyFloatNumber.key('pressure').optional(0),
                floatNumber.key('air_use_multiplier').optional(0),
                floatNumber.key('speed').optional(0)
            ).addConstructor(() => { })
        )
        let transformBlock = new $RecipeComponentBuilder(2)
            .add(
                Components.get('outputBlockStateString')()
                    .key('block')
                    .defaultOptional()
            )
            .add(fluidTag.key('fluid').defaultOptional())
        e.register('pneumaticcraft:heat_properties',
            new $RecipeSchema(
                fluidTag.key('fluid').defaultOptional(),
                blockTag.key('block').defaultOptional(),
                new $MapRecipeComponent(anyString, anyString, true)
                    .key('statePredicate')
                    .defaultOptional(),
                intNumber.key('temperature').optional(0),
                intNumber.key('thermalResistance').optional(0),
                intNumber.key('heatCapacity').optional(0),
                transformBlock.key('transformCold').defaultOptional(),
                transformBlock.key('transformHot').defaultOptional(),
                anyString.key('description').optional('')
            ).addConstructor(() => { })
        )
        let $ShapedRecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapedRecipeSchema'
        )
        e.register('pneumaticcraft:compressor_upgrade_crafting',
            $ShapedRecipeSchema.SCHEMA
        )
        e.register('pneumaticcraft:crafting_shaped_no_mirror',
            $ShapedRecipeSchema.SCHEMA
        )
        e.register('pneumaticcraft:crafting_shaped_pressurizable',
            $ShapedRecipeSchema.SCHEMA
        )
        console.log('Recipe Schemas for pneumaticcraft loaded.')
    }

    if (Platform.isLoaded('immersiveengineering')) {
        // ie uses a special custom ingredient format for stacked inputs
        let $RecipeComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.RecipeComponent');
        let $KJSInputItem = Java.loadClass('dev.latvian.mods.kubejs.item.InputItem');
        let ieInputItem = new $RecipeComponent({
            componentClass: () => $KJSInputItem,
            read: (recipe, from) => recipe.readInputItem(from),
            write: (recipe, value) => {
                let json = value.toJson(true).getAsJsonObject();
                json.add('base_ingredient', json.remove('ingredient'));
                return json;
            }
        });

        let ieClocheRender =
            new $RecipeComponentBuilder(2) // https://github.com/BluSunrize/ImmersiveEngineering/blob/e63e4824800945eccf3684200a2c2270e2e1cdf2/src/api/java/blusunrize/immersiveengineering/api/crafting/ClocheRenderFunction.java#L57
                .add(nonBlankString.key('type')) // generic | crop | stem | stacking | hemp
                .add(nonBlankString.key('block'))

        e.register('immersiveengineering:alloy',
            new $RecipeSchema(
                outputItem.key('result'),
                ieInputItem.key('input0'),
                ieInputItem.key('input1'),
                intNumber.key('time').optional(200).alwaysWrite()
            )
        )
        e.register('immersiveengineering:arc_furnace',
            new $RecipeSchema(
                outputItem.asArray().key('results'),
                inputItem.key('input'),
                ieInputItem.asArray().key('additives').defaultOptional(),
                intNumber.key('time').optional(100).alwaysWrite(),
                intNumber.key('energy').optional(2400).alwaysWrite(),
                inputItem.key('slag').defaultOptional().exclude() // use .slag(itemInput) after recipe
            )
        )
        e.register('immersiveengineering:blast_furnace',
            new $RecipeSchema(
                outputItem.key('result'),
                inputItem.key('input'),
                intNumber.key('time').optional(1200).alwaysWrite(),
                inputItem.key('slag').defaultOptional().exclude() // use .slag(itemInput) after recipe
            )
        )
        e.register('immersiveengineering:blast_furnace_fuel',
            new $RecipeSchema(
                inputItem.key('input'),
                intNumber.key('time')
            )
        )
        e.register('immersiveengineering:blueprint',
            new $RecipeSchema(
                outputItem.key('result'),
                ieInputItem.asArray().key('inputs'),
                nonBlankString.key('category').defaultOptional()
            )
        )
        e.register('immersiveengineering:bottling_machine',
            new $RecipeSchema(
                outputItem.asArray().key('results'),
                ieInputItem.asArray().key('inputs'),
                fluidOrTagInput('tag').key('fluid')
            )
        )
        e.register('immersiveengineering:cloche',
            new $RecipeSchema(
                outputItem.asArray().key('results'),
                ieInputItem.key('input'),
                ieClocheRender.key('render'),
                intNumber.key('time').optional(800).alwaysWrite()
            )
        )
        e.register('immersiveengineering:coke_oven',
            new $RecipeSchema(
                outputItem.key('result'),
                ieInputItem.key('input'),
                intNumber.key('time').optional(900).alwaysWrite(),
                intNumber.key('creosote').defaultOptional()
            )
        )
        e.register('immersiveengineering:crusher',
            new $RecipeSchema(
                outputItem.key('result'),
                inputItem.key('input'),
                outputItem.asArray().key('secondaries'),
                intNumber.key('energy').optional(1600).alwaysWrite()
            )
        )
        e.register('immersiveengineering:fermenter',
            new $RecipeSchema(
                outputItem.key('result'),
                ieInputItem.key('input'),
                fluidOrTagInput('tag').key('fluid'),
                intNumber.key('energy').optional(6400).alwaysWrite()
            )
        )
        e.register('immersiveengineering:fertilizer',
            new $RecipeSchema(
                ieInputItem.key('input'),
                intNumber.key('growthModifier')
            )
        )
        e.register('immersiveengineering:generator_fuel',
            new $RecipeSchema(
                intNumber.key('burnTime'),
                nonBlankString.key('fluidTag') // unsure how to do the fluidTag better rn
            )
        )
        e.register('immersiveengineering:metal_press',
            new $RecipeSchema(
                outputItem.key('result'),
                ieInputItem.key('input'),
                intNumber.key('energy').optional(2400).alwaysWrite(),
                nonBlankString.key('mold').defaultOptional().exclude() // use .mold(nonBlankString) after recipe
            )
        )
        /*         let a = {
                    "type": "immersiveengineering:mineral_mix",
                    "dimensions": [
                        "minecraft:the_nether"
                    ],
                    "fail_chance": 0.5,
                    "ores": [
                        {
                            "chance": 0.4,
                            "output": {
                                "item": "minecraft:polished_blackstone_bricks"
                            }
                        },
                        {
                            "chance": 0.3,
                            "output": {
                                "item": "minecraft:polished_blackstone"
                            }
                        },
                        {
                            "chance": 0.2,
                            "output": {
                                "item": "minecraft:ancient_debris"
                            }
                        },
                        {
                            "chance": 0.1,
                            "output": {
                                "item": "minecraft:gilded_blackstone"
                            }
                        }
                    ],
                    "sample_background": "minecraft:polished_blackstone",
                    "spoils": [
                        {
                            "chance": 0.5,
                            "output": {
                                "item": "minecraft:netherrack"
                            }
                        },
                        {
                            "chance": 0.3,
                            "output": {
                                "item": "minecraft:basalt"
                            }
                        },
                        {
                            "chance": 0.2,
                            "output": {
                                "item": "minecraft:gravel"
                            }
                        }
                    ],
                    "weight": 8
                } */

        e.register('immersiveengineering:mineral_mix',
            new $RecipeSchema(

            )
        )
        e.register('immersiveengineering:mixer',
            new $RecipeSchema(
                outputFluid.key('result'),
                ieInputItem.asArray().key('inputs'),
                fluidOrTagInput('tag').key('fluid'),
                intNumber.key('energy').optional(3200).alwaysWrite()
            )
        )
        e.register('immersiveengineering:refinery',
            new $RecipeSchema(
                outputFluid.key('result'),
                fluidOrTagInput('tag').key('input0'),
                fluidOrTagInput('tag').key('input1'),
                ieInputItem.key('catalyst'),
                intNumber.key('energy').optional(80).alwaysWrite()
            )
        )
        let a = {
            "type": "immersiveengineering:sawmill",
            "energy": 800,
            "input": {
                "item": "minecraft:oak_door"
            },
            "result": {
                "item": "minecraft:oak_planks"
            },
            "secondaries": [
                {
                    "output": {
                        "tag": "forge:dusts/wood"
                    },
                    "stripping": false
                }
            ]
        }
        e.register('immersiveengineering:sawmill',
            new $RecipeSchema(
                // outputItem.key('result'),
                // ieInputItem.key('input'),
                // intNumber.key('energy').optional(1600).alwaysWrite(),
                // ieSawSecondary.asArray().key('secondaries').defaultOptional(), // this just takes in {stripping: true, output: 'item:id'} unsure how to do it rn
                // ieInputItem.key('stripped').defaultOptional()
            )
        )
        e.register('immersiveengineering:squeezer',
            new $RecipeSchema(
                ieInputItem.key('input'),
                intNumber.key('energy').optional(6400).alwaysWrite(),
                outputFluid.key('fluid').defaultOptional().exclude(), // use .fluid(outputFluid) after recipe
                outputItem.key('result').defaultOptional().exclude() // use .result(outputItem) after recipe
            )
        )
        e.register('immersiveengineering:thermoelectric_source',
            new $RecipeSchema(
                intNumber.key('tempKelvin'),
                nonBlankString.key('blockTag').defaultOptional().exclude(),
                nonBlankString.key('singleBlock').defaultOptional().exclude()
            )
        )
        e.register('immersiveengineering:windmill_biome',
            new $RecipeSchema(
                intNumber.key('modifier'),
                nonBlankString.key('biomeTag').defaultOptional().exclude(),
                nonBlankString.key('biome').defaultOptional().exclude()
            )
        )
    }

    if (Platform.isLoaded('industrialforegoing')) {
        // e.register('industrialforegoing:dissolution')
    }

    if (Platform.isLoaded('embers')) {

    }

    if (Platform.isLoaded('tconstruct')) {
        e.register('tconstruct:casting_table',
            new $RecipeSchema(
                outputItem.key('result'),
                fluidOrTagInput('tag').asArrayOrSelf().key('fluid'),
                intNumber.key('cooling_time').optional(60).alwaysWrite(),
                bool.key('cast_consumed').optional(true).alwaysWrite(),
                inputItem.key('cast').defaultOptional().exclude() // use .cast(inputItem) after recipe
            )
        )
        e.register('tconstruct:casting_basin',
            new $RecipeSchema(
                outputItem.key('result'),
                fluidOrTagInput('tag').asArrayOrSelf().key('fluid'),
                intNumber.key('cooling_time').optional(60).alwaysWrite(),
                bool.key('cast_consumed').optional(true).alwaysWrite(),
                inputItem.key('cast').defaultOptional().exclude() // use .cast(inputItem) after recipe
            )
        )
    }
})