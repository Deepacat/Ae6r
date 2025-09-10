// // file for restricting blocks from use until conditions are met
// // client part. (server, client, startup)
// // cancels use/place client side

// let restrictions = global.restrictions

// /**
//  * @param {Internal.ItemClickedEventJS | Internal.BlockRightClickedEventJS | Internal.BlockPlacedEventJS} event
//  * @param {string | number} blockOrItem
//  */
// function canUse(event, blockOrItem) {
//     const { player } = event
//     const level = player.level

//     if (!restrictions[blockOrItem]) { return true }

//     const errors = []
//     for (const condition of restrictions[blockOrItem].conditions) {
//         if (condition.dimension && condition.dimension != level.dimension) {
//             errors.push(`§cYou can't use ${blockOrItem} in this dimension, it can only be used in: ${condition.dimension}`)
//         }
//         if (condition.stage && !player.stages.has(condition.stage)) {
//             errors.push(`§cYou can't use ${blockOrItem} yet, you must complete gamestage: ${condition.stage}`)
//         }
//     }

//     if (errors.length > 0) {
//         return false
//     }
//     return true
// }

// ItemEvents.rightClicked(event => {
//     if (!canUse(event, event.item.id)) { event.cancel() }
// })

// BlockEvents.rightClicked(event => {
//     if (!canUse(event, event.block.id)) { event.cancel() }
//     if (!canUse(event, event.item.id)) { event.cancel() }
// })

// BlockEvents.placed(event => {
//     if (!canUse(event, event.block.id)) { event.cancel() }
// })