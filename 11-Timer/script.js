let timeBegan = null;
let timeStopped = null;
let stopDuration = 0;
let startInterval = null;
let isStopped = true;

const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    if (timeBegan === null) {
      timeBegan = new Date();
    }
    if (timeStopped !== null) {
      stopDuration += (new Date() - timeStopped);
    }
    startInterval = setInterval(clockRunning, 10);
  }
};
const clockRunning = () => {
  const currenTime = new Date();
  const timeElapsed = new Date(currenTime - timeBegan - stopDuration);

  let minutes = timeElapsed.getUTCMinutes();
  let seconds = timeElapsed.getUTCSeconds();
  let millisecond = timeElapsed.getUTCMilliseconds();

  millisecond = Math.floor(millisecond/10);

  document.getElementById('timer-display').innerHTML =
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds) + ':' +
    (millisecond < 10 ? '0' + millisecond : millisecond);
};

const stopTimer = () => {
  if (!isStopped) {
    isStopped = true;
    timeStopped = new Date();
    clearInterval(startInterval);
  }
};

const resetTimer = () => {
  if (isStopped) {
    timeBegan = null;
    timeStopped = null;
    stopDuration = 0;
    startInterval = null;
    document.getElementById('timer-display').innerHTML = '00:00:00';
  }
};