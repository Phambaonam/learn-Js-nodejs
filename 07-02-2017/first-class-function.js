/**
 * Created by NamDuyen on 07/02/2017.
 */

var say = function(){
    console.log("hello");
    return 'nam';
}

console.log(say());


// first-class function
function logSay(fn){
    fn();
}
logSay(say);

// function express

var sayGoodbye = function(){
    console.log("goodbye");
}
sayGoodbye();

logSay(function(){
    console.log("nothing");
});