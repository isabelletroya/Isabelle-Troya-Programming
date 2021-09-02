
/* 
   Welcome to the Magic 8-ball Project.  Complete the 
   tasks outlined by the comments in this file.

   The following functions are available to you 
   (you can just call them):

   // This will hide the '8' (if shown) and 
   // show the triangle (if hidden).  It will
   // set the text on the triangle to the
   // string 'answerText'.
   function makeAnswerAppear(answerText)
*/


function makeAnswerAppear(answerText) {
  // Adds "hidden" CSS class to the '8'.
  document.getElementById("eight").classList.add("hidden");

  // Find the answer element, change the text, and remove the CSS "hidden" class.
  document.getElementById("answer-text").innerText = answerText;

  document.getElementById("answer-text").classList.add("hidden");
  document.getElementById("triangle").classList.add("hidden");

  // Allow 1/1000th of a second to pass in order for the above changes to take effect.  Then remove the elements
  setTimeout(() => {
    document.getElementById("answer-text").classList.remove("hidden");
    document.getElementById("triangle").classList.remove("hidden");
  }, 1);
}

/* Returns a random integer in the range 'min' through 'max' inclusive. 

   This can be taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3

*/

let possibleAnswers = ["Yes", "No", "Ask Again Later", "My Reply is No", " Yes definitely."];

let min = 0;
let max = possibleAnswers.length -1;
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Write a function that handles the magic 8-ball being clicked. Here are the steps:

   - Create an array containing at least 5 possible answers as strings.
   - Generate a random array index by calling 
       getRandomIntInclusive function.
   - Call 'makeAnswerAppear' using the random
       answer you selected.
   - (Level-up) Prevent your code from selecting the 
       same answer multiple times in a row 
       (loops could be required).
*/

document.getElementById("eight-ball").onclick= function() {answerQuestion()};


function answerQuestion() {
  answer = getRandomIntInclusive(min,max)
  answerText = possibleAnswers[answer];
  // console.log(answer);
  console.log(answerText)
  makeAnswerAppear(answerText);
}
