ServerEvents.recipes(e => {
    e.recipes.botania.runic_altar('2x botania:rune_water',
        ['#forge:dusts/mana', '#forge:ingots/manasteel', 'thermal:blizz_powder', '#upgrade_aquatic:coralstone/infused', 'minecraft:kelp', 'aquaculture:diamond_hook'],
        16000
    ).id('botania:runic_altar/water')

    e.recipes.botania.runic_altar('2x botania:rune_fire',
        ['#forge:dusts/mana', '#forge:ingots/manasteel', 'minecraft:blaze_powder', 'kubejs:replaceme', 'undergarden:ditchbulb', 'minecraft:white_candle'],
        16000
    ).id('botania:runic_altar/fire')

    e.recipes.botania.runic_altar('2x botania:rune_earth',
        ['#forge:dusts/mana', '#forge:ingots/manasteel', 'thermal:basalz_powder', 'undergarden:shiverstone', '#quark:runes', 'aquaculture:worm'],
        16000
    ).id('botania:runic_altar/earth')

    e.recipes.botania.runic_altar('2x botania:rune_air',
        ['#forge:dusts/mana', '#forge:ingots/manasteel', 'thermal:blitz_powder', 'kubejs:replaceme', 'quark:bottled_cloud', 'alexsmobs:guster_eye'],
        16000
    ).id('botania:runic_altar/air')

    e.recipes.botania.runic_altar('botania:rune_mana',
        ['#forge:ingots/manasteel', '#forge:ingots/manasteel', 'naturesaura:sky_ingot', '#forge:ingots/manasteel', '#forge:ingots/manasteel', 'botania:mana_pearl', 'kubejs:replaceme'],
        96000
    ).id('botania:runic_altar/mana')

    e.recipes.botania.runic_altar('botania:rune_spring',
        ['#botania:runes/water', '#botania:runes/fire', 'naturesaura:birth_spirit', 'thermal:syrup_bottle', ['kubejs:replaceme', 'kubejs:replaceme', 'kubejs:replaceme', 'kubejs:replaceme', 'kubejs:replaceme', 'minecraft:pink_tulip', 'minecraft:white_tulip', 'minecraft:orange_tulip', 'minecraft:red_tulip'], ['kubejs:replaceme', 'kubejs:replaceme', 'kubejs:replaceme', 'kubejs:replaceme', 'kubejs:replaceme', 'minecraft:pink_tulip', 'minecraft:white_tulip', 'minecraft:orange_tulip', 'minecraft:red_tulip'], /*quark:turf*/'kubejs:replaceme', /*quark:turf*/'kubejs:replaceme', 'kubejs:replaceme'],
        32000
    ).id('botania:runic_altar/spring')

    e.recipes.botania.runic_altar('botania:rune_summer',
        ['#botania:runes/earth', '#botania:runes/air', '#forge:sand', '#forge:sand', 'farmersdelight:melon_popsicle', 'farmersdelight:melon_popsicle', '#forge:pies', '#forge:pies', 'kubejs:replaceme'],
        32000
    ).id('botania:runic_altar/summer')

    e.recipes.botania.runic_altar('botania:rune_autumn',
        ['#botania:runes/fire', '#botania:runes/air', 'minecraft:carved_pumpkin', 'minecraft:carved_pumpkin', 'create:honeyed_apple', 'create:honeyed_apple', 'farmersdelight:hot_cocoa', 'farmersdelight:hot_cocoa', 'kubejs:replaceme'],
        32000
    ).id('botania:runic_altar/autumn')

    e.recipes.botania.runic_altar('botania:rune_winter',
        ['#botania:runes/water', '#botania:runes/earth', 'farmersdelight:shepherds_pie_block', '#upgrade_aquatic:bedrolls', '#forge:hay_bales', '#forge:hay_bales', 'kubejs:replaceme', 'kubejs:replaceme', 'kubejs:replaceme'],
        32000
    ).id('botania:runic_altar/winter')

    e.recipes.botania.runic_altar('botania:rune_envy',
        ['bloodmagic:weakbloodshard', 'kubejs:replaceme', '#botania:runes/winter', '#botania:runes/water', 'kubejs:replaceme'],
        64000
    ).id('botania:runic_altar/envy')

    e.recipes.botania.runic_altar('botania:rune_gluttony',
        ['bloodmagic:weakbloodshard', 'kubejs:replaceme', '#botania:runes/winter', '#botania:runes/fire', 'kubejs:replaceme'],
        64000
    ).id('botania:runic_altar/gluttony')

    e.recipes.botania.runic_altar('botania:rune_greed',
        ['bloodmagic:weakbloodshard', 'kubejs:replaceme', '#botania:runes/spring', '#botania:runes/water', 'kubejs:replaceme'],
        64000
    ).id('botania:runic_altar/greed')

    e.recipes.botania.runic_altar('botania:rune_lust',
        ['bloodmagic:weakbloodshard', 'kubejs:replaceme', '#botania:runes/summer', '#botania:runes/air', 'kubejs:replaceme'],
        64000
    ).id('botania:runic_altar/lust')

    e.recipes.botania.runic_altar('botania:rune_pride',
        ['bloodmagic:weakbloodshard', 'kubejs:replaceme', '#botania:runes/summer', '#botania:runes/fire', 'kubejs:replaceme'],
        64000
    ).id('botania:runic_altar/pride')

    e.recipes.botania.runic_altar('botania:rune_sloth',
        ['bloodmagic:weakbloodshard', 'kubejs:replaceme', '#botania:runes/autumn', '#botania:runes/air', 'kubejs:replaceme'],
        64000
    ).id('botania:runic_altar/sloth')

    e.recipes.botania.runic_altar('botania:rune_wrath',
        ['bloodmagic:weakbloodshard', 'kubejs:replaceme', '#botania:runes/winter', '#botania:runes/earth', 'kubejs:replaceme'],
        64000
    ).id('botania:runic_altar/wrath')

    e.recipes.botania.runic_altar('mythicbotany:alfheim_rune',
        ['#forge:ingots/alfsteel', '#botania:runes/air', '#botania:runes/summer', '#botania:runes/lust', 'naturesaura:gold_leaf'],
        96000
    ).id('mythicbotany:runic_altar/alfheim')

    e.recipes.botania.runic_altar('mythicbotany:asgard_rune',
        ['#forge:ingots/sky', '#botania:runes/air', '#botania:runes/autumn', '#botania:runes/pride', 'botania:bifrost_perm'],
        96000
    ).id('mythicbotany:runic_altar/asgard')

    e.recipes.botania.runic_altar('mythicbotany:helheim_rune',
        ['#forge:ingots/tainted_gold', '#botania:runes/fire', '#botania:runes/autumn', '#botania:runes/envy', ['eidolon:zombie_heart', 'eidolon:wraith_heart']],
        96000
    ).id('mythicbotany:runic_altar/helheim')

    e.recipes.botania.runic_altar('mythicbotany:joetunheim_rune',
        ['#forge:ingots/netherite', '#botania:runes/earth', '#botania:runes/autumn', '#botania:runes/gluttony', 'naturesaura:infused_stone'],
        96000
    ).id('mythicbotany:runic_altar/joetunheim')

    e.recipes.botania.runic_altar('mythicbotany:midgard_rune',
        ['#forge:ingots/terrasteel', '#botania:runes/earth', '#botania:runes/spring', '#botania:runes/greed', 'minecraft:podzol'],
        96000
    ).id('mythicbotany:runic_altar/midgard')

    e.recipes.botania.runic_altar('mythicbotany:muspelheim_rune',
        ['#forge:ingots/refined_glowstone', '#botania:runes/fire', '#botania:runes/summer', '#botania:runes/wrath', 'create:refined_radiance_casing'],
        96000
    ).id('mythicbotany:runic_altar/muspelheim')

    e.recipes.botania.runic_altar('mythicbotany:nidavellir_rune',
        ['#forge:ingots/arcane_gold', '#botania:runes/earth', '#botania:runes/winter', '#botania:runes/sloth', 'eidolon:shadow_gem'],
        96000
    ).id('mythicbotany:runic_altar/nidavellir')

    e.recipes.botania.runic_altar('mythicbotany:niflheim_rune',
        ['#forge:ingots/refined_obsidian', '#botania:runes/water', '#botania:runes/winter', '#botania:runes/wrath', 'create:shadow_steel_casing'],
        96000
    ).id('mythicbotany:runic_altar/niflheim')

    e.recipes.botania.runic_altar('mythicbotany:vanaheim_rune',
        ['#forge:ingots/iesnium', '#botania:runes/earth', '#botania:runes/spring', '#botania:runes/pride', 'bloodmagic:seersigil'],
        96000
    ).id('mythicbotany:runic_altar/vanaheim')

    e.recipes.botania.runic_altar('bloodmagic:speedrune',
        ['bloodmagic:blankrune', 'kubejs:white_rune', 'bloodmagic:blankslate', 'ars_nouveau:glyph_accelerate', 'bloodmagic:blankslate', 'kubejs:cutting_essence', 'kubejs:white_rune', 'bloodmagic:blankslate', 'ars_nouveau:glyph_accelerate', 'bloodmagic:blankslate'],
        16000
    ).id('kubejs:blood_rune_speed')

    e.recipes.botania.runic_altar('bloodmagic:chargingrune',
        ['bloodmagic:blankrune', ['kubejs:green_rune', 'kubejs:lime_rune'], 'architects_palette:moonstone', 'ars_nouveau:glyph_delay', 'bloodmagic:reinforcedslate', 'kubejs:cutting_essence', ['kubejs:green_rune', 'kubejs:lime_rune'], 'architects_palette:moonstone', 'ars_nouveau:glyph_delay', 'bloodmagic:reinforcedslate'],
        32000
    ).id('kubejs:blood_rune_charging')

    e.recipes.botania.runic_altar('bloodmagic:sacrificerune',
        ['bloodmagic:blankrune', 'kubejs:red_rune', 'bloodmagic:reinforcedslate', 'ars_nouveau:glyph_touch', 'bloodmagic:reinforcedslate', 'kubejs:cutting_essence', 'kubejs:red_rune', 'bloodmagic:reinforcedslate', 'ars_nouveau:glyph_harm', 'bloodmagic:reinforcedslate'],
        32000
    ).id('kubejs:blood_rune_sacrifice')

    e.recipes.botania.runic_altar('bloodmagic:selfsacrificerune',
        ['bloodmagic:blankrune', 'kubejs:yellow_rune', 'bloodmagic:reinforcedslate', 'ars_nouveau:glyph_self', 'bloodmagic:reinforcedslate', 'kubejs:cutting_essence', 'kubejs:yellow_rune', 'bloodmagic:reinforcedslate', 'ars_nouveau:glyph_harm', 'bloodmagic:reinforcedslate'],
        32000
    ).id('kubejs:blood_rune_self_sacrifice')

    e.recipes.botania.runic_altar('bloodmagic:dislocationrune',
        ['bloodmagic:blankrune', 'kubejs:blue_rune', 'bloodmagic:reinforcedslate', 'ars_nouveau:glyph_extract', 'bloodmagic:reinforcedslate', 'kubejs:cutting_essence', 'kubejs:blue_rune', 'bloodmagic:reinforcedslate', 'ars_nouveau:glyph_accelerate', 'bloodmagic:reinforcedslate'],
        32000
    ).id('kubejs:blood_rune_displacement')

    e.recipes.botania.runic_altar('bloodmagic:altarcapacityrune',
        ['bloodmagic:blankrune', 'kubejs:orange_rune', 'bloodmagic:reinforcedslate', 'bloodmagic:reagentholding', 'bloodmagic:reinforcedslate', 'kubejs:cutting_essence', 'kubejs:orange_rune', 'bloodmagic:reinforcedslate', 'bloodmagic:reagentholding', 'bloodmagic:reinforcedslate'],
        64000
    ).id('kubejs:blood_rune_capacity')

    e.recipes.botania.runic_altar('bloodmagic:bettercapacityrune',
        ['bloodmagic:altarcapacityrune', 'kubejs:red_rune', 'architects_palette:moonstone', 'ars_nouveau:glyph_amplify', 'bloodmagic:demonslate', 'bloodmagic:masterbloodorb', 'kubejs:red_rune', 'architects_palette:moonstone', 'ars_nouveau:glyph_amplify', 'bloodmagic:demonslate'],
        96000
    ).id('kubejs:blood_rune_aug_capacity')

    e.recipes.botania.runic_altar('bloodmagic:orbcapacityrune',
        ['bloodmagic:blankrune', 'kubejs:cyan_rune', 'architects_palette:moonstone', 'bloodmagic:masterbloodorb', 'bloodmagic:demonslate', 'bloodmagic:masterbloodorb', 'kubejs:cyan_rune', 'architects_palette:moonstone', 'bloodmagic:masterbloodorb', 'bloodmagic:demonslate'],
        96000
    ).id('kubejs:blood_rune_orb')

    e.recipes.botania.runic_altar('bloodmagic:accelerationrune',
        ['bloodmagic:speedrune', 'kubejs:light_blue_rune', 'architects_palette:moonstone', 'ars_nouveau:glyph_amplify', 'bloodmagic:demonslate', 'bloodmagic:masterbloodorb', 'kubejs:light_blue_rune', 'architects_palette:moonstone', 'ars_nouveau:glyph_amplify', 'bloodmagic:demonslate'],
        96000
    ).id('kubejs:blood_rune_acceleration')

    e.recipes.botania.runic_altar('2x kubejs:white_rune',
        ['quark:white_corundum_cluster', 'quark:white_corundum_cluster', 'quark:white_corundum_cluster', 'quark:white_corundum_cluster', 'quark:white_corundum_cluster', 'quark:white_corundum_cluster', 'quark:white_corundum_cluster', 'quark:white_corundum_cluster'],
        4000
    ).id('quark:tools/crafting/runes/white_rune_from_corundum_cluster')

    e.recipes.botania.runic_altar('2x kubejs:orange_rune',
        ['quark:orange_corundum_cluster', 'quark:orange_corundum_cluster', 'quark:orange_corundum_cluster', 'quark:orange_corundum_cluster', 'quark:orange_corundum_cluster', 'quark:orange_corundum_cluster', 'quark:orange_corundum_cluster', 'quark:orange_corundum_cluster'],
        4000
    ).id('quark:tools/crafting/runes/orange_rune_from_corundum_cluster')

    e.recipes.botania.runic_altar('2x kubejs:magenta_rune',
        ['quark:violet_corundum_cluster', 'quark:violet_corundum_cluster', 'quark:violet_corundum_cluster', 'quark:violet_corundum_cluster', 'quark:violet_corundum_cluster', 'quark:violet_corundum_cluster', 'quark:violet_corundum_cluster', 'quark:violet_corundum_cluster'],
        4000
    ).id('quark:tools/crafting/runes/magenta_rune_from_corundum_cluster')

    e.recipes.botania.runic_altar('2x kubejs:light_blue_rune',
        ['quark:blue_corundum_cluster', 'quark:blue_corundum_cluster', 'quark:blue_corundum_cluster', 'quark:blue_corundum_cluster', 'quark:blue_corundum_cluster', 'quark:blue_corundum_cluster', 'quark:blue_corundum_cluster', 'quark:blue_corundum_cluster'],
        4000
    ).id('quark:tools/crafting/runes/light_blue_rune_from_corundum_cluster')

    e.recipes.botania.runic_altar('2x kubejs:yellow_rune',
        ['quark:yellow_corundum_cluster', 'quark:yellow_corundum_cluster', 'quark:yellow_corundum_cluster', 'quark:yellow_corundum_cluster', 'quark:yellow_corundum_cluster', 'quark:yellow_corundum_cluster', 'quark:yellow_corundum_cluster', 'quark:yellow_corundum_cluster'],
        4000
    ).id('quark:tools/crafting/runes/yellow_rune_from_corundum_cluster')

    e.recipes.botania.runic_altar('2x kubejs:lime_rune',
        ['quark:green_corundum_cluster', 'quark:green_corundum_cluster', 'quark:green_corundum_cluster', 'quark:green_corundum_cluster', 'quark:green_corundum_cluster', 'quark:green_corundum_cluster', 'quark:green_corundum_cluster', 'quark:green_corundum_cluster'],
        4000
    ).id('quark:tools/crafting/runes/lime_rune_from_corundum_cluster')

    e.recipes.botania.runic_altar('2x kubejs:blue_rune',
        ['quark:indigo_corundum_cluster', 'quark:indigo_corundum_cluster', 'quark:indigo_corundum_cluster', 'quark:indigo_corundum_cluster', 'quark:indigo_corundum_cluster', 'quark:indigo_corundum_cluster', 'quark:indigo_corundum_cluster', 'quark:indigo_corundum_cluster'],
        4000
    ).id('quark:tools/crafting/runes/blue_rune_from_corundum_cluster')

    e.recipes.botania.runic_altar('2x kubejs:red_rune',
        ['quark:red_corundum_cluster', 'quark:red_corundum_cluster', 'quark:red_corundum_cluster', 'quark:red_corundum_cluster', 'quark:red_corundum_cluster', 'quark:red_corundum_cluster', 'quark:red_corundum_cluster', 'quark:red_corundum_cluster'],
        4000
    ).id('quark:tools/crafting/runes/red_rune_from_corundum_cluster')

    e.recipes.botania.runic_altar('2x kubejs:replaceme',
        ['kubejs:replaceme', '#forge:shards/aurora', '#forge:shards/aurora', '#forge:shards/aurora', '#forge:shards/aurora', '#botania:runes/mana', '#forge:shards/aurora', '#forge:shards/aurora', '#forge:shards/aurora', '#forge:shards/aurora'],
        32000
    ).id('kubejs:replaceme')
})