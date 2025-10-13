// Simple Discord Rich Presence Script
// Thanks to Monifactory for reference
// Server part (Server, Client)

/** @private */
const questProgression = {
    magic: [
        ['09CC73450B191D9F'], // ch1: "Harnessing magic"
        ['46B191D72A247A1D', '68EB68D7A1CC783F', '155C0DE1EBE6F5D0'], // ch2: Natures aura, Occultism, Wizreborn
        [], // ch3
        [], // ch4
    ],
    tech: [
        ['61A49DF185789C50'], // ch1 "Industrial revolution"
        ['7989B6AD3A82642C', '6BD22F97D5168969'], // ch2 Immersive engineering, pneumaticcraft
        [], // ch3
        [], // ch4
    ]
}

function updateRPC(e) {
    let progress = {
        magic: 0,
        tech: 0
    }

    for (let [path, chapter] of Object.entries(questProgression)) {
        for (let questsInChapter of chapter) {
            for (let questId of questsInChapter) {
                let questObj = FTBQuests.getObject(e.player.level, questId)
                let isCompleted = FTBQuests.getData(e.player).isCompleted(questObj)
                if (isCompleted) {
                    progress[path] = chapter.indexOf(questsInChapter) + 1
                }
            }
        }
    }
    e.player.sendData('ae6r:rpc', progress)
}

PlayerEvents.loggedIn(e => {
    updateRPC(e)
})

PlayerEvents.tick(e => {
    if (Utils.server.tickCount % (20 * 60) != 0) { return }
    updateRPC(e)
})

FTBQuestsEvents.completed(e => {
    updateRPC(e)
})