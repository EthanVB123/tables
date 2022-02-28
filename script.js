document.getElementById("question").innerHTML = "Hello";
var x = 0;
var y = 0;
var ans = 0;
var acc = [0,0];
var numQ = 0;
var time = 0;
var interval;

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
        document.getElementById("feedback").innerHTML = "&#x2714;"
    } else {
        // incorrect
        acc[1] += 1;
        document.getElementById("feedback").innerHTML = "&#x2718;"
    }
    newQuestion();
    document.getElementById("answer").value = null;
    renderAnalytics();

    if (numQ == (acc[0] + acc[1])) {
        console.log("Done!")
        document.getElementById("main").innerHTML = "<div>Done!</div><button onclick=restart()>Restart</button>"
        clearInterval(interval);
    }
}

function renderAnalytics() {
    var percentageAcc = Math.round(10000*acc[0]/(acc[0]+acc[1]))/100
    document.getElementById("acc").innerHTML = `Accuracy: ${acc[0]} / ${acc[0] + acc[1]} = ${percentageAcc}%`
}
function restart() {
    window.location.href = "index.html";
}
function incrementTime() {
    time += 0.1;
    time = Math.round(10*time)/10;

    document.getElementById("time").innerHTML = `Time: ${time.toFixed(1)} s`
}
window.onload = function() {
    console.log(sessionStorage.getItem("numberQuestions"))
    numQ = sessionStorage.getItem("numberQuestions")
    interval = setInterval(incrementTime, 100);
}
newQuestion();