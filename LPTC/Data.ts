import AsyncStorage from '@react-native-async-storage/async-storage';
import { createHook, createStore } from 'react-sweet-state'
let database = {
  categories: [],
  answers: [],
  questions: [],
  answerExpressions: [],
  expressionExpressions: [],
  expressions: [],
  benefits: [],
  recommendations: [],
};
const DATABASE_TOKEN = '@LPTC_database';
const USER_TOKEN = '@LPTC_user';

const parseJson = (json) => {
  return json != null ? JSON.parse(json) : null;
};
const parseToJson = (object) => {
  return JSON.stringify(object);
};
// initial state
const initialState = {
  database: {},
  user: {},
  loading: false,
  error: false,
  errors: []
}

const actions = {
  retrieve: () => async ({ setState, getState }) => {
    if (getState().loading === true) return;
    setState({
      loading: true
    })
    try {
      let databaseToken = await AsyncStorage.getItem(DATABASE_TOKEN);
      let userToken = await AsyncStorage.getItem(USER_TOKEN);
      setState({
        database: parseJson(databaseToken),
        user: parseJson(userToken),
        loading: false
      })
    } catch (e) {
      setState({
        error: true,
        errors: getState().errors.push(e)
      })
    }


  },
  save: () => async ({ setState, getState }) => {
    try {
      let data = [
        [DATABASE_TOKEN, parseToJson(getState().database)],
        [USER_TOKEN, parseToJson(getState().user)],
      ];
      await AsyncStorage.multiSet(data);
    } catch (e) {
      setState({
        error: true,
        errors: getState().errors.push(e)
      })
    }
  },
  resetErrors: () => ({ setState, getState }) => {
    setState({
      error: false,
      errors: []
    })
  },
  clear: () => async ({ setState, getState }) => {
    try {
      let keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      setState({
        user: {},
        database: {}
      })
    } catch (e) {
      setState({
        error: true,
        errors: getState().errors.push(e)
      })
    }
  },
  setUser: (newUserData) => ({ setState, getState }) => {
    setState({
      user: newUserData
    })
  },
  setDatabase: (newDatabaseData) => ({ setState, getState }) => {
    setState({
      database: newDatabaseData
    })
  }
}

const store = createStore({ initialState, actions, name: 'data' })
export const useData = createHook(store)