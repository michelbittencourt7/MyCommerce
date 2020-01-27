/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import main from './src/pages/main';
import App from './src/pages/index.js';

AppRegistry.registerComponent(appName, () => App);
