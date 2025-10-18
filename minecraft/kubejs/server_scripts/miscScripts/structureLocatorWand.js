// Thanks to Liopyu in the KubeJS discord for structure locating
// https://discord.com/channels/303440391124942858/1375491432630059008

// structures that can be located and catalyst offhand item
let locators = {
    'ars_nouveau:fire_essence': 'irons_spellbooks:ancient_battleground',
}

let ServerLevel = Java.loadClass("net.minecraft.server.level.ServerLevel")
let BlockPos = Java.loadClass("net.minecraft.core.BlockPos")
let ChunkPos = Java.loadClass("net.minecraft.world.level.ChunkPos")
let SectionPos = Java.loadClass("net.minecraft.core.SectionPos")
let ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")
let Registries = Java.loadClass("net.minecraft.core.registries.Registries")
let HolderSet = Java.loadClass("net.minecraft.core.HolderSet")
let Holder = Java.loadClass("net.minecraft.core.Holder")

ItemEvents.rightClicked(e => {
    if (!(e.level instanceof ServerLevel)) { return }
    if (!isRealPlayer(e.player)) { return }
    if (e.hand != 'MAIN_HAND') { return }

    let offhand = e.player.offHandItem
    let mainhand = e.player.mainHandItem

    if (!mainhand.hasTag('kubejs:locator_wands')) { return }
    if (e.player.getCooldowns().isOnCooldown(e.player.mainHandItem)) { return }
    if (!locators[offhand.id]) { return }

    let registryAccess = e.level.registryAccess()
    let structureRegistry = registryAccess.registryOrThrow(Registries.STRUCTURE)
    let structureKey = structureRegistry.getResourceKey(structureRegistry.get(locators[offhand.id])).get()
    let structureHolder = structureRegistry.getHolderOrThrow(structureKey)

    if (!structureHolder) {
        e.player.tell("Structure not found")
        { return }
    }

    let structure = structureHolder.get()
    let holderSet = HolderSet.direct([structureHolder])
    let origin = e.player.getPos()

    let generator = e.level.getChunkSource().getGenerator()
    let result = generator.findNearestMapStructure(e.level, holderSet, origin, 100, false)

    if (result != null) {
        let pos = result.getFirst()
        let chunkPos = new ChunkPos(pos)
        let sectionPos = SectionPos.of(chunkPos, e.level.getMinSection())
        let chunk = e.level.getChunk(chunkPos.x, chunkPos.z)

        let start = e.level.structureManager().getStartForStructure(sectionPos, structure, chunk)
        if (start && start.isValid()) {
            let piece = start.getPieces()[0]
            let { x, y, z } = piece.locatorPosition

            let startVec = { x: e.player.pos.x(), y: e.player.pos.y(), z: e.player.pos.z() }
            let endVec = { x: x + 0.5, y: y + 0.5, z: z + 0.5 }
            let dir = { x: endVec.x - startVec.x, y: endVec.y - startVec.y, z: endVec.z - startVec.z }
            let distance = Math.sqrt(dir.x * dir.x + dir.y * dir.y + dir.z * dir.z)
            let norm = { x: dir.x / distance, y: dir.y / distance, z: dir.z / distance }

            let distanceStep = 3
            let steps = Math.ceil(distance / distanceStep)
            let maxSteps = Math.min(steps, 10)
            let ticks = 0

            for (let i = 0; i <= maxSteps; i++) {
                let px = startVec.x + norm.x * i * distanceStep
                let py = startVec.y + norm.y * i * distanceStep
                let pz = startVec.z + norm.z * i * distanceStep
                e.server.scheduleInTicks(ticks, () => {
                    e.level.spawnParticles("embers:star 0.29 0.62 0.98 5", false, px, py, pz, 0, 0, 0, 5, 0.001)
                    e.level.playSound(null, px, py, pz,
                        "wizards_reborn:arcanum_dust_transmutation", "blocks", 1,
                        Math.random() * (1.2 - 0.8) + 0.8
                    )
                })
                ticks += 5
            }
            e.player.swing()
            offhand.count--
            e.player.addItemCooldown(mainhand, 20 * 15)
        }
    } else {
        e.player.tell("No structure found nearby")
    }
    e.cancel()
})