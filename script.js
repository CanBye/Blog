function startSite() {
    const startScreen = document.getElementById('startScreen');
    const video = document.getElementById('backgroundVideo');

    startScreen.classList.add('hidden');

    // Ensure the video starts playing
    video.muted = false;
    video.play();

    console.log("Developed Zypher Setups");
    console.log("Developed By CanBye");
}

const video = document.getElementById('backgroundVideo');
const audioToggle = document.getElementById('audioToggle');

function toggleAudio() {
    video.muted = !video.muted;
    audioToggle.src = video.muted ? 'sound-off.png' : 'sound-on.png';
}

document.addEventListener('DOMContentLoaded', () => {
    const viewCounter = document.getElementById('viewCounter');
    let views = parseInt(localStorage.getItem('siteViews')) || 0;
    if (!localStorage.getItem('siteVisited')) {
        views++;
        localStorage.setItem('siteViews', views);
        localStorage.setItem('siteVisited', 'true');
    }
    viewCounter.textContent = views;
});