let points = 0;
const buttons = document.querySelectorAll(".buttons");
const lastQuestion = document.getElementById("question5");

const answeredQuestions = new Set();



buttons.forEach(button => {
    button.addEventListener("click", countPoints);
    button.addEventListener("click", makeChoice);
})


function makeChoice() {
        const question = this.closest(".questions");
        const questionId = question.id;

        // remove previous selection
        question.querySelectorAll(".buttons").forEach(button => {
            button.classList.remove("selected");
        });
        this.classList.add("selected");

        // remove previous points for this question
        if (answeredQuestions.has(questionId)) {
            points -= answeredQuestions.get(questionId);
        }
}


function countPoints() {
    if (this.classList.contains("answer1")) {
        points += 3;
    } else if (this.classList.contains("answer2")) {
        points++;
    }

    this.classList.add("selected");
    
    console.log(points);
}


lastQuestion.addEventListener("click", getResult);

function getResult() {
    if (points >= 11) {
        document.getElementById("result1").style.display = "block";
    } else if (points <= 10 && points >= 5) {
        document.getElementById("result2").style.display = "block";
    } else if (points <= 4) {
        document.getElementById("result3").style.display = "block";
    }

    console.log("get me my results!!");
}
