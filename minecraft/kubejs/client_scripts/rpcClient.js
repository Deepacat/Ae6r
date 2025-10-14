// Simple Discord Rich Presence Script
// Thanks to Monifactory for reference
// Client part (Server, Client)

NetworkEvents.dataReceived('ae6r:rpc', e => {
    let pt = e.data.pt > 0 ? `, Playtime: ${(e.data.pt / 60 / 60 / 20).toFixed(2)}h` : ""
    let icon
    switch (icon) {
        case (e.data.tech == 1 || e.data.magic == 1): icon = "discovery"
            break
        case (e.data.tech == 2 || e.data.magic == 2): icon = "understanding"
            break
        case (e.data.tech == 3 || e.data.magic == 3): icon = "overcoming"
            break
        case (e.data.tech == 4 || e.data.magic == 4): icon = "mastery"
            break
        default:
            icon = "starting"
    }

    // let status = `Tech: ${e.data.tech}, Magic: ${e.data.magic}${pt}`
    console.log(status)
    SDRP.setState(
        `${status}`,
        "test", "menu"
    )
})