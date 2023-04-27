const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsCircle = document.getElementById('seconds-circle');

let stopwatchInterval;
let runningTime = 0;

const playPause = () =>{
    const isPaused = !playPauseButton.classList.contains('running');

    if (isPaused) {
        playPauseButton.classList.add('running');
        start();
    }else{
        playPauseButton.classList.remove('running');
        pause();
    }
}

const start = () =>{
    secondsCircle.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsCircle.style.animationPlayState = 'running';

    stopwatchInterval = setInterval(()=>{
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    },1000);
}

const calculateTime = runningTime => {
    const seconds = Math.floor(runningTime / 1000);
    const minutes = Math.floor(seconds / 60);

    const displaySeconds = (seconds % 60).toString().padStart(2,"0");
    const displayMinutes = minutes.toString().padStart(2,"0");

    return `${displayMinutes}:${displaySeconds}`
}

const pause = () =>{
    secondsCircle.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

const stop = () =>{
    secondsCircle.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsCircle.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}