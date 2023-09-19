# Fitness Tracker
 This is a repository for my web programming class at BYU

## Description Deliverable

### Elevator Pitch
 Wouldn't it be great to have a free, progress tracking service for all your weightlifting needs? In times of old, weightlifters would track their workouts and progress using a notepad and pencil. Nowadays, many lifters use apps from companies like **[Bodybuilding.com](https://www.bodybuilding.com/)** but these often include hefty price tags or a monthly subscription. Additionally most fitness tracking apps offer very little to no customization or progress tracking capabilities. This fitness app allows you to update things like your personal weight, successful reps at different weights which are automatically synced with a database which allows you to clearly see your fitness progress over time within the application. 

 ### Design

 ### Key Features
 + Secure Login over https
 + Ability to select workout day, thus changing pages
 + Ability to edit weight, rep, and notes fields
 + Weights and notes are persistently stored
 + Progress graphs are updated and displayed in real time
 + Inspirational quotes and images propogate automatically upon opening of the web service

### Technologies
+ **HTML** - Uses correct HTML structure for the application with three HTML pages. One for login, one for a day of the workout, one for progress page.
+ **CSS** - Uses CSS to adjust for screen size, applies rules for whitespace, clear distinction of colors to guide user experience, and modern and easy to understand graphing.
+ **JavaScript** - Uses JavaScript to facilitate login, backend endpoint calls.
+ **Service** - Backend service with endpoints for:
  + login
  + retrieving past weight information
  + retrieving past notes
  + saving current weight and not information
+ **DB** - Stores users weights, notes, and login information
+ **Login** - Register and login users. Registration information is stored in database. Unable to proceed to workout until credentials are validated
+ **WebSocket** - When the application is opened an inspirational image and quote are displayed automatically
+ **React** - The appliation is ported to use the React web framework
