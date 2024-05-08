// Function to calculate and display the countdown
updateCountdown()
function updateCountdown() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25); // December 25
    if (today.getMonth() == 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const diff = christmas - today;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById('countdown').innerHTML += days  + ` days until Christmas!`;
    
}

// Function to swap the image and countdown
function swapContent() {
    const image = document.getElementById('santaImage');
    const countdown = document.getElementById('countdown');
    if (image.style.display !== 'none') {
        image.style.display = 'none';
        countdown.style.display = 'block';
        updateCountdown(); // Update countdown when it's shown
    } else {
        image.style.display = 'block';
        countdown.style.display = 'none';
    }
}

setInterval(updateCountdown, 86400000);
