// function test(bookName, author, year) {
//   //return "uuuuuuuuuuuuuuuuuuuuuuuuuuu";
//   console.log("asdsasasa");
// }

// console.log(test.name); // "test
// console.log(test.length); // arguments length


// test.

//test.name    ===> "test"
// var arr = [];

// arr.push

// global  

//Car.


// 1. getCarInfo is the method of the Car object.
// 2. this inside the getCarInfo method refers to the Car object itself.

function Car(brandName,model,color){
     //console.log("Car");
     //this.brand = "Toyota";
     this.brand = brandName;
     
     //this.modelName = "Camry";
     this.modelName = model;


     this.colorName  = color;

     //console.log("Here this refers to", this);
}

//We can add the new member(function) to the function
//family member


//i can access whatever values declared by this inside of the function
//you can access those values inside of the any member function (rrototype)
Car.prototype.getCarInfo = function(){
     //console.log("getCarInfo this refers to", this);
     //console.log("Car Brand is Toyota and model is Camry");
     console.log(`Car Brand is ${this.brand} , model is ${this.modelName} and color is ${this.colorName}`);
}

Car.prototype.getDriverInfo = function(){
  //console.log("getCarInfo this refers to", this);
  //console.log("Car Brand is Toyota and model is Camry");
  console.log(`Car Brand is ${this.brand} , model is ${this.modelName} and color is ${this.colorName}`);
}



Car.prototype.getXYZInfo = function(){
  //console.log("getCarInfo this refers to", this);
  //console.log("Car Brand is Toyota and model is Camry");
  console.log(`Car Brand is ${this.brand} , model is ${this.modelName} and color is ${this.colorName}`);
}




let Toyotocar = new Car("Toyoto","Camry","Red"); // constructor function
//Toyotocar.getCarInfo();
//Toyotocar.getDriverInfo

console.log("--------------------------------------------------");
let Hondacar = new Car("Honda","Civic","Blue"); // constructor function
//Hondacar.getCarInfo();




//Car() // normal function

//new Car().getCarInfo() // constructor function



//Car.

