// priority: 999
// FTBQuests shortener functions

/**
 * Gets a players quest data object
 * @param {Internal.Player} player 
 * @returns {Internal.TeamData}
 */
let getQuestData = (player) => FTBQuests.getData(player)

/**
 * Gets a quest object from level and task/quest ID
 * @param {Internal.Level} level 
 * @param {String} id 
 * @returns {Internal.QuestObject}
 */
let getQuestObject = (level, id) => FTBQuests.getObject(level, id)

/**
 * Checks a task to see if a player has completed it
 * @param {Internal.Player} player 
 * @param {Internal.QuestObject} questObject 
 * @returns {Boolean}
 */
let isQuestComplete = (player, questObject) => getQuestData(player).isCompleted(questObject)

/**
 * Gets a current tasks progress from quest object
 * @param {Internal.Player} player 
 * @param {Internal.QuestObject} questObject 
 * @returns {Number}
 */
let getQuestProgress = (player, questObject) => getQuestData(player).getProgress(questObject)

/**
 * Sets a players tasks progress to a value
 * @param {Internal.Player} player 
 * @param {Internal.QuestObject} questObject 
 * @param {Number} progress 
 */
let setQuestProgress = (player, questObject, progress) => getQuestData(player).setProgress(questObject, progress)

/**
 * Adds progress to a players task
 * @param {Internal.Player} player 
 * @param {Internal.QuestObject} questObject 
 * @param {Number} amount 
 */
let addQuestProgress = (player, questObject, amount) => getQuestData(player).addProgress(questObject, amount)

// Example:

// // Nearby cows custom task in my quest
// FTBQuestsEvents.customTask('4F9E9265D2BD3228', event => {
//     event.maxProgress = 3 // Set the tasks max progress
// })

// // Nearby sheeps custom task in my quest
// FTBQuestsEvents.customTask('4009B9D7F206E356', event => {
//     event.maxProgress = 5
// })

// // Optionally, a task for both of them being completed at once
// // You can also *only* use this one if you relay the required info to the player
// FTBQuestsEvents.customTask('6AE8DC3D12F8824E', event => {
//     event.maxProgress = 1
// })

// PlayerEvents.tick(event => {
//     // Cancel our code running on the tick if it isn't exactly divisible by 20
//     // This prevents our code from running every tick, instead being once a second
//     if (event.server.tickCount % 20 != 0) { return }

//     // Cancel running the code/quest checks if the player has already completed the combined task
//     if (isQuestComplete(event.player, getQuestObject(event.player.level, '6AE8DC3D12F8824E'))) {
//         return
//     }

//     // Create an empty object to store nearby entity data
//     // This is reset every time the tick is ran
//     let nearbyEntities = {}

//     // Get the player's Hitbox area, inflated by 5 blocks
//     let playerBounds = event.player.boundingBox.inflate(5)

//     // Loop through all entities within the player's AABB
//     for (let nearEntity of event.player.level.getEntitiesWithin(playerBounds)) {
//         // Skip the entity if it is the player
//         if (nearEntity.type == 'minecraft:player') { continue }
//         // Debug log the entities being added
//         /* console.log(`Adding entity ${nearEntity.type} to nearbyEntities object`) */

//         // Add the entity's ID as a key to the object, with a new value of 1 or adding 1 if the entity exists in it already
//         if (nearbyEntities[nearEntity.type]) {
//             nearbyEntities[nearEntity.type] += 1 // if exists add 1 to it
//         } else {
//             nearbyEntities[nearEntity.type] = 1 // if doesn't exist set to 1
//         }
//     }

//     // Debug log the nearby entities and their count
//     // console.log(nearbyEntities)
//     /* for (let [key, value] of Object.entries(nearbyEntities)) {
//         console.log(`Entity ${key} is nearby ${value} times`)
//     } */

//     // Set the custom task progress for sheep
//     setQuestProgress( // Util function to set tasks progress
//         event.player, // Player reference
//         getQuestObject(event.player.level, '4009B9D7F206E356'), // Gets the quest object for the task from its ID
//         nearbyEntities['minecraft:sheep'] || 0 // Sets the task progress to the number of nearby sheep, or 0 if there are none
//     )

//     // Set the custom task progress for cows
//     setQuestProgress(
//         event.player,
//         getQuestObject(event.player.level, '4F9E9265D2BD3228'),
//         nearbyEntities['minecraft:cow'] || 0
//     )

//     // returns 1 if both tasks are at desired amounts
//     // returns 0 if not
//     function combined() {
//         if (
//             (nearbyEntities['minecraft:sheep'] || 0) >= 5
//             && (nearbyEntities['minecraft:cow'] || 0) >= 3
//         ) {
//             return 1
//         }
//         return 0
//     }

//     // Set the custom task progress for both combined
//     setQuestProgress(
//         event.player,
//         getQuestObject(event.player.level, '6AE8DC3D12F8824E'),
//         combined() // Our function to check if both prerequisites are met
//     )

//     // Check if the player has completed the combined task and tell them
//     // This should only run once as this code is cancelled above when the task is completed
//     if (
//         isQuestComplete(
//             event.player,
//             getQuestObject(event.player.level, '6AE8DC3D12F8824E')
//         )
//     ) {
//         // Just tell the player, can remove this and the if statement if desired (FTBq already gives a notif toast)
//         event.player.tell('You completed the nearby task!')
//     }
// })