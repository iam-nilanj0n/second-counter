const box = document.querySelector('.secondCounter-Box');


let p = document.createElement('p');
p.className = 'counter';
p.textContent = '00';

let timerSection = document.createElement('div');
let sec = document.createElement('p');
let startButton = document.createElement('button');
let resetButton = document.createElement('button');
let pauseButton = document.createElement('button');
let div = document.createElement('div');

div.className = 'buttonSection';
startButton.className = 'startButton';
resetButton.className = 'resetButton';
pauseButton.className = 'pauseButton';

sec.textContent = 'second';
timerSection.className = 'timeSection';
startButton.textContent = 'Start';
resetButton.textContent = 'Reset';
pauseButton.textContent = 'Pause';

timerSection.appendChild(p)
timerSection.appendChild(sec)
div.appendChild(startButton)
div.appendChild(pauseButton)
div.appendChild(resetButton)

box.appendChild(timerSection)
box.appendChild(div)

var counter;
const changeCounter = () => {
    p.textContent = Number(p.textContent) + 1;
    if(Number(p.textContent>0)){
        sec.textContent = 'seconds';
    }

    if(String(p.textContent).length<2){
        p.textContent = `0${p.textContent}`
    }
}

startButton.addEventListener('click', (event) => {
    counter = setInterval(changeCounter, 1000);
})

pauseButton.addEventListener('click', (event) => {
    clearInterval(counter)
})

resetButton.addEventListener('click', (event) => {
    p.textContent = '00';
    sec.textContent = 'second';
    clearInterval(counter)
})

