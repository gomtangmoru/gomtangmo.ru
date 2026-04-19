document.addEventListener('DOMContentLoaded', () => {
    const dischargeDate = new Date('2027-12-19T00:00:00+09:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    dischargeDate.setHours(0, 0, 0, 0);
    
    const diffTime = dischargeDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const badge = document.getElementById('dday-badge');
    if (badge) {
        if (diffDays > 0) {
            badge.innerText = `D-${diffDays}`;
        } else if (diffDays === 0) {
            badge.innerText = `D-Day`;
        } else {
            badge.innerText = `전역`;
        }
    }

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
        const ua = navigator.userAgent.toLowerCase();
        const isFirefox = ua.includes('firefox');
        const isMac = ua.includes('mac os x');
        const isMacFirefox = isFirefox && isMac;
        const isMobileViewport = window.matchMedia('(max-width: 900px)').matches;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const lowPowerMode = isFirefox || isMobileViewport || prefersReducedMotion;

        if (isMacFirefox) {
            const particlesRoot = document.getElementById('particles-js');
            if (particlesRoot) {
                particlesRoot.style.display = 'none';
            }
            return;
        }

        particlesJS('particles-js', {
            particles: {
                number: {
                    value: lowPowerMode ? 20 : 40,
                    density: {
                        enable: true,
                        value_area: lowPowerMode ? 1200 : 950
                    }
                },
                color: {
                    value: '#ffb38a'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: lowPowerMode ? 0.35 : 0.45,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: lowPowerMode ? 2.2 : 2.8,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 2,
                        size_min: 0.5,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: lowPowerMode ? 120 : 145,
                    color: '#ffb38a',
                    opacity: lowPowerMode ? 0.12 : 0.18,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: lowPowerMode ? 0.6 : 1.1,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: !lowPowerMode,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: !lowPowerMode,
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
            retina_detect: !lowPowerMode
        });
    } else {
        console.error('Particles.js is not loaded.');
    }
});
