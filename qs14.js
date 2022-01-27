function checklist(x,y){
    var k = 0;
while (k < x.length){
    var j =0;
    while (j < y.length){
        if (x[k] % 2 === 0 && y[j] % 2 === 0){
            console.log("dono even hai")
        }
        else{
            console.log("dono even nahni hai")
        }j++
    }k++
    break
    
}


}
checklist([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87]);
