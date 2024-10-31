const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

refs.btnStop.disabled = true;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.btnStart.addEventListener('click', onStartClick);

function onStartClick() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
}

refs.btnStop.addEventListener('click', onStopClick);

function onStopClick() {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}
