
// function sleep(milliSeconds){
//     var startDateTime = new Date().getTime() ;// 8:55:02
//     var endDateTime   = startDateTime + milliSeconds // 8:55:07 seconds
//           //8:55:02                  8:55:07
//     while(new Date().getTime() < endDateTime){
//          // Print something
//          //Here i am not printing any statments....😉😉😉😉 
//     }

// }

//Callback function 2 weeks 
function StepOne() {
    //sleep(5000);
    setTimeout(() => {
        console.log("Step One");
    }, 7000)
}


function StepTwo() {
    //sleep(10000);
    setTimeout(() => {
        console.log("Step Two");
    }, 2000)

}

function StepThree() {
    //sleep(7000);
    setTimeout(() => {
        console.log("Step Three");
    }, 5000)
}

//console.time("MyTaskTime");

StepOne();
StepTwo();
StepThree();

//console.timeEnd("MyTaskTime");
//console.log("All Works are done!!!!");
//callback hell leads to sync calls
