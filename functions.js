var timeAvailable = 120;

function timeRemaining(timeAvailable, timeUsed) {
  return timeAvailable - timeUsed;
}

var timeLeft = timeRemaining(timeAvailable, 60);

console.log(timeLeft);
//time remaining is a function due to the fact it takes an input
//and then returns an output. it gives you a computational result back
//