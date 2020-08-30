function digital_clock() {
  const digital_clock = document.querySelector('.digital-clock');

  setInterval(() => {
    let date = new Date();
    digital_clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  });
}

function analog_clock() {
  const hour = document.querySelector('#h');
  const minute = document.querySelector('#m');
  const second = document.querySelector('#s');

  setInterval(() => {
    let date = new Date();
    let h = date.getHours() * 30;
    let m = date.getMinutes() * 6;
    let s = date.getSeconds() * 6;

    hour.style.transform = `rotateZ(${h + (m/12)}deg)`;
    minute.style.transform = `rotateZ(${m}deg)`;
    second.style.transform = `rotateZ(${s}deg)`;

  });
}

digital_clock()
analog_clock()