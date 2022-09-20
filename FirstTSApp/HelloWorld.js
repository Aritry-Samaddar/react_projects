var message = "Hello";
var no = 123;
var flag = true;
var h = 123;
h = "aritry";
var names = ["aritry", "tom", "jerry"];
names.push("Nick");
var d = names[names.length - 1];
console.log(d);
var names1 = ["aritry"];
console.log(names1[0]);
var ouMultiple = ["NA", true, 123, "NA", true];
ouMultiple = ["Aritry", true, 0, "Mark", false];
console.log(ouMultiple[2]);
var Emp = {
    name: "Aritry",
    age: 21,
    address: "Asansol"
};
Emp.name = "Oreo";
console.log("Name: " + Emp.name + ", Age: " + Emp.age + ", Address: " + Emp.address);
var Months;
(function (Months) {
    Months["Jan"] = "Jan";
    Months[Months["Feb"] = 12] = "Feb";
    Months[Months["Mar"] = 13] = "Mar";
    Months[Months["Apr"] = 14] = "Apr";
    Months[Months["May"] = 80] = "May";
    Months["Jun"] = "June";
    Months[Months["Jul"] = 1] = "Jul";
})(Months || (Months = {}));
console.log(Months.Apr);
// Object (anonymous)
var Rectangle = {
    width: 50,
    height: 100,
    radius: 34.6
};
// console.log(message);
// console.warn(message);
// console.trace(message);
// console.info(message);
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "";
        this.age = 21;
        this.address = "";
    }
    return Employee;
}());
