interface IPerson {
    name:string;
    code:string;
    department?:string;
}

let person1Obj:IPerson = {
    name: "Aritry",
    code: "123",
    department: "TSE"
}

interface IEmployee {
    empCode:string;
    name:string;
    pincode:number;
}

interface IEmployee2 {
    getEmployeeCode(code:string):string;
    getEmployeeDetails: (code:string)=> string;
}

class Employee implements IEmployee, IEmployee2 {
    empCode: string;
    name: string;
    pincode: number;
    address:string;
    
    constructor (code:string, empName:string, empPincode:number, place:string) {
        this.empCode = code;
        this.name = empName;
        this.pincode = empPincode;
        this.address = place;
    }
    getEmployeeDetails(code: string): string {
        return "Employee Id: " + code + ", Address: " + this.address;
    };
    getEmployeeCode(): string {
        return this.empCode;
    }
}

let obj:Employee = new Employee("123", "Aritry", 08, "Asansol");
console.log(obj.name);
console.log(obj.getEmployeeDetails(obj.getEmployeeCode()));