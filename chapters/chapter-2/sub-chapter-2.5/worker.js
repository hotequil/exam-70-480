self.onmessage = (event, transfer) => {
    console.log("self.onmessage event:", event);
    console.log("self.onmessage transfer:", transfer);

    //self is worker reference
    self.postMessage({
        message: event.data.message
    }); //postMessage sends a message to onmessage callback in other file
};

setInterval(() => {
    self.postMessage({
        message: "Worker on"
    });
}, 1000);

const subWoker = new Worker("./sub-worker.js");
subWoker.postMessage({
    message: "Hello sub-worker"
})