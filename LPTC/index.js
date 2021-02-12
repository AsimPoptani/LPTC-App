/**
 * @format
 */
//React native navigation
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

// Used for randomness
import 'react-native-get-random-values';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
