/*
What is an Immutable Map?

An Immutable Map is an unordered collection of key/value pairs that at first glance
 seems similar to a JavaScript object. However, it has the following additional properties:

You can iterate over the keys of a Map
The order of keys iterated over does not change (although you don’t know what the order will be in advance)
All keys are converted to strings. This will catch you out. Frequently.
A key can be of any type – even NaN and an array
Two Maps are the same if Immutable.is(map1, map2) returns true
An Immutable collection (e.g. List, Map, Seq, etc.) can be a key
Here’s how to create one.*/

//Create an empty Map


// Empty Map:
const map = Immutable.Map();
​
// Output:
map;

Object {}

// Create a populated Map of data

// Map() vs Map.of()

// You can create a Map from existing data using either the Map() constructor, or the Map.of() method,
// depending on the type of data you’re using to create the Map:

// Map.of() – use when creating a Map from a set of function arguments, with each pair of
// arguments interpreted as a key and a value;
// Map() – use when creating a Map any other way.
// Create a new Map from…

// …a JavaScript Array

// To create a new Map from an array, you’ll actually need an array of arrays, with each 
//array item being a tuple (i.e. having two values). The first value of each array item will be used as a key in the map, and the second item will be its value.


// New Map from JavaScript array
const avengersArray = [
  ['heroName1', 'ironMan'], 
  ['heroName2', 'captainAmerica']
];
const avengersMap = Immutable.Map(avengersArray);
​
// Output:
avengersMap;

Object {
  "heroName1": "ironMan",
    "heroName2": "captainAmerica",
}

// Important: Keep in mind that the key names must be unique. Try changing 'heroName2' to 'heroName1' in the code above and see what happens. This is because Immutable will overwrite what it sees as a duplicate key.

// …a JavaScript Object


// New Map from JavaScript object
const avengersObj = {
  ironMan: 'Tony Stark',
  captainAmerica: 'Steve Rogers'
};
const avengersMap = Immutable.Map(avengersObj);
​
// Output:
avengersMap;

Object {
  "captainAmerica": "Steve Rogers",
    "ironMan": "Tony Stark",
}

// …a deeply nested JavaScript Object or JSON-encoded data

// Immutable’s Map does not work on deeply nested objects, as it’ll only do a shallow conversion (e.g. key in obj.key will be converted to a Map, but subkey in obj.key.subkey will be left unchanged – that is, if subkey is a JavaScript object, it will remain a JavaScript object, and not an Immutable Map).

// In order to create a new Map from a complex object or JSON-encoded data, therefore, you’ll need to use fromJS().


// New Map from deeply nested JavaScript object
const avengers = {
  hero1: {
    ironMan: {
      realName: 'Tony Stark'
    }
  },
  hero2: {
    captainAmerica: {
      realName: 'Steve Rogers'
    }
  }
};
​
// Create the Map
const avengersMap = Immutable.Map(Immutable.fromJS(avengers));
​
// Test that we have a deeply nested Map
const ironMan = avengersMap.getIn(['hero1', 'ironMan']);
​
// Output:
Immutable.Map.isMap(ironMan);

true

// Try removing Immuable.fromJS in the code above, and you should see the output turn to false. This is because, without fromJS(), the deeply nested object will not be converted to a Map.

// …a set of function arguments

// You can create a Map from an arbitrary number of function arguments, with each pair of arguments interpreted as a key/value pair. Just remember to create your Map with Map.of()


// New Map from function arguments
const avengersMap = Immutable.Map.of(
  'ironMan', 'Tony Stark', 'captainAmerica', 'Steve Rogers'
);
​
// Output:
avengersMap;

Object {
  "captainAmerica": "Steve Rogers",
    "ironMan": "Tony Stark",
}

// …a JavaScript iterator

// Just as with Immutable List – blobby, make href correct, any ES6 iterable object, either built-in (e.g. an Array) or user-defined, can be used to create a new Immutable Map.


// New Map from existing JavaScript iterator (Array.map example)
​
// Note: an ES6 object is not an iterator, so we'll use an array instead
const avengersArray = ['ironMan' , 'captainAmerica'];
​
const avengersMap = Immutable.Map(avengersArray.map(
  (item, index) => ([ 'heroName' + index, item ])));
​
// Output:
avengersMap;

Object {
  "heroName0": "ironMan",
    "heroName1": "captainAmerica",
}

// …an Immutable List

// Just as when creating a Map from an array, the List must comprise a List of Lists, with each List item being a tuple that will be used as a key/value pair by the Map.


// New Map from existing List
const avengersList = Immutable.List([['heroName1', 'ironMan'], ['heroName2', 'captainAmerica']]);
const avengersMap = Immutable.Map(avengersList);
​
// Output:
avengersMap;

Object {
  "heroName1": "ironMan",
    "heroName2": "captainAmerica",
}

…an Immutable Map


// New Map from existing Map
const avengersMap = Immutable.Map({
  hero1: 'ironMan',
  hero2: 'captainAmerica',
  hero3: 'blackWidow'
});
​
const newAvengersMap = Immutable.Map(avengersMap);
​
// Output:
newAvengersMap;

Object {
  "hero1": "ironMan",
    "hero2": "captainAmerica",
      "hero3": "blackWidow",
}

// …other Immutable objects

// You can create a new Map with any Immutable object, including:

// List
// Map
// OrderedMap
// Set
// OrderedSet
// Stack
// Record
// OrderedMap

// An OrderedMap is just the same as a Map, but with the added guarantee that the order of keys iterated over will always be the same. Everything else you can do with a Map, you can do with an OrderedMap.

// Note that an OrderedMap is slower than a Map, so if you don’t care about the order of the keys being iterated over, use a Map.

// Get, Set, Update and Delete Map properties

// As you can see, creating Maps can be unexpectedly complicated. Once created, though, they offer a powerful way to perform data manipulation. The next article in this series looks at how to get, set, update and delete properties from a Map.

