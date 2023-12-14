import React from 'react';

export function Workout() {
    return (
      <main className='container-fluid bg-secondary text-center'>
        <div>workout displayed here</div>
      </main>
    );
  }

// export function Workout() {
//     return (
//         <main>
//         <div class="day-label" style="text-align: center;"/>
//         <h1>Chest</h1>
//         <div class="warm-up">
//             <h2 >Warm-up</h2>
//             <p>Jogging: 15 minutes</p>
//         </div>

//         <div id="allExercises">
//             <form id="exercise1" class="exercise">

//                 <span class="exInfo">
//                     <label onclick="myFunction('exercise1Notes')" class="exName">Incline Bench Press</label>
//                     <span>
//                         <input id="weight" type="weight"/>
//                         <label for="weight">lbs</label>
//                     </span>
//                 </span>
//                 <div id="exercise1Notes" class="w3-container w3-hide accordion">
//                     <h4>Incline Bench Press</h4>
//                     <p>4 sets of 6-10 reps<br/>
//                     1:00 minute rest</p>
//                     <textarea class="notes" rows="5" cols="33">Notes:</textarea>
                  
//                 </div>

//                 <span class="sets">

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                 </span>
//             </form>
            
//             <form id="exercise2" class="exercise">

//                 <span class="exInfo">
//                     <label onclick="myFunction('exercise2Notes')" class="exName">Incline Dumbbell Fly</label>
//                     <span>
//                         <input id="weight" type="weight"/>
//                         <label for="weight">lbs</label>
//                     </span>
//                 </span>
//                 <div id="exercise2Notes" class="w3-container w3-hide accordion">
//                     <h4>Incline Dumbbell Fly</h4>
//                     <p>4 sets of 6-10 reps<br/>
//                     1:00 minute rest</p>
//                     <textarea class="notes" rows="5" cols="33">Notes:</textarea>
          
//                 </div>

//                 <span class="sets">

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                 </span>
//             </form>
//             <form id="exercise3" class="exercise">

//                 <span class="exInfo">
//                     <label onclick="myFunction('exercise3Notes')" class="exName">Dumbbell Shoulder Press</label>
//                     <span>
//                         <input id="weight" type="weight"/>
//                         <label for="weight">lbs</label>
//                     </span>
//                 </span>
//                 <div id="exercise3Notes" class="w3-container w3-hide accordion">
//                     <h4>Dumbbell Shoulder Press</h4>
//                     <p>4 sets of 6-10 reps<br/>
//                     1:00 minute rest</p>
//                     <textarea class="notes" rows="5" cols="33">Notes:</textarea>
    
//                 </div>

//                 <span class="sets">

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                 </span>
//             </form>
//             <form id="exercise4" class="exercise">

//                 <span class="exInfo">
//                     <label onclick="myFunction('exercise4Notes')" class="exName">Seated Dumbbell Shoulder Press</label>
//                     <span>
//                         <input id="weight" type="weight"/>
//                         <label for="weight">lbs</label>
//                     </span>
//                 </span>
//                 <div id="exercise4Notes" class="w3-container w3-hide accordion">
//                     <h4>Seated Dumbbell Shoulder Press</h4>
//                     <p>4 sets of 6-10 reps<br/>
//                     1:00 minute rest</p>
//                     <textarea class="notes" rows="5" cols="33">Notes:</textarea>
               
//                 </div>

//                 <span class="sets">

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                 </span>
//             </form>
//             <form id="exercise5" class="exercise">

//                 <span class="exInfo">
//                     <label onclick="myFunction('exercise5Notes')" class="exName">Upright Machine Chest Flys</label>
//                     <span>
//                         <input id="weight" type="weight"/>
//                         <label for="weight">lbs</label>
//                     </span>
//                 </span>
//                 <div id="exercise5Notes" class="w3-container w3-hide accordion">
//                     <h4>Upright Machine Chest Flys</h4>
//                     <p>4 sets of 6-10 reps<br/>
//                     1:00 minute rest</p>
//                     <textarea class="notes" rows="5" cols="33">Notes:</textarea>
              
//                 </div>

//                 <span class="sets">

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                 </span>
//             </form>
//             <form id="exercise6" class="exercise">

//                 <span class="exInfo">
//                     <label onclick="myFunction('exercise6Notes')" class="exName">Incline Chest Press Machine</label>
//                     <span>
//                         <input id="weight" type="weight"/>
//                         <label for="weight">lbs</label>
//                     </span>
//                 </span>
//                 <div id="exercise6Notes" class="w3-container w3-hide accordion">
//                     <h4>Incline Chest Press Machine</h4>
//                     <p>4 sets of 6-10 reps<br/>
//                     1:00 minute rest</p>
//                     <textarea class="notes" rows="5" cols="33">Notes:</textarea>
//                 </div>

//                 <span class="sets">

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                         <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                     <span class="set">
//                         <label for="reps">x</label>
//                     <input id="reps" type="number" size="5"/>
//                     </span>

//                 </span>
//             </form>

//             <button type="button" class="submit" onclick="backupWorkoutData()">Log workout</button>
//         </div>
//     </main>
//     );
// }