// --- 1. Select Elements ---
const modal = document.getElementById("offerRideModal");
const btn = document.getElementById("offerRideBtn");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const offerForm = document.getElementById("offerRideForm");
const ridesContainer = document.querySelector(".rides");

// --- 2. Modal Open/Close Logic ---

// Open the modal when the blue button is clicked
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when 'x' is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if user clicks anywhere outside of the modal box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- 3. Handle Form Submission (Adding the Ride) ---

offerForm.onsubmit = function(e) {
    e.preventDefault(); // Stop the page from refreshing

    // Get values from the form inputs
    const car = document.getElementById("carModel").value;
    const from = document.getElementById("source").value;
    const to = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const seats = document.getElementById("seats").value;
    const price = document.getElementById("price").value;
    const contact = document.getElementById("contact").value;
    const notes = document.getElementById("details").value;

    // Create a new 'ride' div element
    const newRide = document.createElement("div");
    newRide.classList.add("ride");

    // Set the internal HTML matching your existing structure
    newRide.innerHTML = `
        <p><strong>${car}</strong>: From ${from} to ${to}, ${time} on ${date}, ${seats} seats available - ₹${price}</p>
        <p>Contact: ${contact}</p>
        ${notes ? `<p><small><em>Notes: ${notes}</em></small></p>` : ''}
    `;

    // Add the new ride to the list (adds it to the bottom)
    ridesContainer.appendChild(newRide);
    // Get existing rides or start a new list
let allRides = JSON.parse(localStorage.getItem('globalRides')) || [];

// Create a ride object
const rideData = { car, from, to, date, time, seats, price, contact, notes };

// Add to the list and save
allRides.push(rideData);
localStorage.setItem('globalRides', JSON.stringify(allRides));

    // --- 4. Final Cleanup ---
    alert("Ride created successfully!");
    offerForm.reset();     // Clear the input fields
    modal.style.display = "none"; // Hide the modal
};