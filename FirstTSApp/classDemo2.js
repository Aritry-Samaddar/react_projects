var User2 = /** @class */ (function () {
    function User2(fullName, userAge) {
        this.name = fullName;
        this.age = userAge;
        this.address = "Not Defined";
    }
    return User2;
}());
;
var userObj2 = new User2("Aritry", 21);
userObj2.name = "Oreo";
userObj2.address = "Asansol";
console.log(userObj2.name);
console.log(userObj2.age);
console.log(userObj2.address);
