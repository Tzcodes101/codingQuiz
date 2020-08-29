// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
// var time = 30;
var timerId;
var interval;
var score = 0;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var endScreenEl = document.getElementById("end-screen");
var highscores = [];


// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.classList.remove("hide");


  renderTime();
  startTime();
  getQuestion();
}

function renderTime() {
  // show time 
  if (time >= 0) {
    timerEl.textContent = time;
  } else {
    stopTimer();
  }
}

function startTime() {
  //start timer if time is greater than zero
  if (time > 0) {
    // set time interval to go down by 1 
    interval = setInterval(function () {
      --time;
      //re-show the time every second
      renderTime();
    }, 1000);
  }
}

function stopTimer() {
  //when time is zero, show the end page
  time = 0;
  quizEnd();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
  // console.log(currentQuestion);

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
  };
}

function questionClick() {
  // if answer on click is not correct, lose 15s
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    //display new time on page
    timerEl.textContent = time;

    //play wrong sound effect
    sfxWrong.play();

    //display "wrong" feedback
    feedbackEl.textContent = "Wrong!";
  } else {
    score++;

    //play "right" sound effect
    sfxRight.play();

    feedbackEl.textContent = "Correct!";
  }

  //flash right/wrong feedback on page for .5s
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  //move on to next question
  currentQuestionIndex++;

  // if we are out of questions, show the end page 
  if (currentQuestionIndex === questions.length) {
    quizEnd();
    //otherwise move on to the next question
  } else {
    getQuestion();
  }
}


function quizEnd() {
  // show end screen
  endScreenEl.classList.remove("hide");

  //timer ends
  time = 0;

  // hide questions section
  questionsEl.setAttribute("class", "hide");

  // show final score
  var yourScore = document.getElementById("final-score");
  yourScore.textContent = score;
  highscores.push(yourScore);
}

console.log(highscores);


function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();

  // make sure initials value isn't empty
  if (initials !== "") {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: time,
      initials: initials
    };
    highscores.push(newScore);
  } else {
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    saveHighscore();
  };

  window.location.href = "highscores.html";
}

function checkForEnter(event) {
  // check if event key is enter
  // if (event.key === "Enter") {
  //   saveHighscore();
  // }
  // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;

