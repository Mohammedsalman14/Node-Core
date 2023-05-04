const Event = require("events");

class Emitter extends Event { }

const myE = new Emitter()

const func = () => {
    console.log("An Listener one...");
}

myE.addListener("foo", func);
myE.addListener("foo", () => {
    console.log("An Listener two...");
})
myE.removeListener("foo", func);
myE.emit("foo");





var listenercount = myE.listenerCount("foo");
console.log(`listenercount ${listenercount}`);


// Event names 
console.log(myE.eventNames());




