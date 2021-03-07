let fs=require("fs");

function display(filename){
    fs.readFile(filename, 'utf8', function(err, data){ 
        if(err)
        {
            console.log(err);
        }
      
        console.log(data); 
    }); 
}

function read(input)
{
    for(let i=0;i<input.length;i++)
    {
       display(input[i]);
    }
}
module.exports={
    fn:read
}