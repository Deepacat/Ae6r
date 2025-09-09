// Real exploding action since lychees doesn't even hurt you or break much
LycheeEvents.customAction('real_explode', event => {
    let strength = event.data.strength
    // use ProbeJS for more information about the parameters
    event.action.applyFunc = (recipe, ctx, times) => {
        let pos = ctx.getParam('lychee:block_pos')
        ctx.level.createExplosion(pos.x, pos.y, pos.z)
            .strength(strength)
            .explosionMode('tnt')
            .explode()
    }
    // it is recommended to cancel the event to prevent the action from being modified by other codes
    event.cancel()
})