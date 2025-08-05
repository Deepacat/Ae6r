ServerEvents.recipes(e => {
    e.remove('powah:crafting/thermoelectric_plate')
    e.recipes.create.pressing('powah:thermoelectric_plate', 'immersiveengineering:thermoelectric_generator')
        .id('kubejs:create/pressing/thermoelectric_plate')
})