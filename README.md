# Button-Game

A simple button game where every 100 clicks wins you a prize. This game is run with Node.js and MongoDB Backend with a React Frontend. The project can be found on: [https://the-buttongame.herokuapp.com/](https://the-buttongame.herokuapp.com/  "https://the-buttongame.herokuapp.com/"). It might take a while to get the app started from its sleep.

![app example picture](https://github.com/harjunpnik/Button-Game/blob/master/readme_img/app_example.JPG)

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Node.js](https://nodejs.org/en/) - Backend server 
* [Express](https://expressjs.com/) - Backend framework
* [MongoDB](https://www.mongodb.com/) - Used as Database
* [mLab](https://mlab.com/) - Used as cloud database
* [Heroku](https://www.heroku.com/) - As hosting service

## Installation on heroku server

To install this application on a heroku server you'll need three things:
* Github profile ( [https://github.com/](https://github.com/ "https://github.com/") )
* Heroku account ( [https://www.heroku.com/](https://www.heroku.com/ "https://www.heroku.com/") )
* mLab account ( [https://mlab.com/](https://mlab.com/ "https://mlab.com/") )

Now follow the following instructions:

1 - You should clone this repository and make your own tweaks if needed. If you make tweaks to your application, remember to build it and upload the build to your git repository. 

2 - Create an Heroku account and "Create a new app" and choose your own region.

3 - Go to deploy and connect your GitHub profile to Heroku and choose the repository you just made and press "Deploy Branch". 

4 - Create a Mlab account and create a Database. Now copy the " MongoDB URI". (Example: "mongodb://<dbuser>:<dbpassword>@ds123465.mlab.com:23465/buttongamedb")
![mongo db example](https://github.com/harjunpnik/Button-Game/blob/master/readme_img/mlab.JPG)

5 - In Mlab create a User and and replace the "MongoDB URI" parts with the user for "<dbuser>" and password for "<dbPassword>". (Example: "mongodb://testUser:Password1234@ds123465.mlab.com:23465/buttongamedb")
![mongo db example](https://github.com/harjunpnik/Button-Game/blob/master/readme_img/mlab_user.JPG)

6 - Finally go back to the application in Heroku and go the the "Settings" page of your application. Go to "Config Vars" and add a config var with the KEY "mongoURL" and VALUE with the "MongoDB URI" you just created. (Example: "mongodb://testUser:Password1234@ds123465.mlab.com:23465/buttongamedb")
![Heroku config vars example](https://github.com/harjunpnik/Button-Game/blob/master/readme_img/config_vars.JPG)

Now your application should be upp and running on heroku.

## Running the program on localhost

If you want to run the program on a localhost you need to do a couple of changes. First you need to download the dependencies the program is using. Just write   

```
npm i
```

in the root folders command console. After that when you want to start the application just type 
```
npm run dev
```
in the root folders command console. This will start the development localhost. 

To get the database working on local host you need to go and change a few locations. 

In the "server.js" file , line 18, you need to change the 

```javascript
const dbRoute = process.env.mongoURL 
```
to your own "MongoDB URI". (Example: "mongodb://testUser:Password1234@ds123465.mlab.com:23465/buttongamedb")

In the src folder you need to add "http://localhost:3001/" before each request. You need to make these changes in the "Game.js" file and "Winners.js" file. The result should look like 
```javascript
fetch("http://localhost:3001/api/getClicks") // Game.js file, line 27
axios.post("http://localhost:3001/api/updateClicks", { // Game.js file, line 31
axios.post("http://localhost:3001/api/postWinner", { // Game.js file, line 66
fetch("http://localhost:3001/api/getWinners") // Winners.js file, line 16
```

Now when you save the files Nodemon should refresh your server and show that the changes should work.

## Api Reference

This application uses two api get refrences to get data from the database. From here you can see all the information that is saved.

To get the total amount of clicks, use this api : [https://the-buttongame.herokuapp.com/api/getClicks](https://the-buttongame.herokuapp.com/api/getClicks/  "https://the-buttongame.herokuapp.com/api/getClicks")

To get the list of winners, use this api : [https://the-buttongame.herokuapp.com/api/getWinners](https://the-buttongame.herokuapp.com/api/getWinners  "https://the-buttongame.herokuapp.com/api/getWinners")


## Some information about the application and structure.

The application is built so that the "server.js" file is running on the heroku server. By default it connects to the application build, so changes that are made and not made to a build will not be shown on the heroku server if deployed there. This is why you need to make a build when deploying it to heroku server. 
