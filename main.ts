input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.soundLevel()))
})
basic.forever(function () {
    basic.showString("A-Luz")
    basic.showString("B-Sonido")
})
