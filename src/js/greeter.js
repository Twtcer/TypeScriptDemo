var Greeter = /** @class */ (function () {
    function Greeter(person) {
        this.person = person;
    }
    Greeter.prototype.gette = function () {
        return "Hello , " + this.person.FullName;
    };
    return Greeter;
}());
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.FullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var user = new Student("san", "M.", "zhang");
var greeter = new Greeter(user);
document.body.textContent = greeter.gette();
