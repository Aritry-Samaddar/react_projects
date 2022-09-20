let message:string = "Hello";
let no:number = 123;
let flag:boolean = true;
let h:any = 123;
h = "aritry";
const names:String[] = ["aritry", "tom", "jerry"];
names.push("Nick");
let d:String = names[names.length - 1];
console.log(d);
const names1:readonly string[] = ["aritry"];
console.log(names1[0]);
let ouMultiple:readonly [string, boolean, number, string, boolean] = ["NA", true, 123, "NA", true];
ouMultiple = ["Aritry", true, 0, "Mark", false];
console.log(ouMultiple[2]);
let Emp:{name:string, age:number, address:string}=
{
    name:"Aritry",
    age:21,
    address:"Asansol"
};
Emp.name = "Oreo";
console.log("Name: " + Emp.name + ", Age: " + Emp.age + ", Address: " + Emp.address);
enum Months {
    Jan = "Jan",
    Feb = 12,
    Mar,
    Apr,
    May = 80,
    Jun = "June",
    Jul = 1
}
console.log(Months.Apr);
interface IDimension {
    width:number,
    height:number
}
interface ABC {
    
}
interface ICircle extends IDimension, ABC {
    radius:number
}
// Object (anonymous)
const Rectangle: ICircle = {
    width:50,
    height:100,
    radius:34.6
};
// console.log(message);
// console.warn(message);
// console.trace(message);
// console.info(message);
class Employee {
    name:string = "";
    age:number = 21;
    address:string = "";
}