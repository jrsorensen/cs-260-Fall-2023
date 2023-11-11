const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Getworkouts
apiRouter.get('/workouts', (_req, res) => {
  res.send(weeklyWorkouts);
});

// Submitworkout
apiRouter.post('/workout', (req, res) => {
  updateWorkouts(req.body);
  res.send(weeklyWorkouts);
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
const weeklyWorkouts = new Map();
function updateWorkouts(newWorkout) {
  testing = JSON.parse(newWorkout);
  weeklyWorkouts.set(testing[0],newWorkout);
  return weeklyWorkouts;
}

const bodyWeightTracker = [];
function updateBodyWeight(bodyWeight){
  bodyWeightTracker.push(bodyWeight);
  return bodyWeightTracker;
}
