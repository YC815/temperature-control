let 狀態 = 0
let 溫度 = 0
music.playMelody("C G C5 - - - - - ", 255)
basic.forever(function () {
    溫度 = input.temperature()
    basic.showString("" + 溫度 + "°C")
    if (溫度 >= 28 && 狀態 == 0) {
        music.playMelody("C5 - C5 - C5 - - - ", 255)
        狀態 = 1
    }
})
basic.forever(function () {
    if (溫度 < 28 && 狀態 == 1) {
        狀態 = 0
        music.playMelody("C - C - C - - - ", 255)
    }
})
