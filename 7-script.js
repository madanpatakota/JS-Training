//0. we can pepare the function within funtion


//argument
//console.log("Javascript is a programming language");

//console.log("%c Javascript is a programming language","color:green;background-color:orange;font-size: 20px;" );

//console.log("%cJavascript is a programming language","background-color:green" );


//function -> For specific task

function backgroundColorOrange(){
    console.log("%c   ", "background-color:orange" );
}

function redColor(){
    console.log("%c   ", "background-color:red" );
}
//redColor();

//
function firstSelection(){
    console.log("%c   ", "background-color:purple" );
    console.log("%c   ", "background-color:lightgray" );
    redColor();
}

firstSelection();


function secondSelection(){
    console.log("%c   ", "background-color:orange" );
    console.log("%c   ", "background-color:black" );
    //redColor()
    backgroundColorOrange();
}

secondSelection();


function thirdSelection(){
    console.log("%c   ", "background-color:green" );
    console.log("%c   ", "background-color:darkgrey" );
    redColor();
    backgroundColorOrange();
}

thirdSelection();