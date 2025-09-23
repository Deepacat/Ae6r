ServerEvents.recipes(e => {
    e.recipes.pneumaticcraft.fluid_mixer(
        Fluid.of('tconstruct:sky_slime', 250),
        Fluid.of('integrateddynamics:menril_resin', 750),
        4.0,
        300
    ).item_output('integrateddynamics:crystalized_menril_block')
    .id('kubejs:pneumaticcraft/fluid_mixer/crystalized_menril_block')

    e.recipes.pneumaticcraft.fluid_mixer(
        Fluid.of('tconstruct:ender_slime', 250),
        Fluid.of('integrateddynamics:liquid_chorus', 750),
        4.0,
        300
    ).item_output('integrateddynamics:crystalized_chorus_block')
    .id('kubejs:pneumaticcraft/fluid_mixer/crystalized_chorus_block')

    e.recipes.pneumaticcraft.fluid_mixer(
        Fluid.of('tconstruct:venom', 50),
        Fluid.of('pneumaticcraft:etching_acid', 50),
        2.0,
        30
    ).fluid_output('undergarden:virulent_mix_source')
    .id('kubejs:pneumaticcraft/fluid_mixer/virulent_mix')

    e.recipes.pneumaticcraft.fluid_mixer(
        Fluid.of('tconstruct:ender_slime', 50),
        Fluid.of('industrialforegoing:pink_slime', 50),
        4.0,
        30
    ).fluid_output(Fluid.of('kubejs:pink_ender_slime', 100))
    .id('kubejs:pneumaticcraft/fluid_mixer/pink_ender_slime')
})