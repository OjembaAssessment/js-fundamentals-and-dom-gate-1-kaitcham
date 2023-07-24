let interval = null;
let count = document.querySelector('#countNumber');
let randomNumber = Math.floor(Math.random() * 100) + 1;

document.addEventListener('DOMContentLoaded', () => {
  count.textContent = randomNumber + 's';
});

function calculateNewTime(number) {
  if (interval) return;
  let newTime = Number(count.textContent.slice(0, -1)) + number;
  count.textContent = newTime + 's';
}

function startTimer() {
  if (interval === null) {
    event.target.textContent = 'Stop';
    interval = setInterval(function () {
      count.textContent = count.textContent.slice(0, -1) - 1 + 's';
      if (count.textContent === '0s') {
        clearInterval(interval);
        interval = null;
      }
    }, 1000);
  } else {
    event.target.textContent = 'Start';
    clearInterval(interval);
    interval = null;
  }
}

function resetTimer() {
  if (interval) return;
  count.textContent = '0s';
}
