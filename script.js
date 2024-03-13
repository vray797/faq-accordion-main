var questions = document.getElementsByClassName("question");
var i;

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function() {
        this.classList.toggle("active")

        var image = this.querySelector("img");
        if (this.classList.contains("active"))
           image.src = "assets/images/icon-minus.svg";
        else image.src = "assets/images/icon-plus.svg";

        var answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px'
        }
    })
}

window.onload = function() {
    var firstQuestion = questions[0];
    var firstAnswer = firstQuestion.nextElementSibling;

    firstQuestion.classList.toggle("active");
    firstQuestion.querySelector("img").src = "assets/images/icon-minus.svg";

    firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
}