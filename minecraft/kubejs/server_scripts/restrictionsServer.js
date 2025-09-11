///@ts-check

// file for restricting blocks from use until conditions are met
// server/client part. (server, client)
// cancels use/place and alerts player
// copied exact file between client and server

// @ts-ignore
let restrictions = global.restrictions

// reset tell player cooldown data on login
PlayerEvents.loggedIn(e => {
    if (!e.level.isClientSide()) {
        // @ts-ignore
        e.player.persistentData.restrictionTellCd = {}
    }
})

/**
 * @param {Internal.ItemClickedEventJS | Internal.BlockRightClickedEventJS | Internal.BlockPlacedEventJS} event
 * @param {string | number} blockOrItem
 */
function canUse(event, blockOrItem) {
    const { player } = event
    const level = player.level

    let cd
    // only do persistent data on serverside
    if (!level.isClientSide()) {
        // @ts-ignore
        cd = player.persistentData.restrictionTellCd

        if (!cd) { cd = {} }
    }

    let restrictionKey
    for (let [key, obj] of Object.entries(restrictions)) {
        if (obj.regex) {
            if (obj.regex.test(blockOrItem.toString())) {
                restrictionKey = key
                break
            }
        } else {
            if (key == blockOrItem) {
                restrictionKey = key
                break
            }
        }
    }

    if (!restrictionKey) { return true }

    const errors = []
    for (let condition of restrictions[restrictionKey].conditions) {
        if (condition.stage && !player.stages.has(condition.stage)) {
            errors.push(`§cYou can't use §b${blockOrItem} §cyet, you must complete §agamestage "${condition.stage}"`)
        }
        if (condition.dimension) {
            if (condition.dimension != level.dimension) {
                let dimName = condition.dimension.split(':')[1]
                if (condition.dimStage && player.stages.has(condition.dimStage)) { continue }

                if (condition.dimStage) {
                    errors.push(`§cYou can't use §b"${blockOrItem}" §coutside of §b"${dimName}" §cyet, you must complete §agamestage "${condition.dimStage}"`)
                } else {
                    errors.push(`§cYou can't use §b"${blockOrItem}" §cin this dimension, it can only be used in §a"${dimName}"`)
                }
            }
        }
    }

    if (errors.length > 0) {
        // only run tells and cd persistent data on server
        if (!level.isClientSide()) {
            if (cd[blockOrItem] == 0 || !cd[blockOrItem]) {
                cd[blockOrItem] = 1
                event.server.scheduleInTicks(100, () => { cd[blockOrItem] = 0 })
                for (const error of errors) {
                    // @ts-ignore
                    player.tell(error)
                }
                // @ts-ignore
                player.tell('\n')
            }
        }
        return false
    }
    return true
}

ItemEvents.rightClicked(event => {
    if (!canUse(event, event.item.id)) { event.cancel() }
})

BlockEvents.rightClicked(event => {
    if (!canUse(event, event.block.id)) { event.cancel() }
    if (!canUse(event, event.item.id)) { event.cancel() }
})

BlockEvents.placed(event => {
    if (!canUse(event, event.block.id)) { event.cancel() }
})