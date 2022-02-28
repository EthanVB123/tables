document.getElementById("question").innerHTML = "Hello";
var x = 0;
var y = 0;
var ans = 0;
var history = [0,0];

document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      checkAnswer();
    }
  });

function newQuestion() {
    x = Math.floor(12*Math.random() + 1);
    y = Math.floor(12*Math.random() + 1);
    document.getElementById("question").innerHTML = `${x} x ${y} =`;
    ans = x*y;
}

function checkAnswer() {
    if (document.getElementById("answer").value == ans) {
        // correct
        history[0] += 1;
    } else {
        // incorrect
        history[1] += 1;
    }
    newQuestion();
    document.getElementById("answer").value = null;
}
newQuestion();