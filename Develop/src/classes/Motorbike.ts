// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';


// DONE The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[]


  constructor(
    started: boolean, 
    currentSpeed: number, 
    vin: string, 
    color: string, 
    make: string, 
    model: string, 
    year: number, 
    weight: number, 
    topSpeed: number, 
    wheels: String[]
  ) {
    super(started, currentSpeed);
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // this.wheels = wheel;

    // if (this.wheels.length !== 2){
    //   [new Wheel(), new Wheel()];
    // }

    function wheelie() {
      console.log(`Motorbike ${make} ${model} is doing a wheelie!`)
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Started: ${this.started}`);
    console.log(`currentSpeed: ${this.currentSpeed}`);
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
  }


 
// TODO fix wheels 
  // DONE Declare properties of the Motorbike class
  // DONE The properties should include vin, color, make, model, year, weight, top speed, and wheels
  //DONE The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // DONE Create a constructor that accepts the properties of the Motorbike class
    // DONE The constructor should call the constructor of the parent class, Vehicle
    // DONE The constructor should initialize the properties of the Motorbike class
    // DONE The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not

  // DONE Implement the wheelie method
    // DONE The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // DONE Override the printDetails method from the Vehicle class
  // DONE The method should call the printDetails method of the parent class
  // DONE The method should log the details of the Motorbike
  // DONE The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}



// Export the Motorbike class as the default export
export default Motorbike;
