//get the file content of filename remove large spaces and save the output in filename2
let fs=require("fs");
function LargeSpace(filename1,filename2){
    let string=fs.readFileSync(filename1,'utf-8');
    string=string.replace(/ {2,}/g,' ');
     fs.writeFileSync(filename2,string);
}


module.exports={
    Large:LargeSpace
}