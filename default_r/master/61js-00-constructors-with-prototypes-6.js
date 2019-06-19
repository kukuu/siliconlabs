//Above, a single instance of toString() will now be shared between all of the Car objects.
//00js-creation presents a problem in that it makes 
//inheritance difficult and the other is that functions such as toString() 
//are redefined for each of the new objects created using the Car constructor. This isn't 
//very optimal as the function should ideally be shared between all of the instances of the Car type.
//We can thus extend the original example as follows:

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
