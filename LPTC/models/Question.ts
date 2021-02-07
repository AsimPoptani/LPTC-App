import {v4} from 'uuid';
export class Question {
  text: string;
  expressionId: string;
  id: string;
  answered: boolean;
  constructor(text:string, expressionId=null,answered=false, id = v4()) {
    this.text = text;
    this.expressionId = expressionId;
    this.id = id;
    this.answered = answered;
  }
}
