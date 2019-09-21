const keys = document.querySelector(".keys").children;
const audios = document.querySelectorAll("audio");
var keysDict = {};
var audiosDict = {};

// populate keysDict with (keyCode, div element) pairs
// populate audiosDict with (keyCode, audio element) pairs
// assume keys.length == sounds.length
for (var i = 0; i < keys.length; i++) {
    // populate keysDict
    var key = keys.item(i);
    var keyCode = Number(key.dataset.key);
    keysDict[keyCode] = key;
    // populate audiosDict
    var audio = audios[i];
    var audioKeyCode = Number(audio.dataset.key);
    audiosDict[audioKeyCode] = audio;
}

// if a key is pressed is in the dictionary:
// (1) add 'playing' lass to respective div element
// (2) play respective audio file 
document.addEventListener("keydown", (e) => {
    var divKey = keysDict[e.keyCode];
    var audio = audiosDict[e.keyCode];
    if (divKey != null && audio != null) {
        divKey.classList.add('playing');
        if (audio.paused) {
            audio.play();
        }
    }
});

// if a key released is in the dictionary:
// (1) remove the 'playing' class 
// (2) set respective audio file to beginning
document.addEventListener("keyup", (e) => {
    var divKey = keysDict[e.keyCode];
    var audio = audiosDict[e.keyCode];
    if (divKey != null) {
        divKey.classList.remove('playing');
        audio.pause();
        audio.currentTime = 0;
    }
});