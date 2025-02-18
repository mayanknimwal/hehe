// Lightbox Pop-up Effect
document.querySelectorAll(".photo img").forEach(image => {
    image.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.classList.add("popup");

        popup.innerHTML = `
            <div class="popup-content">
                <img src="${image.src}" alt="Romantic Memory">
                <span class="close">&times;</span>
            </div>
        `;

        document.body.appendChild(popup);

        // Fade-in effect
        setTimeout(() => {
            popup.style.opacity = "1";
        }, 50);

        // Close popup when clicking on the close button
        popup.querySelector(".close").addEventListener("click", () => closePopup(popup));

        // Close popup when clicking outside the image
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                closePopup(popup);
            }
        });
    });
});

// Function to close the popup smoothly
function closePopup(popup) {
    popup.classList.add("fade-out");
    setTimeout(() => popup.remove(), 500);
}

// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random position and size
    heart.style.left = Math.random() * 100 + "vw"; 
    heart.style.animationDuration = Math.random() * 3 + 3 + "s"; 

    document.getElementById("hearts-container").appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 700);

// Falling Stars Effect
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position and size
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.getElementById("stars-container").appendChild(star);

    // Remove after animation ends
    setTimeout(() => {
        star.remove();
    }, 5000);
}
setInterval(createStar, 1000);

// Background Music Control with Smooth Fade-in
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

music.volume = 0; // Start with zero volume for fade-in effect

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        fadeInMusic(music, 1000); // Smooth fade-in over 1 second
        musicBtn.textContent = "🎵 Pause Music";
    } else {
        fadeOutMusic(music, 1000); // Smooth fade-out over 1 second
        musicBtn.textContent = "🎵 Play Music";
    }
});

// Play music only after user interacts (for mobile support)
document.addEventListener("click", () => {
    if (music.paused) {
        fadeInMusic(music, 1000);
        musicBtn.textContent = "🎵 Pause Music";
    }
}, { once: true }); // Runs only once after first click

// Function for smooth fade-in
function fadeInMusic(audio, duration) {
    let volume = 0;
    audio.volume = volume;
    audio.play();
    let fadeInterval = setInterval(() => {
        if (volume < 1) {
            volume += 0.05;
            audio.volume = Math.min(volume, 1);
        } else {
            clearInterval(fadeInterval);
        }
    }, duration / 20);
}

// Function for smooth fade-out
function fadeOutMusic(audio, duration) {
    let volume = audio.volume;
    let fadeInterval = setInterval(() => {
        if (volume > 0) {
            volume -= 0.05;
            audio.volume = Math.max(volume, 0);
        } else {
            clearInterval(fadeInterval);
            audio.pause();
        }
    }, duration / 20);
}
