//Contact List App
//Author: Alexander Adu-Sarkodie
//Application Framework: MEAN-STACK
//Notes: More CRUDE Methods are enabled here 
//Requirement: MongoDB must be added to the application and disc data migrated into the DB.

var express = require('express');

//we create an instantiate of express
var app = express();


//Set up our static assets to be consumed by express
app.use(express.static(__dirname + "/public"));

//make a get request for the data
app.get('/contactlist',function(req,res){
  console.log("I received a GET request")

  person1 = {
    name: "Jeff",
    surname: "Sterling",
    email: "jeff@email.com", 
    number: "08741349"
  };

  person2 = {
    name: "Chris",
    surname: "Kamara",
    email: "chrisK@email.com", 
    number: "99478654"
  };

  person3 = {
    name: "Alex",
    surname: "Hammond",
    email: "alexH@email.com", 
    number: "67892340"
  };

  person4 = {
    name: "Jim",
    surname: "White",
    email: "JimWe@email.com", 
    number: "90872340"
  };

person5 = {
  name: "Natalie",
  surname: "Sawyer",
  email: "NatalieS@email.com", 
  number: "54342340"
};

person6 = {
  name: "Big",
  surname: "Jaye",
  email: "BigJ@email.com", 
  number: "33354342340"
};

  //we create an array to aggregate all the entries
  var contactlist = [person1,person2,person3,person4,person5,person6];

  //The server responds to the GET request and sends back a JSON formated data to tht controller
  res.json(contactlist);

});


//Assign our listening port for execution and test
app.listen(3089);
console.log('App running on port 3089');