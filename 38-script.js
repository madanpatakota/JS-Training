//Multiple Promies


// function getFirstPromise(){
//     return   new Promise((resolve,reject)=>{
//             let success = false;
//             if(success){
//                 resolve("My success Message");
//             }
//             else{
//                 reject("My Fail message");
//             }

//         });
// }


// //Usage

// getFirstPromise().then((result)=>{
//     console.log(result);
// }).catch((exception)=>{
//    console.log(exception);
// })




function getFirstAuthorDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("✅ Task One Completed (4s)"); //emojipeida.org
            resolve("RabindranathTagore")
        }, 4000)
    });
}


function getSecondAuthorDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("✅ Task Two Completed (2s)"); //emojipeida.org
            resolve("JKRoling")
        }, 2000)
    });
}


function getThirdAuthorDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("✅ Task Two Completed (5s)"); //emojipeida.org
            resolve("Arundhati Roy")
        }, 5000)
    });
}


//Usage

console.time("TimeStarts");

// getFirstAuthorDetails()
// .then((result) => {
//     console.log(result);
//     return getSecondAuthorDetails();
// })
// .then((getSecondAuthorDetailsResult) => {
//     console.log(getSecondAuthorDetailsResult);
//     return getThirdAuthorDetails()
// })
// .then((getThirdAuthorDetailsresult)=>{
//     console.log(getThirdAuthorDetailsresult);
//     console.timeEnd("TimeStarts");
// })



Promise.all([getFirstAuthorDetails(),getSecondAuthorDetails(),getThirdAuthorDetails()]).then((notifications)=>{
    console.log(notifications);
    console.timeEnd("TimeStarts");
})