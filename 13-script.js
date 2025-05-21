// function showAuthorName(){
//     console.log("Rabindranath Tagore");
// }

// let showAuthorName = function(){
//     console.log("Rabindranath Tagore");
// }


//synax :

// ()=>{
//     //
// }

let showAuthorName = () => {
    console.log("Rabindranath Tagore");
}
showAuthorName();


//normal function or named function
// function showAuthorDetails(fullName,DOB,bookName,PublishedYear){
//     console.log(fullName);
//     console.log(DOB);
//     console.log(bookName);
//     console.log(PublishedYear);
// }


let showAuthorDetails = (fullName,DOB,bookName,PublishedYear) => {
    console.log(fullName);
    console.log(DOB);
    console.log(bookName);
    console.log(PublishedYear); 
};
showAuthorDetails("Rabindranath Tagore","May 7, 1861","Githanjali",1910);


let age = 20;
let showAge = `John age is ${age}`;  //Template literals
console.log(showAge);

//Template literals
// "" , '' , ``

//return type function
// function getAuthorDetails(fullName,DOB,bookName,PublishedYear){
//     return `FullDetails of Author - ${fullName} , ${DOB} , ${bookName}, ${PublishedYear}`;
// }

let getAuthorDetails = (fullName,DOB,bookName,PublishedYear) => {
    return `FullDetails of Author - ${fullName} , ${DOB} , ${bookName}, ${PublishedYear}`;
}


let author = getAuthorDetails("Munshi Premchand", "July 31, 1880", "Nirmala", 1927);
console.log(author);



//what is the settimeout
// into the JS predefined functions
// setTimeout accept 2 parameters 1 is function and 2nd is time in milliseconds
// setTimeout(function(){
//     console.log("Javascript - 1");
// },5000);


// setTimeout(()=>{
//     console.log("Javascript - 2");
// },10000);

setInterval(() => {
    document.write("Javascript");
},5000);