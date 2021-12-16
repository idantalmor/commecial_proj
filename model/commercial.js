const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create commercial schema and model
const commercialSchema = new Schema({
  content: {
    type: String,
    required: [true, "text for the commercial is required"],
  },
  font: {
    type: Number,
    required: [true, "font is required"],
  },
  bgColor: {
    type: String,
    required: [true, "background color need to ve provided"],
  },
});

const Bot1 = mongoose.model("commercial", commercialSchema);
module.exports = Bot1;
