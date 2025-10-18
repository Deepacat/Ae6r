function isRealPlayer(player) {
    return (player.isPlayer() && !player.isFake())
}