pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)

start_pause = 0
Passing_permition = 1
kontrola = False

def on_forever():
    if Passing_permition == 1:
        global start_pause, Passing_permition, kontrola
        kontrola = False
        basic.clear_screen()
        Passing_permition = 0
        start_pause = randint(3,10)*1000
        basic.pause(start_pause)
        kontrola = True
        basic.show_icon(IconNames.CHESSBOARD)
        run_parallel()
basic.forever(on_forever)

def run_parallel():
        music.play_tone(Note.C, 1500)
control.in_background(run_parallel)

def buttons():
    global Passing_permition
    p1 = input.pin_is_pressed(TouchPin.P1)
    p2 = input.pin_is_pressed(TouchPin.P2)
    if p1 == True and p2 == True:
        basic.clear_screen()
        if kontrola == True:
            basic.show_string("R")
            basic.pause(3000)
            control.reset()
        elif kontrola == False:
            basic.show_string("C")
            basic.pause(3000)
            control.reset()
        Passing_permition = 1
    elif p1 == True:
        basic.clear_screen()
        if kontrola == True:
            basic.show_string("1")
            basic.pause(3000)
            control.reset()
        elif kontrola == False:
            basic.show_string("B")
            basic.pause(3000)
            control.reset()
        Passing_permition = 1
    elif p2 == True:
        basic.clear_screen()
        if kontrola == True:
            basic.show_string("2")
            basic.pause(3000)
            control.reset()
        elif kontrola == False:
            basic.show_string("A")
            basic.pause(3000)
            control.reset()
        Passing_permition = 1
basic.forever(buttons)