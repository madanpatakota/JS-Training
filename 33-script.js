//Syncronous 


function sleep(milliSeconds){
    var startDateTime = new Date().getTime() ;// 8:55:02
    var endDateTime   = startDateTime + milliSeconds // 8:55:07 seconds
          //8:55:02                  8:55:07
    while(new Date().getTime() < endDateTime){
         // Print something
         //Here i am not printing any statments....😉😉😉😉 
    }
}

//Callback function 2 weeks 
function DownloadVideo(instagramCallbackFn){
   sleep(5000);
   console.log("Download Video");
   instagramCallbackFn();
}
function InstagramReels(chatWithFriendCallbackFn){
    sleep(10000);
    console.log("InstagramReels");
    chatWithFriendCallbackFn();
}

function ChatWithFreinds(){
    sleep(7000);
    console.log("ChatWithFreinds");
}

console.time("MyTaskTime");

DownloadVideo(()=>{
       InstagramReels(()=>{
        ChatWithFreinds();
       })
   }
);

// DownloadVideo();
// InstagramReels();
// ChatWithFreinds();

console.timeEnd("MyTaskTime");
console.log("All Works are done!!!!");
//callback hell leads to sync calls