// Only change code below this line
function myForLoop1(){
    for(var evenNumbers = 0; evenNumbers <= 8; evenNumbers++){
        if (evenNumbers % 2 == 0){
            console.log(evenNumbers);
        }
        
    }
}
function myForLoop2(){
    for(var evenInverseNumbers = 8; evenInverseNumbers >= 0; evenInverseNumbers--){
        if (evenInverseNumbers % 2 == 0){
            console.log(evenInverseNumbers);
        }
    }
}
myForLoop1();
myForLoop2();
// Only change code above this line
          
module.exports = {
    myForLoop1,
    myForLoop2
};