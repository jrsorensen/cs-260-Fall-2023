const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('startup');
  const workoutCollection = db.collection('user workouts');
  const userCollection = db.collection('users');
  const progressCollection = db.collection('progress');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  async function addWorkout(workout) {
    workoutName = workout[0];
    username = workout[1];
    workoutJson = JSON.stringify(workout.slice(2));
    const date = new Date();
    const ob = {date : date, user : username, Day : workoutName, workout : workoutJson};
    const result = await workoutCollection.insertOne(ob);
    return result;
  }

  async function login(credentials) {
    const result = await userCollection.insertOne(credentials);
    return result;
  }

  async function addProgress(weight) {
    const date = new Date();
    weight.date = date;
    const result = await progressCollection.insertOne(weight);
    return result;
  }
  
  function getWorkoutData(dayLabel) {
    // const query = { workout };
    // const options = {
    //   date : {$last: '$date'}
    // };
    const cursor = workoutCollection.find({"Day": dayLabel}).sort({"date" : -1}).limit(1).next();
    return cursor;
  }

  async function getProgress(){
    const result = progressCollection.find();
    return result;
  }
  
  module.exports = { addWorkout, addProgress, getWorkoutData, getProgress, login };
  

  // Test that you can connect to the database
 /* (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });*/