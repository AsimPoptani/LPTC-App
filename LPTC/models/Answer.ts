import { v4 } from 'uuid';
export class Answer {
  text: string;
  questionId: string;
  state: boolean;
  id: string;

  constructor(text: string, questionId: string, state = false, id = v4()) {
    this.state = state;
    this.questionId = questionId;
    this.text = text;
    this.id = id;
  }
}