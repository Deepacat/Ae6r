// Enderman bartering startup script
// Thanks to liopyu for EntityJS, examples, and help
// Startup part (server, startup)

function shouldCancelTp(entity) {
    if (entity.persistentData.barterStage > 0 || entity.persistentData.barterCooldown > 0) {
        return true
    }
}

ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTeleportEvent$EnderEntity', e => {
    if (shouldCancelTp(e.entity)) {
        e.setCanceled(true)
    }
})
