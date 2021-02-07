import {v4} from 'uuid';
export class Expression {
  id: any;
  isAnd: boolean;
  constructor(isAnd=false, id = v4()) {
    this.id = id;
    this.isAnd=isAnd;
  }
}
