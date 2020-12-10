function Workshop(teacher) {
  this.teacher = teacher;
}// defining a this aware function this is acting as our constructor

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};//we are adding methods to the prototype of the 
//workshop constructor

var deepJS = new Workshop("kyle");
var reactJS = new Workshop("chelsea");

deepJS.ask("is 'prototype' a class?");//deepjs does not have an ask method
//this is how are invoking the ask method on the object
reactJS.ask("is 'prototype' ugly?");
