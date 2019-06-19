//1. Find the sum of multiple numbers of argumnets

//old school

/*

function sum(){
  var sum =0; 
  for(var i=0;i<arguments.length;i++){
     sum += arguments[i];
  }
   return sum;
}
sum(1,2); // returns 3
sum(1,2,3); // returns 6

*/

const sum = (...args) => [...args].reduce((a, b) => a + b, 0);

//2.CLOSURES - https://stackoverflow.com/questions/2272902/how-can-i-make-var-a-add23-5-work


//How can I make var a = add(2)(3); //5 work?
//Turn add(2,4) to annonymous function

//You compose the second function as an annonymous function.

var add = function(x) {
  
   return function(y) { return x + y; };

}


/*
Concept of CLOSURES can be used in this case.
The function "add" returns another function. The function being returned can access 
the variable in the parent scope (in this case variable a).

function add(a){

    return function(b){
        console.log(a + b);
    }

}

add(2)(3);*/


// function add(x) {
//     return function(y) {
//         return x + y;
//     };
// }


// const sum = (...args) => [...args].reduce((a,b) => a + b, 0)

// var x = add(2)(3)

// var add = function(x){
// 	refturn function(y){
// 		return x + y ;
// 	}
// }
