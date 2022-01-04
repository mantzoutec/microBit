input.onButtonPressed(Button.A, function () {
    for (let δείκτη = 0; δείκτη <= 9; δείκτη++) {
        basic.showString("" + (δείκτη + 1))
        basic.showString("*")
        basic.showString("5")
        basic.showString("=")
        basic.showString("" + ((δείκτη + 1) * 5))
        basic.showString("")
    }
})
input.onButtonPressed(Button.B, function () {
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            basic.showString("" + (i + 1))
            basic.showString("*")
            basic.showString("" + (j + 1))
            basic.showString("=")
            basic.showString("" + ((i + 1) * (j + 1)))
        }
    }
})
