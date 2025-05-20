// How to prepare the input paramters to the function

// argumment vs parameter  -- Difference
// function showBookDetails(bookName , authorName, dateOfBirth) {
//     console.log("BookName : " + bookName);
//     console.log("AuthorName : " + authorName);
//     console.log("DateOfBirth : " + dateOfBirth);
// }

// //console.log("first");

// showBookDetails("Githanjali", "Rabindranath Tagore", "May 7, 1861");


//---------------------------------------------------------------

//optional parameters along with ||

// function showBookDetails(bookName , authorName, dateOfBirth , publishDate) {
//     console.log("BookName : " + bookName);
//     console.log("AuthorName : " + authorName);
//     console.log("DateOfBirth : " + dateOfBirth);

//     let xyz = publishDate  || "Publish date is not available";


//     console.log("PublishDate : " + xyz); //undefined
// }

// //console.log("first");

// showBookDetails("Githanjali", "Rabindranath Tagore", "May 7, 1861" , "1910");


//----------------------------------------------------------------

// Default parameters

// function showBookDetails(bookName , authorName, dateOfBirth , publishDate = "Publish date is not available") {
//     console.log("BookName : " + bookName);
//     console.log("AuthorName : " + authorName);
//     console.log("DateOfBirth : " + dateOfBirth);
//     console.log("PublishDate : " + publishDate);
// }

// //console.log("first");

// showBookDetails("Githanjali", "Rabindranath Tagore", "May 7, 1861");

//------------------------------------------------------------------------------------
//Rest Parameters

// function showBookDetails(...parameters) {
//     console.log(parameters);
//     console.log("BookName : "    + parameters[0]);
//     console.log("AuthorName : "  + parameters[1]);
//     console.log("DateOfBirth : " + parameters[2]);
//     // console.log("PublishDate : " + publishDate);
// }

// //console.log("first");

// showBookDetails("Githanjali", "Rabindranath Tagore", "May 7, 1861" , "1910");


//----Example 2


function showBookDetails(bookName, ...parameters) {
     console.log(parameters);
    // console.log("BookName : "    + parameters[0]);
    // console.log("AuthorName : "  + parameters[1]);
    // console.log("DateOfBirth : " + parameters[2]);
    // console.log("PublishDate : " + publishDate);
}

//console.log("first");

showBookDetails("Githanjali", "Rabindranath Tagore", "May 7, 1861" , "1910");

