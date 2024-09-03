function LogParameters(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`The parameter at index ${parameterIndex} in method ${propertyKey} `);
}

class DemoClass {
    greet(@LogParameters message: string) {
        console.log(message);
    }
}

const demoClass = new DemoClass();
demoClass.greet("Hello"); // The parameter at index 0 in method greet