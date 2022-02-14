pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let p1 = input.pinIsPressed(TouchPin.P1)
let p2 = input.pinIsPressed(TouchPin.P2)
let timer = 0
let start_pause = 0
let Passing_permition = 1
let kontrola = false
function hra() {
    
    kontrola = false
    basic.clearScreen()
    Passing_permition = 0
    start_pause = randint(3, 10) * 1000
    basic.pause(start_pause)
    if (Passing_permition == 1) {
        return
    }
    
    kontrola = true
    basic.showIcon(IconNames.Chessboard)
    run_parallel()
}

function run_parallel() {
    music.playTone(Note.C, 1500)
}

control.inBackground(run_parallel)
basic.forever(function on_forever() {
    if (Passing_permition == 1) {
        hra()
    }
    
})
basic.forever(function buttons() {
    
    let p1 = input.pinIsPressed(TouchPin.P1)
    let p2 = input.pinIsPressed(TouchPin.P2)
    if (p1 == true && p2 == true) {
        basic.clearScreen()
        if (kontrola == true) {
            basic.showString("R")
            basic.pause(1000)
        } else if (kontrola == false) {
            basic.showString("C")
            basic.pause(1000)
        }
        
        Passing_permition = 1
    } else if (p1 == true) {
        basic.clearScreen()
        if (kontrola == true) {
            basic.showString("1")
            basic.pause(1000)
        } else if (kontrola == false) {
            basic.showString("B")
            basic.pause(1000)
        }
        
        Passing_permition = 1
    } else if (p2 == true) {
        basic.clearScreen()
        if (kontrola == true) {
            basic.showString("2")
            basic.pause(1000)
        } else if (kontrola == false) {
            basic.showString("A")
            basic.pause(1000)
        }
        
        Passing_permition = 1
    }
    
})
