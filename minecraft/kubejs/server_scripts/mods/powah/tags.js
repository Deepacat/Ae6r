ServerEvents.tags('item', e => {
    // powah block tags
    e.add('forge:storage_blocks/energized_steel', 'powah:energized_steel_block')
    e.add('forge:storage_blocks/blazing', 'powah:blazing_crystal_block')
    e.add('forge:storage_blocks/niotic', 'powah:niotic_crystal_block')
    e.add('forge:storage_blocks/spirited', 'powah:spirited_crystal_block')
    e.add('forge:storage_blocks/nitro', 'powah:nitro_crystal_block')

    // powah gem tags
    e.add('forge:gems/blazing', 'powah:blazing_crystal')
    e.add('forge:gems/niotic', 'powah:niotic_crystal')
    e.add('forge:gems/spirited', 'powah:spirited_crystal')
    e.add('forge:gems/nitro', 'powah:nitro_crystal')

    // powah energizing rod
    e.add('powah:energizing_rod', ['powah:energizing_rod_starter', 'powah:energizing_rod_basic', 'powah:energizing_rod_hardened',
        'powah:energizing_rod_blazing', 'powah:energizing_rod_niotic', 'powah:energizing_rod_spirited', 'powah:energizing_rod_nitro'])

})