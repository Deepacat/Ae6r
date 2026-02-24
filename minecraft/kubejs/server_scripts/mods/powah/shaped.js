ServerEvents.recipes(e => {
    // regular shaped recipes
    e.shaped('powah:photoelectric_pane', ['ABA', 'BCB', 'ABA'], {
        A: 'powah:dielectric_paste',
        B: '#forge:gems/silicon',
        C: /*'atum:'*/ 'kubejs:replaceme'
    }).id('kubejs:powah/shaped/photoelectric_pane')

    e.shaped(Item.of('powah:dielectric_rod', 8), ['ABA', 'ABA', 'ABA'], {
        A: 'powah:dielectric_paste',
        B: '#forge:ingots/energized_steel'
    }).id('kubejs:powah/shaped/dielectric_rod')

    e.shaped(Item.of('powah:dielectric_rod_horizontal', 8), ['AAA', 'BBB', 'AAA'], {
        A: 'powah:dielectric_paste',
        B: '#forge:ingots/energized_steel'
    }).id('kubejs:powah/shaped/dielectric_rod_horizontal')

    e.shaped('powah:dielectric_casing', ['ABA', 'C C', 'ABA'], {
        A: /*'atum:'*/ 'kubejs:replaceme',
        B: 'powah:dielectric_rod_horizontal',
        C: 'powah:dielectric_rod'
    }).id('kubejs:powah/shaped/dielectric_casing')

    e.shaped(`powah:player_transmitter_basic`, [' A ', 'BCB', 'BDB'], {
        A: 'powah:player_aerial_pearl',
        B: 'powah:capacitor_basic_large',
        C: 'immersiveengineering:tesla_coil',
        D: 'powah:dielectric_casing'
    }).id(`kubejs:powah/shaped/player_tranmitter_basic`)

    e.shaped(`powah:energizing_rod_basic`, [' A ', 'BCB', 'BDB'], {
        A: /*'refinedstorage:'*/ 'kubejs:replaceme',
        B: 'powah:capacitor_basic_large',
        C: 'immersiveengineering:tesla_coil',
        D: 'immersiveengineering:coil_lv'
    }).id(`kubejs:powah/shaped/energizing_rod_basic`)

    // cell, battery, and solar panel recipe gen
    for (let tier of powahTiers) {
        let capacitor = 'powah:capacitor_' + tier
        let crystal = 'powah:crystal_' + tier

        if (tier == 'starter' || tier == 'basic') {
            continue
        } else if (tier == 'hardened') {
            crystal = 'powah:steel_energized'
        }

        let lower_tiers = lowerTiers(powahTiers, tier)

        e.shaped(`powah:energy_cell_${tier}`, ['ABA', 'BCB', 'ABA'], {
            A: crystal,
            B: capacitor,
            C: Ingredient.of(lower_tiers.map((item) => `powah:energy_cell_${item}`))
        }).id(`kubejs:powah/shaped/energy_cell_${tier}`)

        e.shaped(`powah:battery_${tier}`, [' A ', 'BCB', ' B '], {
            A: crystal,
            B: capacitor,
            C: Ingredient.of(lower_tiers.map((item) => `powah:battery_${item}`))
        }).id(`kubejs:powah/shaped/battery_${tier}`)

        e.shaped(`powah:solar_panel_${tier}`, ['BCB', 'AAA'], {
            A: crystal,
            B: capacitor,
            C: Ingredient.of(lower_tiers.map((item) => `powah:solar_panel_${item}`))
        }).id(`kubejs:powah/shaped/solar_panel_${tier}`)
    }

    // recipe gen for machines and their upgrades
    for (let tier of powahTiers) {
        if (tier == 'starter') { return }
        let capacitor = `powah:capacitor_${tier}`
        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`
        }

        let wire_coil = 'immersiveengineering:coil_lv'
        if (tier == 'blazing' || tier == 'niotic') {
            wire_coil = 'immersiveengineering:coil_mv'
        } else if (tier == 'spirited' || tier == 'nitro') {
            wire_coil = 'immersiveengineering:coil_hv'
        }

        // base machine recipes
        e.shaped(`powah:furnator_${tier}`, ['AAA', 'BCB', 'ADA'], {
            A: 'immersiveengineering:blastbrick_reinforced',
            B: capacitor,
            C: 'powah:dielectric_casing',
            D: 'thermal:dynamo_stirling'
        }).id(`kubejs:powah/shaped/furnator_${tier}`)

        e.shaped(`powah:magmator_${tier}`, ['BAB', 'CDE', 'BFB'], {
            A: Item.of('thermal:fluid_cell'),
            B: capacitor,
            C: 'immersiveengineering:radiator',
            D: 'pneumaticcraft:turbine_rotor',
            E: wire_coil,
            F: 'powah:dielectric_casing'
        }).id(`kubejs:powah/shaped/magmator_${tier}`)

        e.shaped(`powah:thermo_generator_${tier}`, ['BAB', 'BCB', 'DDD'], {
            A: `powah:magmator_${tier}`,
            B: capacitor,
            C: 'pneumaticcraft:heat_pipe',
            D: 'powah:thermoelectric_plate'
        }).id(`kubejs:powah/shaped/thermo_generator_${tier}`)

        e.shaped(`powah:energy_discharger_${tier}`, ['BAB', 'DCD', 'DBD'], {
            A: `powah:energy_hopper_${tier}`,
            B: capacitor,
            C: `powah:energy_cell_${tier}`,
            D: 'powah:dielectric_rod'
        }).id(`kubejs:powah/shaped/energy_discharger_${tier}`)

        e.shaped(`powah:energy_hopper_${tier}`, ['BDB', 'BCB', 'DAD'], {
            A: 'thermal:rf_coil',
            B: capacitor,
            C: 'powah:dielectric_casing',
            D: 'powah:dielectric_rod'
        }).id(`kubejs:powah/shaped/energy_hopper_${tier}`)

        e.shaped(`powah:ender_cell_${tier}`, ['ABA', 'BCB', 'ABA'], {
            A: 'fluxnetworks:flux_core',
            B: capacitor,
            C: 'fluxnetworks:flux_block'
        }).id(`kubejs:powah/shaped/ender_cell_${tier}`)

        // machine upgrades        
        if (tier != 'basic') {
            e.shaped(`powah:furnator_${tier}`, ['BCB'], {
                B: capacitor,
                C: Ingredient.of(lower_tiers.map((item) => `powah:furnator_${item}`))
            }).id(`kubejs:powah/shaped/furnator_${tier}_upgrade`)

            e.shaped(`powah:magmator_${tier}`, ['BAB', 'BCB'], {
                A: wire_coil,
                B: capacitor,
                C: Ingredient.of(lower_tiers.map((item) => `powah:magmator_${item}`))
            }).id(`kubejs:powah/shaped/magmator_${tier}_upgrade`)

            e.shaped(`powah:thermo_generator_${tier}`, ['BAB', 'BCB'], {
                A: `powah:magmator_${tier}`,
                B: capacitor,
                C: Ingredient.of(lower_tiers.map((item) => `powah:thermo_generator_${item}`))
            }).id(`kubejs:powah/shaped/thermo_generator_${tier}_upgrade`)

            e.shaped(`powah:energy_discharger_${tier}`, ['ABA', ' C ', ' A '], {
                A: capacitor,
                B: Ingredient.of(lower_tiers.map((item) => `powah:energy_discharger_${item}`)),
                C: `powah:energy_cell_${tier}`
            }).id(`kubejs:powah/shaped/energy_discharger_${tier}_upgrade`)

            e.shaped(`powah:energy_hopper_${tier}`, ['A A', 'ABA'], {
                A: capacitor,
                B: Ingredient.of(lower_tiers.map((item) => `powah:energy_hopper_${item}`))
            }).id(`kubejs:powah/shaped/energy_hopper_${tier}_upgrade`)

            e.shaped(`powah:ender_cell_${tier}`, [' A ', 'ABA', ' A '], {
                A: capacitor,
                B: Ingredient.of(lower_tiers.map((item) => `powah:ender_cell_${item}`))
            }).id(`kubejs:powah/shaped/ender_cell_${tier}_upgrade`)

            // player transmitter and energizing rod recipes
            let previousTierRod, previousTierTransmitter
            if (index > 1) {
                previousTierRod = `powah:energizing_rod_${powahTiers[index - 1]}`
                previousTierTransmitter = `powah:player_transmitter_${powahTiers[index - 1]}`

                e.shaped(`powah:player_transmitter_${tier}`, ['BCB', 'BDB'], {
                    B: capacitor,
                    C: previousTierTransmitter,
                    D: 'powah:dielectric_casing'
                }).id(`kubejs:powah/shaped/player_transmitter_${tier}`)

                e.shaped(`powah:energizing_rod_${tier}`, [' A ', 'BCB', 'BDB'], {
                    A: /*'refinedstorage:'*/ 'kubejs:replaceme',
                    B: capacitor,
                    C: previousTierRod,
                    D: wire_coil
                }).id(`kubejs:powah/shaped/energizing_rod_${tier}`)
            }
        }
    }
})