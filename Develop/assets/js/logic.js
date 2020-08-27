// variables to keep track of quiz state
var currentQuestionIndex = 0;
// var time = questions.length * 15;
var time = 3;
var timerId;
var interval;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var endScreenEl = document.getElementById("end-screen");


// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  var startScreen = document.getElementById("start-screen");
  startScreen.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.classList.remove("hide");
  console.log(questionsEl);


  renderTime();
  startTime();
  getQuestion();
}

function renderTime() {
  // show starting time 
  if (time >= 0) {
    timerEl.textContent = time;
    console.log(timerEl);
  } else {
    stopTimer();
  }
}

function startTime() {
  //start timer if time is greater than zero
  if (time > 0) {
    // to go down by 1 depending on which question we are in
    interval = setInterval(function () {
      --time;
      //re-show the time every second
      renderTime();
    }, 1000);
  }
}


//stoptimer
function stopTimer() {
  time = 0;
  quizEnd();
}


function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";

  // loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];

    // create new button for each choice
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceBtn.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choiceBtn);
  }
  // currentQuestion.choices.forEach(function (choices,i) {});
}

function questionClick() {
  // if answer on click = true
    //play correct sound efect
    //flash correct
    //If run out of question or time
        //quizEnd();
      //else. move on to next question
        //...getquestion()?

  // else
    //play wrong sound effect
    //flash incorrect 
    //deduct time
     //If run out of question or time
        //quizEnd();
      //else. move on to next question
        //...getquestion()?
   
  // check if user guessed wrong
  // if (this.value !== questions[currentQuestionIndex].answer) {
  //   // penalize time
  //   time -= 15;

  //   if (time < 0) {
  //     stopTimer();
  //   } else {
  //     // display new time on page
  //     timerEl.textContent = time;
  //   }
  }

  function quizEnd() {

    // show end screen
    endScreenEl.classList.remove("hide");

    // show final score

    // hide questions section
    questionsEl.setAttribute("class", "hide");
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

  // user clicks button to submit initials
  submitBtn.onclick = saveHighscore;

  // user clicks button to start quiz
  startBtn.onclick = startQuiz;

  initialsEl.onkeyup = checkForEnter;
