let myPromise = new Promise((resolve,reject)=>{
    let success = false;
    if(success){
        resolve("Success Message");
    }
    else{
        reject("Fail message");
    }
      
});

myPromise.then((result)=>{
    console.log(result);
}).catch((exception)=>{
   console.log(exception);
})

//myPromise().
// if(false){
//         resolve("Success Message");
//     }
//     else{
//         reject("Fail message");
//     }
      