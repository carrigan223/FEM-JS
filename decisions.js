var age = 16;

if (age >= 18) {
  return console.log("go vote");
} else {
  var voteAgeDifference = 18 - age;
  return console.log(`You can vote in ${voteAgeDifference} years`);
}
// if statements evaluate if an expression is true
//if evaluated as true will return our return statement
// by adding an else block we provide a catch for the false return