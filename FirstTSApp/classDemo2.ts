class User2 {
    name:string;
    age:number;
    address:string;

    constructor (fullName:string, userAge:number) {
        this.name = fullName;
        this.age = userAge;
        this.address = "Not Defined";
    }
};

let userObj2:User2 = new User2("Aritry", 21);
userObj2.name = "Oreo";
userObj2.address = "Asansol";
console.log(userObj2.name);
console.log(userObj2.age);
console.log(userObj2.address);