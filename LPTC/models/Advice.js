import {v4 as uuidv4} from 'uuid';
class Advice{

    
    constructor(adviceText,expression,id=uuidv4()){
        this.adviceText=adviceText;
        this.expression=expression;
        this.id=id;
    }
}
