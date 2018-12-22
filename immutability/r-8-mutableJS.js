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