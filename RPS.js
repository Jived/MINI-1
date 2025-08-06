function play(userChoice) {
  choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").textContent = `Your choice: ${userChoice}`;
  document.getElementById("computer-choice").textContent = `Computer's choice: ${computerChoice}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") ||(userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "YOU WIN 🎉";
  } else {
    result = "LOOSER 😂";
  }
  document.getElementById("winner").textContent = `Result: ${result}`;
}