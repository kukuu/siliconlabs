function fizzBuzzBang(length, fizzNumber, buzzNumber, bangNumber){
	
	var output;
	
	for(var i = 1; i <= length; i++){
		
		output = '';

		if(i % fizzNumber === 0){
			output += 'Fizz';
		} 

		if(i % buzzNumber === 0){	
			output +=' Buzz';
		}

		if(i % bangNumber === 0){	
			output += 'Bang';
		}

		if((i % fizzNumber !== 0 ) && (i % buzzNumber !== 0) && (i % bangNumber !== 0)) {
			output+=i;
		}

		print(output);
		//console.log(output)
	}
}
