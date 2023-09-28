const fs=require("fs");

const dt=fs.readFileSync("notes.txt","utf-8");

var arr=dt.split(/\r?\n/);
var data=[];
for(var i=0;i<arr.length;i++)
{
    var x=arr[i].split("|");        //we will get name age etc stored in x array
    var obj = {
        name: x[0],
        age: x[1],
        gender:x[2],
        city:x[3]
   };
   data.push(obj);
}

fs.writeFile ("input.json", JSON.stringify(data), (err)=> {}
    
);