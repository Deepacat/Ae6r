ServerEvents.recipes(e => {
    e.recipes.bloodmagic.array('powah:charged_snowball', '#forge:rods/copper', '#forge:gems/fluorite')
        .texture('bindinglightningarray')
        .id(`kubejs:array/charged_snowball`)

    e.recipes.bloodmagic.array('minecraft:heart_of_the_sea', 'architects_palette:algal_lamp', '#forge:gems/arcanum')
        .texture('watersigil')
        .id(`kubejs:array/heart_of_the_sea`)

    e.recipes.bloodmagic.array('bloodmagic:arcaneashes', 'architects_palette:moonstone', '#forge:ingots/silver')
        .texture('moonarray')
        .id(`kubejs:array/night`)

    e.recipes.bloodmagic.array('bloodmagic:arcaneashes', 'architects_palette:sunstone', '#forge:ingots/sunmetal')
        .texture('sunarray')
        .id(`kubejs:array/day`)

    e.remove({ id: 'bloodmagic:array/divinationsigil' })
    e.recipes.bloodmagic.array('bloodmagic:divinationsigil', 'ars_nouveau:ritual_scrying', 'bloodmagic:blankslate')
        .texture('divinationsigil')
        .id(`kubejs:array/divinationsigil`)
})