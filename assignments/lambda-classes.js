// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location
    }
    speak() {
       return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty,
        this.favLanguage = attr.favLanguage,
        this.catchPhrase = attr.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground,
        this.className = attr.className,
        this.favSubjects = attr.favSubjects
    }
    listSubjects() {
        return `First: ${this.favSubjects[0]}, Second: ${this.favSubjects[1]}, Third: ${this.favSubjects[2]}`;
    }
    prAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName,
        this.favInstructor = attr.favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(subject, student) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const britt = new Instructor({
    name: 'Britt',
    location: 'Canada',
    age: 32,
    favLanguage: 'JavaScript',
    specialty: 'Teaching',
    catchPhrase: 'Awesome!'
});

const josh = new Instructor({
    name: 'Josh',
    location: 'USA',
    age: 35,
    favLanguage: 'Pythont',
    specialty: 'Teaching',
    catchPhrase: 'Isn\'t that cool?!'
});

const kevin = new ProjectManager ({
    name: 'Kevin',
    location: 'Wisconsin',
    age: 30,
    favLanguage: 'React',
    specialty: 'Being a great Team Lead',
    catchPhrase: 'I do\'t want to take up all of your time tonight!',
    gradClassName: 'Web 17',
    favInstructor: 'Josh Knell'
});

const faye = new ProjectManager ({
    name: 'Faye',
    location: 'USA',
    age: 29,
    favLanguage: 'HTML',
    specialty: 'breakout rooms',
    catchPhrase: 'Good Job!',
    gradClassName: 'Web 18',
    favInstructor: 'Josh Knell'
});

const jessica = new Student ({
    name: 'Jessica',
    location: 'USA',
    age: 25,
    previousBackground: 'Cashier',
    className: 'Web 25',
    favSubjects: [
        'HTML',
        'CSS',
        'JavaScript'
    ]
})

const joe = new Student ({
    name: 'Joe',
    location: 'USA',
    age: 18,
    previousBackground: 'Highschool',
    className: 'Web 26',
    favSubjects: [
        'HTML',
        'CSS',
        'JavaScript'
    ]
})


console.log(britt.speak());
console.log(britt.demo('JavaScript'));
console.log(josh.grade(jessica, 'JavaScript'));
console.log(jessica.listSubjects());
console.log(jessica.prAssignment('JavaScript'));
console.log(joe.sprintChallenge('React'));
console.log(kevin.standUp('WEB25'));
console.log(faye.debugsCode('JavaScript', jessica));