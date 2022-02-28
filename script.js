document.getElementById("question").innerHTML = "Hello";
var x = 0;
var y = 0;
var ans = 0;
var acc = [0,0];

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
        acc[0] += 1;
        console.log(acc);
    } else {
        // incorrect
        acc[1] += 1;
    }
    newQuestion();
    document.getElementById("answer").value = null;
    renderAnalytics();
}

function renderAnalytics() {
    var percentageAcc = Math.round(10000*acc[0]/(acc[0]+acc[1]))/100
    document.getElementById("acc").innerHTML = `Accuracy: ${acc[0]} / ${acc[0] + acc[1]} = ${percentageAcc}%`
}

newQuestion();