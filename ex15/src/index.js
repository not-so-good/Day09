// Only change code below this line
function myDoWhile(){
    var myNumbers = "";
    var x = 0;
    do {
        myNumbers += x;
        if(x != 9){
            myNumbers += ", ";
        }
        x++;
    } while (x < 10);
    return myNumbers;

}

console.log(myDoWhile());
// Only change code above this line

module.exports = myDoWhile;