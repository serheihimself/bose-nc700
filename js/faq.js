const open_btn = document.querySelectorAll(".faq-btn");
const answer_text = document.querySelector(".faq-answer");

open_btn.forEach((button) => {
  button.addEventListener("click", function () {
    const answer = this.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
