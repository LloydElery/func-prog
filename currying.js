// Currying

function add(x, y, z) {
  return x + y + z;
}

const curryAdd = (x) => (y) => (z) => x + y + z;

/* console.log(add(1, 2, 3)); */
// -> 6

/* console.log(curryAdd(1)(2)(3)); */
// -> 6

const inRange = (min) => (max) => (value) => value >= min && value <= max;
const isAdult = inRange(18)(65);

console.log(isAdult(20));

/**
 * iA(20)
 * ->
 */
