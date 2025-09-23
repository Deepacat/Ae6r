ServerEvents.recipes(e => {
    e.recipes.pneumaticcraft.heat_frame_cooling(
        'immersiveengineering:concrete',
        Fluid.of('immersiveengineering:concrete', 1000),
        305,
        { multiplier: 0.085, limit: 0.1 }
    ).id('kubejs:pneumaticcraft/heat_frame_cooling/concrete')
})