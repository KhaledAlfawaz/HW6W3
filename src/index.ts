interface Car {
  make: string;
  model: string;
  year: number;
  honk(): void;
}

let car1: Car = {
  make: 'toyota',
  model: 'camry',
  year: 2019,
  honk() {
    console.log(`peeeeeeep from ${car1.model}`);
  },
};

let car2: Car = {
  make: 'hyundai',
  model: 'sonata',
  year: 2022,
  honk() {
    console.log(`peeeeeeep from ${car2.model}`);
  },
};

let car3: Car = {
  make: 'kia',
  model: 'k5',
  year: 2021,
  honk() {
    console.log(`peeeeeeep from ${car3.model}`);
  },
};

console.log(car1);
console.log(car2);
console.log(car3);

car1.honk();
car2.honk();
car3.honk();

console.log(car1.year);
console.log(car2.year);
console.log(car3.year);

console.log(car1.model);
console.log(car2.model);
console.log(car3.model);
