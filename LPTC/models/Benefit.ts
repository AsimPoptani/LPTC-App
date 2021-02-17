import {v4} from 'uuid';
import moment from 'moment'
export class Benefit {
  text: string;
  expressionId: string;
  id: string;
  subCategoryId: string;
  lastUpdated: Date;
  constructor(text:string, expressionId:string,subCategoryId:string, id = v4(),lastUpdated = moment().toDate()) {
    this.lastUpdated=lastUpdated;
    this.subCategoryId=subCategoryId;
    this.text = text;
    this.expressionId = expressionId;
    this.id = id;
  }
}
