class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

{/* similar to our prototype example we creating a class object
    which has a constructor method which is which is taking the 
    parameters given in our construction of a new workshop class
    those parameters are then filled in for this.teacher we see
    this construction on line 16 and 17, on line 5 we have a method 
    attached to this class the ask() we see that a parameter of 
    question can be passed but in the return on line 6 it also reaches
    for this, on line 19 and 20 we are creating new instances of the 
    workshop object and assigning the parameters to this*/}
var deepJS = new Workshop("kyle");
var reactJS = new Workshop("chelsea");

deepJS.ask("is 'prototype' a class?");
reactJS.ask("is 'prototype' ugly?");
//we are now calling that method attached our class object
