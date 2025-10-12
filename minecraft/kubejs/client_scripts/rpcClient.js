// Simple Discord Rich Presence Script
// Thanks to Monifactory for reference
// Client part (Server, Client)

NetworkEvents.dataReceived('ae6r:rpc', e => {
    SDRP.setState(
        `Tech: Ch${e.data.tech}, Magic: Ch${e.data.magic}, ` +
        `Playtime: ${(e.player.stats.playTime/60/60/20).toFixed(2)}h`,
        "Quest Progress", "quest"
    )
    // SDRP.setState(
    //     `STATUSTEST1 STATUSTEST2 STATUSTEST3 STATUSTEST4 STATUSTEST5 STATUSTEST6`
    //     , "test", "test"
    // )
})


if (global.fsdifjsdjfdi) {
    global.tier = 0; // this is clientside tier anyways
    ClientEvents.loggedIn(() => {
        SDRP.setState("sdrp.ulv", "ULV", "ulv")
    })

    ClientEvents.loggedOut(() => {
        global.tier = 0;
    })

    NetworkEvents.dataReceived("moni:rpc", (e) => {
        global.tier = Number(e.data.tier ?? TIER_ULV);
        let tierID = TIER_ID_MAPPING[Math.round(global.tier)]; // putting val inside the global var turns it into float
        SDRP.setState(`sdrp.${tierID.toLowerCase()}`, tierID, tierID.toLowerCase())
        // console.log("SDRP Update Client By Network")
        // console.log(`New tier: ${global.tier} ${tierID}`)
    })

    // this event is slightly delayed when running an integrated server
    sdrp.dimension_change(ev => {
        let tierID = TIER_ID_MAPPING[Math.round(global.tier)];
        ev.updateSDRPState(`sdrp.${tierID.toLowerCase()}`, tierID, tierID.toLowerCase())
        // console.log("SDRP Update Client By Dim")
    })
}

