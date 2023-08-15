basic.forever(function () {
    if (315 <= input.compassHeading() && 360 >= input.compassHeading() || 0 <= input.compassHeading() && 45 >= input.compassHeading()) {
        basic.showString("N")
    } else if (45 <= input.compassHeading() && 135 >= input.compassHeading()) {
        basic.showString("E")
    } else if (135 <= input.compassHeading() && 225 >= input.compassHeading()) {
        basic.showString("S")
    } else if (225 <= input.compassHeading() && 315 >= input.compassHeading()) {
        basic.showString("W")
    } else {
        basic.clearScreen()
    }
})
