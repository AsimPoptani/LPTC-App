import {v4} from 'uuid';
export class SubCategory {
  text: string;
  id: string;
  categoryId:string;
  constructor(text:string,categoryId:string, id = v4()) {
      this.categoryId=categoryId;
    this.text = text;
    this.id = id;
  }
}
