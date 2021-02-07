import {v4} from 'uuid';
export class Category {
  text: string;
  id: string;
  constructor(text:string, id = v4()) {
    this.text = text;
    this.id = id;
  }
}
