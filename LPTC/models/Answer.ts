import {v4} from 'uuid';
export class Answer {
  text: string;
  questionId: string;
  state:boolean;
  id:string;
  answered:boolean;
  constructor(text:string,questionId:string,state=false,answered:false, id = v4()) {
    this.state= state;
    this.answered =answered;
    this.questionId= questionId;
    this.text = text;
    this.id = id;
  }
}