
//global context - window
// var books = ["Gitanjali", "The Home and the World", "Gora"];

// var Authors = ["RabindranathTagore", "J.k.Roling"];

//console.log("window is " , this);
// console.log("books is " , this.books);
// console.log("authors is " , this.Authors);


//---------------------object context - object itself

// var author = {
//     name         : "RabindraNathTagore",
//     dateofbirth  : "May 7, 1861",
//     books        : ["Gitanjali", "The Home and the World", "Gora"],
//     getBooksCount : function(){
//         //console.log("Author is",  this);
//         //console.log("Athor DOB" , this.dateofbirth);
//         //console.log("Athor books" , this.books);
//         console.log("Athor name" , this.name);
//         console.log(this.Authors);
//     }
// }

//  author.getBooksCount() ;



 // -------consturctor function -- new object 

 function getAuthorBookDetails(){
    this.name         = "RabindranathTagore";
    this.dateofbirth  = "May 7, 1861";
    this.books        = ["Gitanjali", "The Home and the World", "Gora"];
    //console.log(this); 
 }

 //Diff
let authordetails = new getAuthorBookDetails(); // constructor function
 //getAuthorBookDetails()
let authorbooks   =  authordetails.books;
let authorname   =  authordetails.name;
let authordob   =  authordetails.dateofbirth;

// console.log(authorbooks);
// console.log(authorname);
// console.log(authordob);


//Arrow function -> this

// simple syntax
// ()=>{

// }


//---------------------object context - window
var Authors = ["RabindranathTagore", "J.k.Roling"];
var author = {
    name         : "RabindraNathTagore",
    dateofbirth  : "May 7, 1861",
    books        : ["Gitanjali", "The Home and the World", "Gora"],
    getBooksCount :  ()=> {
        console.log("books are",  this);
    },
    getAuthorsCount : function() {
        console.log("Author is",  this);
    }
}

author.getBooksCount();
author.getAuthorsCount()