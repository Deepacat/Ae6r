global.dimensionsOreData = {
    "minecraft:overworld": {
        strata: ['stone', 'deepslate', 'diorite', 'granite', 'andesite', 'tuff', 'calcite', 'sandstone', 'dripstone_block',
            'create:crimsite', 'create:veridium', 'create:ochrum', 'create:asurine', 'create:scoria', 'create:limestone',
            'quark:jasper', 'quark:shale', 'quark:limestone', 'regions_unexplored:argillite', 'regions_unexplored:raw_redstone_block'],
        biomeTag: '#minecraft:is_overworld'
    },
    "minecraft:the_nether": {
        strata: ['netherrack', 'basalt', 'blackstone', 'create:scorchia', 'regions_unexplored:raw_redstone_block'],
        biomeTag: '#minecraft:is_nether'
    },
    "minecraft:the_end": {
        strata: ['end_stone'],
        biomeTag: '#minecraft:is_end'
    },
    "undergarden:undergarden": {
        strata: ['undergarden:depthrock', 'undergarden:shiverstone'],
        biomeTag: '#undergarden:is_undergarden'
    },
    "aether:the_aether": {
        strata: ['aether:holystone'],
        biomeTag: '#aether:is_aether'
    },
    "mythicbotany:alfheim": {
        strata: ['botania:livingrock'],
        biomeTag: '#mythicbotany:alfheim'
    }
}

// coal copper diamond emerald gold iron lapis quartz redstone
// vanilla
// TODO: allow adding additional biome flags
global.emendatus_mats['coal'].oreData = {
    dropType: 'gem',
    vanillaDrop: 'minecraft:coal',
    dropCountRange: [1, 3],
    airDiscardChance: 0,
    veins: {
        "coal_upper_overworld": {
            dimension: 'minecraft:overworld',
            range: [0, 130],
            count: 30,
            size: 17
        },
        "coal_lower_overworld": {
            dimension: 'minecraft:overworld',
            range: [-10, 20],
            count: 3,
            size: 20
        }
    }
}
global.emendatus_mats['copper'].oreData = {
    dropType: 'raw_ore',
    vanillaDrop: 'minecraft:raw_copper',
    dropCountRange: [2, 4],
    airDiscardChance: 0,
    veins: {
        "copper_overworld": {
            dimension: 'minecraft:overworld',
            range: [-40, 160],
            count: 35,
            size: 15
        }
    }
}
global.emendatus_mats['diamond'].oreData = {
    dropType: 'gem',
    vanillaDrop: 'minecraft:diamond',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "diamond_overworld": {
            dimension: 'minecraft:overworld',
            range: [-64, 10],
            count: 4,
            size: 6
        }
    }
}
global.emendatus_mats['emerald'].oreData = {
    dropType: 'gem',
    vanillaDrop: 'minecraft:emerald',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "emerald_overworld": {
            dimension: 'minecraft:overworld',
            range: [-16, 480],
            count: 80,
            size: 3
        }
    }
}
global.emendatus_mats['gold'].oreData = {
    dropType: 'raw_ore',
    vanillaDrop: 'minecraft:raw_gold',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "gold_overworld": {
            dimension: 'minecraft:overworld',
            range: [-64, 32],
            count: 8,
            size: 7
        }
    }
}
global.emendatus_mats['iron'].oreData = {
    dropType: 'raw_ore',
    vanillaDrop: 'minecraft:raw_iron',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "iron_overworld": {
            dimension: 'minecraft:overworld',
            range: [-45, 200],
            count: 75,
            size: 12
        }
    }
}
global.emendatus_mats['lapis'].oreData = {
    dropType: 'gem',
    vanillaDrop: 'minecraft:lapis_lazuli',
    dropCountRange: [4, 9],
    airDiscardChance: 0,
    veins: {
        "lapis_overworld": {
            dimension: 'minecraft:overworld',
            range: [-50, 20],
            count: 8,
            size: 5
        }
    }
}
global.emendatus_mats['quartz'].oreData = {
    dropType: 'gem',
    vanillaDrop: 'minecraft:quartz',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "quartz_nether": {
            dimension: 'minecraft:the_nether',
            range: [10, 110],
            count: 8,
            size: 7
        }
    }
}
global.emendatus_mats['redstone'].oreData = {
    dropType: 'dust',
    vanillaDrop: 'minecraft:redstone',
    dropCountRange: [4, 5],
    airDiscardChance: 0,
    veins: {
        "redstone_overworld": {
            dimension: 'minecraft:overworld',
            range: [-64, 0],
            count: 12,
            size: 8
        }
    }
}

// aluminium lead nickel platinum silver tin uranium zinc cobalt osmium iesnium
// metals
global.emendatus_mats['aluminum'].oreData = {
    dropType: 'raw_ore',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "aluminum_overworld": {
            dimension: 'minecraft:overworld',
            range: [-32, 30],
            count: 10,
            size: 10
        }
    }
}
global.emendatus_mats['lead'].oreData = {
    dropType: 'raw_ore',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "lead_overworld": {
            dimension: 'minecraft:overworld',
            range: [-55, 5],
            count: 10,
            size: 10
        }
    }
}
global.emendatus_mats['nickel'].oreData = {
    dropType: 'raw_ore',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "nickel_overworld": {
            dimension: 'minecraft:overworld',
            range: [-20, 50],
            count: 10,
            size: 10
        }
    }
}
global.emendatus_mats['platinum'].oreData = {
    dropType: 'raw_ore',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "platinum_overworld": {
            dimension: 'minecraft:overworld',
            range: [-50, 5],
            count: 10,
            size: 10
        }
    }
}
global.emendatus_mats['silver'].oreData = {
    dropType: 'raw_ore',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "silver_overworld": {
            dimension: 'minecraft:overworld',
            range: [-45, 20],
            count: 10,
            size: 10
        }
    }
}
global.emendatus_mats['tin'].oreData = {
    dropType: 'raw_ore',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "tin_overworld": {
            dimension: 'minecraft:overworld',
            range: [-30, 60],
            count: 15,
            size: 10
        }
    }
}
global.emendatus_mats['uranium'].oreData = {
    dropType: 'raw_ore',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "uranium_overworld": {
            dimension: 'minecraft:overworld',
            range: [-60, 20],
            count: 10,
            size: 10
        }
    }
}
global.emendatus_mats['zinc'].oreData = {
    dropType: 'raw_ore',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "zinc_overworld": {
            dimension: 'minecraft:overworld',
            range: [-20, 70],
            count: 13,
            size: 10
        }
    }
}
global.emendatus_mats['cobalt'].oreData = {
    dropType: 'raw_ore',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "cobalt_nether": {
            dimension: 'minecraft:the_nether',
            range: [0, 110],
            count: 6,
            size: 6
        }
    }
}
global.emendatus_mats['osmium'].oreData = {
    dropType: 'raw_ore',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "osmium_overworld": {
            dimension: 'minecraft:overworld',
            range: [-60, -10],
            count: 10,
            size: 10
        }
    }
}

// apatite cinnabar dimensional potassium_nitrate sapphire sulfur arcane certus_quartz fluorite ruby
// gems
global.emendatus_mats['apatite'].oreData = {
    dropType: 'gem',
    dropCountRange: [4, 9],
    airDiscardChance: 0,
    veins: {
        "apatite_overworld": {
            dimension: 'minecraft:overworld',
            range: [50, 120],
            count: 8,
            size: 12
        }
    }
}
global.emendatus_mats['cinnabar'].oreData = {
    dropType: 'gem',
    dropCountRange: [2, 4],
    airDiscardChance: 0,
    veins: {
        "cinnabar_overworld": {
            dimension: 'minecraft:overworld',
            range: [-20, 20],
            count: 8,
            size: 7
        }
    }
}
global.emendatus_mats['dimensional'].oreData = {
    dropType: 'gem',
    dropCountRange: [1, 2],
    airDiscardChance: 0,
    veins: {
        "dimensional_overworld": {
            dimension: 'minecraft:overworld',
            range: [-10, 30],
            count: 6,
            size: 5
        }
    }
}
global.emendatus_mats['potassium_nitrate'].oreData = {
    dropType: 'gem',
    dropCountRange: [2, 3],
    airDiscardChance: 0,
    veins: {
        "potassium_nitrate_overworld": {
            dimension: 'minecraft:overworld',
            range: [10, 40],
            count: 5,
            size: 7
        }
    }
}
global.emendatus_mats['sapphire'].oreData = {
    dropType: 'gem',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "sapphire_overworld": {
            dimension: 'minecraft:overworld',
            range: [-60, 5],
            count: 5,
            size: 3
        }
    }
}
global.emendatus_mats['sulfur'].oreData = {
    dropType: 'dust',
    dropCountRange: [3, 5],
    airDiscardChance: 0,
    veins: {
        "sulfur_overworld": {
            dimension: 'minecraft:overworld',
            range: [-20, 30],
            count: 8,
            size: 5
        }
    }
}
global.emendatus_mats['arcane'].oreData = {
    dropType: 'gem',
    dropCountRange: [1, 2],
    airDiscardChance: 0,
    veins: {
        "arcane_overworld": {
            dimension: 'minecraft:overworld',
            range: [-60, -10],
            count: 8,
            size: 4
        }
    }
}
global.emendatus_mats['certus_quartz'].oreData = {
    dropType: 'gem',
    dropCountRange: [1, 3],
    airDiscardChance: 0,
    veins: {
        "certus_quartz_overworld": {
            dimension: 'minecraft:overworld',
            range: [-40, 20],
            count: 8,
            size: 4
        }
    }
}
global.emendatus_mats['fluorite'].oreData = {
    dropType: 'gem',
    dropCountRange: [2, 4],
    airDiscardChance: 0,
    veins: {
        "fluorite_overworld": {
            dimension: 'minecraft:overworld',
            range: [-25, 10],
            count: 5,
            size: 7
        }
    }
}
global.emendatus_mats['ruby'].oreData = {
    dropType: 'gem',
    dropCountRange: [1, 1],
    airDiscardChance: 0,
    veins: {
        "ruby_overworld": {
            dimension: 'minecraft:overworld',
            range: [-60, 5],
            count: 5,
            size: 3
        }
    }
}
