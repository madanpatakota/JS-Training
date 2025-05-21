
//IIFE (Immediately Invoked Function Expression) : YOu have to use ananonymous function 
(function(){
    let bookDetails = "Harry Potter series";
    console.log(bookDetails);
    //document.write(bookDetails);
 })();

//IIFE
//  (________________)();


(function(bookName){
    //document.write(bookName);
    console.log(bookName);
})("Harry Potter series from IIFE from Parameter");



(function(bookName, authorName){
    //document.write(bookName);
    console.log(bookName);
    console.log(authorName);
})("Harry Potter series","Rabindranath Tagore");