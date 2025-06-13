// script.js

// Simulate basic interactions (e.g., screen toggle) document.addEventListener("DOMContentLoaded", () => { const powerButton = document.getElementById("power-button"); const screen = document.getElementById("screen");

if (powerButton && screen) { powerButton.addEventListener("click", () => { screen.classList.toggle("on"); }); }

// Add more interactivity here if needed (e.g., home button, volume, etc.) });
