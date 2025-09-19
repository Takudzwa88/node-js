//console.log('hey ninjas');

/*
var time = 0;
var timer = setInterval(function (){
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5){
        clearInterval(timer);
    }
}, 2000);
*/

/*
console.log(__dirname);
console.log(__filename);
*/

//normal function statement
/*
function sayHi(){
    console.log('hi');
}

sayHi();
*/

/*
function callFunction(fun){
    fun();
}

//function expression
var sayBye = function(){
    console.log('bye');
};

callFunction(sayBye);
*/

/*
var stuff = require('./stuff');


console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5));
*/

/*
var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
        });
    });


james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry!');
*/

/*
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emitted!');
*/

/*
var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    fs.writeFile('writeMe.txt', data, function(err) {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully!');
        }
    });
});


/*
fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
  //  console.log(data);
}); //non-blocking code
*/
//fs.writeFileSync('writeMe.txt', readMe); //we use writeFileSync to make sure the file is written only after readFile is done
//console.log(readMe);  //to print stuff from readMe.txt

//console.log('test');  //this will print before readMe.txt because readFile is non-blocking

//code

//var fs = require('fs');

//To create a directory and write a file in it (asynchronous non-blocking code)
/*fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){  
         fs.writeFile('./stuff/writeMe.txt', data);  
});
});
*/

//modern way to delete asynchronously using promises and async/await
/*
const fs = require('fs');

fs.rm('stuff', { recursive: true, force: true }, (err) => {
  if (err) {
    console.error('Error deleting directory:', err);
    return;
  }
  console.log('Directory deleted successfully!');
});
*/

//To remove a directory and the file in it (asynchronous non-blocking code)
/*fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff');  //to remove a directory
});  //to delete a file
*/

//Sync means Synchronous (blocking code)
//fs.mkdirSync('stuff'); //to create a directory

//fs.rmdirSync('stuff')  //to remove a directory

/*
fs.unlink('writeMe.txt', function(err) {  //to delete a file
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully!');
});
*/

var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  console.log("request was made: " + req.url);
    if(req.url === "/home" || req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});  
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    } else if (req.url === "/contact") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + "/contact.html").pipe(res);
    } else if(req.url === "/api/ninjas")  {
        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(ninjas));
    }   else {  
                res.writeHead(404, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + "/404.html").pipe(res);
    }
  //res.writeHead(200, { "Content-Type": "text/plain"}); //200 means ok
  //res.end("feed me popcorn");

  /*var myObj = {
    name: "Ryu",
    job: "Ninja",
    age: 29
  };*/

  //res.end(JSON.stringify(myObj)); //send a response to the user, stringify converts a JS object to JSON format

  //var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  //var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt"); //commented out because we are not writing to a file here, we want to write to a user
  //myReadStream.pipe(res);

//  res.end("Hey ninjas");
});

server.listen(3000, "127.0.0.1");
console.log("yo dawgs, now listening to port 3000");

/*
myReadStream.on('data', function(chunk){ // when we get some data
    console.log('new chunk received:');  //chunk is a piece of the file
    myWriteStream.write(chunk); //write that chunk to writeMe.txt
});
*/
