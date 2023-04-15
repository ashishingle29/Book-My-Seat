const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

const app = express(); 

const PORT = 3000;

const route = require('./Router/route');

app.use(express.json());


mongoose.connect("mongodb+srv://aashu:root@mini-project-cluster.kzrvbeg.mongodb.net/Book-My-Seat", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("DataBase Connected"))
.catch((err) => { console.log(err) })

app.use(cors());
app.use("/", route);

app.listen(PORT, () => {
    console.log(`Server Run on ${PORT} ...`)
});