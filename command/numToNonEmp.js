const fs = require('fs'); 
const readline = require('readline'); 

 function number(src)
 {
    const file = readline.createInterface({ 
		input: fs.createReadStream(src), 
		// output: process.stdout, 
		// terminal: false
	}); 

let k=1;
let count=0;
file.on('line', (line) => { 
    if(line!="")
    {
        console.log(k++,line);
        count=0; 
    }

	
}); 
 }


module.exports={
	numb:number
}