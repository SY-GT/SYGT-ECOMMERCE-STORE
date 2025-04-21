
// Open Popup
document.querySelectorAll(".buy-button").forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("instagramPopup").style.display = "flex";
  });
});



// Submit Form & Send to Telegram Bot
document.getElementById("dmForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get product details
  const productName = document.querySelector("h4").innerText;
  const productImage = document.querySelector("img").src;

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
 require('dotenv').config();
  const telegramBotToken = process.env.API;
const chatId = process.env.CHATID;
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

// Send confirmation to client
const clientMessage = `🎉 Order Received!\n\n` +
                     `Hi ${firstName},\n` +
                     `Your order for ${productName} is confirmed.\n` +
                     `We'll contact you shortly on Telegram.\n\n` +
                     `Order ID: #${Math.floor(1000 + Math.random() * 9000)}`;

const clientUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=@${cleanUsername}&text=${encodeURIComponent(clientMessage)}`;

fetch(clientUrl)
  .then(() => console.log("Client notification sent successfully"))
  .catch(err => console.error("Failed to send Telegram notification:", err));

  // Close popup
  document.getElementById("instagramPopup").style.display = "none";
});

  // Close Popup
document.querySelector(".close-btn").addEventListener("click", function() {
  document.getElementById("instagramPopup").style.display = "none";
});
