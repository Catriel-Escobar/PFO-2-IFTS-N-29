export const chronometer = () => {
  const chronometerDisplay = document.createElement('div');
  chronometerDisplay.className = 'chronometer-display';
  document.body.appendChild(chronometerDisplay);

  const updateDisplay = () => {
    const deliveryDate = new Date().setTime(1746500340000);
    const currentDate = new Date();
    const timeLeft = deliveryDate - currentDate;
    const timeString = convertMilliseconds(timeLeft);
    chronometerDisplay.innerHTML = timeString;
  };

  updateDisplay();
  setInterval(updateDisplay, 1000);
};

function convertMilliseconds(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `Tiempo restante para la entrega de PFO 2:<br><span class="time-unit">${days}D</span>:<span class="time-unit">${hours}H</span>:<span class="time-unit">${minutes}M</span>:<span class="time-unit">${seconds}S</span>`;
}
