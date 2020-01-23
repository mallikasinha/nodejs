 console.log("Starting input file");
 const fs = require('fs');
 const _ = require('lodash');

 const notes = require('./note.js');
 var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);//argument array

if (command === 'add'){
     console.log('Adding new note ');
 }
 else if(command ==='list'){
     console.log('listing all the notes');
 }
 else if(command === 'read'){
     console.log('read the list');
 }
 else if(command ==='remove'){
     console.log("removing note");
 }
 else{
     console.log("command not listed");
 }
    



