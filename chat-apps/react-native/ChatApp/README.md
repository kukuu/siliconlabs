# ChatApp

This React Native App symbolises how the  the same codebase is shared between Android and iOS. Both share the parent App component via index.android.js and index.ios.js. Both index files have the same content, and import the AppRegistry class. This class grants access to registerComponent i.e AppRegistry.registerComponent(). This component takes 2 arguments, the name of the app and a callback function to the parent App (App.js).

App.js is the root component and routes the sub components Home and Chat via Router and Scene.

package.json

```
{
  "name": "ChatApp",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest"
  },
  "dependencies": {
    "firebase": "^3.4.1",
    "react": "15.3.2",
    "react-native": "0.35.0",
    "react-native-gifted-chat": "0.0.10",
    "react-native-router-flux": "^3.36.0"
  },
  "jest": {
    "preset": "jest-react-native"
  },
  "devDependencies": {
    "babel-eslint": "^7.0.0",
    "babel-jest": "16.0.0",
    "babel-preset-react-native": "1.9.0",
    "eslint": "^3.7.1",
    "eslint-plugin-react": "^6.4.1",
    "eslint-plugin-react-native": "^2.0.0",
    "jest": "16.0.1",
    "jest-react-native": "16.0.0",
    "react-test-renderer": "15.3.2"
  }
  ```

