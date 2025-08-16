ServerEvents.recipes(e => {
    e.remove({ id: "occultism:spirit_fire/arcane_ashes" })
    e.recipes.occultism.spirit_fire('bloodmagic:arcaneashes', 'kubejs:magic_clay')
        .id('kubejs:occultism/spirit_fire/arcane_ashes')

    e.remove({ id: "occultism:spirit_fire/otherstone" })
    e.recipes.occultism.spirit_fire('occultism:otherstone', 'ars_nouveau:sourcestone')
        .id('kubejs:occultism/spirit_fire/otherstone')

    e.remove({ id: "occultism:spirit_fire/spirit_attuned_gem" })
    e.recipes.occultism.spirit_fire('occultism:spirit_attuned_gem', '#forge:gems/source')
        .id('kubejs:occultism/spirit_fire/spirit_attuned_gem')
})
