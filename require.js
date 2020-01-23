// load other modules like ttp module, to load 3rd party libraries
console.log("Starting app");
//fs= file system
const fs = require('fs');
//create new file and append the text
// fs.appendFile('greetings.txt',' Hello world!', function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });

//os

const os = require('os');

var user = os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt',' Hello '+user.username, function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });
                                        //template literal syntax
fs.appendFile('greetings.txt',` Hello ${user.username}! You are ${note.age}`, function(err){
    if(err){
        console.log('Unable to write to file');
    }
});
