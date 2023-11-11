const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

var weeklyWorkouts = new Map();
//weeklyWorkouts.set("Chest",["Chest",{"name":"Incline Bench Press","weight":"200","notes":"Notes:","sets":["500","200","2","3"]},{"name":"Incline Dumbbell Fly","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Dumbbell Shoulder Press","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Seated Dumbbell Shoulder Press","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Upright Machine Chest Flys","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Incline Chest Press Machine","weight":"","notes":"Notes:","sets":["","","",""]}]);
// Getworkouts
apiRouter.get('/workouts', (_req, res) => {
  jsonText = JSON.stringify(Array.from(weeklyWorkouts.entries()));
  res.send(jsonText);
});

// Submitworkout
apiRouter.post('/workout', (req, res) => {
  updateWorkouts(req.body);
  jsonText = JSON.stringify(Array.from(weeklyWorkouts.entries()));
  res.send(jsonText);
});

//Get body weight
apiRouter.get('/progress', (_req, res) => {
  res.send(bodyWeightTracker);
})

//submit body weight
apiRouter.post('/post-body-weight', (_req, res) => {
  updateBodyWeight(req.body);
  res.send(weeklyWorkouts);
})

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateworkouts considers a new workout for inclusion in the high workouts.
// The high workouts are saved in memory and disappear whenever the service is restarted.
function updateWorkouts(newWorkout) {
  weeklyWorkouts.set(newWorkout[0],newWorkout);
  return weeklyWorkouts;
}

const bodyWeightTracker = [];
function updateBodyWeight(bodyWeight){
  bodyWeightTracker.push(bodyWeight);
  return bodyWeightTracker;
}
