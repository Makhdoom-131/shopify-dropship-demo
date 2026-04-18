// --- 1. Mobile Menu Toggle ---
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    // Simple toggle for mobile view
    if (navLinks.style.display === 'flex' && window.innerWidth <= 768) {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#141414';
        navLinks.style.padding = '20px';
        navLinks.style.gap = '20px';
        navLinks.style.borderBottom = '1px solid #333';
    }
});

// --- 2. Sticky Buy Bar on Scroll ---
const stickyBar = document.getElementById('stickyBar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        stickyBar.style.display = 'flex';
    } else {
        stickyBar.style.display = 'none';
    }
});

// --- 3. Add to Cart Interaction (Toast Notification) ---
const heroBuyBtn = document.getElementById('heroBuyBtn');
const stickyBuyBtn = document.getElementById('stickyBuyBtn');
const toast = document.getElementById('successToast');

function showSuccessToast() {
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000); // Hide after 3 seconds
}

heroBuyBtn.addEventListener('click', showSuccessToast);
stickyBuyBtn.addEventListener('click', showSuccessToast);

// --- 4. Countdown Timer (Creates Urgency) ---
function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    const countdownElement = document.getElementById('countdown');

    setInterval(() => {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        // Add leading zeros
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownElement.textContent = `${hours}:${minutes}:${seconds}`;

        if (--timer < 0) {
            timer = duration; // Reset timer when it hits 0 so it never actually stops
        }
    }, 1000);
}

// Start a 2.75 hour countdown (9900 seconds)
startCountdown(9900);
