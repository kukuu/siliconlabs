const collection = Immutable.List.of('ironMan');
collection.push('captainAmerica');
​
// Output:
collection;

Array [
  "ironMan",
]

//In this example, collection's push() method makes a copy of collection and pushes the new item onto the copy, leaving collection itself completely unchanged.

//To see the result of the push() method, we need to assign a new variable to it, as push returns the copy.
//See next exercise