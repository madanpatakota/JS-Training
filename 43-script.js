class School{

    // Members - constructor -> properties -> Methods = functoin
    //Constructor member

    //fields;  // hold the value
     //sName = "John";
    
     sName;   //undefined
     sID = 4444444444444444444444444444;

    constructor(name,id){
        console.log(`Student name is ${name}`);
        this.sName =  name
        this.sID = id;
    }

    //Method - Member
    enrollStundent(){
        console.log(`Student Name is ${this.sName}  and his enroll id is ${this.sID}`);
    }

    getStundentSubjects(){
        return ["English" , "Hindi" , "Maths"];
    }

}


//new School().enrollStundent();
const mySchool = new School("John" , "123456"); // instace of the object   f11
mySchool.enrollStundent();
let studentBooks = mySchool.getStundentSubjects();
console.log(studentBooks);



//Temnilogy 

// desinged the function -> class -> method

// function enrollStundent(){
//         console.log("Student Name is John and his enroll id is 00001");
//     }
