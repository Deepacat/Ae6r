// priority: 1000

const $RecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.RecipeSchema')
const $RecipeComponentBuilder = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilder')
const $RecipeComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.RecipeComponent')
const $KJSInputItem = Java.loadClass('dev.latvian.mods.kubejs.item.InputItem')

StartupEvents.recipeSchemaRegistry(e => {
    const componentRegistry = e.components

    let comps = {}

    comps.components = componentRegistry
    comps.anyFloatNumber = componentRegistry.get('anyFloatNumber')()
    comps.anyString = componentRegistry.get('anyString')()
    comps.blockTag = componentRegistry.get('blockTag')()
    comps.bool = componentRegistry.get('bool')()
    comps.id = componentRegistry.get('id')()
    comps.intNumber = componentRegistry.get('intNumber')()
    comps.filteredString = componentRegistry.get('filteredString')
    comps.nonBlankString = componentRegistry.get('nonBlankString')()
    comps.floatNumber = componentRegistry.get('floatNumber')()

    comps.inputItem = componentRegistry.get('inputItem')()
    comps.outputItem = componentRegistry.get('outputItem')()
    comps.inputFluid = componentRegistry.get('inputFluid')()
    comps.outputFluid = componentRegistry.get('outputFluid')()
    comps.outputFluidOrItem = componentRegistry.get('outputFluidOrItem')()
    comps.fluidTag = componentRegistry.get('tag')({ registry: 'fluid' })

    comps.inputFluidOrFluidTag = (tagKeyStr) => comps.inputFluid.or(
        new $RecipeComponentBuilder(2)
            .add(comps.fluidTag.key(tagKeyStr))
            .add(comps.intNumber.key('amount'))
            .inputRole()
    )

    comps.inputFluidOrItem = (tagKeyStr) =>
        comps.inputFluidOrFluidTag(tagKeyStr).or(comps.inputItem)

    let $HeatCondition
    if (Platform.isLoaded('create')) {
        $HeatCondition = Java.loadClass('com.simibubi.create.content.processing.recipe.HeatCondition')
        comps.heatCondition = componentRegistry.get('enum')({ class: $HeatCondition })
    }

    recipeSchema_apotheosis(e, comps)
    recipeSchema_createaddition(e, comps)
    recipeSchema_farmers_delight(e, comps)
    recipeSchema_immersiveengineering(e, comps)
    recipeSchema_pneumaticcraft(e, comps)
    recipeSchema_tconstruct(e, comps)
    recipeSchema_thermal(e, comps)
})