"use strict";
exports.__esModule = true;
var a = [6, 3, 4, 2, 9, 7];
function sort(a) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (a[i] < a[j]) {
                var t = a[i];
                a[i] = a[j];
                a[j] = t;
            }
        }
    }
    return a;
}
console.log(a);
a = sort(a);
console.log(a);
