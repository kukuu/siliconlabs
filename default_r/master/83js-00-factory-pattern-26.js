/*The Factory pattern is another creational pattern concerned with the notion of 
creating objects. Where it differs from the other patterns 
in its category is that it doesn't explicitly require us use a constructor.

 Instead, a Factory can provide a generic interface for creating objects, 
 where we can specify the type of factory object we wish to be created.

Imagine that we have a UI factory where we are asked to create a type of UI component.
 Rather than creating this component directly using the new operator or via another creational 
 constructor, we ask a Factory object for a new component instead. We inform the Factory
  what type of object is required (e.g "Button", "Panel") and it instantiates this, 
  returning it to us for use.

This is particularly useful if the object creation process is relatively complex, e.g.
 if it strongly depends on dynamic factors or application configuration.

 The following is an example that builds upon our previous snippets using the Constructor pattern logic to define cars. 
 It demonstrates how a Vehicle Factory may be implemented using the Factory pattern:
 */

 // Types.js - Constructors used behind the scenes
 
// A constructor for defining new cars
function Car( options ) {
 
  // some defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
 
}
 
// A constructor for defining new trucks
function Truck( options){
 
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}
 
 
// FactoryExample.js
 
// Define a skeleton vehicle factory
function VehicleFactory() {}
 
// Define the prototypes and utilities for this factory
 
// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;
 
// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function ( options ) {
 
  switch(options.vehicleType){
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
    //defaults to VehicleFactory.prototype.vehicleClass (Car)
  }
 
  return new this.vehicleClass( options );
 
};
 
// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
            vehicleType: "car",
            color: "yellow",
            doors: 6 } );
 
// Test to confirm our car was created using the vehicleClass/prototype Car
 
// Outputs: true
console.log( car instanceof Car );
 
// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car );