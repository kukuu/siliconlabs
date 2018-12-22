function basket(basketName) {

    this.basketName = basketName;
    this.clearBasket = false;
    this.items = [];

    //load items from local storage when initializing
    this.loadItems();

}

//load items from local storage
basket.prototype.loadItems = function() {

    var items = localStorage != null ? localStorage[this.basketName + "_items"] : null;

    if(items != null && JSON != null) {

        try {
            var items = JSON.parse(items);
            for(var i = 0; i < items.length; i++) {
                var item = items[i];
                if(item.id != null && item.name != null && item.price != null && item.quantity != null) {
                    item = new basketItem(item.id, item.name, item.price, item.image, item.quantity);
                    this.items.push(item);
                }
            }
        }
        catch(err) {
            //ignore errors while loading...
        }

    }

}

//save items to local storage
basket.prototype.saveItems = function () {

    if (localStorage != null && JSON != null) {
        localStorage[this.basketName + "_items"] = JSON.stringify(this.items);
    }

}

//add item to the basket
basket.prototype.addItem = function(product, quantity) {

    quantity = this.toNumber(quantity);

    if(quantity != 0 && typeof(product.price) != "undefined") {

        //update quantity for existing item
        var found = false;

        for(var i = 0; i < this.items.length && !found; i++) {

            var item = this.items[i];
            if(item.id == product.id) {
                found = true;
                item.quantity = this.toNumber(item.quantity + quantity);
                if (item.quantity <= 0) {
                    this.items.splice(i, 1);
                }
            }

        }

        //new item
        if(!found) {
            var item = new basketItem(product.id, product.item, product.price, product.image, quantity);
            this.items.push(item);
        }

        //save changes
        this.saveItems();
    }

}

//get the total price for all items currently in the basket
basket.prototype.getTotalPrice = function(sku) {

    var total = 0;

    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        total += this.toNumber(item.quantity * item.price);
    }

    return total;

}

//get the total amunt of all items currently in the basket
basket.prototype.getTotalAmount = function(sku) {

    var count = 0;

    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        count += this.toNumber(item.quantity);
    }

    return count;
}

//clear the cart
basket.prototype.clearItems = function() {
    this.items = [];
    this.saveItems();
}



/**
    utility methods
**/
basket.prototype.toNumber = function(value) {
    value = value * 1;
    return isNaN(value) ? 0 : value;
}


/**
    items in the cart
**/
function basketItem(id, item, price, image, quantity) {
    this.id = id;
    this.name = item;
    this.price = price * 1;
    this.image = image;
    this.quantity = quantity * 1;
}