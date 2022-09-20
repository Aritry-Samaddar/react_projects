class Maths {
    num:number;
    public AddNumber(a:number, b:number, c:number=0): number {
        return a+b+c;
    }

    public multiplyNumber(a:number, b:number) {
        // let res:number = a*b;
        // return res;

        return a*b;
    }

    public subtractNumber(a:number, b:number) {
        this.num = a - b;
    }
}
let mathObj:Maths = new Maths();
let addedNum:number = mathObj.AddNumber(3, 4, 2);
let multipliedNum:number = mathObj.multiplyNumber(2, 3);
mathObj.subtractNumber(8, 4);
console.log(addedNum);
console.log(multipliedNum);
console.log(mathObj.num);