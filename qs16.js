function isPerfect(x){
    var i = 0;
    while (i <= x){
        var j = 1;
        var sum = 0;
        while (j < i){
            if (i % j === 0){
                sum = sum + j;
            }j++
        }
        if (sum === i){
            console.log(i,"is a perfect number")
        }
        else {
            console.log(i,"is not a perfect number")
        }i++
    }

}isPerfect(100)



