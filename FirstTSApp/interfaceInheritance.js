var person1Obj = {
    name: "Aritry",
    code: "123",
    department: "TSE"
};
var Employee = /** @class */ (function () {
    function Employee(code, empName, empPincode, place) {
        this.empCode = code;
        this.name = empName;
        this.pincode = empPincode;
        this.address = place;
    }
    Employee.prototype.getEmployeeDetails = function (code) {
        return "Employee Id: " + code + ", Address: " + this.address;
    };
    ;
    Employee.prototype.getEmployeeCode = function () {
        return this.empCode;
    };
    return Employee;
}());
var obj = new Employee("123", "Aritry", 08, "Asansol");
console.log(obj.name);
console.log(obj.getEmployeeDetails(obj.getEmployeeCode()));
