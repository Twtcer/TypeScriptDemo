function getUserInfo(user) {
    return `${user.userName}-${user.age}`;
}
var user = { userName: 'Akk', age: 28 };
var userInfo = getUserInfo(user);
console.log(userInfo);
function createSquareConfig(config) {
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
let mySearch;
mySearch = function (soure, subString) {
    let result = soure.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
let source = "this is ok";
let subString1 = "ok";
let subString2 = "not";
let result;
let result1 = mySearch(source, subString1); //从串"this is ok"中寻找子串"ok",返回true
let result2 = mySearch(source, subString2); //从串soure中找子串not ，返回false
console.log(`find substring '${subString1}' from string '${source}',result:${result1}`);
console.log(`find substring '${subString2}' from string '${source}',result:${result2}`);
//===================================================================================
console.log('array interface defind');
let myArray;
myArray = ["Top", "sds"];
for (let i in myArray) {
    console.log(`array item:${myArray[i]}`);
}
//==============================================================================
console.log('class实现implements');
class Clock {
    constructor(h, m) { }
    setTime(d) {
        this.currentTime = d;
    }
}
class Clock1 {
    constructor(h, m) { }
}
let cs = Clock1;
let newClock = new cs(7, 30);
console.log('clock ', newClock);
//==============================================================================
console.log(`扩展接口 Extending Interfaces`);
let square = {};
square.color = "red";
square.sideLength = 100;
square.penWidth = 50;
console.log(`square ${JSON.stringify(square)}`);
//=======================================================================================
console.log('Hybrid Types');
let counter;
counter(10);
counter.interval = 5.0;
counter.reset();
//==================================================================
console.log('class - constructor');
class UserInfo {
    constructor(msg) {
        this.userName = msg;
    }
    getUserInfo() {
        return `Welcome,${this.userName}`;
    }
}
let u = new UserInfo("逍遥子");
console.log(u.getUserInfo());
//==================================================================
//# sourceMappingURL=interface.js.map