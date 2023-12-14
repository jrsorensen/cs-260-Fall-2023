import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Progress } from './progress/progress';
import { Workout } from './workout/workout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  const [usersName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const [authState, setAuthState] = React.useState(false);
  return (
    <BrowserRouter>
       
      <div className='body'>
      {authState && (
        <header>
          <span className='day-buttons'> 
              <NavLink className='submit' to='workout'>Chest</NavLink>
              <NavLink className='submit' to='workout'>Hamstring</NavLink>
              <NavLink className='submit' to='workout'>Back</NavLink>
              <NavLink className='submit' to='workout'>Shouders</NavLink>
              <NavLink className='submit' to='workout'>Quads</NavLink>
              <NavLink className='submit' to='workout'>Arms</NavLink>
          </span>
          <span className="page-buttons"> 
            <NavLink className='submit' to=''>Log out</NavLink>
            <NavLink className='submit' to='progress'>Progress</NavLink>
          </span>
        </header>
      )}
      {!authState && (
        <header>
          <img src="https://static.vecteezy.com/system/resources/previews/000/181/748/original/vector-abstract-forest-landscape.jpg"
          alt="Inspiration awaits"/>
          Welcome to Sorensen Fitness
        </header>
      )}




      <Routes>
        <Route path='/' element={<Login 
          userName={usersName}
          authState={authState}
          onAuthChange={(usersName, authState) => {
            setAuthState(authState);
            setUserName(usersName);
          }}
        />} exact />
        <Route path='/workout' element={<Workout />} />
        <Route path='/progress' element={<Progress />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer>
         <h1>Jack's page @CS 260</h1>
         <a href="https://github.com/jrsorensen/cs-260-Fall-2023">My Github Repo</a>
     </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}