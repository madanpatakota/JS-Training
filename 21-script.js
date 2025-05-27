
//call

// Debugging

//primitive data type

// "(((((((((((((((((((((((((((((((((((((("

// 'a'

// let name = "srujan";
// `Hey!!! i am  ${name}`  -> TL

// `${_______________________________________}`

// "Hey!!! i am  srujan"


let bankDetails = {
    getBankDetails : function(argument1, argument2){
        console.log(`Bank Name is ${this.name} and Founder is ${this.founder}`);
        console.log("Argment1" ,argument1);
        console.log("Argument2",argument2);
    }
}

//bankDetails.getBankDetails(); // calling the method of the object


let axisBankDetails = {
    name : "Axis Bank",
    founder : "Amithabh Chaudhary",
}

let sbiBankDetails = {
    name : "SBI Bank",
    founder : "Government of India",
}

//bankDetails.getBankDetails.call(axisBankDetails, "1993","5377");
//bankDetails.getBankDetails.apply(sbiBankDetails, ["1955", "25000"]);
//bankDetails.getBankDetails.call(sbiBankDetails);

//it will return new object

// prepare the variable

let newAxisBankDetails = bankDetails.getBankDetails.bind(axisBankDetails, "1993", "5377"); // calling the method of the object with new context
newAxisBankDetails(); // calling the new object with the context of axisBankDetails


// bankDetails.getBankDetails.bind(axisBankDetails, "1993", "5377")()
// new object 



// callback function
setTimeout(()=>{
    console.log("Hello World 1");
},5000);

setTimeout(()=>{
    console.log("Hello World 2");
},3000);

setTimeout(()=>{
    console.log("Hello World 8");
},8000);


// setTimeout(function(){
//     console.log("Hello World");
// })


// 16 

// 8 seconds


//-------


// var arr = [];
// arr.find()


function abc(cfn){  
  cfn("afadasas12345");    // calling
}

abc(function(id){
   console.log("myid",id)
});


// (id)=>{
//     console.log("myid",id)      //defination
//  }


// function(id){
//     console.log("myid",id)      //defination
//  }


//cfn("afadasas12345");            //calling