class employee{
    constructor(name,position,salary){
        this.name = salary;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return this.salary
    }
}

const employee1 = new employee('Dheeraj','software engineer',80000);
console.log(employee1.getSalary());