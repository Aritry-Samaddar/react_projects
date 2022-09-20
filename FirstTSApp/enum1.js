var Country;
(function (Country) {
    Country["india"] = "India";
    Country["australia"] = "Australia";
    Country["canada"] = "Canada";
    Country["germany"] = "Germany";
    Country["france"] = "France";
})(Country || (Country = {}));
var User4 = /** @class */ (function () {
    function User4(fullName, userAge, userAddress, userCountry) {
        this.name = fullName;
        this.age = userAge;
        this.address = userAddress;
        this.country = userCountry;
    }
    return User4;
}());
;
var userObj4 = new User4("Aritry", 21, "Asansol", Country.india);
console.log(userObj4.country);
