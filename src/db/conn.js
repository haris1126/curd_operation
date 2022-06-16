const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://root:root@cluster0.umnil.mongodb.net/menSchema?retryWrites=true&w=majority")
.then(() => console.log("Connection is Established Succesfully..."))
    .catch((err) => console.log(err))