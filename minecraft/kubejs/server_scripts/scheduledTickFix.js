ServerEvents.loaded(e => {
    e.server.allLevels.forEach(level => {
        level.server.scheduleInTicks(1, () => {
            console.log(`Scheduled tick fix for level ${level.name.string}`)
        })
    })
})