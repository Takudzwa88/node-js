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

var events = require('events');

/*
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emitted!');
*/
