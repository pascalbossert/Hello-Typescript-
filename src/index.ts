import { isTriplet } from "./pythagoras";

let lang: string = "TypeScript";
let greeting: string = `Hello, ${lang}!`;
console.log(greeting);

function findTriplets(limit: number) {
  for (let a = 1; a <= limit; a++) {
    for (let b = a; b <= limit; b++) {
      for (let c = b; c <= limit; c++) {
        if (isTriplet(a, b, c)) {
          console.log(`Triplet found: (${a}, ${b}, ${c})`);
        }
      }
    }
  }
}

// Testlauf mit einer Begrenzung von 20
findTriplets(20);
