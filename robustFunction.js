function getPerson(person){
    try{ //try method
        if(typeof person !== 'object' || !person.name || !person.age ){
            throw new Error('Invalid Parameter type!')
        }
        return `Name: ${person.name}, age: ${person.age}`;//returning a object format
    }catch(error){ //catch method
        return error.message;
    }
}

console.log(getPerson({name: 'Dheeraj',age: '18'}));//name: Dheeraj, age: 18
console.log(getPerson({ name: "Dheeraj" })); //Invalid Parameter type!
console.log(getPerson(["name", "Dheeraj"]));//Invalid Parameter type!
