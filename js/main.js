// owl-carousel for travel blog

$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
        $('.owl-navigation .owl-nav-prev'), 
        $('.owl-navigation .owl-nav-next')
    ]
});

window.onload = function() {
            const username = sessionStorage.getItem('username');
            const loginButton = document.getElementById('login-button');
            const popup = document.getElementById('popup');
            const overlay = document.getElementById('overlay');

            if (username) {
                loginButton.innerHTML = `<button class="btn me-md-5">${username}</button>`;
            } else {
                loginButton.innerHTML = `<button class="btn me-md-5"><a href="../html/login.html" style="text-decoration: none;" id="login-link">Login</a></button>`;
                
                if (!sessionStorage.getItem('loggedIn')) {
                    setTimeout(function() {
                        popup.style.display = 'block';
                        overlay.style.display = 'block';
                    }, 3000); // 5 seconds
                }
            }
        };

        function redirectToLogin() {
            window.location.href = './html/login.html';
        }
AOS.init();

// A simple chatbot that responds with some predefined answers
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
