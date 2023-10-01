# Fitness Tracker
 This is a repository for my web programming class at BYU

## Description Deliverable

### Elevator Pitch
 Wouldn't it be great to have a free, progress tracking service for all your weightlifting needs? In times of old, weightlifters would track their workouts and progress using a notepad and pencil. Nowadays, many lifters use apps from companies like **[Bodybuilding.com](https://www.bodybuilding.com/)** but these often include hefty price tags or a monthly subscription. Additionally most fitness tracking apps offer very little to no customization or progress tracking capabilities. This fitness app allows you to update things like your personal weight, successful reps at different weights which are automatically synced with a database which allows you to clearly see your fitness progress over time within the application. 

 ### Design
![unnamed](https://github.com/jrsorensen/cs-260-Fall-2023/assets/100975246/574c566f-60bb-4697-9e7e-a6e355b23ff4)

![unnamed](https://github.com/jrsorensen/cs-260-Fall-2023/assets/100975246/1020765d-d3fb-4aed-884e-c06df5651169)

![unnamed](https://github.com/jrsorensen/cs-260-Fall-2023/assets/100975246/c77c6b58-64cb-4623-af8f-c83b99c9b730)


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
+ **WebSocket** - The websocket will be used to communicate to other users when someone has started a new workout. A notification will pop up on other users' screens displaying the original user's username in a message indicating that they are now working out.
+ **React** - The appliation is ported to use the React web framework

## HTML deliverable

For this deliverable I built out the structure of my application using HTML and added some elements on inline CSS for my own sanity.

- **HTML pages** - Three HTML pages. One page for a login, one for the workout, one for the progress bar.
- **Links** - The login page automatically links to the workout page upon clicking the submit button. The workout and progress page have links to the the login page as a way of "logging out" and links to each other for page navigation.
- **Text** - Text is clearly present on all pages. On the login page it is there to show a dynamically generated inspirational quote as well as providing labels for the login feilds. On the workouts page there are textual elements showing what day it is (chest, back, etc.) as well as the exercise names and rep labels. Lastly on the progress page, text serves as a header and as graph labels.
- **Images** - The login page has a banner accross the top. I hope for this to be a placeholder for images that will change with each new login.
- **Login** - Input boxes for username and password and submit button for login.
- **Database** - The excersise names, weights, and previous reps will all be displayed as their info is pulled from the database. Currently there are placeholder names (Exercise1) The graphs on the progress page are also placeholders. Weights and reps that are submitted with the "log workout" button will be sent to the database and then retrieved when the user goes to the progress page. They will also be able to submit their own weight and see it displayed.
- **WebSocket** - The aside on the login page is serving as a placeholder for the WebSocket activity. This area will display the usernames of other people who are logging in to start their workouts.
