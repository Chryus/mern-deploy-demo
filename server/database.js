const mongoose = require('mongoose');
const connection = "mongodb+srv://jasper:2oLTHmA3vYKCH6FF@cluster0-csq5x.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
