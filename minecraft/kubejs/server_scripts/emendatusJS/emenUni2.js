//priority: 900
ServerEvents.recipes(e => {
    Object.entries(global.emendatus_mats).forEach(mat => {
        let material = mat[0]
        let ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id
        let block = getPreferredItemInTag(Ingredient.of(`#forge:storage_blocks/${material}`)).id
        let ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id
        let nugget = getPreferredItemInTag(Ingredient.of(`#forge:nuggets/${material}`)).id

        let gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id
        let chunk = getPreferredItemInTag(Ingredient.of(`#forge:chunks/${material}`)).id

        let crushed_ore = getPreferredItemInTag(Ingredient.of(`#create:crushed_ores/${material}`)).id
        let dust = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${material}`)).id
        let shard = getPreferredItemInTag(Ingredient.of(`#forge:shards/${material}`)).id

        let mek_crystal = getPreferredItemInTag(Ingredient.of(`#mekanism:crystals/${material}`)).id
        let mek_shard = getPreferredItemInTag(Ingredient.of(`#mekanism:shards/${material}`)).id
        let mek_clump = getPreferredItemInTag(Ingredient.of(`#mekanism:clumps/${material}`)).id
        let mek_dirty_dust = getPreferredItemInTag(Ingredient.of(`#mekanism:dirty_dusts/${material}`)).id

        let fragment = getPreferredItemInTag(Ingredient.of(`#bloodmagic:fragments/${material}`)).id
        let gravel = getPreferredItemInTag(Ingredient.of(`#bloodmagic:gravels/${material}`)).id

        let gear = getPreferredItemInTag(Ingredient.of(`#forge:gears/${material}`)).id
        let rod = getPreferredItemInTag(Ingredient.of(`#forge:rods/${material}`)).id
        let plate = getPreferredItemInTag(Ingredient.of(`#forge:plates/${material}`)).id

        let coin = getPreferredItemInTag(Ingredient.of(`#forge:coins/${material}`)).id

        console.log(ore, block, ingot, nugget, gem, chunk, crushed_ore, dust, shard, mek_crystal, mek_shard, mek_clump, mek_dirty_dust, fragment, gravel, gear, rod, plate, coin)
    })
})