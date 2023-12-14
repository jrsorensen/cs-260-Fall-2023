import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Progress } from './progress/progress';
import { Workout } from './workout/workout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
        <div className='body bg-dark text-light'>

        <header className='container-fluid'>
        <nav className='navbar fixed-top navbar-dark'>
          <div className='navbar-brand'>
            Simon<sup>&reg;</sup>
          </div>
          <menu className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to=''>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='workout'>
                Workout
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='progress'>
                Progress
              </NavLink>
            </li>
          </menu>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/workout' element={<Workout />} />
        <Route path='/progress' element={<Progress />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

        {/* <header>
           <div className="dayButtons"> 
                 <button className="dayButton" onclick="location.href='/workout.html';">Chest</button>
                 <button className="dayButton" onclick="location.href='/workout.html';">Hamstring</button>
                 <button className="dayButton" onclick="location.href='/workout.html';">Back</button>
                 <button className="dayButton" onclick="location.href='/workout.html';">Shoulders</button>
                 <button className="dayButton" onclick="location.href='/workout.html';">Quads</button>
                 <button className="dayButton" onclick="location.href='/workout.html';">Arms</button>
             </div>
             
             <div className="navButtons"> 
              <button type="submit" className="navigation" onclick="location.href='/index.html';">Log out</button>
              <button type="sumbit" className="navigation" onclick="location.href='/progress.html';">Progress</button>
          </div>
      </header> */}

          {/* <header>
           <nav>
             <div>Startup</div>
             <menu>
               <li>
                 <NavLink to=''>Login</NavLink>
               </li>
               <li>
                 <NavLink to='progress'>Progress</NavLink>
               </li>
               <li>
                 <NavLink to='workout'>Workout</NavLink>
               </li>
             </menu>
           </nav>
         </header> */}

      <footer>
         <h1>Jack's page @CS 260</h1>
         <a href="https://github.com/jrsorensen/cs-260-Fall-2023">My Github Repo</a>
     </footer>
        </div>
    </BrowserRouter>
  );
}

// export default function App(){
//   const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
//   const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
//   const [authState, setAuthState] = React.useState(currentAuthState);

//   return (
//     <BrowserRouter>
//       <div>
//         <header>
//           <nav>
//             <div>Startup</div>
//             <menu>
//               <li>
//                 <NavLink to=''>Login</NavLink>
//               </li>
//               <li>
//                 <NavLink to='progress'>Progress</NavLink>
//               </li>
//               <li>
//                 <NavLink to='workout'>Workout</NavLink>
//               </li>
//             </menu>
//           </nav>
//         </header>

//         <Routes>
//           <Route path='/' element={<Login/>}/>
//           <Route path='/progress' element={<Progress/>}/>
//           <Route path='/workout' element={<Workout/>}/>
//         </Routes>

//         <footer>
//           <div>
//             <span>Jack Sorensen</span>
//             <div>Link to github</div>
//           </div>
//         </footer>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default function App() {
//   const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
//   const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
//   const [authState, setAuthState] = React.useState(currentAuthState);

//   return ( 
//     <BrowserRouter>
//         <div>
//         <header>
//           <div class="dayButtons"> 
//                 <button class="dayButton" onclick="location.href='/workout.html';">Chest</button>
//                 <button class="dayButton" onclick="location.href='/workout.html';">Hamstring</button>
//                 <button class="dayButton" onclick="location.href='/workout.html';">Back</button>
//                 <button class="dayButton" onclick="location.href='/workout.html';">Shoulders</button>
//                 <button class="dayButton" onclick="location.href='/workout.html';">Quads</button>
//                 <button class="dayButton" onclick="location.href='/workout.html';">Arms</button>
//             </div>
             
//             <div class="navButtons"> 
//              <button type="submit" class="navigation" onclick="location.href='/index.html';">Log out</button>
//              <button type="sumbit" class="navigation" onclick="location.href='/progress.html';">Progress</button>
//          </div>
//      </header>

//      <Routes>
//       <Route path='/' element={<Login />} exact />
//       <Route path='/workout' element={<Workout />} />
//       <Route path='/progress' element={<Progress />} />
//       <Route path='*' element={<NotFound />} />
//      </Routes>

//      <footer>
//         <h1>Progress page @CS 260</h1>
//         <a href="https://github.com/jrsorensen/cs-260-Fall-2023">My Github Repo</a>

//     </footer>
//   </div>
//   </BrowserRouter>
//   );
// }

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}