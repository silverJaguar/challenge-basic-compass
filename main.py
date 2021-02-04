def on_button_pressed_a():
    basic.show_number(input.compass_heading())
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if input.compass_heading() > 0 and input.compass_heading() <= 90:
        basic.show_string("N")
    else:
        if input.compass_heading() > 90 and input.compass_heading() < 180:
            basic.show_string("E")
        else:
            if input.compass_heading() > 180 and input.compass_heading() <= 270:
                basic.show_string("S")
            else:
                basic.show_string("W")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever(
    
):
    pass
basic.forever(on_forever)
