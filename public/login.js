const proceed = false;
const newLoginEvent = 'login';
const newRegisterEvent = 'register';

async function login() {
    const name = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    try{
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify([name, password])
      });
      const resp = await response;
      console.log(resp);
      if (resp.status == 200){ 
        localStorage.setItem("userName", name);
        localStorage.setItem("password", password);
        welcomeMessage();
        
        window.location.href = "/workout.html"
        this.broadcastEvent(name, newLoginEvent);
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
    const confirmation = await response;
    if (confirmation.status == 200){ 
      localStorage.setItem("userName", name);
      localStorage.setItem("password", password);
      welcomeMessage();
      
      window.location.href = "/workout.html"
      this.broadcastEvent(name, newRegisterEvent);
    }else{
      alert('Username is already in use');
    }
  }catch{
    alert("error with registration");
  }
}

displayQuote();

function configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  this.socket.onopen = (event) => {
    this.displayMsg( localStorage.getItem("username"), ' welcome! See who else is logging in.');
  };
  this.socket.onclose = () => {
     this.displayMsg( 'workout', 'disconnected');
  };
  this.socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    if (msg.type === newLoginEvent) {
      this.displayMsg(msg.from, `has started their workout!`);
    } else if (msg.type === newRegisterEvent) {
      this.displayMsg(msg.from, `is starting their fitness journey!`);
    }
  };
}

function displayMsg(from, msg) {
  const notificationText = document.getElementById("loginNotifications");
  notificationText.innerHTML =
    `<div class="event">${from} ${msg}</div>`;
}

function broadcastEvent(from, type) {
  const event = {
    from: from,
    type: type
  };
  this.socket.send(JSON.stringify(event));
}

// const notificationPlaceHolder = setInterval(myTimer,3000);
// function myTimer(){
//   const num = Math.floor(Math.random() * 500);
//   const date = new Date();
//   document.getElementById("loginNotifications").innerText = "Gym rat #" + num + " has started their workout!";
// }