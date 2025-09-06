ServerEvents.tags('item', e => {
    // botania rune types
    const botaniaRunes = [
        'water', 'fire', 'earth', 'air', 'spring', 'summer', 'autumn', 'winter', 'mana',
        'lust', 'gluttony', 'greed', 'sloth', 'wrath', 'envy', 'pride',
        'asgard', 'vanaheim', 'alfheim', 'midgard', 'joetunheim', 'muspelheim', 'niflheim', 'nidavellir', 'helheim'
    ]
    // botania rune tags
    for (let rune of botaniaRunes) {
        e.add(`botania:runes/${rune}`, `botania:rune_${rune}`)
        e.add(`botania:runes/${rune}`, `mythicbotany:${rune}_rune`)
    }

    e.remove('minecraft:flowers', '#botania:special_flowers')
    e.remove('minecraft:small_flowers', '#botania:special_flowers')
})