let ι = 0
let λ = 0
input.onButtonPressed(Button.A, function () {
    ι = 1
    λ = 5
    while (ι <= 10) {
        basic.showString("" + (ι))
        basic.showString("*")
        basic.showString("" + (λ))
        basic.showString("=")
        basic.showString("" + (ι * λ))
        basic.showString("")
        basic.showString("")
        // Τι θα συμβεί εαν ξεχάσω να χρησιμοποιησω την συγκεκριμένη εντολή;
        ι += 1
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
            basic.showString("")
        }
    }
})
