enum Country {
    india = "India",
    australia = "Australia",
    canada = "Canada",
    germany = "Germany",
    france = "France"
}
class User4 {
    public name:string;
    public age:number;
    private address:string;
    public country:string;

    constructor (fullName:string, userAge:number, userAddress:string, userCountry:string) {
        this.name = fullName;
        this.age = userAge;
        this.address = userAddress;
        this.country = userCountry;
    }
};
let userObj4:User4 = new User4("Aritry", 21, "Asansol", Country.india);
console.log(userObj4.country);