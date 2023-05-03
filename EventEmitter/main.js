const EventEmitter = require('events');

class Event extends EventEmitter {

}
const myE = new Event();

myE.on("foo", () => {
    console.log("Event occured");
})
myE.emit("foo");