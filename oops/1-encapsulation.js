class School{
   
    #schoolName;
    #schoolLocation;
    #students = [];

    static schoolName = "XyzSschool"

    constructor(name,location){
        this.#schoolName =  name;
        this.#schoolLocation = location;

        //School.schoolName

    }
    //void 
    //return non-void -> string  , boolean

    //Terminalogy
    //what is the type of your method.... TL 
    enrollStudent(studentDetails){
        //console.log(studentDetails);
      console.log(`Student ${studentDetails.name} 
        has enrolled and Id is ${studentDetails.id}
         and schoolname ${this.#schoolName}`);
    }



    // enrollStudent(studentDetails){
    //     console.log(studentDetails);
    //     // let student = {
    //     //     name : "John",
    //     //     ID   :   "123456"
    //     // }
    //     // this.#students.push(student);
    //     // console.log(`Student ${this.#students[0].name} has enrolled and school name is ${this.#schoolName}`);
    // }

}



class Student{
    // name;
    // grade;
    constructor(sname,sid){
        this.name = sname;
        this.id = sid;
    }
}


//School.schoolName

let student1 = new Student("Alice" , 5);

//let school1 = new School("xyz school", "Bengolore");
let school1 = new School("xyz school", "Bengolore");
school1.enrollStudent(student1);


//let school1 = new School("xyz school", "Bengolore");
let student2 = new Student("Clerk" , 2);
let school2 = new School("abc school", "Hyderabad");
school2.enrollStudent(student2);







// let arr = [];

// let obj = { id : 1};

// arr.push(obj);


// let arr = [1,2,3,4,5]   

// arr.push(10);

// //console.log(data);         //6
// console.log(arr.length);   //6