// event listners


const mainContainer = document.getElementById("main-container");
const aboutMain = document.getElementById("about-main");
const contactMain = document.getElementById("contact-main");
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const contactBtn = document.getElementById("contact-btn");

let currentSection = mainContainer;

// Function to handle fade-out and fade-in transitions
function switchSection(newSection) {
  if (currentSection === newSection) return; // Avoid unnecessary transitions

  // Fade out current section
  currentSection.style.animation = "fadeOut 1s ease";
  currentSection.addEventListener(
    "animationend",
    () => {
      currentSection.style.display = "none"; // Hide the current section
      currentSection.style.animation = ""; // Reset animation for reusability

      // Fade in the new section
      newSection.style.display = "flex";
      newSection.style.animation = "fadeIn 1s ease";
      currentSection = newSection; // Update current section
    },
    { once: true } // Ensure the event listener runs once
  );
}

// Event listeners for buttons
homeBtn.addEventListener("click", () => switchSection(mainContainer));
aboutBtn.addEventListener("click", () => switchSection(aboutMain));
contactBtn.addEventListener("click", () => switchSection(contactMain))