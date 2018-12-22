// Getters

// Get a value from a List with get()

// Like Arrays, Lists are zero-indexed.


// Get a value from a List
​
const avengersList = Immutable.List(['ironMan' , 'captainAmerica']);
​
// Get captainAmerica
avengersList.get(1);

"captainAmerica"

// Get a value from the end of a List with get(-1)

// If you pass a negative index to List.get(), it will return a value starting from the end of the List (i.e. an index of -1 will return the last item, -2 the second-to-last, and so on).


// Get a value from a List
​
const avengersList = Immutable.List(
  ['ironMan' , 'captainAmerica', 'blackWidow', 'theHulk']);
​
// Get blackWidow
avengersList.get(-2);

"blackWidow"

// Get a value from a deeply nested List with getIn()

// Immutable’s List.getIn() function will let you access a deeply nested List of Lists. You provide a keyPath – an array of indices – into the nested List, telling immutable the location of the value that you want to access. The keyPath is simply the same set of indices you’d use to access a nested ES6 array, but rather than use the ES6 array index syntax (e.g. index[1][1][1][0]), you use an array of indices instead (e.g. [1, 1, 1, 0]).


// Get a value from a deeply nested List
const avengers = [
  'ironMan', // index [0]
  ['captainAmerica', // index [1][0]
   ['blackWidow', // index [1][1][0]
    ['theHulk'] // index [1][1][1][0]
   ]
  ]
];
​
const avengersList = Immutable.fromJS(avengers);
​
// get theHulk
avengersList.getIn([1, 1, 1, 0]);

"theHulk"

// Setters

// With setters, you must always remember that you’re dealing with immutable data; that is, even though a function may let you set a value in a List, you’re actually setting the value in a new copy of the List – the List being acted upon is left entirely unchanged (immutable, see – the clue’s in the name!).

// As such, when you see words like ‘replace’, ‘delete’, ‘update’, etc., always remember that the original List will not be changed – it’s the copy that’s returned that will contain the changes.

// List.set()

// Replace a value in a List with set()

// list.set(indexOfValueToBeReplaced, newValue)


//Replace a value in a List with set()
​
const avengersList = Immutable.List(['ironMan' , 'captainAmerica']);
​
// change ironMan to blackWidow
avengersList.set(0, 'blackWidow');

Array [
  "blackWidow",
  "captainAmerica",
]

// Replace the second-to-last value in a List with set()

// A Negative index counts back from the end of a list. Last value = -1, so second-to-last = -2.

list.set(-2, newValue)


// Replace the second-to-last value in a List with set()
​
const avengersList = Immutable.List(
  ['ironMan' , 'captainAmerica', 'blackWidow', 'theHulk', 'antMan']);
​
// Replace theHulk with scarletWitch (sorry Bruce)
avengersList.set(-2, 'scarletWitch');

Array [
  "ironMan",
  "captainAmerica",
  "blackWidow",
  "scarletWitch",
  "antMan",
]

// Add a value to a list at an index beyond its current size with set()

// If index exceeds the List’s size, the List will grow to the new index, and the indices in between will be populated with null


// Add a value to a List at an index beyond its current size
​
const avengersList = Immutable.List(['ironMan' , 'captainAmerica']);
​
// Add antMan to a place no normal human would fit
avengersList.set(8, 'antMan');

Array [
  "ironMan",
  "captainAmerica",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "antMan",
]

// Add a new value to the end of a List with set()

// Because using set() with an index that’s greater than the List’s current size creates a new item at that location, specifying an index that’s equal to the List’s current size will add an item to the end of the List, with no nulls inserted.

// list.set(indexOfLastValuePlus1, newValue)
// Note: you can get indexOfLastValuePlus1 using list.size


// Add a new value to the end of a List with set()
​
const avengersList = Immutable.List(['ironMan' , 'captainAmerica']);
​
// Add blackWidow to the List
avengersList.set(avengersList.size, 'blackWidow');

Array [
  "ironMan",
  "captainAmerica",
  "blackWidow",
]

// List.setIn()

// Immutable’s List.setIn() function will let you access a deeply nested List of Lists. The same rules apply as for List.set() (e.g. negative indices start from the end of a list, an index > size will expand the size of the list, etc.). Just as with List.getIn(), you provide a keyPath – an array of indices – into the nested List, telling setInI() the location of the value that you want to change.

// Replace a value deeply embedded in a List of Lists with setIn()

// keyPath is an array of indices. Use the same series of indices that
// you would use to access the equivalent array item in an ES6 array.
const newList = list.setIn(keyPath, newValue);


//Replace a value in a nested List with setIn()
​
const avengers = [
  'ironMan',           // index [0]
  ['captainAmerica',   // index [1][0]
   ['blackWidow', // index [1][1][0]
    ['theHulk']    // index [1][1][1][0]
   ]
  ]
];
​
const avengersList = Immutable.fromJS(avengers);
​
// change theHulk to scarletWitch
avengersList.setIn([1, 1, 1, 0], 'scarletWitch');

Array [
  "ironMan",
  Array [
    "captainAmerica",
    Array [
      "blackWidow",
      Array [
        "scarletWitch",
      ],
      ],
    ],
    ]

// Add a new value to the end of a nested List with setIn()


// Add a new value to the end of a nested List
const avengers = [
  'ironMan', // index [0]
  ['captainAmerica', // index [1][0]
   ['blackWidow', // index [1][1][0]
    ['theHulk'] // index [1][1][1][0]
   ]
  ]
];
​
const avengersList = Immutable.fromJS(avengers);
​
// Add scarletWitch to theHulk's List
avengersList.setIn([1, 1, 1, 1], 'scarletWitch');

Array [
  "ironMan",
  Array [
    "captainAmerica",
    Array [
      "blackWidow",
      Array [
        "theHulk",
        "scarletWitch",
      ],
      ],
    ],
    ]

// Replace the second-to-last value in a nested List with setIn()


// Replace the second-to-last value in a nested List with setIn()
​
const avengers = [
  'ironMan', // index [0]
  ['captainAmerica', // index [1][0]
   ['blackWidow', // index [1][1][0]
    ['theHulk', 'scarletWitch'] // index [1][1][1][0]
   ]
  ]
];
​
const avengersList = Immutable.fromJS(avengers);
​
// Replace theHulk with vision (sorry Bruce)
avengersList.setIn([1, 1, 1, -2], 'vision');

Array [
  "ironMan",
  Array [
    "captainAmerica",
    Array [
      "blackWidow",
      Array [
        "vision",
        "scarletWitch",
      ],
      ],
    ],
    ]

// What happens if an index doesn’t exist?

// If an index doesn’t exist anywhere in the keyPath, then List.setin() will do one of the following:

// If the index preceding the bad index references a List, then the bad index is trying to insert a value at a place outside of the bounds of this list. Usual rules apply, and the List expands, the value is placed at the end of the expanded List, and nulls are inserted in between. Try it for yourself in the example below, by replacing the last line with avengersList.setIn([1, 1, 1, 3], 'scarletWitch');
// If the index preceding the bad index is a value (i.e. not a List or Map), then the bad index is trying to insert a value into a data type that has no concept of an index; accordingly, an Invalid keyPath error will be thrown. Try it for yourself in the example below, by replacing the last line with avengersList.setIn([0, 1], 'scarletWitch');. This tries to insert ‘scarletWitch’ into the String ‘ironMan’, and that’s never going to work!
// If you add too many indices in your keyPath, then the bad index is trying to insert a value into a part of the List that simply doesn’t exist. In this case, a new Map will be created, with the bad index forming the key. Try it for yourself in the example below, by replacing the last line with avengersList.setIn([1, 1, 1, 1, 1], 'scarletWitch');. Note that this behaviour will be applied at any point in the keyPath. Try using avengersList.setIn([1, 2, 2, 0], 'scarletWitch'); and see the result.
// If you’re having trouble trying to work out what’s happening, just remember that the behaviour is dependent on the data type referenced by the index before the bad index.


//Replace a value in a nested List with setIn()
​
const avengers = [
  'ironMan',            // index [0]
  ['captainAmerica',    // index [1][0]
   ['blackWidow',       // index [1][1][0]
    ['theHulk']     // index [1][1][1][0]
   ]
  ]
];
​
const avengersList = Immutable.fromJS(avengers);
​
// change theHulk to scarletWitch
avengersList.setIn([1, 1, 1, 0], 'scarletWitch');

Array [
  "ironMan",
  Array [
    "captainAmerica",
    Array [
      "blackWidow",
      Array [
        "scarletWitch",
      ],
      ],
    ],
    ]

// Item Adders and Inserters

// Add an item to the front of a List with insert()

const newList = list.insert(0, newValue)


// Add an item to the front of a List
​
const avengersList = new Immutable.List(['ironMan', 'captainAmerica']);
​
// Add blackWidow
avengersList.insert(0, 'blackWidow');

Array [
  "blackWidow",
  "ironMan",
  "captainAmerica",
]

Add an item to the front of a List with unshift()

const newList = list.unshift(newValue)


// Add an item to the front of a List
​
const avengersList = new Immutable.List(['ironMan', 'captainAmerica']);
​
// Add blackWidow
avengersList.unshift('blackWidow');

Array [
  "blackWidow",
  "ironMan",
  "captainAmerica",
]

Insert an item within a List with insert()

const newList = list.insert(index, newValue)


// Insert an item within a List
​
const avengersList = new Immutable.List(['ironMan', 'captainAmerica']);
​
// Insert blackWidow between ironMan and captainAmerica
avengersList.insert(1, 'blackWidow');

Array [
  "ironMan",
  "blackWidow",
  "captainAmerica",
]

Append an item to the end of a List with insert()

const newList = list.insert(list.size, newValue)


// Append an item to the end of a List with insert
​
const avengersList = new Immutable.List(['ironMan', 'captainAmerica']);
​
// append blackWidow
avengersList.insert(avengersList.size, 'blackWidow');

Array [
  "ironMan",
  "captainAmerica",
  "blackWidow",
]

// Append an item to the end of a List with push()

const newList = list.push(list.size, newValue)


// Push an item onto the end of a List
​
const avengersList = new Immutable.List(['ironMan', 'captainAmerica']);
​
// append blackWidow
avengersList.push('blackWidow');

Array [
  "ironMan",
  "captainAmerica",
  "blackWidow",
]

Deleters

Delete an item from the front of a List with delete()

const newList = list.delete(0)


// Delete an item from the front of a List
​
const avengersList = new Immutable.List(['ironMan', 'captainAmerica', 'blackWidow']);
​
// 'bye Tony
avengersList.delete(0);

Array [
  "captainAmerica",
  "blackWidow",
]

// Delete an item within a List with delete()

const newList = list.delete(index)


// Delete an item within a List
​
const avengersList = new Immutable.List(['ironMan', 'captainAmerica', 'blackWidow']);
​
// so long, 'cap
avengersList.delete(1);

Array [
  "ironMan",
  "blackWidow",
]

// Delete an item from the end of a List with delete()

const newList = list.delete(list.size - 1)


// Delete an item from the end of a List
​
const avengersList = new Immutable.List(['ironMan', 'captainAmerica', 'blackWidow']);
​
// see ya later, Natasha
avengersList.delete(avengersList.size - 1);

Array [
  "ironMan",
  "captainAmerica",
]

// Delete an item from the end of a List with pop()

const newList = list.pop()

// You may think that List.pop() removes the last item from a List in the same way that JavaScript’s native Array.pop() does. However, Array.pop() will remove the item from the array itself (thereby mutating it), and return the item that’s been removed; in contrast, Immutable’s List.pop() returns a new List with the item removed, leaving the existing List unchanged.

// You therefore cannot get the value of the item that’s been removed using List.pop()

// If you do need this value, query the original List explicitly using List.last() (you can do this either before or after the call to List.pop(), as the original List is not mutated – this is the Immutable library, remember!).


// Pop an item from the end of a List
​
const avengersList = new Immutable.List(['ironMan', 'captainAmerica', 'blackWidow']);
​
// see ya later, Natasha
avengersList.pop();

Array [
  "ironMan",
  "captainAmerica",
]

// Delete the second-to-last item of a List with delete()

// A Negative index counts back from the end of a List. Last value = -1, so second-to-last = -2.

const newList = list.delete(-2)


// Delete the second-to-last item from a List
​
const avengersList = new Immutable.List(['ironMan', 'captainAmerica', 'antMan', 'blackWidow']);
​
// where's antMan gone?
avengersList.delete(-2);

Array [
  "ironMan",
  "captainAmerica",
  "blackWidow",
]

// Delete all values from the List with clear


// Delete the second-to-last item from a List
​
const avengersList = new Immutable.List(['ironMan', 'captainAmerica', 'blackWidow', 'antMan']);
​
// kill all Avengers
avengersList.clear();

Array []

