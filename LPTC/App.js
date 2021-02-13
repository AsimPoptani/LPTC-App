/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {StatusBar} from 'react-native';
// So we can ise react native elements
import {SafeAreaProvider} from 'react-native-safe-area-context';
// Our theme
import {ThemeProvider} from 'react-native-elements';
import Theme from './Theme';
import {DatabaseContext} from './DatabaseContext';
import Bootstrap from './Bootstrap';
// Our Navigation
import Navigation from './Navigation';
import MMKVStorage from 'react-native-mmkv-storage';

const App: () => React$Node = () => {
  const [database, setDatabase] = useState(Bootstrap());
  const [user, setUser] = useState();
  const [settings, setSettings] = useState({});
  const storage = new MMKVStorage.Loader().initialize('st2');

  async function save() {
    await storage.clearStore();
    // Save data
    await storage.setMapAsync('database', database);
    await storage.setMapAsync('user', user);
    await storage.setMapAsync('settings', settings);
  }
  // Retrieve data
  async function retrieve() {
    let database = await storage.getMapAsync('database');
    let user = await storage.getMapAsync('user');
    let settings = await storage.getMapAsync('settings');
    console.log('databack' + database);
    setDatabase(database);
    setUser(user);
    setSettings(settings);
  }
  // clear the store
  async function clear() {
    await storage.clearStore();
  }
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <SafeAreaProvider>
        <ThemeProvider theme={Theme}>
          <DatabaseContext.Provider
            value={{
              database: database,
              setDatabase: setDatabase,
              user: user,
              setUser: setUser,
              save: save,
              retrieve: retrieve,
              clear: clear,
              settings: settings,
              setSettings: setSettings,
            }}>
            <Navigation />
          </DatabaseContext.Provider>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
