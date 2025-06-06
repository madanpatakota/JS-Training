

//Callback function 2 weeks 
function StepOne(callbackStepTwofn) {
    //console.log("FileD");
    setTimeout(() => {
        console.log("Step One");
        callbackStepTwofn();
    }, 7000)
}


function StepTwo(callbackStepThreefn) {
    //sleep(10000);
    setTimeout(() => {
        console.log("Step Two");
        callbackStepThreefn();
    }, 2000)

}

function StepThree() {
    //sleep(7000);
    setTimeout(() => {
        console.log("Step Three"); 
    }, 5000)
}

//console.time("MyTaskTime");

// StepOne();
// StepTwo();
// StepThree();

//console.timeEnd("MyTaskTime");
//console.log("All Works are done!!!!");
//callback hell leads to sync calls


StepOne(()=>{
    StepTwo(()=>{
        StepThree();
    })
})
