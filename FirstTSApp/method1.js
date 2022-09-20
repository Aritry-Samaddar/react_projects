var User5 = /** @class */ (function () {
    function User5(fullName, userAge, userAddress) {
        this.name = fullName;
        this.age = userAge;
        this.address = userAddress;
    }
    User5.prototype.getAddress = function () {
        return this.address;
    };
    return User5;
}());
;
var userObj5 = new User5("Aritry", 21, "Asansol");
var _address = userObj5.getAddress();
console.log(_address);
