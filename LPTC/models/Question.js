import {v4 as uuidv4} from 'uuid';
class Question{

    
    constructor(question,answers,expression,id=uuidv4()){
        this.question=question;
        this.answers=answers;
        this.expression=expression;
        this.id=id;
    }
}
