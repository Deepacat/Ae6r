ServerEvents.recipes(e => {
    e.remove({ id: 'botania:auto_crafting_halo' })
    e.shapeless('botania:auto_crafting_halo', ['botania:crafting_halo', 'eidolon:lesser_soul_gem'])
        .id('kubejs:auto_crafting_halo')

    e.remove({ id: 'botania:lens_magnet' })
    e.shapeless('botania:lens_magnet', ['botania:lens_normal', 'immersiveengineering:wirecoil_copper', 'immersiveengineering:wirecoil_copper'])
        .id('kubejs:lens_magnet')

    e.remove({ id: 'botania:redstone_root' })
    e.shapeless('botania:redstone_root', ['kubejs:replaceme', '#forge:dusts/redstone'])
        .id('kubejs:redstone_root')

    e.remove({ id: 'botania:red_string' })
    e.shapeless('botania:red_string', ['minecraft:string', '#forge:storage_blocks/redstone', /*'atum:'*/ 'kubejs:replaceme'])
        .id('kubejs:red_string')

    e.remove({ id: 'botania:corporea_block' })
    e.shapeless('botania:corporea_block', ['naturesaura:infused_stone', 'botania:corporea_spark'])
        .id('kubejs:corporea_block')

    e.remove({ id: 'botania:corporea_spark_master' })
    e.shapeless('botania:corporea_spark_master', [/* 'atum:' */ 'kubejs:replaceme'])
        .id('kubejs:corporea_spark_master')
})
