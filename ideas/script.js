// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("alertButton");

  button.addEventListener("click", () => {
    alert("Hello! Welcome to my first website.");
  });
});
