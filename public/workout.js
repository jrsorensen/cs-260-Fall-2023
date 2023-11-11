function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
function myTopNav() {
     var x = document.getElementById("myLinks");
     if (x.style.display === "block") {
       x.style.display = "none";
     } else {
       x.style.display = "block";
     }
}
/*
var myArray = new Array();
    function project5Part2() {
        var name = document.getElementById('enteredName').value;
        if (!(typeof name === 'undefined') && name!=null && name.trim()!='') {  
            myArray.push(name);
        }
        console.log(myArray);
        document.getElementById('enteredName').value = '';
    }
*/
function gatherWorkoutData(){
    /* workout has many form#
        form# has 
            one exInfo (weight)
            one exercise#Notes
            one sets
                sets has many set
                    set has one reps
            */
    const workout = [document.querySelector("h1").textContent];
    let exerciseCount = document.getElementById("allExercises").children.length -1;
    for( let i = 1; i<= exerciseCount; i++){
    let exercise = {}
    //make a loop and dynamically add the number of exercise to the name 
    let children = document.getElementById("exercise"+ i).children;
    let children2 = children[0].children;
    let name = children2[0].textContent; //this will get the "incline bench press" exercise name
    let weight = children[0].children[1].children[0].value; //this will give me the 200 "weight" of the exercise
    let notes = children[1].children[2].value; //this will give me the value of notes
    
    exercise.name = name;
    exercise.weight = weight;
    exercise.notes = notes;

    let setCount = children[2].children.length;
    let setArray = [];
    for (let j = 0; j < setCount; j ++){
      setArray.push(children[2].children[j].children[1].value);
    }
    exercise.sets = setArray;

    workout.push(exercise);
    }
    return workout
}

function populateSavedWorkout(prevWorkout){
  //need to check if there is no prevWorkout and quit
  
}

function saveWorkoutData(){
  const workout = this.gatherWorkoutData();
  //this puts the workout in to local storage with the name of the day (chest) and then the workout info (chest, incline press 135lbs x12 x12 ...)
  localStorage.setItem(workout[0],JSON.stringify(workout));
}

async function backupWorkoutData(){
  const workout = this.gatherWorkoutData();
  try {
    const response = await fetch('/api/workout', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(workout),
    });
    const newWorkout = await response.json();
    console.log("success");
  } catch {
    //if there was an error then just track the workout on local storage
    console.log("error backing up workout");
  }finally{
    this.saveWorkoutData();
  }
}

let res = [];
async function getPrevWorkoutData(){
  try {
    const response = await fetch('/api/workouts');
    res = await response.json();
    console.log("success");
    console.log(res);
    //populate the form with data
  } catch {

    console.log("error getting previous workouts");
  }
}

const prevWorkout = getPrevWorkoutData();
populateSavedWorkout(prevWorkout);

//"["Chest",{"name":"Incline Bench Press","weight":"200","notes":"Notes:","sets":["500","200","2","3"]},{"name":"Incline Dumbbell Fly","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Dumbbell Shoulder Press","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Seated Dumbbell Shoulder Press","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Upright Machine Chest Flys","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Incline Chest Press Machine","weight":"","notes":"Notes:","sets":["","","",""]}]"