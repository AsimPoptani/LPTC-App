/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import {StatusBar} from 'react-native';
// So we can ise react native elements
import {SafeAreaProvider} from 'react-native-safe-area-context';
// Our theme
import {ThemeProvider} from 'react-native-elements';
import Theme from './Theme';
// Our Navigation
import Navigation from './Navigation';
const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <SafeAreaProvider>
        <ThemeProvider theme={Theme}>

            <Navigation />
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
