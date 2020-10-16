const timeInput = document.getElementById('time-input');
const timeDisplay = document.getElementById('time-display');
const btnStart = document.getElementById('start-btn');

btnStart.addEventListener('click', startTimer);

let time = 0;
let timer;

function startTimer(){
    time = timeInput.value;
    if(!isNaN(time) && time > 0){
        clearInterval(timer);
        timeDisplay.innerText = time;
        timer = setInterval(countDown, 1000);
    }
}


function countDown(){
    time--;
    timeDisplay.innerText = time;
    if(time == 0){
        clearInterval(timer);
    }
}