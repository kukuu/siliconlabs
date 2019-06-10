/*
	Author: Alexander Adu-Sarkodie
	Purpose: The fizzBuzz problem is a common coding interview exercise.
	It is normally presented as:

	1. Output the integers from 1 to 100.
	2. For each multiple of 3 print "Fizz".
	3. For each multiple of 5 print "Buzz"
	4. For each multiples of 3 and 5 print "FizzBuzz".

*/

for(i=1; i < 101 ; i++){

	//Cache by de-constructing
	var multiplesOfThree = i % 3 === 0;
	var multiplesOfFive = i % 5 === 0;

	if(multiplesOfThree && multiplesOfFive ){
		console.log("FizzBuzz");
	}

	else if(multiplesOfThree){
		console.log("Fizz");
	}

	else if (multiplesOfFive){
		console.log("Buzz");
	}

	else{
		console.log(i);
	}
}