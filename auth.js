document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the page from refreshing

    // 1. Get values from inputs
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const age = document.getElementById('userAge').value;
    const gender = document.getElementById('userGender').value;
    const password = document.getElementById('userPassword').value;
    const message = document.getElementById('message');

    // 2. Validation Rules
    const firstLetterCap = /^[A-Z]/; // Checks if first letter is Capital
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/; // Checks for at least one special character

    if (!firstLetterCap.test(password)) {
        message.innerText = "Error: First letter of password must be Capital.";
        return;
    }

    if (!specialChar.test(password)) {
        message.innerText = "Error: Password must contain at least one special character.";
        return;
    }

    // 3. Save to LocalStorage (The "Virtual Backend")
    const userData = {
        name: name,
        email: email,
        age: age,
        gender: gender,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(userData));
    
    alert("Registration Successful!");
    window.location.href = "login.html"; // Send them to the Login page
});