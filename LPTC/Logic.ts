import {AnswerExpression} from './models/AnswerExpression';
import {Benefit} from './models/Benefit';
import {Expression} from './models/Expression';
import {ExpressionExpression} from './models/ExpressionExpression';
import {Question} from './models/Question';
import {Recommendation} from './models/Recommendation';
import {Answer} from './models/Answer';
import {SubCategory} from './models/SubCategory';
import {Category} from './models/Category';

interface Dictionary<T> {
  [key: string]: T;
}
function findAllUnansweredQuestions(
  database: Dictionary<any>,
): Array<Question> {
  let questions: Array<Question> = database.questions;

  return questions.filter((question) => question.answered);
}

function findCategoryById(
  database: Dictionary<any>,
  categoryId: String,
): Category {
  let categories: Array<Category> = database.categories;
  return categories.find((category) => category.id == categoryId);
}

function findAllSubCategoriesByCategoryId(
  database: Dictionary<any>,
  categoryId: String,
): Array<SubCategory> {
  let subCategories: Array<SubCategory> = database.subCategories;
  return subCategories.filter(
    (subCategory) => subCategory.categoryId == categoryId,
  );
}

function expressionCheck(
  database: Dictionary<any>,
  item: Question | Recommendation | Benefit | Expression,
): boolean {
  let expressions: Array<Expression> = database.expressions;
  let expression: Expression;
  if (item instanceof Expression) {
    if (item == null) {
      return true;
    }
    expression = item;
  } else {
    // This is for checking Question Recommendation and Benefit
    // First check if item has got an Expression if it doesn't return true
    if (item.expressionId == null) {
      return true;
    }
    // Lets find the expression

    expression = expressions.find(
      (expression) => expression.id == item.expressionId,
    );
  }

  // Lets check if there are any expressionExpressions and answerQuestion
  let expressionExpressions: Array<ExpressionExpression> =
    database.expressionExpressions;
  let answerExpressions: Array<AnswerExpression> = database.answerExpressions;
  let answers: Array<Answer> = database.answers;

  expressionExpressions = expressionExpressions.filter(
    (expressionExpression) =>
      expressionExpression.expressionId1 == expression.id ||
      expressionExpression.expressionId2 == expression.id,
  );
  answerExpressions = answerExpressions.filter(
    (answerExpression) => answerExpression.expressionId == expression.id,
  );

  // if this is an and then everything must be true
  if (expression.isAnd) {
    // Deal with expressionExpressions first
    for (let expressionExpression of expressionExpressions) {
      // Check the expression which is not
      let expressionNot: Expression;
      if (expressionExpression.expressionId1 == expression.id) {
        expressionNot = expressions.find(
          (exp) => exp.id == expressionExpression.expressionId2,
        );
      } else {
        expressionNot = expressions.find(
          (exp) => exp.id == expressionExpression.expressionId1,
        );
      }
      if (!expressionCheck(database, expressionNot)) {
        return false;
      }
    }
    // Deal with answerExpression
    for (let answerExpression of answerExpressions) {
      let answer = answers.find(
        (answer) => answerExpression.answerId == answer.id,
      );
      if (!answer.state) {
        return false;
      }
    }
    return true;
  } else {
    // Otherwise we just need one thing to be true
    // Lets start with answerException
    for (let answerExpression of answerExpressions) {
      // find answer
      let answer = answers.find(
        (answer) => answerExpression.answerId == answer.id,
      );
      if (answer.state) {
        return true;
      }
    }
    for (let expressionExpression of expressionExpressions) {
      // Check the expression which is not
      let expressionNot: Expression;
      if (expressionExpression.expressionId1 == expression.id) {
        expressionNot = expressions.find(
          (exp) => exp.id == expressionExpression.expressionId2,
        );
      } else {
        expressionNot = expressions.find(
          (exp) => exp.id == expressionExpression.expressionId1,
        );
      }
      if (expressionCheck(database, expressionNot)) {
        return true;
      }
    }

    return false;
  }
}

// All questions which have the Expressions Fulfilled
function findAllQuestionsExpressionsFulfilled(
  database: Dictionary<any>,
): Array<Question> {
  let questionsExpressionsFulfilled: Array<Question> = [];
  let questions: Array<Question> = database.questions;
  // Check if expressions are fullfilled.
  for (let question of questions) {
    if (question.expressionId == null || expressionCheck(database, question)) {
      questionsExpressionsFulfilled.push(question);
    }
  }
  return questionsExpressionsFulfilled;
}

// All questions which have the Expressions Fulfilled
function findAllUnansweredQuestionsExpressionsFulfilled(
  database: Dictionary<any>,
): Array<Question> {
  let questionsExpressionsFulfilled: Array<Question> = [];
  let questions: Array<Question> = database.questions;
  // Check if expressions are fullfilled.
  for (let question of questions) {
    if (
      question.answered &&
      (question.expressionId == null || expressionCheck(database, question))
    ) {
      questionsExpressionsFulfilled.push(question);
    }
  }
  return questionsExpressionsFulfilled;
}

export {
  findCategoryById,
  findAllSubCategoriesByCategoryId as findAllSubCategoriesByCategory,
  findAllUnansweredQuestions,
  findAllQuestionsExpressionsFulfilled,
  expressionCheck,
  findAllUnansweredQuestionsExpressionsFulfilled,
};
