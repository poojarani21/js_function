function licenceChecker(speed){
    var point = (speed - 70)/5*1
    if (speed < 70){
        console.log("okay")
    }
    if (speed > 70){
        console.log("its not ok")
        console.log((speed - 70)/5*1)
    }
    if (point > 12){
        console.log("licence suspended")
    }
}
let sped = require("readline-sync");
let speed = sped.questionInt("enter: ");
licenceChecker(speed)

