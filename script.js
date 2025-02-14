/* Var Alert Prompt */
// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt ("What is your favorite ice cream flavor");
// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt ("how many scoops?")
// alert "You want " scoops "scoops of " flavor

if ( scoops > 3) {
    alert ("that's too many");
} else {
    alert ("you want " + scoops + " of " + flavor);
}