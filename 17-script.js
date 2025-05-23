
// Try to understand your code --> 

// o/p : what i will get

// Monitor the code flow by using debugging.....


// f10 , f11 , debugger, shift+ f11

function logMessage(foodItem){
    // document.write("Hello, World!");
    // document.write("Welcome to the JavaScript world!");
    // document.write("Happy coding!");
    document.write("Hello ... YOu have ordered" + foodItem );
}

function orderFood(){
    logMessage("Veg Pizza");
    document.write("Your order has been placed successfully!");
}


let foodItemName = "Pizza";
//console.log(foodItemName);
document.write(foodItemName);
//debugger;  //stop point

let deliveryLocation = "New York City";
//console.log(deliveryLocation);
document.write(deliveryLocation);


//logMessage();
orderFood();



let estimateDeliveryTime = "20 Mins";
//console.log(estimateDeliveryTime);
document.write(estimateDeliveryTime);
//debugger;  //stop point



//o/p : Pizza , New york city , 
// "Hello ... YOu have ordered Veg Pizza",
//  ""Your order has been placed successfully!",
//  "20 Mins""