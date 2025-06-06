let FirstapiAddress = "https://jsonplaceholder.typicode.com/todos/1";  //fake apis

let SecondApiAddress = "https://jsonplaceholder.typicode.com/todos/2";  //fake apis

let AllRecords = "https://jsonplaceholder.typicode.com/todos";  //fake apis

//Asp.netcore Apis -> api names





//Fetch


fetch(FirstapiAddress).then((response)=>{
    //  console.log(response)    //promise
     return response.json()     // promise
}).then((data)=>{
    console.log("First Api details" , data);
})


fetch(SecondApiAddress).then((response)=>{
    //  console.log(response)    //promise
     return response.json()   // promise
}).then((data)=>{
    console.log("Second api details" ,data);
})


fetch(AllRecords).then((response)=>{
    //  console.log(response)    //promise
     return response.json()   // promise
}).then((data)=>{
    console.log("All api details" ,data);
})