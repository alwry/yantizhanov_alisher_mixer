console.log('JS file connected');

const audioPieces = document.querySelectorAll('.icon-hov img'),
    dropZones = document.querySelectorAll('.dropzone'),
    resetButton = document.querySelector('#reset'),
    audioBoard = document.querySelectorAll('.icon-hov'),
    theAudioEl = document.querySelector("#audioEl"),
    spinCd = document.querySelector('#cdspin');

let audioElements = [];


function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData('id', e.target.id);
    console.log('started dragging this piece:', this);
}

function drop(e) {
    e.preventDefault();
    let itemId = e.dataTransfer.getData('id'),
    dropZone = e.currentTarget;
    if (dropZone.children.length > 0) {
        console.log('no');}
    else {
        e.target.appendChild(document.getElementById(itemId));
        console.log('dropped something on me');
        let newSrc = `audio/${e.target.querySelector('img').dataset.trackref}.mp3`;
        let audio = new Audio(newSrc);
        audioElements.push(audio);
        audio.load();
        return (audio);
    }   
}

function resetMixer() {
    audioPieces.forEach((piece, index) => {
        audioBoard[index].appendChild(piece);
    });
    console.log('reset');
    resetAudio();
}

function playAudio(audio){
    audio.play();
    audio.loop = true;
    spinCd.classList.add('spinningcd');
    audio.addEventListener('pause', function() {
        spinCd.classList.remove('spinningcd');
    });
}

function resetAudio(){
    audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}


audioPieces.forEach(piece => {
    piece.addEventListener('dragstart', drag);
});
dropZones.forEach(zone => {
    zone.addEventListener('dragover', allowDrop);
    zone.addEventListener('drop', (e) => {
        const audio = drop(e);
        playAudio(audio);
    });
});
resetButton.addEventListener("click", resetMixer);
