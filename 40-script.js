


// async function getAuthorDetails(){
//      return "Rabindranath Tagore";
// }


async function getAuthorDetails(){
     return new Promise((resolve,reject)=>{
        let author = "Arundathi rai";
        if(author){
            resolve(author);
        }
        else{
            reject("Some error happend...Unable to get the Author");
        }
     })
}


//let author = "JkRoling";

getAuthorDetails().then((data)=>{
    //console.log("Author is " , data);
    document.write("Author is " , data);
})
.catch((error)=>{
    document.write(error);
});




// authorPromise.then((data)=>{
//     console.log("Author is " , data);
// })





//console.log(authorPromise);





