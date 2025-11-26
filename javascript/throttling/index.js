

function throttle(func, delay) {
 let timeout = null;
 return (...args) => {
  if (!timeout) {
    func(args);
    timeout = setTimeout(() => timeout = null, delay);
  }
 }
}


let counter = 0;
function increment() {
  counter +=1;
  console.log(counter);
}


const throttledIncrement = throttle(increment, 200);


// trigger
throttledIncrement();
// throttledIncrement(); //will ignored, because called under 200 ms

setTimeout(() => {
 throttledIncrement();
}, 2000)