// Fixes a bug with scheduled ticks happening instantly on each first occurence
function fixScheduledTicks(server){
    server.allLevels.forEach(level => {
        level.server.scheduleInTicks(1, () => {
            console.log(`Scheduled tick fix for level ${level.name.string}`)
        })
    })
}

if (Utils.server) {
    fixScheduledTicks(Utils.server)
}

ServerEvents.loaded(e => {
    fixScheduledTicks(e.server)
})