const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Winner = require("./schema/winner");
const Click = require("./schema/clicks");
const cors = require('cors')

const API_PORT = process.env.PORT || 3001
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'))

//  CONST FOR OUR DATABASE LINK
const dbRoute = 'mongodb://dbUser:dbUserPass1@ds123465.mlab.com:23465/buttongamedb'
//  CONNECTS TO THE MONGO DATABASE
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
  );
  
let db = mongoose.connection;

//  CHECKS IF THE CONNECTION TO THE DATABASE IS SUCESSFULL
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//  GET CLICKS FROM DB 
router.get("/getClicks", (req, res) => {
    Click.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
});

//  UPDATE CLICKS TO DB
router.post("/updateClicks", (req, res) => {
    const { update } = req.body;
    const id = 1;
    Click.findOneAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
});

//  GET WINNNER LIST
router.get("/getWinners", (req, res) => {
  Winner.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

//  POST NEW WINNER
router.post("/postWinner", (req, res) => {
  const { update } = req.body;
  const winner = new Winner (update)
  winner.save();
});

// APPENDS "/api" TO THE REQUESTS 
app.use("/api", router);
app.use(express.static(__dirname + "/public"));

// LAUNCHES THE BACKEND TO A PORT
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));