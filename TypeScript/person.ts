interface Person {
    name: string;
    lastName: string;
    age: number;
    greet:() => string;
}

function createPerson(name: string, lastName: string, age: number): Person {
    return {
        name,
        lastName,
        age,
        greet: function() {
            return `Hello, my name is ${this.name} ${this.lastName} and I am ${this.age} years old.`;
        }
    }
}

const person = createPerson("John", "Doe", 30);
console.log(person.greet()); // Output: "Hello, my name is John Doe and I am 30 years old."