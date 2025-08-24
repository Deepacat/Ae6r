these are files from e6es expert kubejs folder
(not the base mode folder, those should also be ported though)
that have not yet been ported to ae6r, they should be ported
then deleted when the recipes are replicated

I use /tools/e6recipefixer.js as a script to port files with more than a few recipes
the rest I just mostly ai autocompleted through porting

Also it is not just copy paste and edit porting, I entirely reformat them to not use arrays
and instead be e.recipes.whatever() per recipe, with .id() after, and removing the item before the recipe
if applicable, an unapplicable scenario would be something that has multiple recipes for it
which are typically mass removed in the recipeRemovals.js server script