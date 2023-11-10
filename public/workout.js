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
function saveWorkoutData(){

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
    localStorage.setItem(workout[0],JSON.stringify(workout));
}
/* example of how I would use this connected to the index.js. That fetch call would direct to the index.js parent api thing for scores (or in my case, workout)
async saveScore(score) {
  const userName = this.getPlayerName();
  const date = new Date().toLocaleDateString();
  const newScore = {name: userName, score: score, date: date};

  try {
    const response = await fetch('/api/score', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newScore),
    });

    // Store what the service gave us as the high scores
    const scores = await response.json();
    localStorage.setItem('scores', JSON.stringify(scores));
  } catch {
    // If there was an error then just track scores locally
    this.updateScoresLocal(newScore);
  }
}
*/