
class Person {
    constructor(name = 'Anonymous' , age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name,age);
        this.major=major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        
        return description;
    }
}

class Traveler extends Person {
    constructor(name , age , homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let getGreetingMessage = super.getGreeting();

        if(this.homeLocation) {
            getGreetingMessage += ` I am visting from ${this.homeLocation}.`;
        }

        return getGreetingMessage;
    }
}

const me = new Traveler('Andrew Mead',26,'Philadelphia');
console.log(me.getGreeting())

const other = new Traveler(undefined,undefined,'NoWhere');
console.log(other.getGreeting())