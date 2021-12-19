let ι = 0
input.onButtonPressed(Button.A, function () {
    ι = 1
    while (ι <= 10) {
        basic.showNumber(ι)
        // Τι θα συμβεί εαν ξεχάσω να χρησιμοποιησω την συγκεκριμένη εντολή;
        ι += 1
    }
})
