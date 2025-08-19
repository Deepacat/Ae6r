ServerEvents.recipes(e => {
    e.remove({ id: 'ars_nouveau:apprentice_spell_book_upgrade' })
    e.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:shadow_gem', '#forge:gems/diamond', '#forge:gems/diamond',
            '#forge:gems/diamond', 'thermal:blitz_rod', 'thermal:blizz_rod', 'thermal:basalz_rod', 'minecraft:blaze_rod'],
        'ars_nouveau:novice_spell_book',
        'ars_nouveau:apprentice_spell_book',
        50000
    ).id('kubejs:apprentice_spell_book_upgrade')
    e.remove({ id: 'ars_nouveau:archmage_spell_book_upgrade' })

    e.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:wilden_tribute', 'minecraft:totem_of_undying', '#forge:gems/amber',
            '#forge:gems/amber', /*'betterendforge:'*/ 'kubejs:replaceme', /*'betterendforge:'*/ 'kubejs:replaceme',
            /*'betterendforge:'*/ 'kubejs:replaceme', /*'betterendforge:'*/ 'kubejs:replaceme'],
        'ars_nouveau:apprentice_spell_book',
        'ars_nouveau:archmage_spell_book',
        250000
    ).id('kubejs:archmage_spell_book_upgrade')
})