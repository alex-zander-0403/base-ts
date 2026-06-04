// interface Car {
//   maxSpeed: number;
//   brand: string;
// }

// interface User {
//   userName: "string";
//   age: number;
// }

// function fn1(data: Car | User) {
//   //

//   return;
// }

// ==============================================

interface Dog {
  tail: boolean;
  bark(): void;
}
interface Cat {
  whiskers: number;
  meow(): void;
}

function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}

// Использование
if (isDog(pet)) {
  pet.bark(); // pet — Dog
} else {
  pet.meow(); // pet — Cat (TS понимает, что если не Dog, то Cat)
}
