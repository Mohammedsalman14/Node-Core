const fs=require("fs");

const contents=fs.readFileSync("./test.txt",'utf-8');
fs.rename("./test.txt","./tst.txt",(err)=>{
    if(err) throw err;
    else console.log("File renamed Successfully");
})
console.log(contents);
