///@ts-check

// file for restricting blocks from use until conditions are met
// server/client part. (server, client)
// cancels use/place and alerts player
// copied exact file between client and server

// @ts-ignore
let restrictions = global.restrictions

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


    if (!restrictions[blockOrItem]) { return true }

    const errors = []
    for (const condition of restrictions[blockOrItem].conditions) {
        if (condition.sage && !player.stages.has(condition.sage)) {
            errors.push(`§cYou can't use §b${blockOrItem} §cyet, you must complete §agamestage "${condition.sage}"`)
        }
        if (condition.dimension) {
            if (condition.dimension != level.dimension) {
                let dimName = condition.dimension.split(':')[1]
                if (condition.dimStage && !player.stages.has(condition.dimStage)) {
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