
/*  ******* How to use the and(&&) or(||). 

             && (AND) Operator
            ┌─────────┬─────────┬──────────┐
            │ Input A │ Input B │ Output   │
            ├─────────┼─────────┼──────────┤
            │   true  │   true  │   true   │
            │   true  │  false  │  false   │
            │  false  │   true  │  false   │
            │  false  │  false  │  false   │
            └─────────┴─────────┴──────────┘

            || (OR) Operator
            ┌─────────┬─────────┬──────────┐
            │ Input A │ Input B │ Output   │
            ├─────────┼─────────┼──────────┤
            │   true  │   true  │   true   │
            │   true  │  false  │   true   │
            │  false  │   true  │   true   │
            │  false  │  false  │  false   │
            └─────────┴─────────┴──────────┘

*/


// let EmpId = 1;
// let EmpName = "John";


// console.log(EmpId == 1)   // o/p --> true
// console.log(EmpName == "John") // true

/*
            ┌─────────┬─────────┬──────────┐
            │ Input A │ Input B │ Output   │
            ├─────────┼─────────┼──────────┤
            │   true  │   true  │   true   │
            │   true  │  false  │  false   │
            │  false  │   true  │  false   │
            │  false  │  false  │  false   │
            └─────────┴─────────┴──────────┘

          */

// console.log(EmpId == 1 && EmpName == "John"); //true

// console.log(EmpId == 1 && EmpName == "John1");
// console.log(EmpId == 11 && EmpName == "John1");
// console.log(EmpId == 11 && EmpName == "John");


// == , === , <  , <= , > , >= , !=
/*

       || (OR) Operator
            ┌─────────┬─────────┬──────────┐
            │ Input A │ Input B │ Output   │
            ├─────────┼─────────┼──────────┤
            │   true  │   true  │   true   │
            │   true  │  false  │   true   │
            │  false  │   true  │   true   │
            │  false  │  false  │  false   │
            └─────────┴─────────┴──────────┘

*/


// either this or that -> true

// let EmpId = 1;
// let EmpName = "John";
// console.log(EmpId == 1  || EmpName == "John"); 
// console.log(EmpId == 1  || EmpName == "John1");
// console.log(EmpId == 11 || EmpName == "John");

// console.log(EmpId == 11 || EmpName == "John1");  //false



// if(EmpId == 11 || EmpName == "John1"){
//     console.log(`$EmpId {EmpId} and EmpName ${EmpName}`)
// }
// else{
//    console.log(`EmpId ID and EmpName are wrong `);
// }


//-----------------------------------------
let EmpId = 101;
let EmpName = "Smith";


//John Smith


if(EmpId == 1 && EmpName == "John"){
    console.log(`EmpId  ${EmpId} and EmpName ${EmpName}`)
}
else if (EmpId == 1 || EmpName == "John"){
   console.log(`Emp details are almost correct`);
}
else{
   console.log(`Emp Details are wrong `);
}
