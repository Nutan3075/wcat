#! /usr/bin/env node


let input=process.argv.slice(2);
let linebreak = require("./command/linebreak.js");
let read=require("./command/read.js");
let num=require("./command/lineNum");
let numb=require("./command/numToNonEmp");
let append=require("./command/6home")
let append2=require("./command/7home")
let Large=require("./command/8home");


switch(input[0]){
    case "-s":
        if(input.length==2)
        {
            linebreak.breaker(input[1]);
            break;
        }
        else{
          Large.Large(input[1],input[3]);
          break;
        }
        
    case "-n":
        num.num(input[1]);
        break;
    case "-b":
        numb.numb(input[1]); 
        break;

    default:
        if(input[1]==">")
        {
            append.append(input[0],input[2]);
            break;
        }else if(input[1]==">>"){
            append2.append2(input[0],input[2])
            break;

        }else{
            read.fn(input);
        }
}