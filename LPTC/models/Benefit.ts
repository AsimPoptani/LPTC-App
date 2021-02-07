import {v4} from 'uuid';
export class Benefit {
  text: string;
  expressionId: string;
  id: string;
  constructor(text:string, expressionId:string, id = v4()) {
    this.text = text;
    this.expressionId = expressionId;
    this.id = id;
  }
}
