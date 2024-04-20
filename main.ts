led.setBrightness(input.magneticForce(Dimension.Y))
music.play(music.stringPlayable("C G C C F E D C ", 129), music.PlaybackMode.UntilDone)
radio.sendString("" + (led.brightness()))
music.rest(music.beat(BeatFraction.Whole))
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
