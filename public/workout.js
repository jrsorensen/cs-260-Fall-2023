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

function gatherWorkoutData(){
    /* workout has many form#
        form# has 
            one exInfo (weight)
            one exercise#Notes
            one sets
                sets has many set
                    set has one reps
            */
    const workout = [document.querySelector("h1").textContent, localStorage.getItem("userName")];
    
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
    const resp = await response.json();
    console.log("success " + resp);
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
    const response = await fetch('/api/workouts/'+ document.querySelector("h1").textContent);
    res = await response.json();
    console.log("success");
    console.log(res);
    //populate the form with data
    const data = JSON.parse(res['workout']);

    let exerciseCount = document.getElementById("allExercises").children.length -1;
    for( let i = 1; i<= exerciseCount; i++){
    //make a loop and dynamically add the number of exercise to the name 
    let children = document.getElementById("exercise"+ i).children;
    let children2 = children[0].children;
   // children[0].children[1].children[0].value = res[0][1][i].weight; //this will give me the 200 "weight" of the exercise
    children[0].children[1].children[0].value = data[i-1].weight; //this will give me the 200 "weight" of the exercise
    children[1].children[2].value = data[i-1].notes; //this will give me the value of notes

    let setCount = children[2].children.length;
    for (let j = 0; j < setCount; j ++){
      children[2].children[j].children[1].value = data[i-1].sets[j];
    }
    }

  } catch {

    console.log("error getting previous workouts");
  }
}

getPrevWorkoutData();