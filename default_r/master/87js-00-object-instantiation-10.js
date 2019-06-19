// A car "class"

function Car( model ) {
 
  this.model = model;
  this.color = "silver";
  this.year = "2012";
 
  this.getInfo = function () {
    return this.model + " " + this.year;
  };
 
}

//We can then instantiate the object using the Car constructor we defined above like this:
//see next exercise

//create an array of  object and attach to the get info method of the class model.
//see exercise 00js-object-creation-5.html

var myCar = new Car("ford");
 
myCar.year = "2010";
 
console.log( myCar.getInfo() );