// Dark/Light Mode Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('light-theme')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
});

// WhatsApp Registration Handling
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Form ko refresh hone se rokna

    // Inputs se data lena
    const teamName = document.getElementById('teamName').value;
    const captainName = document.getElementById('captainName').value;
    const contactNum = document.getElementById('contactNum').value;
    const playerList = document.getElementById('playerList').value;

    // Heavy WhatsApp Text Format
    const whatsappMessage = `🏏 *NEW TEAM REGISTRATION* 🏏\n` +
                            `----------------------------------\n` +
                            `🏆 *Team Name:* ${teamName}\n` +
                            `👤 *Captain:* ${captainName}\n` +
                            `📞 *Contact:* ${contactNum}\n` +
                            `👥 *Players:* \n${playerList}\n` +
                            `----------------------------------`;

    // WhatsApp API URL (Your target number: 03024337352)
    const whatsappUrl = `https://wa.me/923024337352?text=${encodeURIComponent(whatsappMessage)}`;

    // User ko direct WhatsApp redirect karna
    window.open(whatsappUrl, '_blank');
});
