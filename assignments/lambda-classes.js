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
        demo(subject){
            return `Today we are learning about ${subject}`;
    }
        grade(name, subject){
            return `${name} receives a perfect score on ${subject}`
        }
}

        class PM extends Instructor{
            constructor(pm){
                super(pm);
                this.gradClassName= pm.gradClassName,
                this.favInstructor= pm.favInstructor
            }
            standUP(name, channel){
                return `${name} announces to ${channel}, @channel standy times!`
            }
            debugsCode(name, student, subj){
                return `${name} debugs ${student}'s code on ${subj}`;
            }
        }

    class Student extends Person{
        constructor(stud){
            super(stud);
            this.previousBackground= stud.previousBackground,
            this.className= stud.className,
            this.favSubjects= stud.favSubjects
        }
        listsSubjects(){
            let returnstring = '';
            this.favSubjects.forEach(list => {
                returnstring += `I like ${list}! \n`;
            })
            return returnstring;
        }
        PRAssignment(name, subject){
            return `${name} has submitted a PR for ${subject}`;
        }
        sprintChallenge(name, subject){
            return `${name} has begun sprint challenge on ${subject}`
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
        catchPhrase: 'Whoever did that, I was not phased!'
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

   console.log(roxas.speak());

////////// INSTRUCTORS ///////////
   
    console.log(roxas.demo('Chemistry'));
    console.log(puchner.demo('Anatomy'));
    console.log(paloucek.demo('History'));
    console.log(roxas.grade('Paul', "Chemistry"));
    console.log(puchner.grade('Simon', 'Anatomy'));
    console.log(paloucek.grade('Pat', 'History'));

/////////  PROJECT MANAGERS ////////

    console.log(erickson.standUP('Will', 'Web24'));
    console.log(schmidt.standUP('Don', 'Web23'));
    console.log(strubb.standUP('Sam', 'Web22'));
    console.log(erickson.debugsCode('Will', 'Paul', 'HTML'));
    console.log(schmidt.debugsCode('Don', 'Simon', 'CSS'));
    console.log(strubb.debugsCode('Sam', 'Pat', 'JavaScript'));

///////   STUDENTS  //////////
    
    console.log(paul.listsSubjects(paul.favSubjects));
    console.log(simon.listsSubjects());
    console.log(pat.listsSubjects());

    console.log(paul.PRAssignment('Paul', 'Chemistry'));
    console.log(simon.PRAssignment('Simon', 'Anatomy'));
    console.log(pat.PRAssignment('Pat', 'History'));

    console.log(paul.sprintChallenge('Paul', 'HTML'));
    console.log(simon.sprintChallenge('Simon', 'CSS'));
    console.log(pat.sprintChallenge('Pat', 'JavaScript'));
