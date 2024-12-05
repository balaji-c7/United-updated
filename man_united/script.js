// Select the "Home" button
const homeButton = document.getElementById("home_button");

// Add a click event listener to the "Home" button
homeButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  window.scrollTo({
    top: 0, // Scroll to the top
    behavior: "smooth", // Smooth scrolling effect
  });
});
