/* Var Alert Prompt Conditionals */
// make a variable for pet type, prompt user for it 
var petType = prompt ("what type of animal is your pet?")
// make a variable for pet name, prompt user for it
var petName = prompt ("what is its name?")
// alert "You have a pet type named pet name 
alert ("you have a " + petType + " named " + petName )
// if pet is a dog, say "I like dogs, too!"
if (petType == "dog") alert ("I like dogs too");
// if it is a cat, say "I'm allergic to cats"
else if (petType == "cat") alert ("I'm allergic to cats");
// If it is not a dog or a cat, say "what an interesting pet!"
else alert ("What an interesting pet.");

