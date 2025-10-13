// Simple Discord Rich Presence Script
// Thanks to Monifactory for reference
// Client part (Server, Client)

NetworkEvents.dataReceived('ae6r:rpc', e => {
    console.log(e.data)
    SDRP.setState(
        `Tech: ${e.data.tech}, Magic: ${e.data.magic}, 
        Playtime: ${(e.player.stats.playTime / 60 / 60 / 20).toFixed(2)}h`,
        "Quest Progress", "quest"
    )
})