// prevent offhand oculus from placing, for wissen wand searching ease (see mods/wizards_reborn/debrisLocating.js)
// client part
BlockEvents.rightClicked(e => {
    if(e.hand != 'OFF_HAND') return
    if(e.player.offhandItem.id === 'ars_nouveau:scryers_oculus') {
        e.cancel()
    }
})
