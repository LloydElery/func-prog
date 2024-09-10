// Rekursion

function printSomething(number) {
  for (let i = number; i > number.length; i--) {
    console.log(i);
  }
}
/* printSomething(2); */

function printRecursion(number) {
  if (number < 0) {
    return;
  } else {
    console.log(number);
    printRecursion(number - 1);
  }
}
/* printRecursion(3); */

/*
Nummret som matas in som parameter är 3.
pR körs fösta gången, värdet är 3.
    `printRecursion(3-1)`
Resultatet är nu 2, och funktionen körs igen tack vare 
    `(number < 0)`
Funktionen körs direkt igen med det nya värdet på `number` ända tills värdet är mindre än 0 `number < 0`

    pR(3)
    ->pR(2)
        ->pR(1)
            ->pR(0)

*/

function addTogether(number) {
  if (number > 0) return number + addTogether(number - 1);
  return number;
}

console.log(addTogether(3));

/**
 * aT(3) // number = 3
 *  -> aT(2) // number = 5
 *      -> aT(1) // number = 6
 *          -> aT(0) // returns number = 6
 */
