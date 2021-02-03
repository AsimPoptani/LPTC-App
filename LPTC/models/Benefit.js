import {v4 as uuidv4} from 'uuid';
class Benefit{

    
    constructor(benefitText,expression,id=uuidv4()){
        this.benefitText=benefitText;
        this.expression=expression;
        this.id=id;
    }
}
