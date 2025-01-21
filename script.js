const typingSound = new Audio('typing.mp3');

// Function to play the sound
function playTypingSound() {
    typingSound.currentTime = 0; // Reset to the beginning
    typingSound.play();
}

// Initialize Typed.js
let typed = new Typed('.text', {
    strings: ["Hi, I'm Kaiden! Welcome to my page."],
    typeSpeed: 100, // Speed of typing (in milliseconds)
    backSpeed: 25,
    loop: false,
    showCursor: true,
    cursorChar: '|',
    onTypingResumed: playTypingSound, // Play sound during typing
    onStringTyped: function () {
        typingSound.pause(); // Stop sound when typing stops
    },
});

// Add typing sound for each character
setInterval(() => {
    if (typed.typingComplete === false) {
        playTypingSound();
    }
}, 100); // Match the typeSpe