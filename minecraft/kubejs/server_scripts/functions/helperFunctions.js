// takes a flag type and material and returns the replaced string
function getFlagReplace(flagType, material) {
    return global.emenGetReplace(global.emendatus_all_types[flagType].replacer, material)
}

// takes a tag type and material and returns the replaced string
function getTagReplace(tag, material) {
    return global.emenGetReplace(global.emendatus_all_types[tag].tags[0], material)
}

// returns the contents of a tag using the material replacer
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