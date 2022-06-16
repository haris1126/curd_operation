const express = require('express')
const dbconn = require("../src/db/conn")

const MensRanking = require("../src/models/mens")

const router = require("./routers/mens")

const app = express();
const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
    res.send("Hello from MongoDb database")
})

app.use(express.json());
app.use('/mens',router)




app.listen(port, () => {
    console.log(`Server is listeing at port no. ${port}`)
})

