function login() {
    const name = document.querySelector("#username");
    const password = document.querySelector("#password");
    
    localStorage.setItem("userName", name.value);
    localStorage.setItem("password", password.value);
    welcomeMessage();
    
    window.location.href = "/workout.html"
  }

function welcomeMessage() {
        const message = "Welcome " + localStorage.getItem("userName") +
         "! \n Are you ready to begin today's workout?"
         alert(message)
    }

const notificationPlaceHolder = setInterval(myTimer,3000);
function myTimer(){
  const num = Math.floor(Math.random() * 500);
  const date = new Date();
  document.getElementById("loginNotifications").innerText = "Gym rat #" + num + " has started their workout!";
}

function displayQuote(data) {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}

displayQuote();