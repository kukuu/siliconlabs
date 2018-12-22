/*Get a value from a deeply nested List with getIn()

Immutable’s List.getIn() function will let you access a 
deeply nested List of Lists. You provide a keyPath – an array of 
indices – into the nested List, telling immutable the location of the 
value that you want to access. The keyPath is simply the same set of indices 
you’d use to access a nested ES6 array, but rather than use the ES6 array index syntax 
(e.g. index[1][1][1][0]), you use an array of indices instead (e.g. [1, 1, 1, 0]).*/

// Get a value from a deeply nested List
const avengers = [
  'ironMan', // index [0]
  ['captainAmerica', // index [1][0]
   ['blackWidow', // index [1][1][0]
    ['theHulk'] // index [1][1][1][0]
   ]
  ]
];

const avengersList = Immutable.fromJS(avengers);

// get theHulk
avengersList.getIn([1, 1, 1, 0]);

//Output
//"theHulk"