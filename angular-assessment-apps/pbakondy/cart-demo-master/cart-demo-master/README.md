# Simple Cart Demo

- SPA with Angular.js
- Protractor for testing

Tested on Chrome, FF, IE9+, Android and iOS.

## Commands

Install developer dependencies

```
npm install
```

Compile SASS files to CSS

```
gulp sass
```

JavaScript syntax check ( with [ESLint](http://eslint.org/) )

```
gulp lint
```

Start a mini webserver for the application, open in browser

```
gulp connect
-> open http://localhost:8080/
```

Create a build package to directory <code>dist</code> with concatenated and minified assets

```
gulp build
```

## Testing

Install [Protractor](http://angular.github.io/protractor/) and [Selenium](http://www.seleniumhq.org/)

```
npm install -g protractor
webdriver-manager update
```

Run test items

```
webdriver-manager start
gulp connect
protractor test/conf.js
```


## Online Demo

http://bakondypeter.hu/cart/

## License

cart-demo is licensed under the MIT Open Source license. For more information, see the LICENSE file in this repository.
