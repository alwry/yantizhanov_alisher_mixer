console.log('JS file connected');

const audioPieces = document.querySelectorAll('.icon-hov img'),
    dropZones = document.querySelectorAll('.dropzone'),
    resetButton = document.querySelector('#reset'),
    audioBoard = document.querySelectorAll('.icon-hov');




function allowDrop(event) {
    event.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData('id', e.target.id);
    console.log('started dragging this piece:', this);
}

function drop(e) {
    e.preventDefault();
    let itemId = e.dataTransfer.getData('id'),
    dropZone = e.target;
    

    if (dropZone.children.length == 0) {
    e.target.appendChild(document.getElementById(itemId));
    console.log('dropped something on me');}
    else {
        console.log('please dont');
    }
}

function resetMixer() {
    audioPieces.forEach((piece, index) => {
        audioBoard[index].appendChild(piece);
    });
}


audioPieces.forEach(piece => {
    piece.addEventListener('dragstart', drag);
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', allowDrop);
    zone.addEventListener('drop', drop);
});

resetButton.addEventListener("click", resetMixer);
// console.log('JS file connected')

// const audioPieces = document.querySelectorAll('.icon-hov img'),
//     dropZones = document.querySelectorAll('.dropzone'),
//     audioBoard = document.querySelector('.grid-small');

// // let resetButton = document.querySelector('#reset'),
// //     playButton = document.querySelector('#play'),
// //     draggedAudio;
    
