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
file.on('line', (line) => { 
	console.log(k++,line); 
}); 
 }


module.exports={
	num:number
}
