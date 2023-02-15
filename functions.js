// Select the header and main elements
const header = document.querySelector("header");
const main = document.querySelector("main");

// Add an event listener to the header to toggle a class when it is clicked
header.addEventListener("click", function() {
  header.classList.toggle("expanded");
});

// Add an event listener to the main element to toggle the visibility of a hidden section
main.addEventListener("click", function() {
  const hiddenSection = main.querySelector(".hidden");
  hiddenSection.style.display = hiddenSection.style.display === "none" ? "block" : "none";
});

