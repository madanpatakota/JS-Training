class Parent {
    constructor(charcter , color){
        this.charcter = charcter;
        this.color = color;
    }
    displayDetails(){
        console.log(`Parent's Charcter : ${this.charcter}`);
        console.log(`Parent Color : ${this.color}`)
    }
}

// let firstParent = new Parent("Kind" , "Fair");
// firstParent.displayDetails()


class Kid extends Parent{
    constructor(charcter , color){
        super(charcter,color);
    }
    displaySonDetails(){
        this.displayDetails();
    }
}

let kid1 = new Kid("Kind" , "Fair");
kid1.displayDetails();
//kid1.displaySonDetails();