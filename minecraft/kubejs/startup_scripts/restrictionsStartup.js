// file for restricting blocks from use until conditions are met
// startup part. (server, client, startup)
// define restrictions here

global.restrictions = {}

const bloodmagicRestrictions = [
    'bloodmagic:altar',
    'bloodmagic:alchemytable',
    'bloodmagic:demoncrucible',
    'bloodmagic:demoncrystallizer',
    'bloodmagic:alchemytable',
    'bloodmagic:soulforge',
    'bloodmagic:alchemicalreactionchamber',
    'bloodmagic:incensealtar'
]

bloodmagicRestrictions.forEach((block) => {
    global.restrictions[block] = {
        conditions: [
            {
                dimension: 'undergarden:undergarden',
                dimStage: 'master_blood_orb'
            }
        ]
    }
})

global.restrictions['eidolon:soul_enchanter'] = {
    conditions: [
        {
            dimension: 'minecraft:the_nether',
            dimStage: 'lesser_tartaric_gem'
        }
    ]
}

global.restrictions['occultism:sacrificial_bowl'] = {
    conditions: [
        {
            dimension: 'undergarden:undergarden',
            dimStage: 'red_chalk'
        }
    ]
}

global.restrictions["botania:apothecary"] = {
    regex: /botania:apothecary/,
    conditions: [
        {
            dimension: 'aether:the_aether'
        }
    ]
}

global.restrictions["botania:pure_daisy"] = {
    conditions: [
        {
            dimension: 'aether:the_aether'
        }
    ]
}

global.restrictions['aether:freezer'] = {
    conditions: [
        {
            dimension: 'aether:the_aether'
        }
    ]
}

global.restrictions['aether:altar'] = {
    conditions: [
        {
            dimension: 'aether:the_aether'
        }
    ]
}
