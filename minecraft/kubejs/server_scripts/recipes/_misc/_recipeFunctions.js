// A helper which turns a list of inputs into a list of json ingredients
// Inputs can be Item stacks, Ingredient stacks, item or tag strings
function makeJsonIngredients(inputs) {
    return inputs.map(input => {
        let ingredient = ''
        // get the ingredient which can only be read by converting the data to json

        // checking input.class checks if the input is an Ingredient stack idk how else to do it
        if (typeof input == "object" && input.class) {
            ingredient = input
            // if the input is a string, it's likely just a item string e.g. '4x minecraft:dirt', convert it to an itemstack then ingredient
        } else if (typeof input == "string") {
            if (input.includes('#')) {
                ingredient = Ingredient.of(input)
            } else {
                ingredient = Ingredient.of(Item.of(input).id, Item.of(input).count)
            }
        } else {
            // if the input doesn't match either of the others it's probably already an item stack, convert it to an ingredient
            ingredient = Ingredient.of(input.id, input.count)
        }

        // converting the ingredient to json, then also parsing it because toJson() returns a java hashmap
        // which I couldn't figure out how to read or convert to js object
        let obj = JSON.parse(ingredient.toJson())

        // remove the ingredient part of the obj since recipes dont often use that
        obj = Object.assign(obj, obj.ingredient)
        delete obj.ingredient

        return obj
    })
}

// console.log(makeJsonIngredients(['9x minecraft:raw_iron', 'minecraft:raw_iron_block', Item.of('minecraft:stone'), '#forge:ingots/iron', Ingredient.of('#forge:ingots/copper', 10)]))