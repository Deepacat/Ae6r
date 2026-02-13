In each category, priority highest to lowest

Gameplay/Progression:
- [ ] Unify/fix plastic recipes, check e6e reference
- [ ] Add the Archwood forest back to aether, make all da thermal blazes spawn in it!
	- [ ] add biome back
	- [ ] blazes
- [ ] Consider adding "Gateways" mod
	- Potentially useful for masticator shard replacement
- [ ] Consider adding "Species" mod
	- Adds cool mobs, could edit one to be hostile and be a masticator replacement
	- Spirit mob thing could be used in aether to give ectoplasm
	- Ghouls could be used in Undergarden/masticator gateway OR as the masticator replacement, although a much bigger and tankier one. They're quite scary as they give you a de-buff that makes you unable to eat food until exposed to daylight
- [ ] Find replacement for masticator boss or masticator scales
	- Could use gateway that spawns some beefy spooky mobs
	- Could size up an existing enemy :P
	- Find some other mechanic entirely
- [ ] Add some sort of refined/infused dawnstone for embers pt2 in ch2
	- Could used infused iron
- [ ] Port remaining mod recipes
	- [x] pneumaticcraft
	- [ ] powah
	- [x] pretty pipes/ppfluids
- [ ] Ponder resource gen mod reworking (splendid slimes/complicated bees)
- [ ] Artifact recipes
- [ ] Ore processing builders
	- [ ] add more materials to emendatus along with potentially a new category for just ore processing additions (ore just add every oreproc item manually ig, probably aren't enough similarities for a general category)
	- [x] Create milling + crushing
	- [x] Create washing
	- [ ] Mekanism processing

Recipe ideas:
- [ ] Make catalytic plug pre alchemy (embers pt2), could be early wizreborn
- [ ] Gate curvy pipes to post plastics (PNC plastics)
- [ ] 1000 raw beef eternal beef sequence

Polish/fixes:
- [ ] Fix raw ore block smelting recipes being too quick (or remove them lmao)
- [ ] Meka biomass from other mods' crops (currently only MC)
- [ ] Fix lootbox rewards in qb
- [ ] Fix unsafe patchouli/book removals, e.g. removing occultism recipes instead of replacing them so the book doesn't break and error out (Make arrays in the files that go over replacing the recipe with a altered recipe item like e6e)
- [ ] move the if else abomination in my (deepas) embers stamp and chiller to its own function (I dont know how to implement it rn) (OR JUST MAKE BETTER SCHEMAS)
- [ ] gourmand dynamo recipe (waste incinerator?)
- [ ] Move default client configs to defaultoptions mod to avoid overwriting on updates
- [ ] Disable crappy/bloat enchants from enchantment table using MoreJS/Apotheosis config (Or entirely for dupes or useless)

Ponder scenes/GuideME/tooltips:
- [ ] Ember oven multiblock
	- [ ] Multipart tooltips (receptor/dual access)
- [ ] Embers alchemy ponder
- [ ] Ritual of the forest ponder ponder
- [ ] Aether portal multiblock ponder
- [ ] Undergarden portal multiblock ponder
- [ ] wizards reborn Wissen arcane debris scanning ponder
- [ ] arcane debris transmute mining ponder
- [ ] Flareblossom finding tip (gold aether dungeon)
- [ ] Soul shard obtaining ponder
- [ ] Holy/unholy symbol obtaining ponder
- [ ] Eidolon chants ponder
- [ ] Arcane wood sapling transmute ponder
- [ ] Crystal sapling finding and fortune ponder
	- Found on mini floating islands around the aether, rare to drop leaves without using fortune on them
- [ ] Shimmerstool grown by bonemeal in certain biomes ponder
- [ ] Veiled mushroom found in etc biome ponder
- [ ] Aether blueberry biome ponder
- [ ] Blister berry in smog spires biome

Other:
- [ ] Structure locators (like an ender eye for them)
	- [ ] Aether dungeons
	- [ ] Iron spells boss structures + ones with ancient knight (need cinder essence to make upgrade orb for Wissen wand)
- [ ] Diesel gens hammering / wirecutting recipe schemas (grouped bc theyre like the same thing)

For completed tasks, put fully finished tasks (all subtasks done) at the top of Completed list below

Completed
- [x] Fix treated stick recipes (port from base stick_treated)
- [x] Port natures aura recipes
- [x] Add alloy recipe builder to unification
- [x] Flutter related: 
	- [x] Make them more common and or add a summoning method, non automatable preferred
	- [x] gate spawning behind going to aether or Undergarden (decided against)
	- [x] Make them drop lush silks and make recipes for brilliant fibercipes
- [x] Fix starting botania recipes
- [x] implement ember oven
- [x] Add new catalyst and some kinda reinforced glowstone blocks recipes for undergarten and aether portals (change undergarten portal bricks if possible to another harder block)
- [x] implement aspectus shards (godshard replacement)
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
- [x] remove function/mana flora from flower tags (why are they even lmao) it makes them spawn in the stupid dungeon flower pots :skull: ok it turns out removing them from tag didn't even fix this I hate everything