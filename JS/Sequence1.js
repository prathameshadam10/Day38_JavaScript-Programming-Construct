// getting Randomly single Digit
let value =  Math.floor(Math.random() * 10);
console.log("Single Digit Value :=>", value)




// Use Random to get Dice Number between 1 to 6
let diceNum = (Math.floor(Math.random() * 6)+1)
console.log("if the dice is rolled once the number is :" + diceNum)

// Write a program that reads 5 Randome 2 Digit Values, then find their sum and the average
let number1 = Math.floor(Math.random()*100)
let number2 = Math.floor(Math.random()*100)
let sum = number1 + number2
let avg = (number1 + number2)/2
console.log("Sum Of " + number1 + " and " + number2 + " is :" + sum )
console.log("avg Of " + number1 + " and " + number2 + " is :" + avg)