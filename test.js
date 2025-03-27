// const faqItems = document.querySelectorAll(".faq-item");

// faqItems.forEach(item => {
//   const question = item.querySelector(".faq-question");
//   const answer = item.querySelector(".faq-answer");

//   question.addEventListener("click", () => {
//     answer.classList.toggle("show");
//   });
// });
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".plan button");

  buttons.forEach(button => {
      button.addEventListener("click", function() {
          alert("Membership plan selected!");
      });
  });
});
