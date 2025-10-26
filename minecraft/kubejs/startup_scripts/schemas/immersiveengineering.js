// priority: 0
// https://github.com/BluSunrize/ImmersiveEngineering/tree/1.20.1/src/main/java/blusunrize/immersiveengineering/common/crafting/serializers

/**
 * @param {Internal.RecipeSchemaRegistryEventJS} e
 * @param {{ components?: Special.RecipeComponentMap; anyFloatNumber?: Internal.NumberComponent$FloatRange; anyString?: Internal.StringComponent; bool?: Internal.BooleanComponent; id: any; intNumber: any; filteredString?: (...args: any[]) => Internal.RecipeComponent<any>; nonBlankString?: Internal.StringComponent; floatNumber?: Internal.NumberComponent$FloatRange; inputItem: any; outputItem: any; inputFluid?: Internal.FluidComponents$1; outputFluid?: Internal.FluidComponents$2; outputFluidOrItem?: Internal.OrRecipeComponent<any, any>; fluidTag?: Internal.RecipeComponent<any>; blockTag?: Internal.TagKeyComponent<any>; inputStackedItem?: any; inputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.InputFluid, any>; outputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.OutputFluid, any>; inputFluidOrItem?: (tagKeyStr: any) => Internal.OrRecipeComponent<InputItem, any>; inputFluidOrStackedItem?: (tagKeyStr: any) => any; heatCondition?: Internal.RecipeComponent<any>; }} c
 */
function recipeSchema_immersiveengineering(e, c) {
    if (Platform.isLoaded('immersiveengineering')) {
        // ie uses a special custom ingredient format for stacked inputs
        let ieInputItem = new $RecipeComponent({
            componentClass: () => $KJSInputItem,
            read: (recipe, from) => recipe.readInputItem(from),
            write: (recipe, value) => {
                let json = value.toJson(true).getAsJsonObject()
                json.add('base_ingredient', json.remove('ingredient'))
                return json
            }
        })

        let ieCrusherSecondaries = c.outputItem.mapOut((json) => {
            let result = json.getAsJsonObject()
            if (result.has('chance')) {
                result.add('output', {})
                result.getAsJsonObject('output').add('item', result.remove('item'))
                result.getAsJsonObject('output').add('count', result.remove('count'))
            }
            return result
        })

        let ieClocheRender =
            new $RecipeComponentBuilder(2) // https://github.com/BluSunrize/ImmersiveEngineering/blob/e63e4824800945eccf3684200a2c2270e2e1cdf2/src/api/java/blusunrize/immersiveengineering/api/crafting/ClocheRenderFunction.java#L57
                .add(c.nonBlankString.key('type')) // generic | crop | stem | stacking | hemp
                .add(c.nonBlankString.key('block'))

        e.register('immersiveengineering:alloy',
            new $RecipeSchema(
                c.outputItem.key('result'),
                ieInputItem.key('input0'),
                ieInputItem.key('input1'),
                c.intNumber.key('time').optional(200).alwaysWrite()
            )
        )
        e.register('immersiveengineering:arc_furnace',
            new $RecipeSchema(
                c.outputItem.asArray().key('results'),
                ieInputItem.key('input'),
                ieInputItem.asArray().key('additives').defaultOptional(),
                c.intNumber.key('time').optional(100).alwaysWrite(),
                c.intNumber.key('energy').optional(2400).alwaysWrite(),
                c.outputItem.key('slag').defaultOptional().exclude() // use .slag(itemInput) after recipe
            )
        )
        e.register('immersiveengineering:blast_furnace',
            new $RecipeSchema(
                c.outputItem.key('result'),
                ieInputItem.key('input'),
                c.intNumber.key('time').optional(1200).alwaysWrite(),
                c.outputItem.key('slag').defaultOptional().exclude() // use .slag(itemInput) after recipe
            )
        )
        e.register('immersiveengineering:blast_furnace_fuel',
            new $RecipeSchema(
                c.inputItem.key('input'),
                c.intNumber.key('time')
            )
        )
        e.register('immersiveengineering:blueprint',
            new $RecipeSchema(
                c.outputItem.key('result'),
                ieInputItem.asArray().key('inputs'),
                c.nonBlankString.key('category').defaultOptional()
            )
        )
        e.register('immersiveengineering:bottling_machine',
            new $RecipeSchema(
                c.outputItem.asArray().key('results'),
                ieInputItem.asArray().key('inputs'),
                c.inputFluidOrFluidTag('tag').key('fluid')
            )
        )
        e.register('immersiveengineering:cloche',
            new $RecipeSchema(
                c.outputItem.asArray().key('results'),
                ieInputItem.key('input'),
                ieClocheRender.key('render'),
                c.intNumber.key('time').optional(800).alwaysWrite()
            )
        )
        e.register('immersiveengineering:coke_oven',
            new $RecipeSchema(
                c.outputItem.key('result'),
                ieInputItem.key('input'),
                c.intNumber.key('time').optional(900).alwaysWrite(),
                c.intNumber.key('creosote').defaultOptional()
            )
        )
        e.register('immersiveengineering:crusher',
            new $RecipeSchema(
                c.outputItem.key('result'),
                c.inputItem.key('input'),
                ieCrusherSecondaries.asArray().key('secondaries'),
                c.intNumber.key('energy').optional(1600).alwaysWrite()
            )
        )
        e.register('immersiveengineering:fermenter',
            new $RecipeSchema(
                c.outputItem.key('result'),
                ieInputItem.key('input'),
                c.inputFluidOrFluidTag('tag').key('fluid'),
                c.intNumber.key('energy').optional(6400).alwaysWrite()
            )
        )
        e.register('immersiveengineering:fertilizer',
            new $RecipeSchema(
                ieInputItem.key('input'),
                c.intNumber.key('growthModifier')
            )
        )
        e.register('immersiveengineering:generator_fuel',
            new $RecipeSchema(
                c.intNumber.key('burnTime'),
                c.nonBlankString.key('fluidTag') // unsure how to do the fluidTag better rn
            )
        )
        e.register('immersiveengineering:metal_press',
            new $RecipeSchema(
                c.outputItem.key('result'),
                ieInputItem.key('input'),
                c.intNumber.key('energy').optional(2400).alwaysWrite(),
                c.nonBlankString.key('mold').defaultOptional().exclude() // use .mold(nonBlankString) after recipe
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
                c.outputFluid.key('result'),
                ieInputItem.asArray().key('inputs'),
                c.inputFluidOrFluidTag('tag').key('fluid'),
                c.intNumber.key('energy').optional(3200).alwaysWrite()
            )
        )
        e.register('immersiveengineering:refinery',
            new $RecipeSchema(
                c.outputFluid.key('result'),
                c.inputFluidOrFluidTag('tag').key('input0'),
                c.inputFluidOrFluidTag('tag').key('input1'),
                ieInputItem.key('catalyst'),
                c.intNumber.key('energy').optional(80).alwaysWrite()
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
                c.intNumber.key('energy').optional(6400).alwaysWrite(),
                c.outputFluid.key('fluid').defaultOptional().exclude(), // use .fluid(outputFluid) after recipe
                c.outputItem.key('result').defaultOptional().exclude() // use .result(outputItem) after recipe
            )
        )
        e.register('immersiveengineering:thermoelectric_source',
            new $RecipeSchema(
                c.intNumber.key('tempKelvin'),
                c.nonBlankString.key('blockTag').defaultOptional().exclude(),
                c.nonBlankString.key('singleBlock').defaultOptional().exclude()
            )
        )
        e.register('immersiveengineering:windmill_biome',
            new $RecipeSchema(
                c.intNumber.key('modifier'),
                c.nonBlankString.key('biomeTag').defaultOptional().exclude(),
                c.nonBlankString.key('biome').defaultOptional().exclude()
            )
        )
    }
}