function printHighscores() {
  // either get scores from localstorage or set to empty array
  var highscores =JSON.parse[window.localStorage.getItem("highscores")] || [];

  // (optional) sort highscores by score property in descending order
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;
    var olEl = document.getElementById("highscores");
    olEl.append(liTag);
  });
}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
  // (and reload)
}

// attach clear event to clear score button
document.getElementById("clear").onclick = clearHighscores; 

// run printhighscore when page loads
printHighscores();
