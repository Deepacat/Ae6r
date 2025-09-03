ServerEvents.tags('item', (event) => {

    event.removeAllTagsFrom(/*'atum:'*/ 'kubejs:replaceme')
    colors.forEach((color) => {
        event.removeAllTagsFrom(/*'atum:'*/ 'kubejs:replaceme')
    })
})
