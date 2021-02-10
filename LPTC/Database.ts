import React,{ Component } from 'react'

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


const DatabaseContext = React.createContext({
    database:database,
    modifyDatabase: database => {}
})


export {DatabaseContext}