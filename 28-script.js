// While ---> English word
//Normal case



var index = 1;
var books = ["English" , "MatheMatics" , "Physics"];


var myFavBook = books[index];   //MatheMatics



var booksList = [
    { BookPositioninBox:1 , bookName:"English"     }, //0
    { BookPositioninBox:2 , bookName:"MatheMatics" }, //1
    { BookPositioninBox:3 , bookName:"Physics"     }, //2
    { BookPositioninBox:4 , bookName:"Chemistry"   }, //3
    { BookPositioninBox:5 , bookName:"History"     }, //4
    { BookPositioninBox:6 , bookName:"Literature"  }, //5
    { BookPositioninBox:7 , bookName:"Geography"   }  //6
];


//bookPosition[3]  ->  { BookPositioninBox:4 , bookName:"Chemistry"   },

// While -> Target -> you are doing some work



// while(bookPosition < 4)
// {
//    console.log(booksList[bookPosition]);
//    bookPosition = bookPosition + 1; 
// }

var bookPosition = 0;

do
{
   //console.log(booksList[bookPosition]);

   let book = booksList[bookPosition];

   if(book.bookName == "MatheMatics"){
      console.log("i read MatheMatics");
   }
   
   bookPosition = bookPosition + 1; 

} while(bookPosition < 4)




