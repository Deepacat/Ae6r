ServerEvents.recipes(e => {
    e.recipes.bloodmagic.array('powah:charged_snowball', '#forge:rods/copper', '#forge:gems/fluorite')
        .texture('bloodmagic:textures/models/alchemyarrays/bindinglightningarray.png')
        .id(`kubejs:array/charged_snowball`)

    e.recipes.bloodmagic.array('minecraft:heart_of_the_sea', 'architects_palette:algal_lamp', '#forge:gems/arcanum')
        .texture('bloodmagic:textures/models/alchemyarrays/watersigil.png')
        .id(`kubejs:array/heart_of_the_sea`)

    e.recipes.bloodmagic.array('bloodmagic:arcaneashes', 'architects_palette:moonstone', '#forge:ingots/silver')
        .texture('bloodmagic:textures/models/alchemyarrays/moonarray.png')
        .id(`kubejs:array/night`)

    e.recipes.bloodmagic.array('bloodmagic:arcaneashes', 'architects_palette:sunstone', '#forge:ingots/sunmetal')
        .texture('bloodmagic:textures/models/alchemyarrays/sunarray.png')
        .id(`kubejs:array/day`)

    e.remove({ id: 'bloodmagic:array/divinationsigil' })
    e.recipes.bloodmagic.array('bloodmagic:divinationsigil', 'ars_nouveau:ritual_scrying', 'bloodmagic:blankslate')
        .texture('bloodmagic:textures/models/alchemyarrays/divinationsigil.png')
        .id(`kubejs:array/divinationsigil`)
})