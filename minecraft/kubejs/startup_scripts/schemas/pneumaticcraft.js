StartupEvents.recipeSchemaRegistry(e => {
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
})