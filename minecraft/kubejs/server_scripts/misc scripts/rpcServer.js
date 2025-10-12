// Simple Discord Rich Presence Script
// Thanks to Monifactory for reference
// Server part (Server, Client)

// let getQuestData = (player) => FTBQuests.getData(player)
// let getQuestObject = (level, id) => FTBQuests.getObject(level, id)
// let isQuestComplete = (player, questObject) => getQuestData(player).isCompleted(questObject)
// let getQuestProgress = (player, questObject) => getQuestData(player).getProgress(questObject)
// let setQuestProgress = (player, questObject, progress) => getQuestData(player).setProgress(questObject, progress)
// let addQuestProgress = (player, questObject, amount) => getQuestData(player).addProgress(questObject, amount)

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
            // console.log(`Checking chapter ${chapter.indexOf(questsInChapter) + 1} of ${path}`)
            for (let questId of questsInChapter) {
                let questObj = FTBQuests.getObject(e.player.level, questId)
                let isCompleted = FTBQuests.getData(e.player).isCompleted(questObj)
                // console.log(`checking if ${questObj.getTitle()} is completed`)
                if (isCompleted) {
                    // console.log(`${questObj.getTitle()} is completed`)
                    // console.log(`Setting ${path} chapter to ${chapter.indexOf(questsInChapter) + 1}`)
                    progress[path] = chapter.indexOf(questsInChapter) + 1
                }
            }
        }
    }
    console.log(`Player ${e.player.name} logged in with magic chapter ${progress.magic} and tech chapter ${progress.tech}`)
    e.player.sendData('ae6r:rpc', progress)
}

PlayerEvents.inventoryOpened(e => {
    updateRPC(e)
})

PlayerEvents.loggedIn(e => {
    updateRPC(e)
})

if (global.fsdifjsdjfdi) {
    /** @private */
    const ___TIER_QUEST_MAPPING = [
        // all of these are on the progression page
        "DEFAULT",
        "61CC4AD6FAE15248", // lv
        "6C028CD89745098E", // mv
        "48CAEBEE83D7C791", // hv
        "30AAFB97813DEB6C", // ev
        "6E27637A9C94A0AA", // iv
        "646B8CD10787D899", // luv
        "11B25506F679ACBD", // zpm
        "4B497D256FB3983F", // uv
        "0A34290F579BB4E2", // uhv
        "63812416270292A4", // uev
        "60D863C48FBFF5A3", // uiv
        "1A6F087E10DC036E", // max
        "63280C5F37A22345" // creative chest (end)
    ]

    FTBQuestsEvents.completed(event => {
        const id = ___TIER_QUEST_MAPPING.findIndex(v => (v === event.object.codeString))
        if (id === -1) return;
        ___updateTierRPC(id, event.player);
    })

    PlayerEvents.loggedIn(event => {
        const quests = FTBQuests.getServerDataFromPlayer(event.player);

        let highestLevel = 0;
        for (const key in ___TIER_QUEST_MAPPING) {
            let value = ___TIER_QUEST_MAPPING[key];
            if (value === "DEFAULT") continue;
            if (quests.isCompleted(value))
                highestLevel = key;
        }
        ___updateTierRPC(highestLevel, event.player)
    })

    /**
     * @private
     * @param {number} tier
     * @param {Internal.Player} player
     */
    const ___updateTierRPC = (tier, player) => {
        if (!player) {
            console.log("!! READ THIS SERVER.LOG DUMMY !!")
            console.log("!! DONT RIGHT CLICK -> 'COMPLETE INSTANTLY', IT WONT SEND THE PLAYER !!")
            return;
        }
        player.sendData("moni:rpc", { tier: tier });
        // console.log("SDRP Sent Update to client");
    }
}
