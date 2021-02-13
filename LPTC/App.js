/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import { StatusBar } from 'react-native';
// So we can ise react native elements
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Our theme
import { ThemeProvider } from 'react-native-elements';
import Theme from './Theme';
import { DatabaseContext } from './Database';
import Bootstrap from './Bootstrap';
// Our Navigation
import Navigation from './Navigation';
import MMKVStorage from "react-native-mmkv-storage";

const App: () => React$Node = () => {
  const [database, setDatabase] = useState(Bootstrap())
  const [user, setUser] = useState()
  const [settings, setSettings] = useState({
    
  })
  const storage = new MMKVStorage.Loader().withEncryption().initialize("storage");

  async function save() {
    await storage.clearStore();
    // Save data
    await storage.setMapAsync("database", database);
    await storage.setMapAsync("user", user);
  }
  // Retrieve data
  async function retrieve() {
    setDatabase(await storage.getMapAsync("database"));
    setUser(await storage.getMapAsync("user"));
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
              retrieve: retrieve
            }}>
            <Navigation />
          </DatabaseContext.Provider>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
