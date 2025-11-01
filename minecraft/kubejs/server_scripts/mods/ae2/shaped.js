ServerEvents.recipes(e => {
    e.remove({ output: 'ae2:charger' })
    e.shaped('ae2:charger', [
        'ABA',
        'CD ',
        'ABA'
    ], {
        A: '#forge:ingots/charged_certus_steel',
        B: 'ae2:fluix_crystal',
        C: '#forge:gears/charged_certus_steel',
        D: 'createaddition:tesla_coil'
    }).id('kubejs:ae2/shaped/charger')

    e.remove({ output: 'ae2:inscriber' })
    e.shaped('ae2:inscriber', [
        'ABA',
        'CD ',
        'EBE'
    ], {
        A: '#forge:ingots/charged_certus_steel',
        B: 'ae2:fluix_crystal',
        C: '#forge:gears/charged_certus_steel',
        D: 'thermal:multiservo_press',
        E: '#forge:storage_blocks/charged_certus_steel'
    }).id('kubejs:ae2/shaped/inscriber')
})