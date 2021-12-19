let i = 0
input.onButtonPressed(Button.A, function () {
    i = 0
    while (i <= 50) {
        basic.showNumber(i)
        i += 1
    }
})
