class User5 {
    public name:string;
    public age:number;
    private address:string;

    constructor (fullName:string, userAge:number, userAddress:string) {
        this.name = fullName;
        this.age = userAge;
        this.address = userAddress;
    }

    public getAddress():string {
        return this.address;
    }
};

let userObj5:User5 = new User5("Aritry", 21, "Asansol");
let _address:string = userObj5.getAddress();
console.log(_address);
