enum SpriteKindLegacy {
    Player,
    Enemy,
    Trampoline,
    Wall,
    Projectile,
    Food
}
sprites.onCreated(SpriteKindLegacy.Trampoline, function (trampoline) {
    trampoline.setImage(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
. . . . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . . . . . . 
. . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . 
. . . . . . . . 4 4 4 4 4 . . . . . . 4 4 4 4 4 . . . . . . . . 
. . . . . 4 4 4 4 4 . . . . . . . . . . . . 4 4 4 4 4 . . . . . 
. . . 4 4 4 4 . . . . . . . . . . . . . . . . . . 4 4 4 4 . . . 
4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 
. 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 . 
. . . . 4 4 4 4 4 . . . . . . . . . . . . . . 4 4 4 4 4 . . . . 
. . . . . . . 4 4 4 4 4 . . . . . . . . 4 4 4 4 4 . . . . . . . 
. . . . . . . . . 4 4 4 4 4 4 . . 4 4 4 4 4 4 . . . . . . . . . 
. . . . . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . . . . . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
    trampoline.bottom = Math.randomRange(trampoline.height, scene.screenHeight())
    trampoline.x = Math.randomRange(0, scene.screenWidth())
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Trampoline, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    player.vy = -100
    otherSprite.destroy()
    trampoline = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Trampoline)
})
let trampoline: Sprite = null
let player: Sprite = null
player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . e e e e e e . . . . . . 
. . . e e e e e e e e . . . . . 
. . . e f f d d f f d . . . . . 
. . . d f 1 d d 1 f d . . . . . 
. . . d d d d d d d d . . . . . 
. . . d d f d d f d d . . . . . 
. d d . d d f f d d . d d . . . 
. 4 4 . . d d d d . . 4 4 . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . . . 8 8 8 8 8 8 8 . . . . . 
. . . . 8 8 8 . 8 8 8 . . . . . 
. . . . 8 8 8 . 8 8 8 . . . . . 
. . . . 8 8 8 . 8 8 8 . . . . . 
`, SpriteKindLegacy.Player)
player.ay = 100
player.y = 0
scene.setBackgroundColor(9)
trampoline = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Trampoline)
trampoline = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Trampoline)
trampoline = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Trampoline)
game.onUpdate(function () {
    player.x += controller.dx()
})
