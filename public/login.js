const proceed = false;

async function login() {
    const name = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    try{
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify([name, password])
      });
      const confirmation = await response.json();
      console.log(confirmation);
      if (confirmation.message != 'Unauthorized'){ 
        localStorage.setItem("userName", name);
        localStorage.setItem("password", password);
        welcomeMessage();
        
        window.location.href = "/workout.html"
      }else{
        alert("Username or password wrong");
      }
    }catch{
      alert("error with login");
    }
    
   
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

async function registerNew() {
  const name = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  bod = [name, password];
  try{
    const response = await fetch('/api/create', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(bod)
    });
    const confirmation = await response.json();
    if (confirmation.message != 'Existing user'){ 
      localStorage.setItem("userName", name);
      localStorage.setItem("password", password);
      welcomeMessage();
      
      window.location.href = "/workout.html"
    }else{
      alert('Username is already in use');
    }
  }catch{
    alert("error with registration");
  }
  
  localStorage.setItem("userName", name);
  localStorage.setItem("password", password);
  welcomeMessage();
  
  window.location.href = "/workout.html"
}

displayQuote();