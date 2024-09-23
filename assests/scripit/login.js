// Function to validate the login form
function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    // Ensure password is at least 6 characters long
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false; // Prevent form submission
    }

    // If all checks pass, allow form submission
    return true;
}

// Function to toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('showPassword');

    // Toggle the password input type between 'password' and 'text'
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}
