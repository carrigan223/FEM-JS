var students = ["andrew", "chelsea", "nacho", "dina"];

while (students.length > 0) {
  let student = students.pop();
  console.log(`Hello ${student}`);
}

console.log(students.length); //logs 0
// this is running through our array of students
//it is evaluating whether the length of the array is
//more then zero, if evaluated as true it is
//taking the value of the end for every true eval

var pets = ["nacho", "hector", "sophie"];

for (let i = 0; i < pets.length; i++) {
  console.log(`${pets[i]} is a dog`);
}

console.log(pets.length);// logs 2
//the above is a foor loop which starting at the index 0
//it is then evaluating the length of the array
//as i is less then the length it will increment i by one 
// once i in this case evaluates as 2 the loop will stop

// the difference between these two methods we notice 
//by checking the length of the array after the loop
//on the first example we no longer have values in the array 
//whereas the second example leaves the values in place in the array
