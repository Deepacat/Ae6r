// priority: 0

/**
 * @param {Internal.RecipeSchemaRegistryEventJS} e
 * @param {{ components?: Special.RecipeComponentMap; anyFloatNumber?: Internal.NumberComponent$FloatRange; anyString?: Internal.StringComponent; bool?: Internal.BooleanComponent; id: any; intNumber: any; filteredString?: (...args: any[]) => Internal.RecipeComponent<any>; nonBlankString?: Internal.StringComponent; floatNumber?: Internal.NumberComponent$FloatRange; inputItem: any; outputItem: any; inputFluid?: Internal.FluidComponents$1; outputFluid?: Internal.FluidComponents$2; outputFluidOrItem?: Internal.OrRecipeComponent<any, any>; fluidTag?: Internal.RecipeComponent<any>; blockTag?: Internal.TagKeyComponent<any>; inputStackedItem?: any; inputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.InputFluid, any>; outputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.OutputFluid, any>; inputFluidOrItem?: (tagKeyStr: any) => Internal.OrRecipeComponent<InputItem, any>; inputFluidOrStackedItem?: (tagKeyStr: any) => any; heatCondition?: Internal.RecipeComponent<any>; }} c
 */
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

        let pncrItemInput = c.inputStackedItem.mapOut((json) => {
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

        // https://github.com/TeamPneumatic/pnc-repressurized/blob/f5d0198af34a1ec05757377eb2017663bc6f9788/src/main/java/me/desht/pneumaticcraft/common/recipes/amadron/AmadronOffer.java#L146C1-L157C6
        e.register('pneumaticcraft:amadron',
            new $RecipeSchema(
                c.id.key('id'),
                pncrAmadronIO.key('output'),
                pncrAmadronIO.key('input'),
                c.intNumber.key('level').optional(0),
                c.bool.key('static').alwaysWrite().optional(true),
                c.intNumber.key('maxStock').defaultOptional()
            )
        )
        e.register('pneumaticcraft:assembly_drill',
            new $RecipeSchema(
                c.outputItem.key('result'),
                pncrItemInput.key('input'),
                c.anyString.key('program') // this is just to default having the data in the recipe output
                    .alwaysWrite()         // does not need to be set manually
                    .optional('drill')
                    .exclude()
            )
        )
        e.register('pneumaticcraft:assembly_laser',
            new $RecipeSchema(
                c.outputItem.key('result'),
                pncrItemInput.key('input'),
                c.anyString.key('program') // this is just to default having the data in the recipe output
                    .alwaysWrite()         // does not need to be set manually
                    .optional('laser')
                    .exclude()
            )
        )
        e.register('pneumaticcraft:explosion_crafting',
            new $RecipeSchema(
                c.outputItem.asArray().key('results'),
                pncrItemInput.key('input'),
                c.intNumber.key('loss_rate').alwaysWrite().optional(20)
            )
        )
        e.register('pneumaticcraft:fluid_mixer',
            new $RecipeSchema(
                pncrFluidInput.key('input1'),
                pncrFluidInput.key('input2'),
                c.floatNumber.key('pressure').optional(1),
                c.intNumber.key('time').optional(40),
                c.outputItem.key('item_output').defaultOptional().exclude(), // use .item_output(fluid) after recipe
                c.outputFluid.key('fluid_output').defaultOptional().exclude() // use .fluid_output(item) after recipe
            )
        )
        e.register('pneumaticcraft:heat_frame_cooling',
            new $RecipeSchema(
                c.outputItem.key('result'),
                pncrFluidInput.or(pncrItemInput).key('input'),
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
                c.outputItem.asArray().key('results'),
                pncrItemInput.asArray().key('inputs'),
                c.floatNumber.key('pressure')
            )
        )
        e.register('pneumaticcraft:refinery',
            new $RecipeSchema(
                c.outputFluid.asArray().key('results'),
                pncrFluidInput.key('input'),
                pncrTempRange
            )
        )
        e.register('pneumaticcraft:thermo_plant',
            new $RecipeSchema(
                c.inputItem.key('item_input').defaultOptional().exclude(), // use .item_input(item) after recipe
                c.outputItem.key('item_output').defaultOptional().exclude(), // use use item_output(item) after recipe
                pncrFluidInput.key('fluid_input').defaultOptional().exclude(), // use .fluid_input(fluid) after recipe
                c.outputFluid.key('fluid_output').defaultOptional().exclude(), // use fluid_output(fluid) after recipe
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