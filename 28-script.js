
const companyname = "Misard"; //compile error


//try ,catch and finally


try{
  // const bankName = "HDFC bank";
  //       bankName = "ICICI Bank";

      let bankName;  // undefined ---> cause the error.


      //toLowerCase()
      //length ///

      if(bankName){
           bankName =  bankName.toUpperCase();
           console.log(`Welcome to ${bankName}`)
      }
      else{
        //console.log(`${bankName} its working fine today`);
        console.log("Server is down!!!!!");
        // throw new Error("Server is down!!!!!");
      }
      
}
catch(ex){
   console.log(`%cException details ${ex}` , 'color:red');
}
finally{
  console.log("Task completed");
}





//


let transactions = ["CreditCard", "DebitCard", "Savings"];
console.log(` Transaction are ${transactions.length}`);



// let books = ["Geethanjali", "Gora", "Savings"];
// console.log(` books are ${books.length}`);

// imagine 200 lines of code -- disturb
