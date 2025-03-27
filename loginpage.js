document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    const loginButton = document.getElementById("log");
  
    // Add event listener to redirect when clicked
    loginButton.addEventListener("click", function () {
        window.location.href = "Loginowner.html";  // Redirect to login page
    });
  });