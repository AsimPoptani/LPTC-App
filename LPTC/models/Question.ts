import { v4 } from 'uuid';
export class Question {
  text: string;
  expressionId: string;
  id: string;
  answered: boolean;
  categoryId: string;
  skipped: boolean;
  constructor(text: string, categoryId: string, expressionId = null, answered = false,skipped=false, id = v4()) {
    this.categoryId = categoryId
    this.text = text;
    this.expressionId = expressionId;
    this.skipped=skipped;
    this.id = id;
    this.answered = answered;
  }
}
