    // Only change code below this line
function inverseWhile(){
    var fiveNumbers = "";
    var x = 5;
    while(x >= 0){
        fiveNumbers += x;
        if(x != 0)
        fiveNumbers += ", ";
        x--;
    }
    return fiveNumbers;
}
       
    // Only change code above this line

console.log(inverseWhile());
    
module.exports = inverseWhile;