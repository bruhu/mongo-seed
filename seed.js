const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/seed-test", {
  useNewUrlParser: true
});

//this is our model schema
const User = mongoose.model("User", {
  name: String,
  username: String,
  email: String,
  age: Number
});
