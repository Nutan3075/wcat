//append all the content of filename into filename2
let fs=require("fs");
function appends(filename1,filename2){
    let string=fs.readFileSync(filename1,'utf-8');
    fs.appendFileSync(filename2, string);
}


module.exports={
    append2:appends
}

