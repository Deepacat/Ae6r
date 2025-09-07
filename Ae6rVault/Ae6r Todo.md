In each category, priority highest to lowest

Gameplay/Progression:
- [ ] implement ember oven
- [ ] Add new catalyst and some kinda reinforced glowstone blocks recipes for undergarten and aether portals (change undergarten portal bricks if possible to another harder block)
- [ ] implement aspectus shards (godshard replacement)
- [ ] Port natures aura recipes
- [ ] Ore processing builders
	- [x] Create milling + crushing
	- [ ] Create washing

Polish/fixes:
- [ ] Fix raw ore block smelting recipes being too quick (or remove them lmao)
- [ ] Meka biomass from other mods' crops (currently only MC)
- [ ] Fix lootbox rewards in qb
- [ ] Fix unsafe patchouli/book removals, e.g. removing occultism recipes instead of replacing them so the book doesn't break and error out (Make arrays in the files that go over replacing the recipe with a altered recipe item like e6e)
- [ ] move the if else abomination in my embers stamp and chiller to its own function (I dont know how to implement it rn) (OR JUST MAKE BETTER SCHEMAS)

Other:
- [ ] Diesel gens hammering / wirecutting recipe schemas (grouped bc theyre like the same thing)


For completed just put fully finished tasks (all subtasks done) at the top of it

Completed:
- [x] Port the base non expert recipes from e6 :| (There's more than I thought, how dare they make a good kitchen sink) (crossing this out as I am pretty much just porting them as I need to lol)
- [x] Figure out how the FUCK e6es unification works and how to work it into emendatusjs (it does shit like unify ender pearl to dust and arcane gem to botania mana dust)
	- [x] refactor emendatusjs again to use more e6e like recipe unifying
		- [x] basic material flags like rods gears plates ingots
		- [x] ores smelting
		- [x] melting metal items back to fluids
		- [x] Remake tag unifying (Probably can datagen items per tag in recipes)
			- [x] this caused recipe gen to fuck up since I'm removing the tags it relies on, uhhh go fix that to use a datagen too thx <3
		- [x] scrub materials to unify list of e6e 
		- [x] Make my melting builder smarter (instead of doing the same bit 15 times)
		- [x] add tinkers casting and melting recipes (make builders first please)
		- [x] crushing recipes (not oreproc just dust making from comps)
			- [x] I did all of them except ars glyph too tired (did this)
		- [x] Compacting recipes
		- [x] loot table unification
		- [x] investigate wtf happened to molten emerald recipes
- [x] Port base recipe replacements from e6e for stuff like niter 
	- [x] THIS WAS A WHOLE RABBIT HOLE OF UNIFICATION BULLSHIT
- [x] move pakku to mc folder
- [x] make recipe builders for diesel gens and create c&a (or find others better ones)
	- [x] CCA rolling
	- [x] CCA tesla charging
- [x] make tinkers recipe builders
	- [x] casting table
	- [x] casting basin
- [x] remove sulfur ore (and others actually)
- [x] Port fluid combining recipes to lychee
- [x] Port occultism shaped and spiritfire recipes
- [x] Double check that alchemy array recipes match up
- [x] Fix superheated steel and iron recipes (Double check e6e)
- [x] Fix alloy kiln reqs e.g. blast brick compound, smoldering lapis
- [x] Unify arcane gold
- [x] Hide dumb recipe categories like shapeless mixing and shaped mechanical crafting, grindstone
- [x] Fix recipes that used ars clays in e6e
- [x] (For specifically deepa) port my iron spells/apoth rework from a concept I made
- [x] remove function/mana flora from flower tags (why are they even lmao) it makes them spawn in the stupid dungeon flower pots :skull: