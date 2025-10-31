ServerEvents.recipes(e => {
    e.remove()
    e.recipes.createaddition('ae2:charged_certus_quartz_crystal',
        'ae2:certus_quartz_crystal', 10000, 1000
    ).id('kubejs:createaddition/charging/charged_certus_quartz_crystal')
})