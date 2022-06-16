const express = require('express')
const dbconn = require("../src/db/conn")

const MensRanking = require("../src/models/mens")

const router = require("./routers/mens")

const app = express();
const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
    res.send("Hello from MongoDb")
})

app.use(express.json());
app.use('/mens',router)




app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`)
})

