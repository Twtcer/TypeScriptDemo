
class Greeter {
    greeting: string; 
    person:Person; 
    constructor(person: Person) {
        this.person = person;
    }
    gette() {
        return "Hello , " + this.greeting;
    }
}

interface Person {
    FirstName: string;
    LastName: string;
}

class Student {

    FirstName: string;
    LastName: string;
    FullName: string;

    constructor(firstName: string, middleInitial: string, lastName: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.FullName = firstName + " " + middleInitial + " " + lastName;
    }
}

var user = new Student("san", "M.", "zhang");

var greeter = new Greeter(user);

document.body.textContent = greeter.gette();

