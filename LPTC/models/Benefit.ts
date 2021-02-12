import {v4} from 'uuid';
export class Benefit {
  text: string;
  expressionId: string;
  id: string;
  subCategoryId: string;
  constructor(text:string, expressionId:string,subCategoryId:string, id = v4()) {
    this.subCategoryId=subCategoryId;
    this.text = text;
    this.expressionId = expressionId;
    this.id = id;
  }
}
