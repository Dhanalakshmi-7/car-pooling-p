// Function to open the modal
function openEditModal() {
    const userData = JSON.parse(localStorage.getItem('userAccount'));
    
    // Fill the inputs with current data before opening
    document.getElementById('editName').value = userData.name;
    document.getElementById('editGender').value = userData.gender || "male";
    document.getElementById('editAge').value = userData.age || "";

    // Show the modal
    document.getElementById('editProfileModal').style.display = "block";
}

// Function to close the modal
function closeEditModal() {
    document.getElementById('editProfileModal').style.display = "none";
}