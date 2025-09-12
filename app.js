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

function callFunction(fun){
    fun();
}

//function expression
var sayBye = function(){
    console.log('bye');
};

callFunction(sayBye);