StartupEvents.recipeSchemaRegistry(e => {
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
                inputFluidOrFluidTag('tag').key('fluid')
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
                inputFluidOrFluidTag('tag').key('fluid'),
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
                inputFluidOrFluidTag('tag').key('fluid'),
                intNumber.key('energy').optional(3200).alwaysWrite()
            )
        )
        e.register('immersiveengineering:refinery',
            new $RecipeSchema(
                outputFluid.key('result'),
                inputFluidOrFluidTag('tag').key('input0'),
                inputFluidOrFluidTag('tag').key('input1'),
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
})