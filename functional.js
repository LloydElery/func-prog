// NUMBER

const succ = (num) => (fn, x) => fn(num(fn, x));

// Kommer köras 0 ggr och representerar värdet 0 om talet inte fanns tillgängligt.
const Zero = (fn, x) => x;
const One = succ(Zero);
const Two = succ(One);

function toNumber(num) {
  return num(function (acc) {
    return acc + 1;
  }, 0);
}

/* console.log(toNumber(Zero));
console.log(toNumber(One));
console.log(toNumber(Two)); */

// BOOLEANS

const True = (trueValue, _) => trueValue;
const False = (_, falseValue) => falseValue;

const toBoolean = (bool) => bool(true, false);
/* 
console.log(toBoolean(True));
console.log(toBoolean(False)); */

const not = (bool) => bool(false, true);

/* console.log(not(True));
 */

const and = (leftBool, rightBool) => leftBool(rightBool, leftBool);
const or = (leftBool, rightBool) => leftBool(leftBool, rightBool);
/* 
console.log(toBoolean(or(False, True)));
// -> true
console.log(toBoolean(or(False, False)));
// -> false
 */
/* 
console.log(toBoolean(and(True, False)));
// -> false
console.log(toBoolean(and(True, True)));
// -> true
 */

// PAIRS

const Pair = (left, right) =>
  function (destructurePair) {
    return destructurePair(left, right);
  };

const pair = (left, right) => {
  console.log(left);
  console.log(right);
};

const first = (pair) => pair((f, _) => f);
const second = (pair) => pair((_, f) => f);
/* 
console.log(first(Pair(3, 9)));
// -> 3
console.log(second(Pair(1, 49)));
// -> 49
 */

// LISTS

const List = (head, tail) => (destructureNode, _) =>
  destructureNode(head, tail);
const Nil = (_, destructureNil) => destructureNil();

function head(list) {
  return list(
    function (h, _) {
      return h;
    },
    function () {
      throw new Error('Empty list has no head');
    }
  );
}

function tail(list) {
  return list(
    function* (_, t) {
      return t;
    },
    function () {
      throw new Error('Empty list has no tail');
    }
  );
}

function toArray(list) {
  return list(
    function (head, tail) {
      return [head].concat(toArray(tail));
    },
    function () {
      return [];
    }
  );
}

function concat(first, second) {
  return first(
    function (head, tail) {
      return List(head, concat(tail, second));
    },
    function () {
      return second;
    }
  );
}

const newList = List(8, Nil);

console.log(toArray(newList));

function append(val, list) {
  return list(
    function (head, tail) {
      return List(head, append(val, tail));
    },
    function () {
      return List(val, Nil);
    }
  );
}

const longerList = append(3, newList);

console.log(toArray(longerList));
// -> [ 8, 3 ]
