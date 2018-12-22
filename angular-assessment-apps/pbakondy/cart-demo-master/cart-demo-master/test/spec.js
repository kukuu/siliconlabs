describe('Cart Demo App', function() {

  var items = element.all(by.repeater('item in cart'));

  var item1 = items.get(0);
  var item1category = item1.element(by.css('.category'));
  var item1subcat= item1.element(by.css('.subcat'));
  var item1name = item1.element(by.css('.name'));
  var item1price = item1.element(by.css('.price'));
  var item1quantity = item1.element(by.css('.quantity'));
  var item1total = item1.element(by.css('.total'));
  var item1button = item1.element(by.css('.btn-remove'));

  var item2 = items.get(1);
  var item2button = item2.element(by.css('.btn-remove'));

  var item3 = items.get(2);
  var item3button = item3.element(by.css('.btn-remove'));

  var item4 = items.get(3);
  var item4button = item4.element(by.css('.btn-remove'));

  var item5 = items.get(4);
  var item5button = item5.element(by.css('.btn-remove'));

  var totalPieces = element(by.css('.item-total'));
  var totalPrice = element(by.css('.price-total'));


  beforeEach(function() {
    browser.get('http://localhost:8080/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Your Shopping Cart');
  });

  it('should render initial data set', function() {
    // check cart item number
    expect(items.count()).toBe(5);

    // check first cart item values
    expect(item1category.getText()).toBe('Women');
    expect(item1subcat.getText()).toBe('Clothing');
    expect(item1name.getText()).toBe('Party wear - Front Leather Panelled Ponte Treggings');
    expect(item1price.getText()).toBe('Unit price: £159.00');
    expect(item1quantity.getAttribute('value')).toBe('6');
    expect(item1quantity.getAttribute('type')).toBe('number');
    expect(item1total.getText()).toBe('Total price: £954.00');

    // TODO check other cart items

    // check total values
    expect(totalPieces.getText())
      .toMatch('22 pieces');
    expect(totalPieces.getText())
      .toBe('Total Quantity: 22 pieces');
    expect(totalPrice.getText())
      .toMatch('£1,799.00');
    expect(totalPrice.getText())
      .toBe('Total Price: £1,799.00');
  });

  it('should modify quantity', function() {

    item1quantity.sendKeys(protractor.Key.BACK_SPACE);
    item1quantity.sendKeys('5');

    // was 6, now 5
    expect(item1quantity.getAttribute('value')).toBe('5');

    // check totals
    expect(totalPieces.getText())
      .toMatch('21 pieces');
    expect(totalPrice.getText())
      .toMatch('£1,640.00');
  });

  it('should remove item', function() {

    item1button.click();

    // check cart item number
    expect(items.count()).toBe(4);

    // check totals
    expect(totalPieces.getText())
      .toMatch('16 pieces');
    expect(totalPrice.getText())
      .toMatch('£845.00');
  });

  it('should empty cart', function() {

    // delete all items
    item5button.click();
    item4button.click();
    item3button.click();
    item2button.click();
    item1button.click();

    // check cart item number
    expect(items.count()).toBe(0);

    // check totals
    expect(totalPieces.getText())
      .toMatch('0 piece');
    expect(totalPrice.getText())
      .toMatch('£0.00');
  });

});
