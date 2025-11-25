const quizForm = document.querySelector(".quiz-form");
const submitAnswers = document.querySelector("#submit-answers");
const output = document.querySelector("#output");
const correctAnswers = ["50\u00B0", "180\u00B0"];
function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  if(formResults.get("question1")&&formResults.get("question2")){
  for (let value of formResults.values()) {
    if (value == correctAnswers[index]) {
      score += 1;
    }
      index += 1;
  }
  output.innerText="Your score is "+ score;
}
else{
    output.innerText="Before submitting select both the answers first 📝📝";
}
}

submitAnswers.addEventListener("click",calculateScore);