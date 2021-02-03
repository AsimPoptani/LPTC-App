import {v4 as uuidv4} from 'uuid';
class Attribute{
    constructor(name,id=uuidv4()){
        this.name=name;
        this.id=id;
    }
}