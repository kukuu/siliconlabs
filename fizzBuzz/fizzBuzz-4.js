function fizzBuzz(length, numbers, terms){

	var output;

	if(numbers.length !== terms.length) {
		
		throw "illegal arguments!"
	}

	for(var i=1;i<=length;i++){
		
		output = '';
		
		for(var j=0;j<numbers.length;j++){
			
			if(i%numbers[j] === 0){
				output+=terms[j];
			}
		}
		
		if(output === '') {
			output+=i;
		}
		
		print(output);
	}
}