# Form Validator

[![Build Status](https://travis-ci.org/pbakondy/form-validator.svg?branch=master)](https://travis-ci.org/pbakondy/form-validator)

Form validator written in native JavaScript.

Tested on Chrome, FF, IE9+, Android and iOS.

## Usage

Bind <code>validator</code> CSS class to the <code>&lt;form&gt;</code> element to validate.

### Usable validator tags on input elements

- <code>v-length</code> Exact length of value
- <code>v-min</code> Minimal length of value
- <code>v-max</code> Minimal length of value
- <code>v-type</code> Type validation [ <code>email</code>, <code>url</code>, <code>alpha</code> ( = english letters ), <code>numeric</code> ( = numbers ), <code>alphanumeric</code> ( = english letters and numbers combined ) ]
- <code>v-check-taken</code> Check if the written value (email or username) has already been taken.
- <code>v-formula</code> Insert simple math formula to filter robots (do not mix with other validators). You have to place an empty element with <code>formula</code> class to place the formula itself.

You can apply multiple validator tags on the same element ( see <code>example/index.html</code> for a working code ).

## Prepare to develop

Install packages

```
npm install -g gulp karma-cli
npm install
```

Validate JavaScript

```
gulp lint
```

Create new build to <code>dist</code>

```
gulp build
```


## Compatibility

For IE9 you have to use a Polyfill for classList. The most easier solution including [classList.js](https://github.com/eligrey/classList.js) from a CDN.

```html
<!--[if lt IE 10]>
  <script src="//cdnjs.cloudflare.com/ajax/libs/classlist/2014.01.31/classList.min.js"></script>
<![endif]-->
```

## Testing

Used frameworks: Karma, Jasmine, Travis CI.

Run tests:

```
gulp test
```


## Online Demo

http://bakondypeter.hu/form-validator/

## License

form-validator is licensed under the MIT Open Source license. For more information, see the LICENSE file in this repository.
