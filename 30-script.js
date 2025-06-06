//CallBack Hell

//Callback function


/*    -----------------CallBackHell---------------------
        function1(function() {
            function2(function() {
                function3(function(){
                });
            });
        });
*/

//console.time()
//Time calculation Task Start --> Task End


function sleep(milliSeconds){
    var startDateTime = new Date().getTime() ;// 8:55:02
    var endDateTime   = startDateTime + milliSeconds // 8:55:07 seconds
          //8:55:02                  8:55:07
    while(new Date().getTime() < endDateTime){
         // Print something
         //Here i am not printing any statments....😉😉😉😉 

        // console.log("Hello worlds!!!!");  /
    }


    // for(200000)  //

}


// function TestSleep(){
//      console.time("Sleep");   Sleep -> Remember
//      sleep(5000);
//      console.timeEnd("Sleep"); Sleep -> timeEnd  Diff 
//      console.log("Done!!!!");
// }
// //TestSleep();


//Callback function 2 weeks 
function StepOne(callbackfn){
   sleep(5000);
   console.log("Step One");
   callbackfn();
}

function StepTwo(callbackfn){
    sleep(10000);
    console.log("Step Two");
    callbackfn();
}

function StepThree(){
    sleep(7000);
    console.log("Step Three");
    
}


console.time("MyTaskTime");

StepOne(()=>{
    StepTwo(()=>{
         StepThree();
    });
})

// StepOne();
// StepTwo();
// StepThree();

console.timeEnd("MyTaskTime");

console.log("All Works are done!!!!");


//callback hell leads to sync calls
