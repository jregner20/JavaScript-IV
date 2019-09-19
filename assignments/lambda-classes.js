// CODE here for your Lambda Classes

class Parent{
    constructor(par){
        this.name= par.name,
        this.age= par.age,
        this.location= par.location
    }
    speak(){
        return `Hello my name is Fred, I am from Bedrock where ${this.name} and ${this.location} are the object's own props`;
    }
}

