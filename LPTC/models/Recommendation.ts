import {v4} from 'uuid';
export class Recommendation {
  text: string;
  expressionId: string;
  id: any;

  constructor(text: string, expressionId: string, id = v4()) {
    this.text = text;
    this.expressionId = expressionId;
    this.id = id;
  }
}
