import moment from 'moment';
import {v4} from 'uuid';
export class Recommendation {
  text: string;
  expressionId: string;
  id: string;
  subCategoryId: string;
  lastUpdated: Date;
  constructor(text:string,subCategoryId:string, expressionId:string, id = v4(),lastUpdated = moment().toDate()) {
    this.lastUpdated=lastUpdated;
    this.subCategoryId=subCategoryId;
    this.text = text;
    this.expressionId = expressionId;
    this.id = id;
  }
}
