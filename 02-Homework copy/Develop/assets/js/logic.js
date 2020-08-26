console.log("Logic script loaded");

// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
//grabs the div that will contain the questions element
var questionsEl = document.getElementById("questions");
//grabs time element
var timerEl = document.getElementById("time");
//grab question title within questions element
var questionTitle = document.getElementById("question-title");
//grabs choices element within questions
var choicesEl = document.getElementById("choices");
//grabs sumbit button element
var submitBtn = document.getElementById("submit");
//grabs start button element
var startBtn = document.getElementById("start");
//grabs element where user inputs initials
var initialsEl = document.getElementById("initials");
//grabs the element holding the feedback div
var feedbackEl = document.getElementById("feedback");
//grabs the div containing the start screen
var startScreenEl = document.getElementById("start-screen");

var totalSeconds = 0;
var secondsElapsed = 0;
var status = "Working";
var interval;

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

//quiz starts when start button clicked

function startQuiz() {
  setTime();
  getQuestion();
  // hide start screen
  startScreenEl.style.visibility = "hidden";
  // un-hide questions section
  questionsEl.classList.remove(".hide");
  //show starting time
  function setTime() {
    timerEl.innerHTML = "";
    totalSeconds = timerEl.textContent = 60;
  }
}


function getQuestion() {

    // get current question object from array
      //store the output and answer choices as they're being made
      var output = [];
      var answers;

      //for each question....

        //reset list of answers

        //for each available answer to the question....

          //add an html radio button

        //add this question and answers to output

      //combine output as a string and display on page 


  // questionTitle.append(questions.title);
  // console.log(questionTitle);

  // update title with current question

  // clear out any old question choices

  // loop over choices

  // create new button for each choice

  // attach click event listener to each choice

  // display on the page
}


function questionClick() {
  // check if user guessed wrong
  // penalize time

  // display new time on page

  // play "wrong" sound effect

  // else 
  // play "right" sound effect


  // flash right/wrong feedback on page for half a second

  // move to next question

  // check if we've run out of questions
  // quizEnd
  // else 
  // getQuestion
}

function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

function clockTick() {
  // update time

  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box

  // make sure value wasn't empty
  // get saved scores from localstorage, or if not any, set to empty array

  // format new score object for current user

  // save to localstorage

  // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
  // saveHighscore
}

//quiz starts when start button clicked
startBtn.addEventListener("click", startQuiz);

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
