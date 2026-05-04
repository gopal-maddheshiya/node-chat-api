const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
  console.log("connection succesful");
})
  .catch(err => console.log(err));

async function main() {
  const mongoURL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/whatsapp';
  await mongoose.connect(mongoURL);
}

let allChats = [
  {
    from: "Aadarsh",
    to: "Gopal",
    msg: "Ok bro I will share my examsheet to you",
    create_at: new Date(),
  },
  {
    from: "Sandesh",
    to: "Aadarsh",
    msg: "Bro let's go our home for Diwali",
    create_at: new Date(),
  },
  {
     from: "Gopal",
    to: "Arun",
    msg: "Bro I am on my way",
    create_at: new Date(),
  },
  {
     from: "Shrijaya",
    to: "Gopal",
    msg: "Where are you now?",
    create_at: new Date(),
  },
  {
     from: "Gopal",
    to: "Shrijaya",
    msg: "I am now in my hostel room",
    create_at: new Date(),
  }
];

Chat.insertMany(allChats);