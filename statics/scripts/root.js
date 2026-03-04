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

    // 2. Initialize Particles.js background
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                color: {
                    value: '#d2a8ff'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.5,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#d2a8ff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 180,
                        line_linked: {
                            opacity: 0.4
                        }
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });
    } else {
        console.error('Particles.js is not loaded.');
    }
});
