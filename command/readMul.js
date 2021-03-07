let fs=require("fs");

function display(filename){
    for(let i=0;i<filename.length;i++)
   {File
    fs.read(filename[i], 'utf8', function(err, data){ 
        process.stdout.write(data)
    }); 
   }

}
module.exports={
    fn:display
}
