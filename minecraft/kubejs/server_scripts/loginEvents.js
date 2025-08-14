PlayerEvents.loggedIn(e => {
    if (!e.hasGameStage('starting_items')) {
        e.player.give(Item.of('ftbquests:book'))
        e.player.give(Item.of('waystones:waystone'))
        e.addGameStage('starting_items')
    }
})
