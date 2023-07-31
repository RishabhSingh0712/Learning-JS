class User {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User {
    constructor (username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
addCourse(){
    console.log(`A new course was added by ${this.username}`);
}
}
const chai = new Teacher("chai","chai@xyz.com" ,"12354")
chai.addCourse()

chai.logme()
const Rishabh = new User ("Rishabh")
Rishabh.logme()
console.log(Rishabh instanceof User);