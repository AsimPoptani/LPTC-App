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
import {DatabaseContext} from './DatabaseContext';
import Bootstrap from './Bootstrap';
// Our Navigation
import Navigation from './Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalState from './GlobalState';
const App: () => React$Node = () => {
  let [database, setDatabase] = useState({});
  let [user, setUser] = useState({});
  let [loading, setLoading] = useState(false);
  // let user = {};
  // let setUser = (user) => {
  //   user = user;
  // };
  // let database = {};

  const DATABASE_TOKEN = '@LPTC_database';
  const USER_TOKEN = '@LPTC_user';

  // Save data
  async function save() {
    try {
      let data = [
        [DATABASE_TOKEN, parseToJson(database)],
        [USER_TOKEN, parseToJson(user)],
      ];
      console.error(data);
      await AsyncStorage.multiSet(data);
    } catch (e) {
      alert('cannot save ' + e);
    }
  }
  const parseJson = (json) => {
    return json != null ? JSON.parse(json) : null;
  };
  const parseToJson = (object) => {
    return JSON.stringify(object);
  };

  // Retrieve data
  const retrieve = useCallback(async () => {
    try {
      let databaseToken = await AsyncStorage.getItem(DATABASE_TOKEN);
      let userToken = await AsyncStorage.getItem(USER_TOKEN);
      setDatabase(parseJson(databaseToken));
      setUser(parseJson(userToken));
    } catch (e) {
      //todo navigate to error screen
      alert('Error in retrieving ' + e);
    }
  }, [setDatabase,setUser]);
  // clear the store
  async function clear() {
    try {
      let keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      database = {};
      user = {};
    } catch (e) {
      //todo navigate to error screen
      alert('Error in clearing keys ' + e);
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
              loading: loading,
            }}>
            {/* <GlobalState> */}
            <Navigation />
            {/* </GlobalState> */}
          </DatabaseContext.Provider>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
