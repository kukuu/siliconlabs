/*Here the properties can be initialized on the second argument of Object.
create using an object literal with a syntax similar to that used by the 
Object.defineProperties and Object.defineProperty methods that we looked at previously.

It is worth noting that prototypal relationships can cause 
trouble when enumerating properties of objects and (as Crockford recommends)
 wrapping the contents of the loop in a hasOwnProperty() check.
 */

 var vehicle = {
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model );
  }
};
 

 //The parent inherited class is the first argument.
 //The second is an object literal of the prototype
var car = Object.create(vehicle, {
 
  "id": {
    value: MY_GLOBAL.nextId(),
    // writable:false, configurable:false by default
    enumerable: true
  },
 
  "model": {
    value: "Ford",
    enumerable: true
  }
 
});