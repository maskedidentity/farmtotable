document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    // Sign-up
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("signup-name").value;
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;

            if (localStorage.getItem(email)) {
                alert("Email already registered!");
            } else {
                localStorage.setItem(email, JSON.stringify({ name, password }));
                alert("Signup successful! Please login.");
                window.location.href = "login.html";
            }
        });
    }

    // Login
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            const user = JSON.parse(localStorage.getItem(email));
            if (user && user.password === password) {
                localStorage.setItem("loggedInUser", email);
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Invalid email or password!");
            }
        });
    }

    // Logout
    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser");
            alert("Logged out successfully!");
            window.location.href = "index.html";
        });
    }
});
