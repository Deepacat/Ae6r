ServerEvents.recipes(e => {
    e.remove({ id: 'mythicbotany:yggdrasil_branch' })
    e.shaped('mythicbotany:yggdrasil_branch', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'botania:livingwood',
        B: 'kubejs:celestial_mycelium_filaments',
        C: '#botania:runes/midgard'
    }).id('kubejs:shaped/mythicbotany_yggdrasil_branch')
})