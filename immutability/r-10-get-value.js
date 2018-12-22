/*Get a value from the end of a List with get(-1)

If you pass a negative index to List.get(), it will return a value starting 
from the end of the List (i.e. an index of -1 will return the last item, -2 
the second-to-last, and so on).*/

// Get a value from a List

const avengersList = Immutable.List(
  ['ironMan' , 'captainAmerica', 'blackWidow', 'theHulk']);

// Get blackWidow
avengersList.get(-2);

//Output
//"blackWidow"