let FirstapiAddress  = "https://jsonplaceholder.typicode.com/todos/1";  //fake apis

let SecondApiAddress = "https://jsonplaceholder.typicode.com/todos/2";  //fake apis

let AllRecords       =  "https://jsonplaceholder.typicode.com/todos";  //fake apis

//Asp.netcore Apis -> api names

//Fetch  -> return promise

//then you are getting data from datasouce
async function getFirstAPIResult() {
     await fetch(FirstapiAddress).then((result)=>{
           return result.json(); //promise
     }).then((actualDAta)=>{
         console.log(actualData);
     });   // Promise
}

function getSecondAPIPromise() {
    return fetch(SecondApiAddress);  // Promise
}

async function getSecondAPIResult() {
     await fetch(SecondApiAddress).then((result)=>{
           return result.json(); //promise
     }).then((actualDAta)=>{
         console.log(actualData);
     });   // Prom
}

function ThirdAPI() {
    return fetch(AllRecords);   // Promise
}


Promise.all([FirstAPI(), SecondAPI(), ThirdAPI()]).then((AllResults) => {
    console.log(AllResults);
}).catch(() => {

})



// fetch(FirstapiAddress).then((response)=>{
//     //  console.log(response)    //promise
//      return response.json()     // promise
// }).then((data)=>{
//     console.log("First Api details" , data);
// })

async function getAllAPIsResult() {


    try {
        //
        //
        await FirstAPI()
            .then((data) => {
                return data.json()
            }).then((data) => {
                console.log(data);
            });
            //
//

    }
    catch (err) {
         console.log(err);
    }



    await SecondAPI()
        .then((data) => {
            return data.json()
        }).then((data) => {
            console.log(data);
        });



    await ThirdAPI()
        .then((data) => {
            return data.json()
        }).then((data) => {
            console.log(data);
        });


    console.log("I Got all results");


}

getAllAPIsResult();








// fetch(FirstapiAddress).then((response)=>{
//     //  console.log(response)    //promise
//      return response.json()     // promise
// }).then((data)=>{
//     console.log("First Api details" , data);
// })


// fetch(SecondApiAddress).then((response)=>{
//     //  console.log(response)    //promise
//      return response.json()   // promise
// }).then((data)=>{
//     console.log("Second api details" ,data);
// })


// fetch(AllRecords).then((response)=>{
//     //  console.log(response)    //promise
//      return response.json()   // promise
// }).then((data)=>{
//     console.log("All api details" ,data);
// })


