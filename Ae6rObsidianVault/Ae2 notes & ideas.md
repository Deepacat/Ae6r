- Yes. Channels are enabled. 1x config.
- Certus and skystone are obtained by looting an alien crash site structure in the end, or by trading with endermen using alien debris
- Meteors are disabled
- Flawless budding certus is unobtainable
- Silicon only comes from certus, not regular quartz
- Scrap machine casings from RS
- Charged certus steel replaces enriched quartz iron
- Skysteel is a new material using lots of skystone and charged certus steel for later game Ae2 craft such as MEGA items and extendedae parts
- Neural processor from extra storage is replaced by accumulation processor from MEGA Ae2 addon
- The normal RS controller recipe instead outputs an Ae2 energy acceptor, with the controller being a later more expensive upgrade
- Potentially nuke the circuit slicer from extendedae, or repurpose for later
- Nuke crystal fixer from extendedae
- Keeping the concept of digital storage in components coming from magic, I think I want to change the scheme of only being able to craft the 16k part/component, I'd like to add back the merging of components
- I want to try gating processing patterns to be slightly later/more expensive than crafting patterns since crafting patterns are so convenient for avoiding microcrafting annoyance, while processing patterns discourage really automating things and or learning *how* to with Ae2. This could potentially be done by:
	1. ~~Detecting a non crafting pattern being dropped/clicked/in inventory of player and deleting it without the game stage (No this can't be bypassed by like dropping the item in a hopper to a pattern provider, NO IO has access to pattern slots)~~
	2. ~~Check interface events and prevent a player from even encoding a processing pattern (Probably a lot more effort to achieve but less janky potentially?)~~
	3. ~~Making an addon that either does idea #2 or makes a new encoding terminal without the tab~~
	4. (Probably coolest option) Giving access to the extendedae assembling matrix multiblock before pattern providers, this multiblock can only use crafting patterns, is upgradeable to include more holders for adding more pattern slots, being able to craft more items at once, or increasing the speed of which the items craft. I believe setting the config for multiblock size to be at most a 5xx5 cube is best, allowing 9 upgrades inside to keep your matrix's strong for a while before the alternative upgraded molecular assemblers, pattern providers, along with pattern p2p become stronger options for the demands. Or maybe people will just spam more assembling matrix's with speed cores, so be it.
		1. "Pattern core" upgrade would be the cheapest, it adds 36 extra pattern slots to the multiblock
		2. "Craft core" would be the most expensive, intended that you're able to push toward making one of them as an expensive goal to get this multiblock going, since each additional craft core is pretty strong giving a overall linear crafting time boost.
		3. The "Speed core" acts like an acceleration card to the multiblock, unlike the crafting cores linear scaling, the speed boost is scaling with the more you have. Using all 5 speed cores lets you achieve slightly better rates than you would using 5 craft cores instead. this upgrade would be cheaper than the craft core as you really need the 5th one to make it worth the slot cost.