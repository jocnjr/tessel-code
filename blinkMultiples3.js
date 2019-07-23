const tessel = require('tessel');
const pin1 = tessel.port.A.pin[4];
const pin2 = tessel.port.A.pin[5];
const pin3 = tessel.port.A.pin[6];

console.log('initialising...')

const TIMES = 12;


const turnOn1 = () => {
  pin1.output(1);  // Turn pin high (on)
}
const turnOff1 = () => {
  pin1.output(0);  // Turn pin low (off)
}

const turnOn2 = () => {
  pin2.output(1);  // Turn pin high (on)
}
const turnOff2 = () => {
  pin2.output(0);  // Turn pin low (off)
}

const turnOn3 = () => {
  pin3.output(1);  // Turn pin high (on)
}
const turnOff3 = () => {
  pin3.output(0);  // Turn pin low (off)
}

let count = 0;
const interval = setInterval(() => {
  count += 1;
  if (count === 1 || count === 4 || count === 7 || count === 10) {
    turnOn1();
    setTimeout(() => {
      turnOff1();
    }, 600)
  } else if (count === 2 || count === 5 || count === 8 || count === 11) {
    turnOn2();
    setTimeout(() => {
      turnOff2();
    }, 600)
  } else if (count === 3 || count === 6 || count === 9 || count === 12) {
    turnOn3()
    setTimeout(() => {
      turnOff3();
    }, 600)
  }

  console.log(count)
  if (count >= TIMES) {
    clearInterval(interval);
  }
}, 900);

