//priority: 1001

// Ensures a player is entirely real, for lychee interactions mostly
function isRealPlayer(player) {
    return (player.isPlayer() && !player.isFake())
}

// takes a flag type and material and returns the replaced string
function getFlagReplace(flagType, material) {
    return global.emenGetReplace(global.emendatus_all_types[flagType].replacer, material)
}

// takes a tag type and material and returns the replaced string
// (Only works in events post tag registry)
function getTagReplace(tag, material) {
    return global.emenGetReplace(global.emendatus_all_types[tag].tags[0], material)
}

// returns the contents of a tag using the material replacer
// (Only works in events post tag registry)
function checkTag(tag, material) {
    let contents = Ingredient.of('#' + getTagReplace(tag, material))
    return contents
}

// returns true if the material contains the flag
function validateFlag(flag, matObj) {
    return matObj.flags.all.includes(flag)
}

// returns true if the material contains the tag
function validateTag(flag, matName) {
    return checkTag(flag, matName).itemIds.isEmpty()
}

// Better input replacing function, the regular kubejs one in recipe events causes
// entire tags to be replaced if a single input item in the tag is replaced
function replaceExactInput(e, recipeFilter, input, newInput) {
    e.forEachRecipe(recipeFilter, r => {
        let recipeJson = JSON.parse(r.json)
        let inputIng = JSON.parse(Ingredient.of(input).toJson()) // convert the input to an ingredient object
        inputIng = inputIng.item ? inputIng.item : inputIng.tag // convert ingredient to valid item or tag

        // console.log(`Checking recipe ${r.id} for input ${inputIng}`)

        // key finds shaped recipes
        if (recipeJson.key) {
            for (const key in recipeJson.key) {
                let ing = recipeJson.key[key]
                ing = ing.item ? ing.item : ing.tag // convert ingredient to valid item or tag

                if (ing === inputIng) {
                    recipeJson.key[key] = Ingredient.of(newInput).toJson() // replace entry
                }
            }
        }
        // ingredients finds non shaped recipes
        if (recipeJson.ingredients && recipeJson.ingredients instanceof Array) {
            for (let i = 0; i < recipeJson.ingredients.length; i++) {
                let ing = recipeJson.ingredients[i].item ? recipeJson.ingredients[i].item : recipeJson.ingredients[i].tag // convert ingredient to valid item or tag
                // console.log(`Checking ingredient ${ing} against input ${inputIng}`)
                if (ing === inputIng) {
                    recipeJson.ingredients[i] = Ingredient.of(newInput).toJson()
                }
            }
        }

        // skip modifying if recipe unchanged
        if (JSON.stringify(recipeJson) === JSON.stringify(JSON.parse(r.json))) { return }

        // console.log(`Replaced ${input} with ${newInput} in recipe ${r.id}`)

        e.remove({ id: String(r.id) })
        e.custom(recipeJson)
            .id(`kubejs:modified/${String(r.id).replace(':', '/')}`)
    })
}