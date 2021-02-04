input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.B, function () {
    if (input.compassHeading() > 0 && input.compassHeading() <= 90) {
        basic.showString("N")
    } else if (input.compassHeading() > 90 && input.compassHeading() < 180) {
        basic.showString("E")
    } else if (input.compassHeading() > 180 && input.compassHeading() <= 270) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
basic.forever(function () {
    music.playMelody("F - - F - F - D ", 400)
    music.playMelody("- C - F - A - A ", 400)
    music.playMelody("A - F - - F - D ", 400)
})
