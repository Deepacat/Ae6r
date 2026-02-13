const AllMeltingTypes = [
    'tconstruct:melting',
    'thermal:smelter',
    'embers:melting',
]

ServerEvents.recipes(e => {
    allMelting(e, {
        types: AllMeltingTypes,
        fluidOutput: Fluid.of('thermal:redstone', 100),
        itemInput: '#forge:dusts/redstone',
        temperature: 400,
        energy: 8000,
        removeExisting: true,
        idSuffix: 'redstone_dust'
    })
})