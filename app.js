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


