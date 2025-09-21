// kubejs/startup_scripts/schemas/pneumaticcraft.js

ServerEvents.recipes(e => {
    e.recipes.pneumaticcraft.amadron('kubejs:pneumaticcraft/amadron/medium_machinery_schematics',
        { type: 'ITEM', id: 'kubejs:medium_machinery_schematics', amount: 1 },
        { type: 'ITEM', id: 'kubejs:engineers_school_project', amount: 1 },
        0, true, 5
    )
    e.recipes.pneumaticcraft.amadron('kubejs:pneumaticcraft/amadron/heavy_machinery_schematics',
        { type: 'ITEM', id: 'kubejs:heavy_machinery_schematics', amount: 1 },
        { type: 'ITEM', id: 'kubejs:engineers_school_upgrades', amount: 1 },
        0, true, 5
    )
})