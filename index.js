const express = require('express');
const app = express();
const DB = require('./database.js');
const { Db } = require('mongodb');
const bcrypt = require('bcrypt');
const { peerProxy } = require('./peerProxy.js');

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
weeklyWorkouts.set("Chest",["Chest",{"name":"Incline Bench Press","weight":"200","notes":"Notes:","sets":["500","200","2","3"]},{"name":"Incline Dumbbell Fly","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Dumbbell Shoulder Press","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Seated Dumbbell Shoulder Press","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Upright Machine Chest Flys","weight":"","notes":"Notes:","sets":["","","",""]},{"name":"Incline Chest Press Machine","weight":"","notes":"Notes:","sets":["","","",""]}]);

// Getworkouts
apiRouter.get('/workouts/chest', async (_req, res) => {
  jsonText = await DB.getWorkoutData("Chest"); // this will be where you pass the username to get the right person's workout
  res.send(jsonText);
});

// Submitworkout
apiRouter.post('/workout', async (req, res) => {
  updateWorkouts(req.body);
  jsonText = JSON.stringify(Array.from(weeklyWorkouts.entries()));
  jsonText = DB.addWorkout(req.body);
  //jsonText = await DB.getWorkoutData();
  res.send(jsonText);
});

//Submit login
// loginAuthorization from the given credentials
apiRouter.post('/login', async (req, res) => {

  const user = await DB.getUser(req.body[0]);
  if (user) {
    if (await bcrypt.compare(req.body[1], user.password)) {
      DB.setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
  console.log("unauthorized");
});

//Submit login
apiRouter.post('/create', async (req, res) => {
  //somehow I need to pass the req.body.username in as a string literal
 
  if (await DB.getUser(req.body[0])) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body[0], req.body[1]);
   DB.setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});


//Get body weight
apiRouter.get('/progress', async (_req, res) => {
  //res.send(bodyWeightTracker);
  weightProgress = DB.getProgress();
  console.log(weightProgress);
})

//submit body weight
apiRouter.post('/post-body-weight', async (req, res) => {
 // updateBodyWeight(req.body);
 // res.send(weeklyWorkouts);
 //datatest = JSON.stringify({Progress : req.body});
 DB.addProgress(req.body);
 //jsonText = await DB.getProgress(datatest);
 //res.send(jsonText);
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

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
