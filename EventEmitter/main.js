const EventEmitter = require('events');

class Event extends EventEmitter {

}
const myE = new Event();

myE.on("foo", function one() {
    console.log("Event occured 1");
})
myE.on("foo", function two() {
    console.log("Event occured 2");
})
myE.on("foo", function thrid(x) {
    console.log("An event with parameter ", x);
})
myE.on("bar", () => {
    console.log("An event occured bar");
})

myE.emit("foo", 123);
myE.emit("bar");

console.log(myE.listeners('foo')); //listing the Events Functioin 

console.log(myE.eventNames()); //listing the Events Names

