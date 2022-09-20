var User = /** @class */ (function () {
    function User() {
        this.name = "Tom";
    }
    return User;
}());
;
var userObj = new User();
userObj.name = "Aritry";
userObj.age = 21;
userObj.address = "Asansol";
console.log(userObj.name);
console.log(userObj.age);
console.log(userObj.address);
