/*
Looking at another example, below we can see a shopping basket implemented using this pattern.
 The module itself is completely self-contained in a global variable called basketModule.
  The basket array in the module is kept private and so other parts of our 
  application are unable to directly read it. It only exists with the module's closure and so the only methods able to access it are those with access to its scope (ie. addItem(),
   getItemCount() etc).

*/

var basketModule = (function () {
 
  // privates
 
  var basket = [];
 
  function doSomethingPrivate() {
    //...
  }
 
  function doSomethingElsePrivate() {
    //...
  }
 
  // Return an object exposed to the public
  return {
 
    // Add items to our basket
    addItem: function( values ) {
      basket.push(values);
    },
 
    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },
 
    // Public alias to a private function
    doSomething: doSomethingPrivate,
 
    // Get the total value of items in the basket
    getTotal: function () {
 
      var q = this.getItemCount(),
          p = 0;
 
      while (q--) {
        p += basket[q].price;
      }
 
      return p;
    }
  };
})();

/*
Inside the module, you may have noticed that we return an object.
 This gets automatically assigned to basketModule so that we can 
 interact with it as follows:
*/

// basketModule returns an object with a public API we can use
 
basketModule.addItem({
  item: "bread",
  price: 0.5
});
 
basketModule.addItem({
  item: "butter",
  price: 0.3
});
 
// Outputs: 2
console.log( basketModule.getItemCount() );
 
// Outputs: 0.8
console.log( basketModule.getTotal() );
 
// However, the following will not work:
 
// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// public API
console.log( basketModule.basket );
 
// This also won't work as it only exists within the scope of our
// basketModule closure, but not in the returned public object
console.log( basket );

//The methods above are effectively namespaced inside basketModule.

