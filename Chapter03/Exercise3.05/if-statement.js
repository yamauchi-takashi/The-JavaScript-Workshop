var diceValue = Math.floor(Math.random() * 6) + 1;
console.log("Dice value:", diceValue);
if(diceValue % 2 != 0){
    console.log("Is an odd number.");
    console.log('"You have to be odd to be number one", Dr. Seuss');
}