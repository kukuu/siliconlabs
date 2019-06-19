/*
**The Revealing Module pattern came about as a result of  frustration with the
 fact that  repeating the name of the main object when we wanted to call
  one public method from another or access public variables. 
  
  Using the revealing pattern you avoid switching to object literal notation for the things 
  we wish to make public.

It gives an  updated pattern where we would simply define 
all of our functions and variables in the private scope and return an anonymous object with
 pointers to the private functionality we wished to reveal as public.

An example of how to use the Revealing Module pattern can be found below:
*
**/

var myRevealingModule = (function () {
 
        var privateVar = "Ben Cherry",
            publicVar = "Hey there!";
 
        function privateFunction() {
            console.log( "Name:" + privateVar );
        }
 
        function publicSetName( strName ) {
            privateVar = strName;
            console.log("Hey, I am " + privateVar);
        }
 
        function publicGetName() {
            privateFunction();
        }
 
 
        // Reveal public pointers to
        // private functions and properties
 
        return {
            setName: publicSetName,
            greeting: publicVar,
            getName: publicGetName
        };
 
    })();
 
myRevealingModule.setName( "Paul Kinlan" );