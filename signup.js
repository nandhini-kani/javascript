const form = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById("email");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");

let usernameValue = "";
let emailValue = "";

// Track changes
username.addEventListener("input", function(e) {
    usernameValue = e.target.value;
    console.log("Username changed to:", usernameValue);
});

email.addEventListener("input", function(e) {
    emailValue = e.target.value;
    console.log("Email changed to:", emailValue);
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Reset errors
    usernameError.innerHTML = "";
    emailError.innerHTML = "";

    let hasError = false;

    if (!usernameValue.trim()) {
        usernameError.innerHTML = "Please enter your name";
        hasError = true;
    }

    if (!emailValue.trim()) {
        emailError.innerHTML = "Please enter your email";
        hasError = true;
    }

    if (hasError) {
        console.log("Validation failed");
        return;
    }

    console.log("Form submitted successfully");
    console.log("Username:", usernameValue);
    console.log("Email:", emailValue);
});
