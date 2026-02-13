ServerEvents.recipes(e => {
    e.recipes.tconstruct.casting_table('kubejs:blood_slime_ball', Fluid.of('tconstruct:liquid_soul', 250))
        .id('kubejs:casting_table/blood_slime_ball')

    e.remove({ id: 'create:crafting/materials/rose_quartz' })
    e.recipes.tconstruct.casting_table('create:rose_quartz',
        [Fluid.of('thermal:redstone', 800), Item.of('minecraft:quartz')]
    ).id('kubejs:casting_table/rose_quartz')
})