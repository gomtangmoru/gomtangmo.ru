document.addEventListener('DOMContentLoaded', () => {
    // 1. Easter Egg Script
    let profileClickCount = 0;
    const profileContainer = document.getElementById('profileImageContainer');

    if (profileContainer) {
        profileContainer.style.cursor = 'pointer'; // Make it look clickable

        profileContainer.addEventListener('click', () => {
            profileClickCount++;
            console.log("do not touch my profile x" + profileClickCount);
            if (profileClickCount % 5 === 0) {
                document.title = "can u send me 30k";
                window.location.href = "https://tenor.com/fOYYAPGyvpv.gif";
            }
        });
    }

    // 2. Initialize Vanta.js background with optimized settings
    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: false, // Disabling this saves massive CPU (raycasting)
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xd2a8ff,
            backgroundColor: 0x0b0c10,
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
    } else {
        console.error("Vanta.js is not loaded.");
    }
});
