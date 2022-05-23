/* 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

- 1a) Calculate the average score for each team.
- 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
- 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
- 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
- 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws. */

let avgTeamAleeza = (89 + 120 + 103) / 3;
let avgTeamLis = (116 + 94 + 123) / 3;

// Test score to check 1-c condition
/*  let avgTeamAleeza = (89+120+151)/3;
let avgTeamLis = Math.floor(116+94+123)/3;  */

// Match draw scores
/* let avgTeamAleeza = (89+120+124)/3;
let avgTeamLis = (116+94+123)/3;  */

if (avgTeamAleeza > avgTeamLis) {
  console.log(
    `The average score of Team Aleeza is ${avgTeamAleeza} and the average score of team lis is ${avgTeamLis}: So, team Aleeza Wins!`
  );
} else if (avgTeamLis > avgTeamAleeza) {
  console.log(
    `The average score of Team Aleeza is ${avgTeamAleeza} and the average score of team lis is ${avgTeamLis}: So, team Lis Wins!`
  );
} else {
  console.log(
    `The average score of Team Aleeza is ${avgTeamAleeza} and the average score of team lis is ${avgTeamLis}: So, The Match is draw`
  );
}

let avgTeamMary = (97 + 134 + 105) / 3;

// checking the condition if all ahave same average scores

/* let avgTeamAleeza = (100+100+100)/3;
let avgTeamLis = (100+100+100)/3; 
let avgTeamMary = (100+ 100+100)/3; */

if (avgTeamMary > avgTeamLis && avgTeamAleeza > avgTeamMary) {
  console.log(
    `The average scores of Teams of Aleeza, Lis and Marry are ${avgTeamAleeza}, ${avgTeamLis} and ${avgTeamMary} respectively, So team Aleeza Wins!`
  );
} else if (avgTeamLis > avgTeamAleeza && avgTeamLis > avgTeamMary) {
  console.log(
    `The average scores of Teams of Aleeza, Lis and Marry are ${avgTeamAleeza}, ${avgTeamLis} and ${avgTeamMary} respectively, So team Lis Wins!`
  );
} else if (avgTeamMary > avgTeamAleeza && avgTeamMary > avgTeamLis) {
  console.log(
    `The average scores of Teams of Aleeza, Lis and Marry are ${avgTeamAleeza}, ${avgTeamLis} and ${avgTeamMary} respectively, So team Mary Wins!`
  );
} else {
  console.log(
    `The average scores of Teams of Aleeza, Lis and Marry are ${avgTeamAleeza}, ${avgTeamLis} and ${avgTeamMary} respectively, So match is draw!`
  );
}

////////////////////////////

// Rewrite this if using the conditional operator '?':

/* let result;
let a=3;
let b=6;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

/* _________________________________ */
let a = 3;
let b = 6;

//write your code here
let result = a + b < 4 ? "Below" : "Over";
console.log(result);

/* _________________________________ */

//Rewrite the code below to use the ternary operator (?:) (you should be able to condense the if-else logic into one line).
/* if (score > 1337)
{
    msg = "This is a new highscore!";
}
else
{
    msg = "You need more points to beat the highscore!";
} */

/* _________________________________ */

let score = 42;
let msg = "";

//write your code here
score > 1337
  ? (msg = "This is a new highscore!")
  : (msg = "You need more points to beat the highscore!");
console.log(msg);

/* _________________________________ */

// Rewrite if..else using multiple ternary operators '?'.
//For readability, it’s recommended to split the code into multiple lines.

/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

/* _________________________________ */

//write your code here
let message;
let login = "Director";
login == "Employee"
  ? (message = "Hello")
  : login == "Director"
  ? (message = "Greetings")
  : login == ""
  ? (message = "No login")
  : (message = "Nothing");

console.log(message);

/* _________________________________ */
/////////////////////////

/* 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!' */
const isDog = true;
const printMessage = isDog ? "pat, pat" : "find me a dog to pat!";
console.log(printMessage);
/* 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'. */
const speedCheck = 50;

const speedMessage =
  speedCheck >= 50
    ? `'you're going too fast!'`
    : `'You're driving below the speed limit, Oma'`;
console.log(speedMessage);

/* 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
 */

const age = 100;
const ageMessage = age < 16 ? "serve butter beer" : "serve beer";
console.log(ageMessage);

/* 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00". */

const isStudent = true;

const ticketCost = isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log(ticketCost);

/* 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".  */
const okMarie = "cake";
const eatMessage = okMarie === "cake" ? "Let them eat cake" : "Oh, bother";
console.log(eatMessage);
/* 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
 * 30
 * 939
 * 40.9 */

let num1 = 30;
let evenNum1 = num1 % 2 === 0 ? "EVEN" : "ODD";
console.log(`${num1} is : ${evenNum1}`);

let num2 = 939;
let evenNum2 = num2 % 2 === 0 ? "EVEN" : "ODD";
console.log(`${num2} is : ${evenNum2}`);

let num3 = 40.9;
let evenNum3 = num3 % 2 === 0 ? "EVEN" : "ODD";
console.log(`${num3} is : ${evenNum3}`);

///////////////////
/* #### 1. Updater
* Create a new variable and call it `determiner`
* Give `determiner` a random value between -100 and 100 (change it to experiment)
* Create a 2nd variable called `x`
* Depending on the value of `determiner`, assign a value to `x`. 
    - If `determiner` is less than 0, `x`'s value should be "Less than 0"
    - If `determiner` is greater or equal 0, `x`'s value should "Greater or equal to 0". */

let determiner = 100;
let x;

if (determiner < 0) {
  x = "Less than 0";
}
if (determiner >= 0) {
  x = "Greater or equal to 0";
}
console.log(`The x value: ${x}`);

/* #### 2. New Variables
 * Create a new variable called `updater`
 * Depending on the value of `determiner`
 * If determiner is greater of equal to 0
 * set `updater` to "Greater or equal to 0"
 * create another variable called `message`
 * assign a value of "Positive Integer" to `message`
 * print out `message`.
 * If determiner is less than 0, assign `updater`' the value "Less than 0".
 * Print out the value of `updater` */

let updater;
if (determiner >= 0) {
  updater = "Greater or equal to 0";
  let message = "Positive Integer";
  console.log(`The message value: ${message}`);
}

/* console.log(`The message value: ${message}`); */
// as variable message is defined in block {} so it have a block sope and can can be accessed out of its if block. Whereas the variable determiner has global scope and be accessed everywhere
if (determiner < 0) {
  updater = "Less than 0";
}
console.log(`The updater value: ${updater}`);

/* #### 3. Ternary v.s. If statement
 * When do you use a ternary v.s. an if statement? Give an example. */

// Ternary operator is similar to if-else statement but with ternary operator we can write code in one line compared to if-else statement
// Ternary operator is an expression and we can write it in template litzerals like as below.
let age1 = 18;
console.log(`Can I drive? ${age1 >= 18 ? "YES" : "NO"}`);

// But we can not write if else statement in template literal as it is statement, and only expressions can be written in template literal

/* age1 = 18;
    console.log(`Can I drive? ${if (age1 >= 18) {
        console.log(`I can drive`);
    }
    else {
        console.log(`I can not drive`);
    }
    }`);  // here we get error */
