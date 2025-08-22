//for of 

// Looping mecanisam

// for(vairable of iterable){

// }


// for(vairable in object){

// }


//10 examples -->
// try to undestand indexes
// i want to print each and every record...

var booksList = [
    { BookPositioninBox:1 , bookName:"English"     }, //0
    { BookPositioninBox:2 , bookName:"MatheMatics" }, //1
    { BookPositioninBox:3 , bookName:"Physics"     }, //2
    { BookPositioninBox:4 , bookName:"Chemistry"   }, //3
    { BookPositioninBox:5 , bookName:"History"     }, //4
    { BookPositioninBox:6 , bookName:"Literature"  }, //5
    { BookPositioninBox:7 , bookName:"Geography"   }  //6
]


// for(var book of booksList){
//     //console.log(book);

//     if(book.bookName == "MatheMatics"){
//         console.log("Hey!!! MatheMatics book is availble in basket");
//     }

//     if(book.bookName == "Literature"){
//         console.log("Hey!!! Literature book is availble in basket");

//     }
// }


// IN my mind i do't have any condition

//MatheMatics  ... print " i read MatheMatics";

//if condtion...

//var books = [ "English","MatheMatics","Physics","Chemistry","History" ];

// for(var book of books){
//     console.log(book);

//     // if(book == "MatheMatics"){
//     //     console.log("i read MatheMatics");
//     // }

//     // if(book = "Physics"){
//     //     console.log("I did't read Physics");
//     // }
// }




// // for(vairable in object){

// }




   //bookName -> One of Property in bookDetails object  ||  one Of Index in bookDetails object
   // one of Member in bookDetails object

var bookDetails = {
    bookName : "Geethanjali",                                  
    bookAuthor : "Ravindranath Tagore",
    bookPublisher : "Rupa & Co",
    bookPrice : 250.00,
    bookPublicationDate : "2018-01-01",
    bookEdition : "1st",
    bookISBN : "1234567890",
}


var sName = "Kavya";
// if(sName == "Kavya"){

// }


//bookDetails.bookPrice - > 250.00     // direct calling by using property

//bookDetails["bookPrice"];--> 250.00   // object index signature 

for(var property in bookDetails){
    //console.log(bookDetails[property]);

    if(bookDetails[property] == "Rupa & Co"){
        console.log(`Hey!!! Publisher is ${bookDetails[property]}`);
    }
}