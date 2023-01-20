var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
var btn3=document.getElementById("btn3")

var aud=document.getElementById("aud")
btn1.addEventListener("click", playAudio)
function playAudio(){
    aud.play()
}
btn2.addEventListener("click", pauseAudio)
function pauseAudio(){
    aud.pause()
}
aud.addEventListener("ended",(e)=>{
e.target.src="sound2.mp3"
e.target.play()
})
btn3.addEventListener("click", shuffle)

function randomSong(){
    return audio[Math.floor(math.random() * audio.length)];
}
function shuffle(){
    aud.src=randomSong();
}
