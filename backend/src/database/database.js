const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://dbUser:D5i4e3123-g4o5@cluster0.o6epbot.mongodb.net/`)
  .then(() => {
    console.log('Conexão com o MongoDB realizada');
  })
  .catch((error) => {
    console.log('Falha de autenticação com o MongoDB');
    console.log(error);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;