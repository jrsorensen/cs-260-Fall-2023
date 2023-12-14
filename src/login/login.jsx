import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './login.css'

export function Login({ userName, authState, onAuthChange }) {
  const [auth, setAuth] = React.useState(authState)
  const [usersName, setUserName] = React.useState(userName);
  const [password_in, setPassword] = React.useState('');
  const navigate = useNavigate();

const proceed = false;
const newLoginEvent = 'login';
const newRegisterEvent = 'register';
let socket;

async function login() {
    //const name = document.querySelector("#username").value;
    //const password = document.querySelector("#password").value;
    const name = userName;
    const password = password_in;
    
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
        onAuthChange(name, true)
        navigate('/workout')
        broadcastEvent(name, newLoginEvent);
      }else{
        alert("Username or password wrong");
      }
    }catch{
      alert("error with login");
    }
    navigate('/workout') //remove this. This is a cheat
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
      const authorEl = document.createElement('p');
 
      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}

async function registerNew() {
 // const name = document.querySelector("#username").value;
 // const password = document.querySelector("#password").value;
 const name = userName;
 const password = password_in;
 const bod = [name, password];
  try{
    const response = await fetch('/api/create', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(bod)
    });
    const confirmation = await response;
    if (confirmation?.status == 200){ 
      localStorage.setItem("userName", name);
      localStorage.setItem("password", password);
      welcomeMessage();
      onAuthChange(name, true)
      navigate('/workout')
      broadcastEvent(name, newRegisterEvent);
    }else{
      alert('Username is already in use');
    }
  }catch{
    alert("error with registration");
  }
}

//displayQuote();
configureWebSocket();


function configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  socket.onopen = (event) => {
     displayMsg('Welcome!', 'See who else is logging in.');
  };
  socket.onclose = () => {
      displayMsg( 'workout', 'disconnected');
  };
  socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    if (msg.type === newLoginEvent) {
       displayMsg(msg.from, `has started their workout!`);
    } else if (msg.type === newRegisterEvent) {
       displayMsg(msg.from, `is starting their fitness journey!`);
    }
  };
}

function displayMsg(from, msg) {
  const notificationText = document.getElementById("loginNotifications");
  notificationText.innerHTML =
    `<div className="event">${from} ${msg}</div>`;
}

function broadcastEvent(from, type) {
  const event = {
    from: from,
    type: type
  };
  socket.send(JSON.stringify(event));
}


  return (
    <main>
      <div>
          <form>
              <label htmlFor="username">username:</label>
              <input type="text" id="username" onChange={(e) => setUserName(e.target.value)}/><br/>
              <label htmlFor="password">password:</label>
              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/><br/><br/>
              <input type="button" className="submit" id="submit" value="Log in" onClick={() => login()}/>
              <input type="button" className="submit" id="register" value="Register" onClick={() => registerNew()}/>
          </form>
          <p id="loginNotifications">
            This is a placeholder for where my websocket will notify the user of when other users are logging in
          </p>
      </div>
    
      <div id="quote"></div>
    </main>
  );
}