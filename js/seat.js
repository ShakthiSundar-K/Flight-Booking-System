document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");
  const seats = document.querySelectorAll(".row .seat:not(.sold)");
  const count = document.getElementById("count");
  const total = document.getElementById("total");
  const movieSelect = document.getElementById("movie");

  let ticketPrice = +movieSelect.value;

  // Function to update seat count and total cost
  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const selectedSeatsCount = selectedSeats.length;
    const selectedSeatsCost = selectedSeatsCount * ticketPrice;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCost;

    // Store data in sessionStorage
    sessionStorage.setItem("selectedSeatsCount", selectedSeatsCount);
    sessionStorage.setItem("totalCost", selectedSeatsCost);
  }

  // Seat click event
  container.addEventListener("click", function(e) {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
      e.target.classList.toggle("selected");
      updateSelectedCount();
    }
  });

  // Movie select event
  movieSelect.addEventListener("change", function(e) {
    ticketPrice = +e.target.value;
    updateSelectedCount();
  });

  // Proceed to bill button event
  document.getElementById("proceed-to-bill-btn").addEventListener("click", function() {
    // Redirect to bill.html for payment processing
    window.location.href = "../html/bill.html";
  });

  console.log("DOMContentLoaded event fired. Script loaded.");
});

function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
        output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
        output = "My name is Jarvis, I'm a chatbot.";
    } else if (input.includes("what can you do")) {
        output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
        output = "Why did the chicken go to the seance? To get to the other side.";
    }
    else if (input.includes("tell me a joke")) {
        output = "Why did the chicken go to the seance? To get to the other side.";
    }
    else if (input.includes("book")) {
        output = '<a href="../html/book.html" style="text-decoration:none;">Book Now</a>'; 
    }
    else {
        output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
    let input = document.getElementById("input-chat").value;
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function() {
            displayBotMessage(output);
        }, 1000);
        document.getElementById("input-chat").value = "";
    }
}

// Toggle chat window visibility
function toggleChat() {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = chatContainer.style.display === "none" || chatContainer.style.display === "" ? "block" : "none";
}

// Add a click event listener to the chat icon
document.getElementById("chat-icon").addEventListener("click", toggleChat);

// Add a click event listener to the button
document.getElementById("button-chat").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input-chat").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        sendMessage();
    }
});
