"use strict";
exports.__esModule = true;
function add(a, b) {
    console.log(a + b);
}
function sub(a, b) {
    console.log(a - b);
}
function multi(a, b) {
    console.log(a * b);
}
function div(a, b) {
    console.log(a / b);
}
var Operator;
(function (Operator) {
    Operator["Add"] = "+";
    Operator["Sub"] = "-";
    Operator["Multi"] = "*";
    Operator["Div"] = "/";
})(Operator || (Operator = {}));
;
console.log('Calculator');
// let op:any="-";
// let a:number=0;
// let b:number=0;
// if(op==Operator.Add){
//     console.log('add');
// }
// let istrue=true;
function calculate(a, b, op) {
    var c;
    switch (op) {
        case Operator.Add:
            add(a, b);
            break;
        case Operator.Sub:
            sub(a, b);
            break;
        case Operator.Multi:
            multi(a, b);
            break;
        case Operator.Div:
            div(a, b);
            break;
        default:
            console.log('choose again');
            break;
    }
}
calculate(3, 2, "&");
