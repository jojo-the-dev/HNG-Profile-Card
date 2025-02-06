function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");

    function getUTCTime() {
        const now = new Date();
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds} UTC`;
    }

    function update() {
        utcTimeElement.textContent = getUTCTime();
    }

    update(); // Update immediately
    setInterval(update, 1000); // Update every second
}

// Run the function when the page loads
updateUTCTime();

/*function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    setInterval(() => {
        const now = new Date();
        utcTimeElement.textContent = now.toUTCString();
    }, 1000); // Updates every second
}

// Run the function when the page loads
updateUTCTime();
*/



/*function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.textContent = now.toUTCString();
}

// Update time on page load
updateUTCTime();
*/
