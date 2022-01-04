let αριθμός = 0
input.onButtonPressed(Button.A, function () {
    αριθμός = 5
    for (let δείκτη = 0; δείκτη <= 9; δείκτη++) {
        basic.showString("" + (δείκτη + 1))
        basic.showString("*")
        basic.showString("" + (αριθμός))
        basic.showString("=")
        basic.showString("" + ((δείκτη + 1) * αριθμός))
        basic.showString("")
    }
})
input.onButtonPressed(Button.B, function () {
    for (let δείκτη = 0; δείκτη <= 9; δείκτη++) {
        for (let αριθμός = 0; αριθμός <= 9; αριθμός++) {
            basic.showString("" + (δείκτη + 1))
            basic.showString("*")
            basic.showString("" + (αριθμός + 1))
            basic.showString("=")
            basic.showString("" + ((δείκτη + 1) * (αριθμός + 1)))
            basic.showString("")
        }
    }
})
