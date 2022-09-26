input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(2, 12))
    basic.pause(1000)
    basic.clearScreen()
})
