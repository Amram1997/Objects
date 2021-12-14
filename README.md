## Objects

## Source map

- Source
  - 1.budget.js
  - 2.upvotes.js
  - 3.passArguments.js
  - 4.index.js
  - 5.swapping.js
  - 6.takeArguments.js
  - 7.Task.js
  - 8.twoArrays.js
  - 9.cityFacts.js

---

1. Concatenate the two arrays

```js
  const arr1 = [1, 2, 3, 4];
  const arr2 = [5, 6, 7, 8, 9];

  const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

[Decision](./twoArrays.js)

---

2. How to take arguments in sum function?

```js
function sum() {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}

sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
```

[Decision](./takeArguments.js)

---

3. How to pass arguments in sum function?

```js
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum()); // prints 6
```

[Decision](./passArguments.js)

---

4. Swapping Values using the Destructuring Assignment

```js
let a = 3;
let b = 6;

console.log(a); //6
console.log(b); //3
```

[Decision](./Swapping.js)

---

Given an object containing counts of both upvotes and downvotes, return what vote count should be
displayed. This is calculated by subtracting the number of downvotes from upvotes.

```js
getVoteCount({ upvotes: 13, downvotes: 0 }); //  13
getVoteCount({ upvotes: 2, downvotes: 33 }); //  -31
getVoteCount({ upvotes: 132, downvotes: 132 }); //  0
```

[Decision](./upvotes.js)

---

Create a function that takes an object as an argument and returns a string with facts about the city. The city
facts will need to be extracted from the object's three properties:

```js
cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe",
}); //  "Paris has a population of 2,140,526 and is situated in Europe"
```

[Decision](./cityFacts.js)

---

The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on
needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

```js
fiftyThirtyTwenty(10000); //  { "Needs": 5000, "Wants": 3000, "Savings":
2000 }
fiftyThirtyTwenty(50000); //  { "Needs": 25000, "Wants": 15000,
"Savings": 10000 }
fiftyThirtyTwenty(13450); //  { "Needs": 6725, "Wants": 4035, "Savings":
2690 }
```

[Decision](./budeget.js)
