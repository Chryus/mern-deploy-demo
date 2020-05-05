const mongoose = require('mongoose');
const connection = "mongodb+srv://jasper:9e05bdaZimiYBCZk@cluster0-csq5x.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
