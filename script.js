const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');
const clouds = document.querySelector('.clouds');
const points = document.getElementById('points');
const resetButton = document.getElementById('reset');

const scoreUpdate = () => {
    points.innerHTML = count;
}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 600);
}



const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');
    const cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';      
        clouds.style.marginLeft = '0';
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval(loop);
        clearInterval(intervalId);
    }

}, 10);

let count = 0;
let intervalId= 0;

intervalId = setInterval(() =>{ 
        count +=  1;
        scoreUpdate();
},500);

document.addEventListener('keydown', jump);
