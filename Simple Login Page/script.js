var database = [
    {
        username: "felfel",
        password: "peppermint"
    },
    {
        username: "honey",
        password: "jacobs"
    },
    {
        username: "jasper",
        password: "carrot"
    }    
];

var timeline = [
    { 
        username: "macaron",
        news: "Today I played a lot"
    },   
    {
        username: "tommy",
        news: "I love treats"
    }   
];

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function isUserValid(user, pass) {
    for(i=0;i<database.length;i++){
        if(user === database[i].username &&
            pass === database[i].password) {
               return true;
           } 
           return false;
    }
}

function logIn(user, pass) {
    if(isUserValid(user,pass)){
            console.log(timeline);
        } else {
            alert("sorry, username and/or password is incorrect");
        }
}

logIn(userNamePrompt, passwordPrompt);
