var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.fullName = name;
        this.age = age;
    }
    return Person;
}());
var TemporaryPerson = /** @class */ (function (_super) {
    __extends(TemporaryPerson, _super);
    function TemporaryPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TemporaryPerson;
}(Person));
var PermanentPerson = /** @class */ (function (_super) {
    __extends(PermanentPerson, _super);
    function PermanentPerson(name, age, wages) {
        var _this = _super.call(this, name, age) || this;
        _this.MonthlyWages = wages;
        return _this;
    }
    return PermanentPerson;
}(Person));
var ContractualPerson = /** @class */ (function (_super) {
    __extends(ContractualPerson, _super);
    function ContractualPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContractualPerson;
}(Person));
var personObj = new TemporaryPerson("Aritry", 21);
console.log(personObj.fullName);
var person1Obj2 = new PermanentPerson("Oreo", 21, 1000);
console.log(person1Obj2.fullName);
console.log(person1Obj2.MonthlyWages);
