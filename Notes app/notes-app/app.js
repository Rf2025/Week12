// //fs is one of the core node modules
// //to use modules, you must require them
// // when loading modules, stick with know variable naming conventions

// const fs = require('fs')
// //write file takes 2 params, 1: the file being edited/created, 2:text content
//  fs.writeFileSync('notes.txt','this file was created by node js');


// //challenge 1: append message to notes.txt, using appendFileSync
// //the append file sync take 2 paramas, 1:existing file path, 2: data being passed in to exisitng file
// fs.appendFileSync('notes.txt', ' :::i added this to notes using file sync')


// const add = require('./utils.js')

// // const name = 'Ricardo'
// const sum = add(2,2)
// console.log(sum)



//challenge: define and use a function in a new file
// create a file name notes.js
//create getNotes function that returns 'your notes'
//export getNotes
//from app js, load and call the function printing message to console



// // // use require ro loadd the notes.js file
const notes = require('./notes');

// const validator = require('validator')

// // notes = getNotes, which is a function, we must invoke the function

// console.log(notes())

// //we are using validator.isEmail method to check if email is valid

// console.log(validator.isEmail('andrew@emaple.com'))

// //check if url is url
// console.log(validator.isURL('/andrew@emaple.com'))



//challenge: download and use chalk,load onto app.js
//use it to print string sucess to console
// const chalk = require('chalk');

// const successful = chalk.green('this is a successful message');
// const error = chalk.red('this is an error message');

// console.log(error);
// console.log(successful);


// install module globally- available in the enitre machine


//process is sort of like the window object, except its in node



//

// const command = process.argv[2];
// console.log(process.argv)

// if(command === 'add'){
//     console.log('adding note')
// } else if(command === 'remove'){
//     console.log('removing note')
// }

//yargs helps us by parsing arguments in the commandline
//it makes reading inputs simplier and cleaner
const yargs = require('yargs');
// 


//customize yargs version
yargs.version('1.1.0')


//note application requirements
//add, remove, read,list 

//create add command, takes an object


//challenge
//setup option, configure description,required, log value in handler

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            //demand is like the required keyword
            demandOption: true,
            //make sure that title is a string
            type: 'string'
        },
        amount:{
            describe: "Quanity",
            demandOption:true,
            type: "number"
        }
    },
    handler: (argv)=> {
        notes.addNote(argv.title,argv.body,argv.amount)
    }
});




//create remove comannd
yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder:{
        title:{
          describe:'note title',
          demandOption:true,
          type:'string'
        }
    },
    handler:  (argv)=> {
      notes.removeNote(argv.title)
    }
});
// challenge add two new commands

// list command, print placeholder message;
//read command,print palceholder message
//test command


//list
yargs.command({
    command: 'list',
    describe: 'Note list',
    handler:  () =>{
       notes.listNotes()
    }
});


//read
yargs.command({
    command: 'read',
    describe: 'read list',
    builder:{
       title:{
        describe:'note title',
        demandOption:true,
        type: "string"
       }
    },
    handler: (argv) =>{
      notes.readNote(argv.title)
    }
});






console.log(yargs.argv)


//refactor all functions 
//if method, use eso method definition
//otherwise usse arrow function