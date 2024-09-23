// register.js

// Function to validate password and confirm password fields
function validatePassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

// Add event listener for form submission
document.getElementById("registerForm").addEventListener("submit", function (event) {
    if (!validatePassword()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
