"use strict";
exports.__esModule = true;
var x = 10;
var y = 20;
var sum;
var title = 'sohan'; //I is  a constant
sum = 20;
console.log(title, sum);
sum = 'sohan barman';
console.log(sum);
//muliple line with embeded expression
var name = 'sohan';
var sentance = "My name is ".concat(name, "\ni am a begineer");
console.log(sentance);
//null and undefined
// let isNull:Boolean=null;
// let str:string=undefined;
//Array
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
console.log(list1);
console.log(list2);
list1.push(7);
list2.push(9);
console.log(list1);
console.log(list2);
//mixed type variable(typed array)
var tuple = ['apple', 80];
var ll = [['s', 'o', 'h'], [1, 2, 3]];
console.log(tuple);
console.log(ll);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //index star with zero
var c = Color.Blue;
console.log(c);
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 80] = "Apple";
    Fruit[Fruit["Banana"] = 50] = "Banana";
    Fruit[Fruit["Orange"] = 50] = "Orange";
})(Fruit || (Fruit = {}));
var f = Fruit.Apple;
console.log(f);
//Any
var a = 10;
console.log(a);
console.log(a.name); //it doesn't throw error because it declare any type 
//unkonwn
var b = 'sd';
console.log(b);
// console.log(b.name);//throw error
b.toUpperCase; //It is type assertion
console.log(b);
//union type data
var muliple;
muliple = true;
muliple = 89;
//Function
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(12, 13));
function addWithReturnType(n1, n2) {
    if (n2) {
        return n1 + n2;
    }
    else {
        return n1;
    }
}
console.log(addWithReturnType(4, 8));
console.log(addWithReturnType(4));
