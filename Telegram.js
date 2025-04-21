
// Open Popup
document.querySelectorAll(".buy-button").forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("instagramPopup").style.display = "flex";
  });
});
const a ="7965577251";
// Submit Form & Send to Telegram Bot
document.getElementById("dmForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get product details
  const productName = document.querySelector("h4").innerText;
  const productImage = document.querySelector("img").src;
const b="AAFMUStxmq0aDe_hiiGXrHcW5kfrw3kwEGU";
  // Get form data
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("popupPhone").value;
  const email = document.getElementById("popupEmail").value || "Not provided";
  const addressLine1 = document.getElementById("addressLine1").value;
  const city = document.getElementById("city").value;
  const postalCode = document.getElementById("postalCode").value;
  const state = document.getElementById("IndianState").value;

  // Telegram Bot API Token and Chat ID
 
  const telegramBotToken = a+":"+b;
const chatId = "5591526043";
  // Message
  const message = `New Order!
Product: ${productName}
Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Address: ${addressLine1}, ${city}, ${state} - ${postalCode}`;


  // Send Message to Telegram Bot
  const textUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
  fetch(textUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

  
// Get Telegram username from form field (add this with your other form field variables)
const telegramUsername = document.getElementById("telegramUsername").value.trim();

// Remove @ if user included it
const cleanUsername = telegramUsername.startsWith('@') 
  ? telegramUsername.substring(1) 
  : telegramUsername;


  // Close popup
  document.getElementById("instagramPopup").style.display = "none";
});

  // Close Popup
document.querySelector(".close-btn").addEventListener("click", function() {
  document.getElementById("instagramPopup").style.display = "none";
});
