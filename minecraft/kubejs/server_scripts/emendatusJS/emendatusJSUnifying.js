ServerEvents.recipes(event => {
    for (let matObj of Object.entries(global.emendatus_mats)) {
        let material = matObj[0]
        if (Item.exists(`emendatus:${material}_ingot`) && Item.exists(`emendatus:${material}_block`)) {
            event.shapeless(`emendatus:${material}_block`, [`9x emendatus:${material}_ingot`]).id(`ico:unification/unify_materials/emendatus_base/${material}_block`);
            event.shapeless(`9x emendatus:${material}_ingot`, `emendatus:${material}_block`).id(`ico:unification/unify_materials/emendatus_base/${material}_ingot_from_block`);
        }
        if (Item.exists(`emendatus:${material}_ingot`) && Item.exists(`emendatus:${material}_nugget`)) {
            event.shapeless(`emendatus:${material}_ingot`, [`9x emendatus:${material}_nugget`]).id(`ico:unification/unify_materials/emendatus_base/${material}_ingot_from_nugget`);
            event.shapeless(`9x emendatus:${material}_nugget`, `emendatus:${material}_ingot`).id(`ico:unification/unify_materials/emendatus_base/${material}_nugget`);
        }
        if (Item.exists(`emendatus:${material}_gem`) && Item.exists(`emendatus:${material}_block`)) {
            event.shapeless(`emendatus:${material}_block`, [`9x emendatus:${material}_gem`]).id(`ico:unification/unify_materials/emendatus_base/${material}_block`);
            event.shapeless(`9x emendatus:${material}_gem`, `emendatus:${material}_block`).id(`ico:unification/unify_materials/emendatus_base/${material}_gem`);
        }
        if (Item.exists(`emendatus:raw_${material}`) && Item.exists(`emendatus:raw_${material}_block`)) {
            event.shapeless(`emendatus:raw_${material}_block`, [`9x emendatus:raw_${material}`]).id(`ico:unification/unify_materials/emendatus_base/raw_${material}_block`);
            event.shapeless(`9x emendatus:raw_${material}`, `emendatus:raw_${material}_block`).id(`ico:unification/unify_materials/emendatus_base/raw_${material}`);
        }
    }
})
