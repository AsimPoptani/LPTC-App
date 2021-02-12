import {Recommendation} from './models/Recommendation';
import {Benefit} from './models/Benefit';
import {Answer} from './models/Answer';
import {Expression} from './models/Expression';
import {Question} from './models/Question';
import {ExpressionExpression} from './models/ExpressionExpression';
import {AnswerExpression} from './models/AnswerExpression';
import {Category} from './models/Category';
import {SubCategory} from './models/SubCategory';

let bootstrap = () => {
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

  // Create two catagories
  let cat1 = new Category('Physical Health');
  let cat2 = new Category('Mental Health');
  let subCat1 = new SubCategory('PIP', cat1.id);
  let subCat11 = new SubCategory('Blue Badge', cat1.id);
  let subCat21 = new SubCategory('Dyslexia', cat2.id);
  let subCat22 = new SubCategory('ADD', cat2.id);
  // What is the best thing you put on pizza
  // Ham
  // Cheese
  // Pineapple
  // Bread
  let question = new Question('What is the best thing you put on pizza?');
  // answers
  let ham = new Answer('Ham', question.id);
  let cheese = new Answer('Cheese', question.id);
  let pineapple = new Answer('Pineapple', question.id);
  let bread = new Answer('Bread', question.id);
  // add to database
  database.answers.push(ham, cheese, pineapple, bread);

  // Do ask question if we choose ham,cheese or pineapple
  let breadException = new Expression(true);
  // add to database
  database.expressions.push(breadException);

  // Add answerExpressions
  let hamExpression = new AnswerExpression(ham.id, breadException.id);
  let cheeseExpression = new AnswerExpression(cheese.id, breadException.id);
  let pineappleExpression = new AnswerExpression(
    pineapple.id,
    breadException.id,
  );
  // add to database
  database.answerExpressions.push(
    hamExpression,
    cheeseExpression,
    pineappleExpression,
  );

  // What is the worst thing you put on pizza
  let worstPizza = new Question(
    'What is the worst thing you put on pizza?',
    breadException,
  );
  // Tea
  // Vinegar
  // Salt
  let tea = new Answer('Tea', worstPizza.id);
  let vinegar = new Answer('Vinegar', worstPizza.id);
  let salt = new Answer('Salt', worstPizza.id);
  // add to Database
  database.answers.push(tea, vinegar, salt);
  database.questions.push(worstPizza);

  // Ham Tea = Recommendation See a therapist
  let hamTeaExpression = new Expression(true);
  hamExpression = new AnswerExpression(ham.id, hamTeaExpression.id);
  let teaExpression = new AnswerExpression(ham.id, hamTeaExpression.id);
  let hamTeaRecommendation = new Recommendation(
    (text = 'Please contact your therapist!'),
    (subCategoryId = subCat1),
  );

  // add to database
  database.expressions.push(hamTeaExpression);
  database.answerExpressions.push(hamExpression, teaExpression);
  database.recommendations.push(hamTeaRecommendation);

  // Cheese or Salt
  let cheeseSaltExpression = new Expression();
  cheeseExpression = new AnswerExpression(cheese.id, cheeseSaltExpression.id);
  let saltExpression = new AnswerExpression(salt.id, cheeseSaltExpression.id);
  let cheeseSaltBenefit = new Benefit(
    (text = 'At least you are getting your dairy or your salt!'),
    (subCategoryId = subCat21),
  );

  // add to database
  database.expressions.push(cheeseSaltExpression);
  database.answerExpressions.push(cheeseExpression, saltExpression);
  database.recommendations.push(cheeseSaltBenefit);

  return database;
};

export default bootstrap;
