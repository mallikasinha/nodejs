console.log('Starting node.js');
//console.log(module);
//we will use export

// module.exports.age = 25;

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note';
// };

// module.exports.addNo = (a,b)=>{
//     return a+b;
// }
const fs = require('fs');
var fetchNotes = () =>{ 
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch (e){
        return [];
    }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body)=>{
// console.log('Adding note', title, body);
var notes = fetchNotes();
var note = {
    title,
    body

};
try{
    var notesString = fs.readFileSync('notes-data.json');
notes = JSON.parse(notesString); //take string and put it to array
} catch(e){

}

var duplicateNotes = notes.filter((note)=> note.title === title);

if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
}
    // fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title)=>{
    console.log("get the title", title);
};

var removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes();
    // filter the notes
    var filterNotes = notes.filter((note)=> note.title !== title);
    //save notes array
    saveNotes(filterNotes);
    return notes.length !== filterNotes.length;
};

module.exports={
    addNote,
    getAll,
    getNote,
    removeNote

};