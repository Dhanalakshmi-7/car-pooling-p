function searchRides() {
    const from = document.getElementById('fromLoc').value.toLowerCase().trim();
    const to = document.getElementById('toLoc').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('rideResults');

    // 1. Get rides from LocalStorage (Saved by Member 3)
    const allRides = JSON.parse(localStorage.getItem('globalRides')) || [];

    // 2. Filter logic
    const matches = allRides.filter(ride => {
        return ride.from.toLowerCase().includes(from) && 
               ride.to.toLowerCase().includes(to);
    });

    // 3. Display logic
    resultsDiv.innerHTML = ""; // Clear current view

    if (matches.length === 0) {
        resultsDiv.innerHTML = `<p style="text-align:center; padding: 20px; color: #e74c3c; font-weight:bold;">
                                ❌ No rides found for this route. Try a nearby city!</p>`;
        return;
    }

    matches.forEach(ride => {
        const div = document.createElement('div');
        div.className = "ride-item";
        div.innerHTML = `
            <div>
                <h3 style="margin:0; color:#007bff;">${ride.car}</h3>
                <p style="margin:5px 0; font-size:0.9rem;">
                    <strong>Route:</strong> ${ride.from} ➔ ${ride.to}<br>
                    <strong>Time:</strong> ${ride.time} | <strong>Price:</strong> ₹${ride.price}
                </p>
                <small style="color:#666;">Contact: ${ride.contact}</small>
            </div>
            <button class="book-btn" onclick="confirmBooking('${ride.car}')">BOOK SEAT</button>
        `;
        resultsDiv.appendChild(div);
    });
}

function confirmBooking(car) {
    alert("Success! Your booking request for " + car + " has been sent to the driver.");
}