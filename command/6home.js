// let fs=require("fs");

// let string=fs.readFileSync('3.txt','utf-8');
// fs.writeFileSync('file2.txt',string);
let fs=require("fs");

function override(filename1,filename2){
    let string=fs.readFileSync(filename1,'utf-8');
    fs.writeFileSync(filename2,string);
}

module.exports={
    append:override
}

