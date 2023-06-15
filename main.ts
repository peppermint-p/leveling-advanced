input.onButtonPressed(Button.A, function () {
    basic.showNumber(x)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(y)
})
let y = 0
let x = 0
let valueFar = 64
let valueNear = 24
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (x > valueNear) {
        if (x > valueFar) {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                `)
        } else {
            basic.showLeds(`
                . . . # .
                . . . # .
                . . . # .
                . . . # .
                . . . # .
                `)
        }
    } else if (x < -1 * valueNear) {
        if (x < -1 * valueFar) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                `)
        } else {
            basic.showLeds(`
                . # . . .
                . # . . .
                . # . . .
                . # . . .
                . # . . .
                `)
        }
    } else if (y > valueNear) {
        if (y > valueFar) {
            basic.showLeds(`
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else if (y < -1 * valueNear) {
        if (y < -1 * valueFar) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                `)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
    }
})
