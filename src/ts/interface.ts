interface IUserInfo {
    age: number;
    userName: string;
}

function getUserInfo(user: IUserInfo): string {
    return `${user.userName}-${user.age}`;
}

var user = { userName: 'Akk', age: 28 };

var userInfo: string = getUserInfo(user);
console.log(userInfo);

//============================================

interface ISquareConfig {
    color?: string;
    width?: number;
}

function createSquareConfig(config: ISquareConfig): { color: string; area: number } {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = newSquare.area * config.width;
    }

    return newSquare;
}

let mySquare1 = createSquareConfig({ color: "red" });
console.log("mySquare1", mySquare1);
let mySquare2 = createSquareConfig({ width: 1510 });
console.log("mySquare2", mySquare2);
let mySquare3 = createSquareConfig({ color: "blue", width: 110 });
console.log("mySquare3", mySquare3);

//================================================================ 
console.log("javascript的search 函数 ");
interface SerachFun {
    (source: string, subString: string): boolean
}

let mySearch: SerachFun;
mySearch = function (soure: string, subString: string) {
    let result = soure.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}

let source: string = "this is ok";
let subString1: string = "ok";
let subString2: string = "not";
let result: boolean;
let result1 = mySearch(source, subString1);//从串"this is ok"中寻找子串"ok",返回true
let result2 = mySearch(source, subString2);//从串soure中找子串not ，返回false

console.log(`find substring '${subString1}' from string '${source}',result:${result1}`);
console.log(`find substring '${subString2}' from string '${source}',result:${result2}`);

//===================================================================================
console.log('array interface defind');
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Top", "sds"];

for (let i in myArray) {
    console.log(`array item:${myArray[i]}`);
}


//==============================================================================
console.log('class实现implements');

interface IClock {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements IClock {
    currentTime: Date;
    constructor(h: number, m: number) { }

    setTime(d: Date) {
        this.currentTime = d;
    }
}

interface IClock1 {
    new(hour: number, minute: number): void;
}

class Clock1 {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

let cs: IClock1 = Clock1;
let newClock = new cs(7, 30);
console.log('clock ', newClock);

//==============================================================================
console.log(`扩展接口 Extending Interfaces`);
interface IShape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface ISquare extends IShape, PenStroke {
    sideLength: number;
}

let square = <ISquare>{};
square.color = "red";
square.sideLength = 100;
square.penWidth = 50;

console.log(`square ${JSON.stringify(square)}`);

//=======================================================================================
console.log('Hybrid Types');
interface Counter {
    (start: number): string;//构造声明起始变量
    interval: number;
    reset(): void;
}

// let counter: Counter;
// counter(10);
// counter.interval = 5.0;
// counter.reset(); 

//==================================================================
console.log('class - constructor');
class UserInfo{
    userName: string;
    constructor(msg:string){
        this.userName = msg;
    }

    getUserInfo(){
        return `Welcome,${this.userName}`;
    }
}

let u = new UserInfo("逍遥子");
console.log(u.getUserInfo());

//==================================================================
