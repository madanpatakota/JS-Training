//Arrays
//""

// number , string , boolean , null , undefined , array

let ids   = [1,2,3,4,5];   // Array of numbers | Array of Similar data types
let names = ["John", "Jane", "Doe"]; // Array of strings | Array of Similar data types
let mixed = [1, "John", true, null , undefined]; // Array of mixed data types | Different data types in an array

let bookNames = ["Harry Potter series" , "The Waves"];

//ids.

console.log(ids);  //methods
console.log(names);
console.log(mixed);


// i want to print the first index of the mixed variable?

mixed[1]; // Accessing the second element of the mixed array
// mixed  - array
console.log(mixed[1]); // Output: John


var nameFromMixedArray = mixed[1]; // Accessing the second element of the mixed array
console.log(nameFromMixedArray);


let moreAboutBooks = [  "Harry Potter series" , 
                        "The Waves",
                         1,
                         true,
                         null ,
                         undefined ,
                         ["Harry Potter", "Granger", "Ron"],
                         {
                             title: "The Waves",
                             Id   : 1,
                         }
                        ]; // Array of mixed data types | Different data types in an array


console.log(moreAboutBooks[7].title) // Accessing the title property of the object within moreAboutBooks array

console.log(moreAboutBooks); // Output: Array with mixed data types

console.log(moreAboutBooks[6]); // Accessing the 7th element of the moreAboutBooks array

console.log(moreAboutBooks[6][1]); // Accessing the first element of the nested array within moreAboutBooks

