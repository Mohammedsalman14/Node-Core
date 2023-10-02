const fs = require("fs/promises");
// if we open file, 
// we could read or write
(async () => {

    const commandFileHandler = await fs.open("./command.txt", 'r')

    const watcher = fs.watch("./command.txt");
    
    for await (const event of watcher) {
        if (event.eventType === "change") {
            
            console.log("file was changed");
            
            const size = await (await commandFileHandler.stat()).size;
            
            const content = await commandFileHandler.read(Buffer.alloc(size));
            
            console.log(content);
        }
    }

})();