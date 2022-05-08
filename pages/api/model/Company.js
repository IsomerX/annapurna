const mongoose = require("mongoose");
const schema = mongoose.Schema;

const company = new schema({
  name: String,
  uid: Number,
  slots: Number,
  lat: Number,
  lng: Number,
  timing: String,
});

const Company = mongoose.models.companies || mongoose.model("companies", company) ;

module.exports = Company;