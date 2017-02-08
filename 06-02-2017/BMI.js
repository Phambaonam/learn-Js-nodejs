
var bmi = function (weight, height) {
<<<<<<< HEAD
    if (isNaN(weight) || isNaN(height))
=======
    if (isNaN(weight) || isNaN(height)) 
>>>>>>> 4ea1c12f02523a0de864585eeed5da56c8214961
        return  new Error("Bạn cần nhập vào là số");
    var BMI = weight / (height * height);
    return BMI;
};

var result = bmi(58,1.75);

function log(result){
    if (result < 18.5) {
        console.log("Underweight");
    } else if (result < 25) {
        console.log("Normal");
    } else if (result < 30) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }
};

log(result);












