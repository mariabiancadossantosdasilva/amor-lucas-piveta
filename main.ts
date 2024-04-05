input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
})
