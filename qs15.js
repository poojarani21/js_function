function eligibleforvote(age){
    if (age >= 18){
        console.log("u r eligible for vote");
    }else{
        console.log("u r not eligible for vote")
    }
}
let x = require("readline-sync");
let age = x.questionInt("enter your age: ")
eligibleforvote()