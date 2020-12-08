var student = "Andrew";
var gitHubHandle = "carrigan223";
var age = 32;

function whoAmI(myName, myHandle, myAge) {
  console.log(`
        Hi, im ${myName}, find me on github at ${myHandle},
        I am ${myAge} years old.
    `);
}

whoAmI(student, gitHubHandle, age);
