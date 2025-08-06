let score = 0;
let isGameActive = false;
let timer;

document.body.addEventListener('click', () => {
  if (!isGameActive) {
    isGameActive = true;
    score = 1;
    document.getElementById("score").textContent = `Score: ${score}`;
    timer = setTimeout(() => {
      isGameActive = false;
      alert(`Time's up! Your score: ${score}`);
    }, 5000);
  } 
  else {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  }
  document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
});