var User3 = /** @class */ (function () {
    function User3(fullName, userAge, userAddress) {
        this.name = fullName;
        this.age = userAge;
        this.address = userAddress;
    }
    return User3;
}());
;
var userObj3 = new User3("Aritry", 21, "Asansol");
userObj3.name = "Oreo";
// userObj3.address = "Asansol";
console.log(userObj3.name);
console.log(userObj3.age);
// console.log(userObj3.address);
