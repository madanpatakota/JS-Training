 
 //Named fuction
 function getBookDetails(){
     let bookDetails = "";
     bookDetails = "BookName :" + " Githanjali";
     return bookDetails;
 }

 
//Anonymous function
let showBookName = function(){
    let bookDetails = "Harry Potter series";
    //console.log(bookDetails);
    document.write(bookDetails);
 }

 //showBookName(); 


 //to complete the small task

 let showBookDetails = function(bookName , authorName, dateOfBirth) {
    console.log("BookName : " + bookName);
    console.log("AuthorName : " + authorName);
    console.log("DateOfBirth : " + dateOfBirth);

    // document.write("BookName : " + bookName);
    // document.write("AuthorName : " + authorName);
    // document.write("DateOfBirth : " + dateOfBirth);
}

//console.log("first");

showBookDetails("Githanjali", "Rabindranath Tagore", "May 7, 1861");

