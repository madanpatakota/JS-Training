
// let isHavingAmazonAccess  = false;
// let isHavingNetFlexAccess = false;
// let isHavingDisneyHotStarAccess = false;


// switch(expression){
//     case value1:{
//         //------------------;
//         break;
//     }
//     case value2:{
//         //------------------;
//         break;
//     }
//     defult:{
//         //------------------;
//         break;
//     }

// }

// if(isHavingAmazonAccess){
//     console.log("%c Yes!!!! I am having the Amazon Access" , 'color:blue');
// }
// else if(isHavingNetFlexAccess){
//     console.log("%c Yes!!!! I am having the Netflex Access", 'color:red');
// }
// else if(isHavingDisneyHotStarAccess){
//     console.log("%c Yes!!!! I am having the DisneyHotStar Access", 'color:green');
// }
// else{
//     console.log("No OTT platforms access");
// }

let isAnyOTTPlatform = true;

let isHavingAmazonAccess  = false;
let isHavingNetFlexAccess = true;
let isHavingDisneyHotStarAccess = false;

switch(isAnyOTTPlatform){
    case isHavingAmazonAccess:{
        console.log("%c Yes!!!! I am having the Amazon Access" , 'color:blue');
        break;
    }
    case isHavingNetFlexAccess:{
       console.log("%c Yes!!!! I am having the Netflex Access", 'color:red');
       break;
    }
    case isHavingDisneyHotStarAccess:{
        console.log("%c Yes!!!! I am having the DisneyHotStar Access", 'color:green');
        break;
     }
     default:{
        console.log("No OTT platforms access");
     }
}

let dayNumber = 17;

switch(dayNumber){
    case 1:{
        console.log("Its sunday");
        break;
    }
    case 2:{
        console.log("Its MOnday");
        break;
    }
    case 3:{
        console.log("Its Tuesday");
        break;
    }
    case 4:{
        console.log("Its wednesday");
        break;
    }
    case 5:{
        console.log("Its thursady");
        break;
    }
     case 6:{
        console.log("Its friday");
        break;
    }
    case 7:{
        console.log("Its saturday");
        break;
    }
    default :{
        console.log("Your input is wrong. please check your input again....");
    }

}
