let ι = 0
let λ = 0
input.onButtonPressed(Button.A, function () {
    ι = 1
    while (ι <= 10) {
        basic.showNumber(ι)
        ι += 1
    }
})
input.onButtonPressed(Button.B, function () {
    λ = 9
    for (let ι = 0; ι <= 9; ι++) {
        basic.showNumber(λ)
        λ += -1
    }
})
