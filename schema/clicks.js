const mongoose = require("mongoose");
//  SCEHMA FOR AMOUNT OF CLICKS DB DATA
const clickSchema = new mongoose.Schema({
    id: Number,
    clickAmount: Number
})

module.exports = mongoose.model("Click", clickSchema);