const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://dbUser:D5i4e3123-g4o5@cluster0.o6epbot.mongodb.net/";

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe";
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Conectado");
  })
  .catch((e) => {
    console.log(e);
  });

module.exports = mongoUrl;