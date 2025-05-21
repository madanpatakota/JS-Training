// function sayHello(param1){
//     param1();
// }

// //sayHello("100");

// //Real time scenario
// //callback function
// sayHello(function(){
//     console.log("Hello world;");
// })

//i have defined
function sayHello(param1){
    //console.log(param1);
    param1();
}

//sayHello("100");

//Real time scenario
//callback function
sayHello(function(){
        console.log("Hello world;");
});

//JS predefined functions













//-------------------------------Parametr and arguments-------------------------------

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvimportant - My own function
function PrintMessage(fnParam){
    //console.log(param1);
    fnParam("Hello world");
}


//Real time scenario
//callback function
PrintMessage(function(p1){
    console.log(p1);
})



