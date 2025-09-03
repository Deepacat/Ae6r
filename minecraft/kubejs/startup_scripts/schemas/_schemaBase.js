// priority: 100
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

const inputFluidOrFluidTag = (tagKeyStr) => inputFluid.or(
    new $RecipeComponentBuilder(2)
        .add(fluidTag.key(tagKeyStr))
        .add(intNumber.key('amount'))
        .inputRole()
)
const outputFluid = Components.get('outputFluid')()

// const inputFluidOrItem = Components.get('inputFluidOrItem')()
const inputFluidOrItem = (tagKeyStr) => inputItem.or(inputFluidOrFluidTag(tagKeyStr))
const outputFluidOrItem = Components.get('outputFluidOrItem')()

let $HeatCondition, heatCondition
if (Platform.isLoaded('create')) {
    $HeatCondition = Java.loadClass('com.simibubi.create.content.processing.recipe.HeatCondition'
    )
    heatCondition = Components.get('enum')({ class: $HeatCondition })
}
