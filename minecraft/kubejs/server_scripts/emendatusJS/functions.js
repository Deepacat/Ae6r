/**
 * Converts an ingredient input to a JSON ingredient object
 * @template T
 * @param {T} input - The input to convert
 * @returns {object} - The converted ingredient object
 */
function makeJsonIngredient(input) {
    let ingredient = ''
    /* check if input is just an object input, used to include nbt or loop over
    items in recipes sometimes using custom formats */
    if (typeof input === "object" && input.item || input.tag) {
        return input
        // Check if the input is an Ingredient stack
    } else if (input.class) {
        ingredient = input
        // If the input is a string, it's likely just a item string e.g. '4x minecraft:dirt', convert it to an itemstack then ingredient
    } else if (typeof input === "string") {
        if (input.includes('#')) {
            ingredient = Ingredient.of(input)
        } else {
            ingredient = Ingredient.of(Item.of(input).id, Item.of(input).count);
        }
    } else {
        // If the input doesn't match either of the others it's probably already an item stack, convert it to an ingredient
        ingredient = Ingredient.of(input.id, input.count)
    }
    // Convert the ingredient to JSON, then also parse it because toJson() returns a java hashmap
    // which I couldn't figure out how to read or convert to js object
    let obj = JSON.parse(ingredient.toJson())
    // Remove the ingredient part of the obj since recipes don't often use that
    obj = Object.assign(obj, obj.ingredient)
    delete obj.ingredient
    return obj
}

/**
 * Converts an array of ingredient inputs to an array of JSON ingredient objects
 * @template T
 * @param {T} inputs - The inputs to convert
 * @returns {Array<object>} - The converted array of ingredient objects
 */
function makeJsonIngredients(inputs) {
    if (!Array.isArray(inputs)) { inputs = [inputs] }
    return inputs.map(input => {
        return makeJsonIngredient(input)
    })
}

/**
 * Converts a fluid stack to a JSON object representing a fluid stack.
 * @param {Fluid} fluidInput - The fluid stack to convert.
 * @param {number} - The amount of fluid for the fluid tag.
 * @returns {object} - The converted fluid JSON object.
 */
function makeFluidStackJson(fluidInput) {
    return { fluid: fluidInput.id, amount: fluidInput.amount }
}

/**
 * @param {string} str 
 * @returns
 */
function titleCase(str) {
    return str.toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
}

/**
 * @template T
 * @param {$Collection_<T>} array 
 * @returns {T}
 */
function randomOf(array) {
    return Utils.randomOf(Utils.getRandom(), array)
}

const unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block'),
    unificationBlacklistEntry('certus_quartz', 'gem')
];

/**
 * @param {string} material 
 * @param {string} type 
 * @see unificationBlacklist
 */
function unificationBlacklistEntry(material, type) {
    return { material: material, type: type }
}

/**
 * @param {string} material 
 * @param {string} type 
 * @see unificationBlacklist
 */
function entryIsBlacklisted(material, type) {
    for (let blackList of unificationBlacklist) {
        if (blackList.material == material && blackList.type) {
            return true
        }
    }
    return false;
}

/**
 * @param {$IngredientJS_} tag
 */
function tagIsEmpty(tag) {
    return Ingredient.of(tag).empty
}

/**
 * @param {$IngredientJS_} tag 
 */
function getPreferredItemInTag(tag) {
    const got = getItemsInTag(tag).sort((a, b) => compareIndices(a.mod, b.mod, tag))[0]
    return got || undefined
}

/**
 * @param {$IngredientJS_} tag 
 * @returns {Internal.ItemStackJS[]}
 */
function getItemsInTag(tag) {
    return Ingredient.of(tag).stacks.toArray()
}

/**
 * Retrieves the preferred item from a given tag and returns it along with the input tag as an object.
 *
 * @param {string} tagPath - The path of the tag, without a #
 * @return {Object} An object containing the preferred item and the tag.
 */
function getTaggedItem(tagPath) {
    let item = getPreferredItemInTag(Ingredient.of(`#${tagPath}`))
    if (!item) { return undefined }
    return {
        item: item,
        tag: tagPath
    }
}

/**
 * @param {string} materialName 
 */
function getFluid(materialName) {
    for (let mod of modFluidPriorities) {
        let tagprefix = mod == 'tconstruct' ? 'tconstruct' : 'forge'
        if (Fluid.exists(`${mod}:molten_${materialName}`)) {
            return { stack: Fluid.of(`${mod}:molten_${materialName}`), tag: `${tagprefix}:molten_${materialName}` }
        } else if (Fluid.exists(`${mod}:${materialName}`)) {
            return { stack: Fluid.of(`${mod}:${materialName}`), tag: `${tagprefix}:${materialName}` }
        }
    }
}

/**
 * Retrieves all fluids associated with a given material name.
 *
 * @param {string} materialName - The material name to retrieve fluids for.
 * @return {Object} An object containing the preferred fluid and an array of all fluids.
 */
function getFluidsOfMaterial(materialName) {
    let fluids = []
    for (let mod of modFluidPriorities) {
        if (Fluid.exists(`${mod}:molten_${materialName}`)) {
            fluids.push(`${mod}:molten_${materialName}`)
        } else if (Fluid.exists(`${mod}:${materialName}`)) {
            fluids.push(`${mod}:${materialName}`)
        } else { continue }
    }
    if (1 >= fluids.length) { return }
    return { prefFluid: fluids[0], allFluids: fluids, toUnify: fluids.slice(1, fluids.length) }
}

/**
 * Used to get fluid amount for gem or ingot types
 * @param {string} type - The material flag or a tag including a type, checks regex for gem or ingot in strings
 */
function getFluidAmountForType(type) {
    // string includes maybe more performant than regex test idk
    if (/gem/.test(type)) { return 100 }
    if (/dust/.test(type)) { return 100 }
    if (/ingot/.test(type)) { return 90 }
    return 90
}

/**
 * Compares the indices of two mods in the modPriorities array.
 *
 * @param {string} a - The first mod to compare.
 * @param {string} b - The second mod to compare.
 * @param {string} [tag] - The tag being compared, if applicable.
 * @return {number} -1 if a comes before b in modPriorities, 1 if a comes after b, 0 if they are equal.
 */
function compareIndices(a, b, tag) {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error('[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!'));
    return 0;
}

function getStrippedLogFrom(logBlock) {
    for (let wood of buildWoodVariants) {
        if (wood.logBlock == logBlock) {
            return wood.logBlockStripped;
        }
    }
    return air;
}

/**
 * @param {$IngredientJS_} item 
 * @param {Internal.PlayerJS<any>} player 
 */
function playerHas(item, player) {
    return player.inventory.find(item) != -1;
}

// lt  = .slice(0, index)
// lte = .slice(0, index + 1)
// gt  = .slice(index)
// gte = .slice(index + 1)

function lowerTiers(tiers, tier) {
    return tiers.slice(0, tiers.indexOf(tier));
}

/**
 * transplant the md5 from `<type's mod>:kjs_<hash>` onto the supplied prefix
 * @param {Internal.RecipeJS} recipe 
 * @param {string} id_prefix 
 */
function fallback_id(recipe, id_prefix) {
    if (recipe.getId().includes(':kjs_')) {
        recipe.serializeJson(); // without this the hashes *will* collide
        recipe.id(id_prefix + 'md5_' + recipe.getUniqueId());
    }
}