function printHighscores() {
  // either get scores from localstorage or set to empty array
  highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // (optional) sort highscores by score property in descending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  //for each score print highscores to page, getting score and initials from local storage
  for (var i = 0; i < highscores.length; i++) {
    var gottenInitials = highscores[i].initials;
    var gottenScore = highscores[i].score;
    var liEl = document.createElement("li");
    liEl.innerHTML = (gottenInitials + " - " + gottenScore);
    var olEl = document.getElementById("highscores");
    olEl.append(liEl);
  }
}

function clearHighscores() {
  //remove the highscores
  window.localStorage.removeItem("highscores");
  // and reload
  window.location.href = "highscores.html";
}

// attach clear event to clear score button
document.getElementById("clear").onclick = clearHighscores;

// run printhighscore when page loads
printHighscores();
