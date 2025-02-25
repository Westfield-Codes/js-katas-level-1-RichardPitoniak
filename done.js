/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */
var color = "blue";
alert("My favorite color is " + color);

/* Prompt */
var color = prompt ("What is your favorite color?");
alert (color + " is a nice color ");
/* Prompt with Conditional */

var userColor = prompt ("What is your favorite color? ");

if (userColor == "black") alert ("Black isn't really a color");

else alert (userColor + "is a nice color");

/* AGE */

/* No Prompt */


/* Prompt */
/* Var Alert Prompt */
// make an integer variable for age, prompt user for their age
var age = prompt ("what is your age?");
// make a string variable for name, prompt user for their name
var aaaaa = prompt ("what's your name");
// alert name is age years old
alert (aaaaa + " is " + age + " years old");

/* Prompt with Conditional */

var age = prompt ("How old are you?");

var name = prompt ("What is your name");

if (age > 16) alert ("you don't look that old");

else alert (name + " is " + age + " years old" ); 

/* ICE CREAM */

/* No Prompt */


/* Prompt */

var flavor = prompt("what is your favorite ice cream flavor?");
var scoops = prompt ("how many scoops of that do you want?")
alert ("you want " + scoops + " of " + flavor);

/* Prompt with Conditional */
var flavor = prompt ("What is your favorite ice cream flavor?");

var scoops = prompt ("How many scoops of that do you want?");

if (scoops > 3) alert ("the max is 3 scoops");

else alert("You want " + scoops + " of " + flavor);

/* PET */

/* No Prompt */


/* Prompt */
/* Var Alert Prompt */
// make a variable for a pet type, prompt user for it 
var petType = prompt ("What type of animal is your pet?");
// make a variable for a pet name, prompt user for it
var petName = prompt ("What is it's name?");
// alert "You have a pet type named pet name 
alert ("you have a " + petType + " named " + petName);

/* Prompt with Conditional */

var petType = prompt ("what type of animal is your pet?")

var petName = prompt ("what is its name?")

alert ("you have a " + petType + " named " + petName )

if (petType == "dog") alert ("I like dogs too");

else if (petType == "cat") alert ("I'm allergic to cats");

else alert ("What an interesting pet.");