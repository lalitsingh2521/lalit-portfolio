// Contact Form Popup
const form = document.getElementById("contact-form");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const visitBtn = document.getElementById("visit-website");

form.addEventListener("submit", function(e){
  e.preventDefault(); // Prevent actual form submission
  popup.style.display = "flex"; // Show popup
  form.reset(); // Clear form
});

closePopup.addEventListener("click", function(){
  popup.style.display = "none";
});

visitBtn.addEventListener("click", function(){
  window.open("https://lalit-it.vercel.app/", "_blank"); // Open your website
  popup.style.display = "none";
});

// Close popup on clicking outside content
window.addEventListener("click", function(e){
  if(e.target === popup){
    popup.style.display = "none";
  }
});
