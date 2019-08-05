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

const user1 = new User({
  name: "Bru",
  username: "bruhu",
  email: "annabru.abh@gmail.com"
});
