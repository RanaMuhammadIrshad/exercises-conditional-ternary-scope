jkb # Programming Basics: Conditionals Part 3

Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)

**Print your results to the console**

1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

- 1a) Calculate the average score for each team.
- 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
- 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
- 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
- 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

### Ternary Operator

- Rewrite this if using the conditional operator '?':

```js
let result;
let a = 3;
let b = 6;
if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

console.log(result);
```

- Rewrite the code below to use the ternary operator (?:) (you should be able to condense the if-else logic into one line).

```js
let score = 42;
let msg = "";

if (score > 1337) {
  msg = "This is a new highscore!";
} else {
  msg = "You need more points to beat the highscore!";
}
console.log(msg);
```

- Rewrite if..else using multiple ternary operators '?'.

  For readability, it’s recommended to split the code into multiple lines.

```js
let message;
let login = "Employee";
if (login == "Employee") {
  message = "Hello";
} else if (login == "Director") {
  message = "Greetings";
} else if (login == "") {
  message = "No login";
} else {
  message = "No login";
}
console.log(message);
```

# Programming Basics: Ternary

These exercises are designed to make you more comfortable with the ternary operator.

1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".

6. Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.

- 30
- 939
- 40.9


# On the block

#### 1. Updater
* Create a new variable and call it `determiner`
* Give `determiner` a random value between -100 and 100 (change it to experiment)
* Create a 2nd variable called `x`
* Depending on the value of `determiner`, assign a value to `x`. 
    - If `determiner` is less than 0, `x`'s value should be "Less than 0"
    - If `determiner` is greater or equal 0, `x`'s value should "Greater or equal to 0".

#### 2. New Variables 
* Create a new variable called `updater`
* Depending on the value of `determiner`
    * If determiner is greater of equal to 0
        * set `updater` to "Greater or equal to 0"
        * create another variable called `message`
        * assign a value of "Positive Integer" to `message`
        * print out `message`. 
    * If determiner is less than 0, assign `updater`' the value "Less than 0".
* Print out the value of `updater`

* **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

#### 3. Ternary v.s. If statement 
* When do you use a ternary v.s. an if statement? Give an example.
