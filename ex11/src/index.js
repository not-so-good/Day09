function switchCase(letter){
// Only change code below this line
var animals = " ";
    switch(animals){
    case letter === "a":
        animals = "antelope";
        break;
    case letter === "b":
        animals = "bird";
        break;
    case letter === "c":
        animals = "cat";
        break;
    default:
        animals = "stuff";
        break;
    }
   
// Only change code above this line
return animals;
}

console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));

module.exports = switchCase;