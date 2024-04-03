document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function(event) {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (username.length < 5) {
            alert("Username must be at least 5 characters long."); // min username length //
            event.preventDefault();
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // used regex knowledge from SI206 to do this :) //
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long."); // min pw length //
            event.preventDefault();
        }
    });
});
