(function(global){
  'use strict';

  // TODO extend to get these lists from a web service
  var registeredUsernames = [
    'a', 'aa', 'aaa', 'asd', 'asdf'
  ];
  var registeredEmails = [
    'a@example.com', 'aa@example.com', 'aaa@example.com', 'asd@example.com', 'asdf@example.com'
  ];

  function toStr(val) {
    return Object.prototype.toString.call(val);
  }

/**
 * Initialize validator on form
 *
 * @param <Node> form
 */
function Validator(form) {
  if (!form || form.nodeType !== 1 || form.nodeName !== 'FORM') {
    throw new TypeError('Apply Validator() only on form element.');
  }

  this.form = form;
  this.validators = [];

  form.classList.add('v-bound');

  this.warningClass = 'warning';

  this.registeredUsernames = registeredUsernames;
  this.registeredEmails = registeredEmails;

  this.readInputs();

  this.bindSubmitValidator();
}


Validator.showRegisteredUsernames = function() {
  return registeredUsernames;
};


Validator.showRegisteredEmails = function() {
  return registeredEmails;
};


Validator.prototype.readInputs = function() {
//  console.debug('readInputs()');

  // HTML Attribute names
  var V_LENGTH_ATTR = 'v-length';
  var V_MIN_ATTR = 'v-min';
  var V_MAX_ATTR = 'v-max';
  var V_TYPE_ATTR = 'v-type';
  var V_CHECK_TAKEN_ATTR = 'v-check-taken';
  var V_FORMULA_ATTR = 'v-formula';

  var inputList = this.form.querySelectorAll('input');
  var input, vLength, vMin, vMax, vType, vCheckTaken, vFormula;


  for (var i = 0; i < inputList.length; i++) {
    input = inputList[i];

    vLength = input.getAttribute(V_LENGTH_ATTR);
    if (vLength !== null) {
      this.setLengthValidator(input, vLength);
    }

    vMin = input.getAttribute(V_MIN_ATTR);
    if (vMin !== null) {
      this.setMinValidator(input, vMin);
    }

    vMax = input.getAttribute(V_MAX_ATTR);
    if (vMax !== null) {
      this.setMaxValidator(input, vMax);
    }

    vType = input.getAttribute(V_TYPE_ATTR);
    if (vType !== null) {
      this.setTypeValidator(input, vType);
    }

    vCheckTaken = input.getAttribute(V_CHECK_TAKEN_ATTR);
    if (vCheckTaken !== null) {
      this.setCheckTakenValidator(input, vCheckTaken);
    }

    vFormula = input.getAttribute(V_FORMULA_ATTR);
    if (vFormula !== null) {
      this.setFormulaValidator(input);
    }

  }

};


Validator.prototype.submitValidator = function() {
//  console.debug('submitValidator()');

  var valid = true;
  for (var i = 0; i < this.validators.length; i++) {
    if (this.validators[i].validator(this.validators[i].elem) === false) {
      valid = false;
    }
  }
  if (valid) {
    this.form.submit();
  }
};


Validator.prototype.bindSubmitValidator = function() {
//  console.debug('bindSubmitValidator()');

  if (!this.validators.length) {
    return;
  }

  this.form.addEventListener('submit', (function(e) {
    e.preventDefault();
    this.submitValidator.call(this);
  }).bind(this), false);
};


/**
 * @param <Node> input
 * @param <String> type - warning type (length, min, max, etc)
 * @param <String> text - warning text
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
 */
Validator.prototype.attachWarning = function(input, type, text) {
//  console.debug('attachWarning()', input, type, text);

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  input.classList.add('invalid');

  var warnWrapper = input.nextSibling;

  if (!warnWrapper || warnWrapper.nodeType !== 1 || warnWrapper.nodeName !== 'UL') {
    input.insertAdjacentHTML('afterend', '<ul class="' + this.warningClass + '"></ul>');
    warnWrapper = input.nextSibling;
  }

  var warnItem = warnWrapper.querySelectorAll('li.' + type);
  if (warnItem.length === 0) {
    warnWrapper.insertAdjacentHTML('beforeend', '<li class="' + type + '">' + text + '</li>');
  }
};


/**
 * @param <Node> input
 * @param <String> type - warning type (length, min, max, etc)
 */
Validator.prototype.removeWarning = function(input, type) {
//  console.debug('removeWarning()', input, type);

  var warnWrapper = input.nextSibling;

  if (!warnWrapper || warnWrapper.nodeType !== 1 || warnWrapper.nodeName !== 'UL') {
    return;
  }

  // remove 'warnItem'
  var warnItem = warnWrapper.querySelectorAll('li.' + type);
  if (warnItem.length > 0) {
    warnWrapper.removeChild(warnItem[0]);
  }

  // remove 'warnWrapper' when empty
  var warnItems = warnWrapper.querySelectorAll('li');
  if (warnItems.length === 0) {
    input.parentNode.removeChild(warnWrapper);
    input.classList.remove('invalid');
  }
};


// Validator methods

/**
 * @param <Number> length
 * @param <Event> event
 * @return <Boolean> valid
 */
Validator.prototype.checkLength = function(length, event) {
//  console.debug('checkLength()', length);

  var input;
  if (toStr(event) === '[object HTMLInputElement]') {
    input = event;
  } else {
    // [object FocusEvent] [object KeyboardEvent]
    input = event.target || event.srcElement;
  }

  var WARNING = 'Length must be ' + length + ' characters';

  var valid = (typeof input.value === 'string' && input.value.length === length);

  if (!valid) {
    this.attachWarning(input, 'length', WARNING);
  } else {
    this.removeWarning(input, 'length');
  }

  return valid;
};

/**
 * @param <Number> min
 * @param <Event> event
 * @return <Boolean> valid
 */
Validator.prototype.checkMin = function(min, event) {
//  console.debug('checkMin()', min);

  var input;
  if (toStr(event) === '[object HTMLInputElement]') {
    input = event;
  } else {
    // [object FocusEvent] [object KeyboardEvent]
    input = event.target || event.srcElement;
  }

  var WARNING = 'Length must be minimum ' + min + ' characters';

  var valid = (typeof input.value === 'string' && input.value.length >= min);

  if (!valid) {
    this.attachWarning(input, 'min', WARNING);
  } else {
    this.removeWarning(input, 'min');
  }

  return valid;
};

/**
 * @param <Number> max
 * @param <Event> event
 * @return <Boolean> valid
 */
Validator.prototype.checkMax = function(max, event) {
//  console.debug('checkMax()', max);

  var input;
  if (toStr(event) === '[object HTMLInputElement]') {
    input = event;
  } else {
    // [object FocusEvent] [object KeyboardEvent]
    input = event.target || event.srcElement;
  }

  var WARNING = 'Length must be maximum ' + max + ' characters';

  var valid = (typeof input.value === 'string' && input.value.length <= max);

  if (!valid) {
    this.attachWarning(input, 'max', WARNING);
  } else {
    this.removeWarning(input, 'max');
  }

  return valid;
};

/**
 * @param <String> type
 * @param <Event> event
 * @return <Boolean> valid
 */
Validator.prototype.checkType = function(type, event) {
//  console.debug('checkType()', type);

  var input;
  if (toStr(event) === '[object HTMLInputElement]') {
    input = event;
  } else {
    // [object FocusEvent] [object KeyboardEvent]
    input = event.target || event.srcElement;
  }

  var warningMessage, valid, re;

  if (type === 'email') {
    warningMessage = 'This field must be a valid email address';
    // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  }

  if (type === 'url') {
    warningMessage = 'This field must be a valid URL';

    // https://mathiasbynens.be/demo/url-regex
    // https://gist.github.com/imme-emosol/728973
    // @stephenhay
    re = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  }

  if (type === 'numeric') {
    warningMessage = 'This field can contain numeric characters only';
    re = /^[0-9]*$/i;
  }

  if (type === 'alpha') {
    warningMessage = 'This field can contain letter characters only';
    re = /^[a-zA-Z]*$/i;
  }

  if (type === 'alphanumeric') {
    warningMessage = 'This field can contain numeric and letter characters only';
    re = /^[0-9a-zA-Z]*$/i;
  }

  valid = re.test(input.value);

  if (!valid) {
    this.attachWarning(input, 'type', warningMessage);
  } else {
    this.removeWarning(input, 'type');
  }

  return valid;
};

/**
 * @param <String> field
 * @param <Event> event
 * @return <Boolean> valid
 */
Validator.prototype.checkTaken = function(field, event) {
//  console.debug('checkTaken()', field, event);

  var input;
  if (toStr(event) === '[object HTMLInputElement]') {
    input = event;
  } else {
    // [object FocusEvent] [object KeyboardEvent]
    input = event.target || event.srcElement;
  }

  var WARNING = 'This value is already taken, choose another one';

  var valid;

  if (field === 'username') {
    valid = (this.registeredUsernames.indexOf(input.value) === -1);
  }

  if (field === 'email') {
    valid = (this.registeredEmails.indexOf(input.value) === -1);
  }

  if (!valid) {
    this.attachWarning(input, 'taken', WARNING);
  } else {
    this.removeWarning(input, 'taken');
  }

  return valid;
};

/**
 * @param <Event> event
 * @return <Boolean> valid
 */
Validator.prototype.checkFormula = function(event) {
//  console.debug('checkFormula()', field, event);

  var input;
  if (toStr(event) === '[object HTMLInputElement]') {
    input = event;
  } else {
    // [object FocusEvent] [object KeyboardEvent]
    input = event.target || event.srcElement;
  }

  var WARNING = 'Invalid result';

  var res = input.getAttribute('data-fres');

  var valid = (input.value === res);

  if (!valid) {
    this.attachWarning(input, 'taken', WARNING);
  } else {
    this.removeWarning(input, 'taken');
  }

  return valid;
};



// Bind validators to input fields
Validator.prototype.setLengthValidator = function(input, length) {
//  console.debug('setLengthValidator()', input, length);

  length = parseInt(length, 10);
  if (isNaN(length)) {
    return;
  }

  var validator = this.checkLength.bind(this, length);
  this.validators.push({ validator: validator, elem: input });
  input.addEventListener('keyup', validator);
  input.addEventListener('focus', validator);
  input.addEventListener('blur', validator);
};

Validator.prototype.setMinValidator = function(input, min) {
//  console.debug('setMinValidator()', input, min);

  min = parseInt(min, 10);
  if (isNaN(min)) {
    return;
  }

  var validator = this.checkMin.bind(this, min);
  this.validators.push({ validator: validator, elem: input });
  input.addEventListener('keyup', validator);
  input.addEventListener('focus', validator);
  input.addEventListener('blur', validator);
};

Validator.prototype.setMaxValidator = function(input, max) {
//  console.debug('setMaxValidator()', input, max);

  max = parseInt(max, 10);
  if (isNaN(max)) {
    return;
  }

  var validator = this.checkMax.bind(this, max);
  this.validators.push({ validator: validator, elem: input });
  input.addEventListener('keyup', validator);
  input.addEventListener('focus', validator);
  input.addEventListener('blur', validator);
};

Validator.prototype.setTypeValidator = function(input, type) {
//  console.debug('setTypeValidator()', input, type);

  type = String(type);

  var validator = this.checkType.bind(this, type);
  this.validators.push({ validator: validator, elem: input });
  input.addEventListener('keyup', validator);
  input.addEventListener('focus', validator);
  input.addEventListener('blur', validator);
};

Validator.prototype.setCheckTakenValidator = function(input, field) {
//  console.debug('setCheckTakenValidator()', input, field);

  field = String(field);

  var validator = this.checkTaken.bind(this, field);
  this.validators.push({ validator: validator, elem: input });
  input.addEventListener('keyup', validator);
  input.addEventListener('focus', validator);
  input.addEventListener('blur', validator);
};

Validator.prototype.setFormulaValidator = function(input) {
//  console.debug('setFormulaValidator()', input);

  var formula, formulaResult, a, b;

  // random number between 10 and 99
  a = Math.floor(Math.random() * 89) + 10;
  // a + b < 100
  b = Math.floor(Math.random() * (89 - a - 10)) + 10;

  formula = String(a) + ' + ' + String(b) + ' =';
  formulaResult = a + b;

  input.setAttribute('data-fres', formulaResult);
  var label = input.parentNode.querySelector('.formula');
  if (label !== null) {
    label.innerHTML = formula;
  }

  var validator = this.checkFormula.bind(this);
  this.validators.push({ validator: validator, elem: input });
  input.addEventListener('keyup', validator);
  input.addEventListener('focus', validator);
  input.addEventListener('blur', validator);
};


/**
 * Find forms with validator class to apply validator
 */
function domReady() {
  var formList = document.querySelectorAll('form.validator');
  var validators = [];

  for (var i = 0; i < formList.length; i++) {
    validators.push(new Validator(formList[i]));
  }
}

document.addEventListener('DOMContentLoaded', function() {
  domReady();
}, false);

  global.Validator = Validator;

})(this);
