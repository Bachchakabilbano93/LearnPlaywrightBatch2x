interface Executable {
    name: string;
    run(): void;
    getStatus(): string;
}

class TestCase implements Executable {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    run(): void {
        console.log("[RUN] " + this.name);
    }
    getStatus(): string {
        return "PASS";
    }
    getErrorMessage(): void {
        console.log("ERROR");
    }
}

// let tc: Executable = new TestCase("Verify login redirect"); 
/* Here tc is a reference variable of type interface but points to an instance of the class. If you add a method like 
getErrorMessage() to TestCase but omit it from Executable, calling tc.getErrorMessage() will trigger a compile-time error. The TypeScript compiler will state that the property does 
not exist on type Executable.
How to Bypass This Restriction
If you absolutely need to access a class-specific method while keeping the variable typed as the interface, you must use type casting (type assertion):
Cast tc to TestCase to access the class method
(tc as TestCase).getErrorMessage();
*/
// tc.getErrorMessage(); // Property 'getErrorMessage' does not exist on type 'Executable'.
let tc = new TestCase("Verify login redirect");
/* Here tc is a reference variable to the class. Type Inference. If you add a new property or method to the TestCase class that is not 
part of the Executable interface, you can access it directly using tc.
*/
tc.run();
tc.getErrorMessage();