
// Object

// key value pair - value can be anything

// number , string , boolean , null , undefined , array , object

// let person = {
//     "Name" : "RChandra"
// }



let person = {
    Name : "RChandra",
    Age : 30,
    isMarried : false,
    AadharNo : "023-890-1234",
    hobbies : ["Reading", "Traveling", "Cooking"],
    MoviesList : ["Inception", "The Matrix", "Interstellar"],
    adress: {
        city: "Bangalore",
        state: "Karnataka",
        country: "India"
    }
}

console.log(person.Name); // Accessing the Name property of the person object
console.log(person.Age); // Accessing the Age property of the person object
console.log(person.MoviesList[0]);
console.log(person.adress.city); // Accessing the city property of the adress object within person

// Array which contains the collection of objects.
// Example

let cars = [
    {
        brand: "Honda",
        model: "Civic",
        year: 2019
    },
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    }, 
    {
        brand: "Ford",
        model: "Focus",
        year: 2021
    }
]

//console.log(person);

// i want ge the Launchyear of Honda  -> 2019

cars[2].year // i canot get it 

//let launchYear = cars.length

//cars.  -> 3


//3 - 50%