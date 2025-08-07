// enable debug logging, prints alot to console
global.emenDebug = true

// enable regenerating tag data after a /reload
// probably keep this on for pack dev, disable for releases (ensure it works first)
global.emenDatagen = false

/*
hide all items in recipe viewer that don't replace existing items in your modpack.
based on tag! only works AFTER tag datagen is ran and has the matches.
e.g. if '#forge:gears/ruby' tag has any entries from another mod,
then the emendatus ruby gear will be unhidden
(does not hide generated items with self added flags)

NOTE: this kinda sucks rn cus itll hide stuff with autogenned recipes, I should-
add manual overrides or just replace this behavior ngl
*/
global.emenHideNonReplacing = false

// replace other mod's items with emendatus items in recipes 
// (removes other mods items from tags and hides them)
global.emenUnifyReplaces = true