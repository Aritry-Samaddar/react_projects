class Person {
    fullName:string;
    age:number;
    country:string;
    state:string;
    city:string;
    constructor(name:string, age:number) {
        this.fullName = name;
        this.age = age;
    }
}

class TemporaryPerson extends Person {
    PerDayWages:number;
}

class PermanentPerson extends Person {
    MonthlyWages:number;
    constructor(name:string, age:number, wages:number) {
        super(name, age);
        this.MonthlyWages = wages;
    }
}

class ContractualPerson extends Person {
    PerHourWages:number;
}

let personObj:TemporaryPerson = new TemporaryPerson("Aritry", 21);
console.log(personObj.fullName);
let person1Obj2:PermanentPerson = new PermanentPerson("Oreo", 21, 1000);
console.log(person1Obj2.fullName);
console.log(person1Obj2.MonthlyWages);