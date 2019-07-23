const tessel = require('tessel');
const even = tessel.port.A.pin[7]; // Select pin 2 on port A
const odd = tessel.port.A.pin[6]; // Select pin 2 on port A
console.log('initialising...')

let count = 0;
const TIMES = 3;



const turnOnOdd = () => {
  odd.output(1);  // Turn pin high (on)
}
const turnOffOdd = () => {
  odd.output(0);  // Turn pin low (off)
}

const turnOnEven = () => {
  even.output(1);  // Turn pin high (on)
}
const turnOffEven = () => {
  even.output(0);  // Turn pin low (off)
}


const interval = setInterval(() => {
  count += 1;
  if (count % 2 === 0) {
    turnOnEven()
    setTimeout(() => {
      turnOffEven();
    }, 600)
  } else {
    turnOnOdd()
    setTimeout(() => {
      turnOffOdd();
    }, 600)
  }
  console.log(count)
  if (count > TIMES) clearInterval(interval);
}, 900);
