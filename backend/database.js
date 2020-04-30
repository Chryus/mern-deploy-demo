const mongoose = require('mongoose');
const connection = "mongodb+srv://jasper:7wEEQc0osVFqK2Yj@mern-csq5x.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
