// class RailwayForm {
//     submit() {
//         alert(this.name + ": Your form is submitted for train number " + this.trainno);
//     }
//     cancel() {
//         alert(this.name + ": this form is cancelled for train number " + this.trainno);
//     }
//     fill(givenname, trainno) {
//         this.name = givenname
//         this.trainno = trainno
//     }

// }

// let harryForm = new RailwayForm();
// harryForm.fill("Harry", 420921);


// let rohanForm = new RailwayForm();
// rohanForm.fill("Rohan", 222420);

// harryForm.submit()
// rohanForm.submit()
// rohanForm.cancel()


// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// const myCar1 = new Car("Ford", 1992);
// const myCar2 = new Car("Audi", 1600);

// document.getElementById("demo").innerHTML = myCar1.name + " " + myCar2.name

// Create a Class method named "age", that returns the Car

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age() {
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }
// const myCar = new Car("Ford", 2014);
// document.getElementById("demo").innerHTML =
//     "My car is " + myCar.age() + " years old.";


// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;

//     }
//     age() {
//         const date  = new Date();
//         return date.getFullYear() - this.year;
//     }


//     }


// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     static hello(x) {
//         return "Hello " + x.name;
//     }
// }

// const myCar = new Car("Ford");
// document.getElementById("demo").innerHTML = Car.hello(myCar);

class person {
    constructor(name, age) {
        this.name = 'DefaultName';
        this.age = 0;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}
        and I am ${this.age} years old.`);

    }
}

const person = new person();

person.sayHello();




// console.log(`Hello, my name is ${this.name}
// and I am ${this.age} years old.`);