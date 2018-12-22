describe('Validator', function() {
  'use strict';

  var Validator = window.Validator;

  it('should be defined', function() {
    expect(Validator).toBeDefined();
  });

  it('attach to a form', function() {

    var html = '<form class="validator">' +
      '<input name="field1" type="text" v-length="3">' +
      '<button type="submit" class="btn">Submit</button>' +
      '</form>';

    document.querySelector('body').insertAdjacentHTML('beforeend', html);

    var form = document.querySelector('.validator');
    var input = form.querySelector('input');

    new Validator(form);

    expect(form.classList.contains('v-bound')).toBe(true);

    document.querySelector('body').removeChild(form);

  });

  it('test v-length', function() {

    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var e = new Event('keyup');
    // http://www.javascripter.net/faq/keycodes.htm
    e.keyCode = 16;

    var html = '<form class="validator">' +
      '<input name="field1" type="text" v-length="3">' +
      '<button type="submit" class="btn">Submit</button>' +
      '</form>';

    document.querySelector('body').insertAdjacentHTML('beforeend', html);

    var form = document.querySelector('.validator');
    var input = form.querySelector('input');

    new Validator(form);

    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(true);

    input.value = '123';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

  //    expect(form.outerHTML).toBe('');

    document.querySelector('body').removeChild(form);

  });



  it('test v-min', function() {

    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var e = new Event('keyup');
    // http://www.javascripter.net/faq/keycodes.htm
    e.keyCode = 16;

    var html = '<form class="validator">' +
      '<input name="field1" type="text" v-min="3">' +
      '<button type="submit" class="btn">Submit</button>' +
      '</form>';

    document.querySelector('body').insertAdjacentHTML('beforeend', html);

    var form = document.querySelector('.validator');
    var input = form.querySelector('input');

    new Validator(form);

    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(true);

    input.value = '12';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(true);

    input.value = '123';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

    input.value = '1234';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

  //    expect(form.outerHTML).toBe('');

    document.querySelector('body').removeChild(form);

  });




  it('test v-max', function() {

    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var e = new Event('keyup');
    // http://www.javascripter.net/faq/keycodes.htm
    e.keyCode = 16;

    var html = '<form class="validator">' +
      '<input name="field1" type="text" v-max="3">' +
      '<button type="submit" class="btn">Submit</button>' +
      '</form>';

    document.querySelector('body').insertAdjacentHTML('beforeend', html);

    var form = document.querySelector('.validator');
    var input = form.querySelector('input');

    new Validator(form);

    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

    input.value = '12';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

    input.value = '123';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

    input.value = '1234';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(true);

  //    expect(form.outerHTML).toBe('');

    document.querySelector('body').removeChild(form);

  });


  it('test v-type email', function() {

    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var e = new Event('keyup');
    // http://www.javascripter.net/faq/keycodes.htm
    e.keyCode = 16;

    var html = '<form class="validator">' +
      '<input name="field1" type="text" v-type="email">' +
      '<button type="submit" class="btn">Submit</button>' +
      '</form>';

    document.querySelector('body').insertAdjacentHTML('beforeend', html);

    var form = document.querySelector('.validator');
    var input = form.querySelector('input');

    new Validator(form);

    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(true);

    input.value = '12';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(true);

    input.value = '123@gmail';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(true);

    input.value = '1234@gmail.com';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

  //    expect(form.outerHTML).toBe('');

    document.querySelector('body').removeChild(form);

  });


  it('test v-type numeric', function() {

    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var e = new Event('keyup');
    // http://www.javascripter.net/faq/keycodes.htm
    e.keyCode = 16;

    var html = '<form class="validator">' +
      '<input name="field1" type="text" v-type="numeric">' +
      '<button type="submit" class="btn">Submit</button>' +
      '</form>';

    document.querySelector('body').insertAdjacentHTML('beforeend', html);

    var form = document.querySelector('.validator');
    var input = form.querySelector('input');

    new Validator(form);

    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

    input.value = '12';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

    input.value = '123gmail';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(true);

  //    expect(form.outerHTML).toBe('');

    document.querySelector('body').removeChild(form);

  });


  it('test v-check-taken', function() {

    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var e = new Event('keyup');
    // http://www.javascripter.net/faq/keycodes.htm
    e.keyCode = 16;

    var uname = Validator.showRegisteredUsernames()[0];

    var html = '<form class="validator">' +
      '<input name="field1" type="text" v-check-taken="username">' +
      '<button type="submit" class="btn">Submit</button>' +
      '</form>';

    document.querySelector('body').insertAdjacentHTML('beforeend', html);

    var form = document.querySelector('.validator');
    var input = form.querySelector('input');

    new Validator(form);

    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

    input.value = uname;
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(true);

    input.value = 'asdrgvsrgvascgase';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

  //    expect(form.outerHTML).toBe('');

    document.querySelector('body').removeChild(form);

  });



  it('test v-formula', function() {

    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var e = new Event('keyup');
    // http://www.javascripter.net/faq/keycodes.htm
    e.keyCode = 16;

    var uname = Validator.showRegisteredUsernames()[0];

    var html = '<form class="validator">' +
      '<span class="formula"></span>' +
      '<input name="field1" type="text" v-formula>' +
      '<button type="submit" class="btn">Submit</button>' +
      '</form>';

    document.querySelector('body').insertAdjacentHTML('beforeend', html);

    var form = document.querySelector('.validator');
    var input = form.querySelector('input');

    new Validator(form);

    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(true);

    input.value = '1000';
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(true);

    var res = input.getAttribute('data-fres');

    input.value = res;
    input.dispatchEvent(e);

    expect(input.classList.contains('invalid')).toBe(false);

//    expect(form.outerHTML).toBe('');

    document.querySelector('body').removeChild(form);

  });


});
