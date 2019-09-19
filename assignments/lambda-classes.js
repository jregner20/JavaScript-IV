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

///////////////   INSTRUCTORS  ///////////////////////////////////////////////

    const roxas = new Instructor({
        name: 'Roxas',
        age: 'Eternal',
        location: 'Realm',
        specialty: 'Chemistry',
        favLanguage: 'Filipino',
        catchPhrase: 'Hey man!'
    });

    const puchner = new Instructor({
        name: 'Puchner',
        age: 50,
        location: 'Room 3',
        specialty: 'Anatomy',
        favLanguage: 'Italian',
        catchPhrase: 'Everybody go to class!'
    });

    const paloucek = new Instructor({
        name: 'Ed',
        age: 45,
        location: 'Room 2',
        specialty: 'History',
        favLanguage: 'English',
        catchPhrase: ''
    });

///////////   PROJECT MANAGERS     //////////////////////////////////////

    const erickson = new PM({
        name: 'Will',
        age: 32,
        location: 'Office',
        specialty: 'Wisdom',
        favLanguage: 'Latin',
        catchPhrase: 'Oh great',
        gradClassName: 'CS1',
        favInstructor: 'Hauser',
    });

    const schmidt = new PM({
        name: 'Don',
        age: 80,
        location: 'Chapel',
        specialty: 'Religion',
        favLanguage: 'German',
        catchPhrase: '',
        gradClassName: 'CS2',
        favInstructor: 'Mitchell'
    });
    
    const strubb = new PM({
        name: 'Sam',
        age: 30,
        location: 'Nether',
        specialty: 'Enforcer',
        favLanguage: 'Evil',
        catchPhrase: 'Yes, Dr. E',
        gradClassName: 'CS3',
        favInstructor: 'Dr E'
    });

    ///////////////////      STUDENTS   //////////////////////////////////////

    const paul = new Student({
        name: 'Paul',
        age: 24,
        location: 'Tosa',
        specialty: 'Gambling',
        favLanguage: 'English',
        catchPhrase: 'Put that down big boy!',
        previousBackground: 'Sales',
        className: 'CS4',
        favSubjects: ['Gambling', 'Basketball', 'Partying']
    });

    const simon = new Student({
        name: 'Simon',
        age: 24,
        location: 'Mukwonago',
        specialty: 'Music',
        favLanguage: 'English',
        catchPhrase: 'Ohhhhh!',
        previousBackground: 'Backline Tech',
        className: 'CS5',
        favSubjects: ['Music', 'Basketball', 'Smoking']
    });

    const pat = new Student({
        name: 'Pat',
        age: 25,
        location: 'Webster',
        specialty: 'Working and ignoring friends',
        favLanguage: 'English',
        catchPhrase: 'Demita',
        previousBackground: 'Construction',
        className: 'CS6',
        favSubjects: ['Construction', 'Ignoring his boys', 'Working']
    });