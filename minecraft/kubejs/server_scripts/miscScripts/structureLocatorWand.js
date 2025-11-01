// Thanks to Liopyu in the KubeJS discord for structure locating
// https://discord.com/channels/303440391124942858/1375491432630059008

// structures that can be located and catalyst offhand item
let locators = {
    'ars_nouveau:fire_essence': {
        structure: 'irons_spellbooks:ancient_battleground',
        dimension: 'minecraft:the_nether',
        consume: true,
        particleColor: '1 0.43 0.30',
    },
    'minecraft:white_banner': {
        structure: 'minecraft:pillager_outpost',
        dimension: 'minecraft:overworld',
        consume: true,
        particleColor: '0.5 1 0.43',
        itemNbt: Item.of('minecraft:white_banner', {
            display: { Name: '{"color":"gold","translate":"block.minecraft.ominous_banner"}' }
        })
    },
    'ae2:meteorite_compass': {
        structure: 'kubejs:alien_crashsite',
        dimension: 'minecraft:the_end',
        consume: false,
        particleColor: '0.98 0.44 1'
    }
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
    let locatorObj = locators[offhand.id]

    if (!locatorObj) { return }
    if (!mainhand.hasTag('kubejs:locator_wands')) { return }
    if (e.player.getCooldowns().isOnCooldown(e.player.mainHandItem)) { return }

    // check if locator item requires nbt, and if offhand has any nbt
    if (locatorObj.itemNbt) {
        // if offhand has no nbt, return
        if (!offhand.nbt) { return }
        // loop over locators required nbt
        for (let [key, value] of Object.entries(locatorObj.itemNbt.nbt)) {
            // if offhand does not have the nbt entry, return
            if (!offhand.nbt[key]) { return }
            let locatorData = JSON.stringify(Object.assign({}, locatorObj.itemNbt.nbt[key]))
            let offhandData = JSON.stringify(Object.assign({}, offhand.nbt[key]))
            // if the nbt entry in offhand and locator doesn't have the same value, return
            if (locatorData != offhandData) {
                return
            }
        }
    }

    let registryAccess = e.level.registryAccess()
    let structureRegistry = registryAccess.registryOrThrow(Registries.STRUCTURE)
    let structureKey = structureRegistry.getResourceKey(structureRegistry.get(locatorObj.structure)).get()
    let structureHolder = structureRegistry.getHolderOrThrow(structureKey)

    if (!structureHolder) {
        e.player.setStatusMessage("Structure doesn't exist! If you see this, report it!")
        { return }
    }

    if (e.player.level.dimension != locatorObj.dimension) {
        e.player.setStatusMessage("Could not locate structure in this dimension.")
        return
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

            let startVec = { x: e.player.pos.x(), y: e.player.pos.y() + 3, z: e.player.pos.z() }
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
                    e.level.spawnParticles(`embers:star ${locatorObj.particleColor} 5`, false, px, py, pz, 0.2, 0.2, 0.2, 5, 0.001)
                    e.level.playSound(null, px, py, pz,
                        "wizards_reborn:arcanum_dust_transmutation", "blocks", 1,
                        Math.random() * (1.2 - 0.8) + 0.8
                    )
                })
                ticks += 5
            }
            e.player.swing()
            if (locatorObj.consume) { offhand.count-- }
            e.player.addItemCooldown(mainhand, 20 * 10)
        }
    } else {
        e.player.setStatusMessage("No structure found nearby")
    }
    e.cancel()
})