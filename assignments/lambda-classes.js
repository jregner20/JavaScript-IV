// CODE here for your Lambda Classes

class Person{
    constructor(per){
        this.name= per.name,
        this.age= per.age,
        this.location= per.location
    }
    speak(){
        return `Hello my name is Fred, I am from Bedrock where ${this.name} and ${this.location} are the object's own props`;
    }
}

    class Instructor extends Person{
        constructor(inst){
            super(inst);
            this.specialty= inst.specialty,
            this.favLanguage= inst.favLanguage,
            this.catchPhrase= inst.catchPhrase
        }
        demo(){

    }
}

        class PM extends Instructor{
            constructor(pm){
                super(pm);
                this.gradClassName= pm.gradClassName,
                this.favInstructor= pm.favInstructor
            }
            standUP(channel){
                return `${this.name} announces to ${channel}, @channel standy times!`
            }
            debugsCode(obj, subj){
                return `${this.name} debugs ${student.name}'s code on ${this.subject}`;
            }
        }

    class Student extends Person{
        constructor(stud){
            super(stud);
            this.previousBackground,
            this.className,
            this.favSubjects
        }
        listsSubjects(){
            return `${this.favSubjects}`;
        }
        PRAssignment(subject){
            return `${this.Student.name} has submitted a PR for ${subject}`;
        }
        springChallenge(subject){
            return `${this.Student.name} has begun sprint challenge on ${subject}`
        }
    }