import React from 'react';
import { YellowBox } from 'react-native';
import { registerRootComponent } from 'expo';

import Map from './components/Map';

YellowBox.ignoreWarnings(['Warning', 'Expected']);

const App = () => <Map />;

registerRootComponent(App);
