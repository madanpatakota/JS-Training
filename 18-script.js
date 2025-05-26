/*
Complex data types in JavaScript are generally represented by objects, arrays, and functions.

Property :  A property is a value that belongs to a single value....
Method   :  A method is a function that performs a specific action and can access or manipulate the data. 
*/

//object is key-value pair which we can also example of complex data type
var author = {
    name         : "RabindraNathTagore",
    dateofbirth  : "May 7, 1861",
    books        : ["Gitanjali", "The Home and the World", "Gora"],
    getBooksCount : function(){
        //console.log("Total Books are 3");
        //document.writeln("Total Books are 3");
        return "Total Books are 3"
    }
}

//name , dob , books are members of the author . here all are member types are properties
//and author having the one more member i.e. getBooksCount and that member type is method
// document.writeln(author.name);
// document.writeln(author.dateofbirth);
// document.writeln(author.books);

//document.writeln(author.getBooksCount());  // can i see in the doucument ????  

var result = author.getBooksCount();
console.log(result);