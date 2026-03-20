window.onload = function() {
    // 1. Get the stored user data (Saved by Member 1 during registration)
    const userData = JSON.parse(localStorage.getItem('userAccount'));

    if (userData) {
        // 2. Fill the Text details
        document.getElementById('dispName').innerText = userData.name;
        document.getElementById('dispEmail').innerText = userData.email;
        document.getElementById('dispGender').innerText = userData.gender || "Not Specified";
        document.getElementById('dispAge').innerText = userData.age || "--";

        // 3. Create a dynamic avatar (First letter of name)
        const firstLetter = userData.name.charAt(0).toUpperCase();
        document.getElementById('userAvatar').innerText = firstLetter;
    } else {
        // If no user found, force them back to login
        alert("Session expired. Please login again.");
        window.location.href = "login.html";
    }
};

// --- Your Logout Function ---
function logout() {
    // Clear login status (Member 1 logic)
    localStorage.removeItem("loggedIn");
    // Optional: Keep the account data so they can log back in, 
    // but clear the current session.
    alert("Logging out...");
    window.location.href = "login.html";
}