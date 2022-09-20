var Maths = /** @class */ (function () {
    function Maths() {
    }
    Maths.prototype.AddNumber = function (a, b, c) {
        if (c === void 0) { c = 0; }
        return a + b + c;
    };
    Maths.prototype.multiplyNumber = function (a, b) {
        // let res:number = a*b;
        // return res;
        return a * b;
    };
    Maths.prototype.subtractNumber = function (a, b) {
        this.num = a - b;
    };
    return Maths;
}());
var mathObj = new Maths();
var addedNum = mathObj.AddNumber(3, 4, 2);
var multipliedNum = mathObj.multiplyNumber(2, 3);
mathObj.subtractNumber(8, 4);
console.log(addedNum);
console.log(multipliedNum);
console.log(mathObj.num);
