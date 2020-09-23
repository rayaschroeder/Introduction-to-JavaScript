/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 20;

if (votingAge > 18) {
  console.log("True");
}

console.log(votingAge);


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let happinessRating = 7;
let pizzaSlicesEaten = 1;

if (pizzaSlicesEaten > 0 ) {
  console.log(happinessRating ++);
}
else if (pizzaSlicesEaten > 4) {
  console.log(happinessRating --);
}

console.log(happinessRating);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999");


//Task d: Write a function to multiply a*b 

function multiply (a,b) {
    return a * b;
  }
  
  multiply(5,6);



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogAgeCalculator (currentAge) {
    let dogAge = currentAge * 7;
    return(dogAge);
  }
  
  let dogAge = dogAgeCalculator(25);
  console.log(dogAge);


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFoodCalculator (age, weight) {
    if (age >= 1) {
      if (weight < 6) {
        return(weight * .05);
      }
      else if (weight < 11) {
        return(weight * .04);
      }
      else if (weight < 16) {
        return(weight * .03);
      }
      else {
        return(weight * .02);
      }
    }
   else {
     if (age < .33) {
       return(weight * .1);
     }
     if (age < .67) {
       return(weight * .05);
     }
     else {
       return(weight * .04);
     }
   }
  }
  
  dogFoodCalculator(1, 15);



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function RPS (yourChoice) {
    let compChoice = Math.round(Math.random() * 3);
    if (yourChoice === "rock"){
      if (compChoice === 1){
        console.log("Computer chose rock. Tie game.");
      }
      if (compChoice === 2 ){
        console.log("Computer chose paper. You lose.");
      }
      if (compChoice === 3){
        console.log("Computer chose scissors. You win.");
      }
    }
    else if (yourChoice === "paper"){
      if (compChoice === 1){
        console.log("Computer chose rock. You win.");
      }
      if (compChoice === 2){
        console.log("Computer chose paper. Tie game.");
      }
      if (compChoice ===3){
        console.log("Computer chose scissors. You lose.");
      }
    }
    else {
      if (compChoice === 1){
        console.log("Computer chose rock. You lose.");
      }
      if (compChoice === 2){
        console.log ("Computer chose paper. You win.");
      }
      else {
        console.log ("Computer chose scissors. Tie game.");
      }
    }
  }
  
  console.log(RPS("rock"));

  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmConverter (km) {
    return (km * 0.621371);
  }
  
  kmConverter(5);


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ftConverter (ft) {
    return (ft * 30.48);
  }
  
  ftConverter(17);


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong (num) {
    for (let i = num; i > 0; i--) {
      console.log (`${num} bottles of soda on the wall, ${num} bottles of soda, take one down pass it around ${num} bottles of soda on the wall`);
    }
  }
  
  annoyingSong(99);
  


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F


function gradeCalculator (score) {
    if (score < 60){
      console.log("Your grade is F");
    }
    else if (score <70){
      console.log("Your grade is D");
    }
    else if (score <80){
      console.log("Your grade is C");
    }
    else if (score <90){
      console.log("Your grade is B");
    }
    else {
      console.log("Your grade is A");
    }
  }
  
  gradeCalculator(71);

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





