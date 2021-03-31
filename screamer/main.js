let aud = new Audio("Апчи (Скример).mp3");
aud.volume = 0.1;

aud.loop = true;
document.body.onclick = function () {
    aud.play();
}