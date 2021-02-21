import { Recommendation } from './models/Recommendation';
import { Benefit } from './models/Benefit';
import { Answer } from './models/Answer';
import { Expression } from './models/Expression';
import { Question } from './models/Question';
import { ExpressionExpression } from './models/ExpressionExpression';
import { AnswerExpression } from './models/AnswerExpression';
import { Category } from './models/Category';
import { SubCategory } from './models/SubCategory';

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
    subCategories: [],
  };

  // Create two catagories
  let cat1 = new Category('Physical Health');
  let cat2 = new Category('Mental Health');
  let subCat1 = new SubCategory('Wheel chair user', cat1.id);
  let subCat11 = new SubCategory('General Disability', cat1.id);
  let subCat21 = new SubCategory('Learning Disabilities ', cat2.id);
  let subCat22 = new SubCategory('Psychiatric Health', cat2.id);

  database.categories.push(cat1, cat2);
  database.subCategories.push(subCat1, subCat11, subCat21, subCat22);
  // What is the best thing you put on pizza
  // Ham
  // Cheese
  // Pineapple
  // Bread
  let question = new Question('Do you need help walking?', cat1.id);
  // answers
  let carerHelp = new Answer('I need a carer', question.id);
  let afraidWalking = new Answer('I am afraid of walking', question.id);
  let outOfBreath = new Answer('I get out of breath quickly', question.id);
  let fine = new Answer('I am fine walking', question.id);
  // add to database
  database.answers.push(carerHelp, afraidWalking, outOfBreath, fine);

  // Do ask question if we choose ham,cheese or pineapple
  let walkingHelpExpression = new Expression(true);
  // add to database
  database.expressions.push(walkingHelpExpression);

  // Add answerExpressions
  let carerHelpExpression = new AnswerExpression(carerHelp.id, walkingHelpExpression.id);
  let afraidOfWalkingExpression = new AnswerExpression(afraidWalking.id, walkingHelpExpression.id);
  let outOfBreathExpression = new AnswerExpression(
    outOfBreath.id,
    walkingHelpExpression.id,
  );
  // add to database
  database.answerExpressions.push(
    carerHelpExpression,
    afraidOfWalkingExpression,
    outOfBreathExpression,
  );

  // What is the worst thing you put on pizza
  let wheelchair = new Question(
    'Do you need a wheelchair?',
    cat1.id,
    walkingHelpExpression.id,
  );
  // Tea
  // Vinegar
  // Salt
  let motorWheelchair = new Answer('I need a motorized wheelchair', wheelchair.id);
  let manual = new Answer('I need a manual wheelchair', wheelchair.id);
  let noWheelchair = new Answer('I don\'t need a wheelchair', wheelchair.id);
  // add to Database
  database.answers.push(motorWheelchair, manual, noWheelchair);
  database.questions.push(wheelchair);

  // Ham Tea = Recommendation See a therapist
  let wheelchairExpression = new Expression(false);
  let manualExpression = new AnswerExpression(manual.id, wheelchairExpression.id);
  let motorExpression = new AnswerExpression(motorWheelchair.id, wheelchairExpression.id);

  let pip = new Benefit(
    'PIP',subCat1.id,wheelchairExpression.id

  );

  // add to database
  database.expressions.push(wheelchairExpression);
  database.answerExpressions.push(manualExpression,motorExpression);
  database.benefits.push(pip);

  // Cheese or Salt
  let cheeseSaltExpression = new Expression();
  afraidOfWalkingExpression = new AnswerExpression(afraidWalking.id, cheeseSaltExpression.id);
  let saltExpression = new AnswerExpression(noWheelchair.id, cheeseSaltExpression.id);
  let cheeseSaltBenefit = new Recommendation(
    'Motor car',
    subCat21.id,
  );

  // add to database
  database.expressions.push(cheeseSaltExpression);
  database.answerExpressions.push(afraidOfWalkingExpression, saltExpression);
  database.recommendations.push(cheeseSaltBenefit);

  return database;
};

export default bootstrap;
