const mongoose = require("mongoose");
const plm=require("passport-local-mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/practiceforbackend");

const anythingSchema = mongoose.Schema({
  name: String,
  phone: Number,
});

anythingSchema.plugin(plm);

module.exports = mongoose.model("prac", anythingSchema);
