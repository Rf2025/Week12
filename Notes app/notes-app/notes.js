const fs = require('fs');


const getNotes = ()=> {

    return 'Your notes..................////........'
}


const addNote = (title,body,amount)=> {
    const notes = loadNotes()
    // used to check if notes appear more than once
    //we can check for duplicate by using a conditional
    const duplicateNote = notes.find((note)=> note.title === title)

    if(!duplicateNote){
        notes.push({
            title:title,
            body:body,
            amount:amount
        })
        console.log('note added')
        saveNotes(notes)
    } else{
        console.log('note title taken')
    }
   


}

const saveNotes = (notes)=> {
   const dataJSON = JSON.stringify(notes);
   fs.writeFileSync('notes-json',dataJSON)
}


//remove notes by using a conditonal to check if the note title 
// is equal to the title
const removeNote = (title)=>{
const notes = loadNotes();
const notesToKeep = notes.filter(function(note){
return note.title !== title


})
if(note.length > notesToKeep.length){
     
}
saveNotes(notesToKeep)
}

const listNotes = ()=>{
  console.log("your notes")
  const notes = loadNotes()
  notes.forEach((note) => {
    console.log(note.title)
  });
}


//read notes
//use condtional to check if note is there,
// if its there we will log the title and body
const readNote = (title)=>{
      const notes = loadNotes();
      const note = notes.find((note)=>note.title === title)
      if(note){
        console.log(note.title)
        console.log(note.body)
      }else{
         console.log('Note not found')
      }
}





//load notes
//this will allow us to acess notes in any part of our program
// we used a try catch block

const loadNotes = ()=>{

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch(e){
          return []
    }

}




// use module exports to export the get notes function
// we can export multiple functions by using an object
module.exports = {
    getNotes:getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote,

}