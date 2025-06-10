class Person{
    constructor(name){
        this.name  = name;
    }
    act(){
        console.log(`${this.name} performs a generic action`);
    }
}

class OfficeGoer extends Person{
    //override 
    act(){
        console.log(`${this.name} goes to the office`);
    }
}

class ChatWithWife extends Person{
    //override 
    act(){
        console.log(`${this.name} chats with his wife`);
    }
}

class GoestoMarket extends Person{
    //override 
    act(){
        console.log(`${this.name} goes to Market`);
    }
}

class FullFillRequirement extends Person{
    //override 
    act(){
        console.log(`${this.name} fulfills the family requirements.`);
    }
}


let PersonName = "John";

//let person1 = new Person(PersonName);
// let person1 = new OfficeGoer(PersonName);
// person1.act();

// let person1 = new ChatWithWife(PersonName);
// person1.act();

// let person1 = new GoestoMarket(PersonName);
// person1.act();

let person1 = new FullFillRequirement(PersonName);
person1.act();





