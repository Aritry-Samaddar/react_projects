class User3 {
    public name:string;
    public age:number;
    private address:string;

    constructor (fullName:string, userAge:number, userAddress:string) {
        this.name = fullName;
        this.age = userAge;
        this.address = userAddress;
    }
};

let userObj3:User3 = new User3("Aritry", 21, "Asansol");
userObj3.name = "Oreo";
// userObj3.address = "Asansol";
console.log(userObj3.name);
console.log(userObj3.age);
// console.log(userObj3.address);