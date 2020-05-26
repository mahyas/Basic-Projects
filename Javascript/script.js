var database = [
    {
        username: "felfel",
        password: "peppermint"
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

function logIn(user, pass) {
    if(user === database[0].username &&
        pass === database[0].password) {
            console.log(timeline);
        } else {
            alert("sorry, username and/or password is incorrect");
        }
}

logIn(userNamePrompt, passwordPrompt);
