
// for(var variable of array)

// for(var variable in object)

/*Syntax 
    for(initializtion ; condition ; increment/decrement){
        //code to be exectued
    }
*/

var booksList = ["English" ,"Maths" , "Physics"]  // booksList[0] means English

booksList.length  = 3;

var booksList = [
    { BookPositioninBox:1 , bookName:"English"     },   //0
    { BookPositioninBox:2 , bookName:"MatheMatics" },   //1
    { BookPositioninBox:3 , bookName:"Physics"     },   //2
    { BookPositioninBox:4 , bookName:"Chemistry"   },   //3
    { BookPositioninBox:5 , bookName:"History"     },   //4
    { BookPositioninBox:6 , bookName:"Literature"  },   //5
    { BookPositioninBox:7 , bookName:"Geography"   }    //6
]

// booksList[3] = { BookPositioninBox:4 , bookName:"Chemistry"   }

//if stright forwared condtion

//Looping system /-- each and every value we can read based on the condtion


 for(var bookPosition = 0 ; bookPosition < 7 ; bookPosition = bookPosition + 1){
        //code to be exectued
         // console.log(booksList[bookPosition])

          let bookName = booksList[bookPosition].bookName;

          if(bookName == "English"){
              console.log("English is in your Array!!!!");
          }

    }