import React, {Component} from 'react';

let database = {
  categories:  [],
  answers: [],
  questions: [],
  answerExpressions: [],
  expressionExpressions: [],
  expressions: [],
  benefits: [],
  recommendations: [],
};

const DatabaseContext = React.createContext({
  database: database,
  setDatabase: () => {},
  user: {},
  setUser: () => {},
  save: async () => {},
  retrieve: async () => {},
  clear: async () => {},
});



export {DatabaseContext};
