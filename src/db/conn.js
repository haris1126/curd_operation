const mongoose = require('mongoose')

const db = "mongodb+srv://root:root@cluster0.umnil.mongodb.net/menSchema?retryWrites=true&w=majority"

mongoose.connect(db)
.then(() => console.log("Connection is Established Succesfully..."))
    .catch((err) => console.log(err))