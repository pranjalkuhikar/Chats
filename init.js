const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/whatsapp")
  .then(() => console.log("Conected Successfully"));

let allChats = [
  {
    from: "Baby",
    to: "Ruchika",
    msg: "Hello Ruchika",
    create_at: new Date(),
  },
  {
    from: "Pranjal",
    to: "Priyanka",
    msg: "Happy Birthday Priyanka in Advance",
    create_at: new Date(),
  },
  {
    from: "Priyanka",
    to: "Baby",
    msg: "Hello Kaku",
    create_at: new Date(),
  },
  {
    from: "Pallavi",
    to: "Pranjal",
    msg: "Meet My Very Good Friend!",
    create_at: new Date(),
  },
  {
    from: "Aniket",
    to: "Karan",
    msg: "Take My One Snap",
    create_at: new Date(),
  },
  {
    from: "Kunda",
    to: "Hitesh",
    msg: "Namaskar",
    create_at: new Date(),
  },
];

Chat.insertMany(allChats);
