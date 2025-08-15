ServerEvents.recipes(e => {
    // load datagen with item ids in unified tags to replace them with prefered emendatus materials
    let unifData = JsonIO.read('kubejs/datagen/unify.json')
    for (let tagId in unifData) {
        for (let itemId of unifData[tagId]) {
            if (itemId.includes('emendatus')) {
                // e.replaceInput({ input: `#${tagId}` }, `#${tagId}`, itemId)
                // e.replaceOutput({ output: `#${tagId}` }, `#${tagId}`, itemId)
                continue
            }

            // while replacing the in and output with tags DOES fix alot of unification, I'd prefer
            // to make recipe gen for my own recipes instead, which needs to be done anyway

            // e.replaceInput({ input: itemId }, itemId, `#${tagId}`)
            e.replaceOutput({ output: itemId }, itemId, `#${tagId}`)
            e.remove({ output: itemId })
        }
    }

    for (let matObj of Object.entries(global.emendatus_mats)) {
        let material = matObj[0]
        e.remove({ output: `emendatus:${material}_block`, mod: 'tconstruct'})
        e.remove({ output: `emendatus:${material}_ingot`, mod: 'tconstruct'})
        e.remove({ output: `emendatus:${material}_nugget`, mod: 'tconstruct'})
        if (Item.exists(`emendatus:${material}_ingot`) && Item.exists(`emendatus:${material}_block`)) {
            e.shapeless(`emendatus:${material}_block`, [`9x emendatus:${material}_ingot`]).id(`emendatus:shaped/${material}_block`);
            e.shapeless(`9x emendatus:${material}_ingot`, `emendatus:${material}_block`).id(`emendatus:shaped/${material}_ingot_from_block`);
        }
        if (Item.exists(`emendatus:${material}_ingot`) && Item.exists(`emendatus:${material}_nugget`)) {
            e.shapeless(`emendatus:${material}_ingot`, [`9x emendatus:${material}_nugget`]).id(`emendatus:shaped/${material}_ingot_from_nugget`);
            e.shapeless(`9x emendatus:${material}_nugget`, `emendatus:${material}_ingot`).id(`emendatus:shaped/${material}_nugget`);
        }
        if (Item.exists(`emendatus:${material}_gem`) && Item.exists(`emendatus:${material}_block`)) {
            e.shapeless(`emendatus:${material}_block`, [`9x emendatus:${material}_gem`]).id(`emendatus:shaped/${material}_block`);
            e.shapeless(`9x emendatus:${material}_gem`, `emendatus:${material}_block`).id(`emendatus:shaped/${material}_gem`);
        }
        if (Item.exists(`emendatus:raw_${material}`) && Item.exists(`emendatus:raw_${material}_block`)) {
            e.shapeless(`emendatus:raw_${material}_block`, [`9x emendatus:raw_${material}`]).id(`emendatus:shaped/raw_${material}_block`);
            e.shapeless(`9x emendatus:raw_${material}`, `emendatus:raw_${material}_block`).id(`emendatus:shaped/raw_${material}`);
        }
    }

    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]
        // TODO: replace embers fluid outputs with tinkers if thats even possible in kjs god save me
        // TODO: unify alloying? maybe? or just keep it unique per method so they're all useful
        // TODO: wires
        let gemOrIngot = ''
        if (!validateTag('ingot', matName)) {
            gemOrIngot = 'ingot'
        } else if (!validateTag('gem', matName)) {
            gemOrIngot = 'gem'
        }

        if (gemOrIngot) {
            smeltingRecipes(e, matObj[1], matName, gemOrIngot)
            plateRecipes(e, matObj[1], matName, gemOrIngot)
            rodRecipes(e, matObj[1], matName, gemOrIngot)
            gearRecipes(e, matObj[1], matName, gemOrIngot)
        }
    }
})