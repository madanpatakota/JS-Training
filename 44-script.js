class School{

     #_sName;    //Private

     constructor(sname){
         this.#_sName = sname;
     }

     get studentName(){
        return this.#_sName;
     }

     set studentName(value){

        // your wish


        // if(typeof value == "string"){
        //     this.#_sName = value;
        // }
        // else{
        //      console.log("!!!Hey you are not madan . pleae try with madan only...")
        //     //console.log(`Please enter the string value only not the ${this.#_sName}`);
        // }
     }


}

let mySchool = new School(123);


School.prototype.getTeachersDetails = function(){
    //console.log(this.__________)
}

console.log(mySchool.studentName);

mySchool.studentName  = "Madan";
console.log(mySchool.studentName);

mySchool.getTeachersDetails();








































// class School{
//      sName;    //Private
// }

// let myschool1 = new School();
// myschool1.sName = 10;





