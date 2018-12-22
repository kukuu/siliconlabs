# Mutation: Mutability & Immutability

Immutable lets us create complex objects comprising such things as JavaScript objects, arrays, or even nested arrays of objects with arrays, with each complex object acting as an unchanging value. However, this is difficult to picture, as we’re so used to JavaScript objects containing properties with constantly changing values. Think of a user object, for example, containing properties such as username, emailAddress, age, etc. These values could change at any time.

With Immutable collections, however, the values of such properties can never change. 

There are two ways that might help make this concept more concrete.

## Think of Immutable data as a value

An immutable collection should be thought of as a value, such as a number. A number never changes. The number 7, for example, is always 7. If you add 1 to 7 you get a new value (i.e. 8 – you knew that, right?!), but that doesn’t change 7 itself – it’s still 7.

Going back to our collection examples above, an Immutable collection is no different from a number. We can add an item to our collection, but that doesn’t change the original collection itself. Indeed, we can think of the collection’s push() method, which adds an item to an existing collection, as being equivalent to an addition operation on a number, which adds a new value to an existing number. In both cases, the original value – the collection and the number – are left completely unchanged, and a new value is returned.

This is the essence of Immutable data.


## Think of Immutable data as representing the state of data

Another way to think of an Immutable collection is to think of it as the state of its data at the specific point in time that the collection was created. Whenever we query that collection, we always get the state of its data that existed at its moment of creation. We might move on in time, but the collection itself never does.

So whenever we query a collection to retrieve its data, we’re not saying to the collection “give me your data now”, we’re actually saying “give me your data as it existed when you (i.e. the collection) were first created.”

It’s the difference between asking “Who is the Prime Minister of United Kingdom” – which obviously depends on when you ask the question – and “Who was the Prime Minister of the United Kingdom on August 13th 2016″ – which is a fact that will never change.

Accordingly, any operation you perform on the data within an Immutable collection (e.g. add or remove an item) will change the state of that data at a later point in time, but the state of the data as it existed before the operation remains unchanged. What you’re left with after the operation is two collections – the first represents the state of the data before the operation, and the second represents the state of the data after the operation.


## What is Immutable.js?

Immutable.js is a library for creating collections of data, which, once created, cannot be changed. These collections are modelled on JavaScript’s Array, Map and Set objects, but with the significant difference that all methods to add, delete or update data in a collection do not mutate (i.e. change) the collection being acted upon.

For example, Immutable’s push() method, which adds an item of data to an Immutable List, actually adds the item to a new copy of the List, leaving the original List collection completely unchanged.

To see this, the following shows a standard JavaScript Array’s push() method acting on (and mutating) the array itself:

```
// Standard mutating JavaScript Array push
const collection = ['ironMan'];
collection.push('captainAmerica');
​
// Output:
collection;

Array [
  "ironMan",
  "captainAmerica",
]

In contrast, the Immutable equivalent shows the original List completely unchanged:


// Immutable.js non-mutating List.push
const collection = Immutable.List.of('ironMan');
collection.push('captainAmerica');
​
// Output:
collection;

Array [
  "ironMan",
]
```

In this example, collection's push() method makes a copy of collection and pushes the new item onto the copy, leaving collection itself completely unchanged.

To see the result of the push() method, we need to assign a new variable to it, as push returns the copy.

```
// Immutable.js non-mutating List.push
const collection = Immutable.List.of('ironMan');
const newCollection = collection.push('captainAmerica');
​
// Output:
newCollection;

Array [
  "ironMan",
  "captainAmerica",
]
```

Getting  heads around Immutable collections

Immutable lets us create complex objects comprising such things as JavaScript objects, arrays, or even nested arrays of objects with arrays, with each complex object acting as an unchanging value. However, this is difficult to picture, as we’re so used to JavaScript objects containing properties with constantly changing values. Think of a user object, for example, containing properties such as username, emailAddress, age, etc. These values could change at any time.

With Immutable collections, however, the values of such properties can never change. How do you visualise this, let alone act on it?

There are two ways that might help make this concept more concrete.

Think of Immutable data as a value

An immutable collection should be thought of as a value, such as a number. A number never changes. The number 7, for example, is always 7. If you add 1 to 7 you get a new value (i.e. 8 – you knew that, right?!), but that doesn’t change 7 itself – it’s still 7.

Going back to our collection examples above, an Immutable collection is no different from a number. We can add an item to our collection, but that doesn’t change the original collection itself. Indeed, we can think of the collection’s push() method, which adds an item to an existing collection, as being equivalent to an addition operation on a number, which adds a new value to an existing number. In both cases, the original value – the collection and the number – are left completely unchanged, and a new value is returned.

This is the essence of Immutable data.

Think of Immutable data as representing the state of data

Another way to think of an Immutable collection is to think of it as the state of its data at the specific point in time that the collection was created. Whenever we query that collection, we always get the state of its data that existed at its moment of creation. We might move on in time, but the collection itself never does.

So whenever we query a collection to retrieve its data, we’re not saying to the collection “give me your data now”, we’re actually saying “give me your data as it existed when you (i.e. the collection) were first created.”

It’s the difference between asking “Who is the Prime Minister of the United Kingdom right now” – which obviously depends on when you ask the question – and “Who was the Prime Minister of the United Kingdom on May 22nd 2017″ – which is a fact that will never change.

Accordingly, any operation you perform on the data within an Immutable collection (e.g. add or remove an item) will change the state of that data at a later point in time, but the state of the data as it existed before the operation remains unchanged. What you’re left with after the operation is two collections – the first represents the state of the data before the operation, and the second represents the state of the data after the operation.

The following example may help to clarify this:

```
// state1 = the original state of the data at the time of 
// its creation: time 0
const state1_time0 = Immutable.List.of('ironMan');
​
// state2 = the new state of the data at a later time (time 1)
// i.e. after a push operation has been performed
const state2_time1 = state1_time0.push('captainAmerica');
​
// state1_time0 never changes, as it always reflects the state 
// of the data at time 0
state1_time0;

//Output

Array [
  "ironMan",
]

```

ES6 iterators are objects that define an iterable behaviour – that is, they implement the ES6 @@iterator method, and define what values are looped over in a for..of loop (among other things).

There are currently five built-in iterators in ES6:

String

Array

TypedArray

Map

Set