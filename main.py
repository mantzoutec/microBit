def on_button_pressed_a():
    for index in range(10):
        basic.show_number(randint(0, 9))
input.on_button_pressed(Button.A, on_button_pressed_a)
