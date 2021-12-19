let ι = 0
let λ = 0
input.onButtonPressed(Button.A, function () {
    ι = 1
    λ = 2
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
