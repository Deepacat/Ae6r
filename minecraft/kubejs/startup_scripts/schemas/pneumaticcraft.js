// priority: 0
function recipeSchema_pneumaticcraft(e, c) {
    if (Platform.isLoaded('pneumaticcraft')) {
        let $MapRecipeComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.MapRecipeComponent')

        let pncrAmadronIO = new $RecipeComponentBuilder(3)
            .add(
                c.filteredString({
                    error: 'must be ITEM or FLUID',
                    filter: (s) => {
                        return s === 'ITEM' || s === 'FLUID'
                    },
                }).key('type')
            )
            .add(c.intNumber.key('amount'))
            .add(c.id.key('id'))
            .inputRole()

        let pncrFluidInput = c.inputFluid
            .or(
                new $RecipeComponentBuilder(2)
                    .add(c.fluidTag.key('tag'))
                    .add(c.intNumber.key('amount'))
                    .inputRole()
            )
            .mapOut((json) => {
                json.getAsJsonObject().addProperty('type', 'pneumaticcraft:fluid')
                return json
            })

        // This is not a typo. We must use an outputItem here since inputItem does
        // not support item counts.
        let pncrItemInput = c.outputItem.mapOut((json) => {
            json.getAsJsonObject().addProperty('type', 'pneumaticcraft:stacked_item')
            return json
        })

        let pncrBonusOutput = new $RecipeComponentBuilder(2)
            .add(c.floatNumber.key('limit'))
            .add(c.floatNumber.key('multiplier'))
            .key('bonus_output')
        let pncrTempRange = new $RecipeComponentBuilder(2)
            .add(c.intNumber.key('min_temp').optional(0))
            .add(c.intNumber.key('max_temp').optional(0))
            .key('temperature')

        e.register('pneumaticcraft:amadron',
            new $RecipeSchema(
                pncrAmadronIO.asArray().key('input'),
                pncrAmadronIO.asArray().key('output'),
                c.intNumber.key('level').optional(0),
                c.bool.key('static').alwaysWrite().optional(true)
            )
        )
        e.register('pneumaticcraft:assembly_drill',
            new $RecipeSchema(
                pncrItemInput.key('input'),
                c.outputItem.key('result'),
                c.anyString.key('program').alwaysWrite().optional('drill')
            )
        )
        e.register('pneumaticcraft:assembly_laser',
            new $RecipeSchema(
                pncrItemInput.key('input'),
                c.outputItem.key('result'),
                c.anyString.key('program').alwaysWrite().optional('laser')
            )
        )
        e.register('pneumaticcraft:explosion_crafting',
            new $RecipeSchema(
                pncrItemInput.key('input'),
                c.outputItem.asArray().key('results'),
                c.intNumber.key('loss_rate').alwaysWrite().optional(20)
            )
        )
        e.register('pneumaticcraft:fluid_mixer',
            new $RecipeSchema(
                pncrFluidInput.key('input1'),
                pncrFluidInput.key('input2'),
                c.floatNumber.key('pressure').optional(1),
                c.intNumber.key('time').optional(40),
                c.outputItem.key('item_output').defaultOptional(),
                c.outputFluid.key('fluid_output').defaultOptional()
            )
        )
        e.register('pneumaticcraft:heat_frame_cooling',
            new $RecipeSchema(
                pncrFluidInput.or(pncrItemInput).key('input'),
                c.outputItem.key('result'),
                c.intNumber.key('max_temp').optional(0),
                pncrBonusOutput.defaultOptional()
            )
        )
        e.register('pneumaticcraft:fuel_quality',
            new $RecipeSchema(
                pncrFluidInput.key('fluid'),
                c.intNumber.key('air_per_bucket'),
                c.floatNumber.key('burn_rate')
            )
        )
        e.register('pneumaticcraft:pressure_chamber',
            new $RecipeSchema(
                pncrItemInput.asArray().key('inputs'),
                c.outputItem.asArray().key('results'),
                c.floatNumber.key('pressure')
            )
        )
        e.register('pneumaticcraft:refinery',
            new $RecipeSchema(
                pncrFluidInput.key('input'),
                c.outputFluid.asArray().key('results'),
                pncrTempRange
            )
        )
        e.register('pneumaticcraft:thermo_plant',
            new $RecipeSchema(
                pncrFluidInput.key('fluid_input').defaultOptional(),
                c.inputItem.key('item_input').defaultOptional(),
                c.outputFluid.key('fluid_output').defaultOptional(),
                c.outputItem.key('item_output').defaultOptional(),
                pncrTempRange.defaultOptional(),
                c.bool.key('exothermic').alwaysWrite().optional(false),
                c.anyFloatNumber.key('pressure').optional(0),
                c.floatNumber.key('air_use_multiplier').optional(0),
                c.floatNumber.key('speed').optional(0)
            ).addConstructor(() => { })
        )
        let transformBlock = new $RecipeComponentBuilder(2)
            .add(
                c.components.get('outputBlockStateString')()
                    .key('block')
                    .defaultOptional()
            )
            .add(c.fluidTag.key('fluid').defaultOptional())

        e.register('pneumaticcraft:heat_properties',
            new $RecipeSchema(
                c.fluidTag.key('fluid').defaultOptional(),
                c.blockTag.key('block').defaultOptional(),
                new $MapRecipeComponent(c.anyString, c.anyString, true)
                    .key('statePredicate')
                    .defaultOptional(),
                c.intNumber.key('temperature').optional(0),
                c.intNumber.key('thermalResistance').optional(0),
                c.intNumber.key('heatCapacity').optional(0),
                transformBlock.key('transformCold').defaultOptional(),
                transformBlock.key('transformHot').defaultOptional(),
                c.anyString.key('description').optional('')
            ).addConstructor(() => { })
        )

        let $ShapedRecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapedRecipeSchema')

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
}