// @ts-check
// priority: 0

// Original Ae2 recipe schemas by Chief Arug and Squoshi in the KubeJS discord
// (does not follow ae6r schema formatting)

/**
 * @param {Internal.RecipeSchemaRegistryEventJS} e
 * @param {{ components: any; bound?: any; anyFloatNumber?: Internal.NumberComponent$FloatRange; anyString?: Internal.StringComponent; bool?: Internal.BooleanComponent; id?: Internal.StringComponent; intNumber?: Internal.NumberComponent$IntRange; filteredString?: (...args: any[]) => Internal.RecipeComponent<any>; nonBlankString?: Internal.StringComponent; floatNumber?: Internal.NumberComponent$FloatRange; inputItem?: Internal.ItemComponents$1; outputItem?: Internal.ItemComponents$3; inputFluid?: Internal.FluidComponents$1; outputFluid?: Internal.FluidComponents$2; outputFluidOrItem?: Internal.OrRecipeComponent<any, any>; fluidTag?: Internal.RecipeComponent<any>; blockTag?: Internal.TagKeyComponent<any>; inputStackedItem?: any; inputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.InputFluid, any>; outputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.OutputFluid, any>; inputFluidOrItem?: (tagKeyStr: any) => Internal.OrRecipeComponent<InputItem, any>; inputFluidOrStackedItem?: (tagKeyStr: any) => any; heatCondition?: Internal.RecipeComponent<any>; }} c
 */
function recipeSchema_ae2(e, c) {
    const $EntropyMode = Java.loadClass('appeng.recipes.entropy.EntropyMode')
    let Builder = c.bound('bool')().builder
    let fluidStateComponent = Builder(c.bound('registryObject')({ registry: 'fluid' }).key('id'), new $MapRecipeComponent(c.bound('nonBlankString')(), c.bound('nonBlankString')(), false).key('properties').defaultOptional())

    e.register('ae2:entropy', new $RecipeSchema(
        Builder(
            c.bound('outputBlockState')().simpleMap({ id: 'Name', properties: 'Properties' }).key('block').defaultOptional(),
            fluidStateComponent.key('fluid').defaultOptional(),
            c.bound('outputItemArray')().key('drops').optional([])
        ).outputRole().key('output'),
        Builder(
            c.bound('inputBlockState')().simpleMap({ id: 'Name', properties: 'Properties' }).key('block').defaultOptional(),
            fluidStateComponent.key('fluid').defaultOptional()
        ).inputRole().key('input'),
        c.bound('enum')({ class: $EntropyMode }).key('mode')
    ))

    e.register('ae2:charger', new $RecipeSchema(
        c.bound('outputItem')().key('result'),
        c.bound('inputItem')().key('ingredient')
    ))

    let ic0, ic1, ic2, ic3, ic4, ic5
    e.register('ae2:inscriber', new $RecipeSchema(
        ic0 = c.bound('outputItem')().key('result'),
        ic1 = Builder(
            ic2 = c.bound('inputItem')().key('top').optional('air'),
            ic3 = c.bound('inputItem')().key('middle'),
            ic4 = c.bound('inputItem')().key('bottom').optional('air')
        ).key('ingredients'),
        ic5 = c.bound('enum')({ class: 'appeng.recipes.handlers.InscriberProcessType' }).key('mode').optional('inscriber'),
    ).addConstructor((recipe, _st, _k, source) => {
        recipe.setValue(ic0, source.getValue(recipe, ic0))
        recipe.setValue(ic1, new $RecipeComponentBuilderMap(ic1.component))
        recipe.getValue(ic1).put(ic3, source.getValue(recipe, ic3))
    }, ic0, ic3
    ).addConstructor((recipe, _st, _k, source) => {
        recipe.setValue(ic0, source.getValue(recipe, ic0))
        recipe.setValue(ic1, new $RecipeComponentBuilderMap(ic1.component))
        recipe.getValue(ic1).put(ic2, source.getValue(recipe, ic2))
        recipe.getValue(ic1).put(ic3, source.getValue(recipe, ic3))
    }, ic0, ic2, ic3
    ).addConstructor((recipe, _st, _k, source) => {
        recipe.setValue(ic0, source.getValue(recipe, ic0))
        recipe.setValue(ic1, new $RecipeComponentBuilderMap(ic1.component))
        recipe.getValue(ic1).put(ic2, source.getValue(recipe, ic2))
        recipe.getValue(ic1).put(ic3, source.getValue(recipe, ic3))
        recipe.getValue(ic1).put(ic4, source.getValue(recipe, ic4))
    }, ic0, ic2, ic3, ic4))

    e.register('ae2:matter_cannon', new $RecipeSchema(
        c.bound('inputItem')().key('ammo'),
        c.bound('floatNumber')().key('weight')
    ))

    e.register('ae2:transform', new $RecipeSchema(
        c.bound('outputItem')().key('result'),
        c.bound('inputItemArray')().key('ingredients'),
        Builder(
            c.bound('filteredString')({ error: "Transform type must be one of explosion or fluid!", filter: (/** @type {string} */ s) => s == 'fluid' }).key('type'),
            c.bound('fluidTag')().key('tag'))
            .inputRole().or(Builder(
                c.bound('filteredString')({ error: "Transform type must be one of explosion or fluid!", filter: (/** @type {string} */ s) => s == 'explosion' }).key('type')
            )).key('circumstance').optional({ type: 'fluid', tag: 'water' })
    ))
}