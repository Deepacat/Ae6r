ServerEvents.tags('block', e => {
    e.remove('aether:aether_portal_blocks', 'minecraft:glowstone')
    e.add('aether:aether_portal_blocks', 'kubejs:stabilized_arcane_glowstone')
})