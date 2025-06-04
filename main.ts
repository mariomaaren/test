radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("Panther")
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        basic.pause(100)
        basic.clearScreen()
    } else {
        basic.showString("Tijger")
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showString("Panther")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showString("Tijger")
})
radio.setGroup(0)
