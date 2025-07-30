// // shorten function from startup unif for getting the property type (ingots, dusts, plates, etc)
// const getPropType = global.getPropType

// // array of tags to blacklist the replacing to prevent conversion recipe dupes (nugget > ingot > block)
// const replaceBlackList = [
//     { output: '#forge:nuked' },
//     { output: '#forgenuked:storage_blocks' },
//     { output: '#forgenuked:ingots' },
//     { output: '#forgenuked:nuggets' },
//     { output: '#forgenuked:gears' },
//     { output: '#forgenuked:plates' }
// ]

// ServerEvents.recipes(e => {
//     global.unifyArgs.forEach(metalObj => {
//         let matName = metalObj.name
//         metalObj.propIds.forEach(propId => {
//             let propType = getPropType(propId)
//             e.replaceInput({ input: `#forgenuked:${propType}/${matName}` }, `#forgenuked:${propType}/${matName}`, propId)
//             e.replaceOutput({
//                 not: replaceBlackList,
//                 output: `#forgenuked:${propType}/${matName}`
//             }, `#forgenuked:${propType}/${matName}`, propId)
//         })
//     })
//     e.remove({ input: '#forge:nuked' })
//     e.remove({ output: '#forge:nuked' })
// })

// ServerEvents.tags('item', e => {
//     global.unifyArgs.forEach(metalObj => {
//         let matName = metalObj.name
//         metalObj.propIds.forEach(propId => {
//             let propType = getPropType(propId)
//             if (Item.of(propId) == '') {
//                 console.log(`CRITICAL! Item "${propId}" does NOT exist!`)
//                 return
//             }
//             e.get(`forge:${propType}/${matName}`).getObjectIds().forEach(tagItem => {
//                 if (tagItem == propId) return
//                 // add to a junk tags to have stupid resilient recipes replaced and removed automagically
//                 e.add(`forgenuked:${propType}/${matName}`, tagItem)
//                 e.add(`forgenuked:${propType}`, tagItem)
//                 e.add('forge:nuked', tagItem)
//                 e.add('c:hidden_from_recipe_viewers', tagItem)
//                 e.remove(`forge:${propType}/${matName}`, tagItem)
//                 console.log(`Removed tag forge:${propType}/${matName} from ${tagItem}, prefered is ${propId}`)
//             })
//         })
//     })
// })
