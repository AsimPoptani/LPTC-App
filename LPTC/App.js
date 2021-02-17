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
import { DatabaseContext } from './DatabaseContext';
import Bootstrap from './Bootstrap';
// Our Navigation
import Navigation from './Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage'
const App: () => React$Node = () => {
  const [database, setDatabase] = useState(Bootstrap());
  const [user, setUser] = useState();

  const DATABASE_TOKEN = "@LPTC_database"
  const USER_TOKEN = "@LPTC_user"

  // Save data
  async function save() {
    try {
      let data = [
        [DATABASE_TOKEN, parseToJson(database)],
        [USER_TOKEN, parseToJson(user)]
      ]
      await AsyncStorage.multiSet(data)
    } catch (e) {
      alert("cannot save " + e)
    }

  }
  const parseJson = (json) => {
    return json != null ? JSON.parse(json) : null;
  }
  const parseToJson = (object) => {
    return JSON.stringify(object)
  }
  // Retrieve data
  async function retrieve() {
    try {
      let values = await AsyncStorage.multiGet([DATABASE_TOKEN, USER_TOKEN])
      setDatabase(parseJson(values[DATABASE_TOKEN]));
      setUser(parseJson(values[USER_TOKEN]));

    }
    catch (e) {
      //todo navigate to error screen
      alert("Error in retrieving " + e)
    }
  }
  // clear the store
  async function clear() {
    try {
      let keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
    }
    catch (e) {
      //todo navigate to error screen
      alert("Error in clearing keys " + e)
    }
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
            }}>
            <Navigation />
          </DatabaseContext.Provider>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
