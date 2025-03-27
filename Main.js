const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    answer.classList.toggle("show");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  const loginButton = document.getElementById("loginn");

  // Add event listener to redirect when clicked
  loginButton.addEventListener("click", function () {
      window.location.href = "loginpage.html";  // Redirect to login page
  });
});
