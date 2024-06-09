//takes string data , and converts it to a javascript object
//  const jObj =  JSON.parse(book);
//  console.log(jObj);

const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// // converts data to a json string
// const jString = JSON.stringify(book);
// console.log(jString)

// //create json file

// fs.writeFileSync('1-json.json',jString);


// const dataBuffer = fs.readFileSync('1-json.json');

// const parsedData = JSON.parse(dataBuffer);

// console.log(parsedData.title)


// challenge 
//load and parse json data,change name,age, 
//stringyfy the changedd object and overide og data


const dataBuffer = fs.readFileSync('1-json.json');
const dataJson =  dataBuffer.toString();
const user = JSON.parse(dataJson);

user.name = 'rico'
user.planet = 'Earth';

const userJson = JSON.stringify(user)

fs.writeFileSync('1-json.json',userJson)


