// CODE here for your Lambda Classes
class Person{
    constructor(p){
        this.name = p.name;
        this.age = p.age;
        this.location = p.location;

    }
    speak(){
        console.log(`Hello my name is ${this.name}, and I am from ${this.location}. `);
    }
}

class Instructor extends Person{
    constructor(i){
        super(i);
        this.specialty = i.specialty;
        this.favLanguage = i.favLanguage;
        this.catchPhrase = i.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(s){
        super(s);
        this.previousBackground = s.previousBackground;
        this.className = s.className;
        this.favSubjects =s.favSubjects;

    }
    listsSubjects(){
        console.log("favSubjects:" + "\n");
        this.favSubjects.forEach(function(item){
            console.log(item + "\n");
        });
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManage extends Instructor{
    constructor(pm){
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
        
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}