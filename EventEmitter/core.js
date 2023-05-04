const EventEmitter = require("events").EventEmitter;
class Eventing {

    myE = new EventEmitter();
    listener1 = function listener1() {
        console.log("listener1");
    }
    listener2 = function listener2() {
        console.log("listener2");
    }
    eventing() {
        this.myE.on("foo", this.listener1)
        this.myE.emit("foo");
        console.log(this.myE.listenerCount("foo",this.listener1));
        this.myE.removeListener("foo",this.listener1);
        // console.log(this.myE.listenerCount("foo",this.listener1));


    }

}

callEV = new Eventing();
callEV.eventing();