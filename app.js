const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

// when i click on p1Button the p1Score wali span mein jo likha h vo 1 se increment ho jani chahiye
// constraints :-
// 1) maximum jitne score ka match h utna hi jana chaiye
// 2) if the game is over, no player's point should get increased, so keep a boolean value for that also whether game is over or not.
// 3)

// let winningScore = 5;
// just to see how things worked we gave the winning score a hard coded value but now we will make this more user friendly by allowing the user to select the winning points.
const winnigScoreSelect = document.querySelector("#winning");

let winningScore = 3;
winnigScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  //   when there is a change in the select menu then jo bhi value select hui hogi = this.value
  reset(); //reset the score and everything else
});
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (isGameOver === false) {
    p1Score += 1;
    if (p1Score === winningScore - 1 && p2Score === winningScore - 1) {
      winningScore += 1;
    } else if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList = "has-text-success";
      p2Display.classList = "has-text-danger";
      p1Button.disabled = true;
      p2Button.disabled = true;
      //   this disabled thing is just for aesthetic purpose, bulma provides this feature of button disabling.
      // although game over hone ke baad waise bhi click nhi kar paa rhe the but abhi thoda aesthetic add kar diya buttons ko fade karke when game gets over.
    }
    p1Display.textContent = p1Score;
  }
  //   so we can't go any further than the winning scorec
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p1Score === winningScore - 1 && p2Score === winningScore - 1) {
      winningScore += 1;
    } else if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList = "has-text-success";
      p1Display.classList.add("has-text-danger");
      // kisi bhi tareeke se add kar skte h
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

// lets set the reset Button now
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;

  //   p1Display.textContent = 0;
  //   p2Display.textContent = 0;
  // agar main ye karunga to kya hoga ki display to 0 kar dega lekin p1Score and p2Score ki value actual mein 0 nhi hui, so next time jb main p1Button ya p2Button pe click karunga to p1Score and p2Score whi se continue ho jaenge jha pe game over hua tha.
  // so we should also reset the p1Score and p2Score = 0

  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;

  p1Display.classList.remove("has-text-success");
  p1Display.classList.remove("has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  //   can pass multiple classes, whether adding or removing.
  //   p2Display.classList.remove("has-text-danger");

  p1Button.disabled = false;
  p2Button.disabled = false;
}
