// var obj = {
//     name: "Mallika",
// };
// var stringObj = JSON.stringify(obj);//convert object to string
// console.log(typeof stringObj);
// console.log(stringObj);

//convert string to object
// var personString = '{"name": "Mallika", "age" : 25}';
// var personObj = JSON.parse(personString); //convert string to object
// console.log(typeof personObj);
// console.log(personObj);
const fs = require('fs');

var originalNote = {
    title: "Some title",
    body: "Some body"
};
//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);


var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
//note

console.log(typeof note);
console.log(note.title);

