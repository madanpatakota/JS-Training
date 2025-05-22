//var and let  , const keywords - varaiables

// Target i want to prepare the local variables in the local bloack
// Ans : then use let keyword

var greenColor = "green";

// console.log("%c")s

//Local block1
{
   console.log("LocalBlock-1" , greenColor); // green
   let blueColor = "blue";
   console.log("LocalBlock-1" , blueColor); // blue

   //console.log("LocalBlock-1" , pinkColor); // ReferenceError: pinkColor is not defined
}

//Local block2
{
   console.log("LocalBlock-2" , greenColor); // green
   let pinkColor = "pink";
   console.log("LocalBlock-2" , pinkColor); // pink

   //console.log("LocalBlock-2" , blueColor); // ReferenceError: blueColor is not defined
}


console.log("GlobalBlock" , greenColor); // green
//console.log("GlobalBlock" , blueColor); // ReferenceError: blueColor is not defined
console.log("GlobalBlock" , pinkColor); // ReferenceError: pinkColor is not defined





//Example 2

var signalName = "Wi-fi";

{
    //Lets say Room1
    console.log("Signal :" , signalName); // Wi-fi

    let room1FanSpeed = "high";
    console.log("FanSpeed :" , room1FanSpeed); // high
    //console.log("FanSpeed :" , room2FanSpeed); // ReferenceError: room2FanSpeed is not defined
}

{
    //Lets say Room2
    console.log("Signal :" , signalName); // Wi-fi

    let room2FanSpeed = "slow";
    console.log("FanSpeed :" , room2FanSpeed); // slow

    //console.log("FanSpeed :" , room1FanSpeed); // ReferenceError: room1FanSpeed is not defined
}


console.log("Signal :" , signalName); // Wi-fi
//console.log("FanSpeed :" , room1FanSpeed); // ReferenceError: room1FanSpeed is not defined
//console.log("FanSpeed :" , room2FanSpeed); // ReferenceError: room2FanSpeed is not defined