ServerEvents.recipes(e => {
    e.shapeless('industrialforegoing:fluid_collector', ['industrialforegoing:fluid_placer'])
        .id(`kubejs:shapeless/fluid_collector`)
    e.shapeless('industrialforegoing:fluid_placer', ['industrialforegoing:fluid_collector'])
        .id(`kubejs:shapeless/fluid_placer`)
    
})