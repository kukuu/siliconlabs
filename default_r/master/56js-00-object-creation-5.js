
//By simply prefixing a call to a constructor function with the keyword "new",
// we can tell JavaScript we would like the function to behave 
//like a constructor and instantiate a new object with the members defined by that function.
//An anti-pattern-ish issue
//The above is a simple version of the constructor pattern 
//but it does suffer from some problems. One is that it makes 
//inheritance difficult and the other is that functions such as toString() 
//are redefined for each of the new objects created using the Car constructor. This isn't 
//very optimal as the function should ideally be shared between all of the instances of the Car type.

function Car( model, year, miles ) {
 
 //define properties of the class
  this.model = model;
  this.year = year;
  this.miles = miles;
 
  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}
 
// Usage:
 
// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
// and then open our browser console to view the
// output of the toString() method being called on
// Call the object as a depenency on the ethod (object.method)
console.log( civic.toString() );
console.log( mondeo.toString() );