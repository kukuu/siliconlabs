//The Module Pattern

//The Module pattern was originally defined as a way to provide both 
//private and public encapsulation for classes in conventional software engineering.

//In JavaScript, the Module pattern is used to further emulate the concept of classes
// in such a way that we're able to include both public/private methods and variables 
//inside a single object, thus shielding particular parts from the global scope and global polution. 
//What this results in is a reduction in the likelihood of our
// function names conflicting with other functions defined in additional scripts on the page.

var testModule = (function () {
 
  var counter = 0;
 
  return {
 
    incrementCounter: function () {
      return counter++;
    },
 
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };
 
})();
 
// Usage:
 
// Increment our counter
testModule.incrementCounter();
 
// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();

