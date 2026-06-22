class Car {
    // CAB

    // Constructor
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }

    // Attribute

    // Behavior
    drive() {
        console.log("I am driving", this.name);
    }

}

const tesla = new Car("Model S");
// console.log(tesla.name);
tesla.drive();

const i10 = new Car("grand i10");
i10.drive();