
function delayGetGeethajliBook(){
   return new Promise((resolve)=>{
        console.log("Please wait 2 seconds for Get Geethanjali book!!!!!");
        setTimeout(() => {
            //console.log("GeethajliBook book was writtern in 1910");
            resolve("GeethajliBook book was writtern in 1910");
        }, 2000);   //25 Seconds
    })
}


function delayGetGoraBook(){
   return new Promise((resolve)=>{
        console.log("Please wait 3 seconds for get Gora Book!!!!!");
        setTimeout(() => {
            //console.log("GeethajliBook book was writtern in 1910");
            resolve("Gora book was writtern in 1910");
        }, 3000);   //25 Seconds
    })
}

async function getAuthorDetails(){
     console.log("Author Name RabindraNath Tagore");
     console.log("Kabuliwala was written in 1892");
    //  await delayGetGeethajliBook().then((response)=>{
    //     console.log(response);
    //  });

     console.time("Time");
     let bookGeethanjliDetails = await delayGetGeethajliBook();
     console.log(bookGeethanjliDetails);

     let bookGoraDetails      = await delayGetGoraBook();
     console.log(bookGoraDetails);

     console.timeEnd("Time");

     console.log("%cNow I Confirm that Above are Rabindrath Tagore Books",'color:green');

     return "I Got the All books Details";
     

}


getAuthorDetails().then((response)=>{
   console.log(`%c Resonse is ${response}`, 'color:darkblue');
})