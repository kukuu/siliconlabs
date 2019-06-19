function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
}
 
 
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};
 
// Usage:
 
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
console.log( civic.toString() );
console.log( mondeo.toString() );

//Functions, like almost all objects in JavaScript, contain a "prototype" object. 
//When we call a JavaScript constructor to create an object, all the properties of the constructor's 
//prototype are then made available to the new object. In this fashion, multiple Car
 //objects can be created which access the same prototype. 
 //We can thus extend the original example as follows:

 //Above, a single instance of toString() will now be shared 
 //between all of the Car objects.
 //Reason to use Prototypical inheritance.