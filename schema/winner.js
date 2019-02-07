const mongoose = require("mongoose");
//  SCEHMA FOR WINNER DB DATA
const winnerSchema = new mongoose.Schema({
    id: Number,
    Name: String,
    prizeSize: String,
    winningClickNr: Number
})

module.exports = mongoose.model("Winner", winnerSchema);