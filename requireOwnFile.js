console.log("starting require own files");
const notes = require('./note.js');
const os = require('os');
const fs = require('fs');

var user = os.userInfo();
// fs.appendFile('greetings.txt',` Hello ${user.username}! You are ${notes.age}`, function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });

// var res = notes.addNote();

// console.log('Result:'+ notes.addNo(2,3));

