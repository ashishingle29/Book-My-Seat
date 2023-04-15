const express = require('express');
const route = express.Router()
const theaterController = require('../controller/theaterController')

route.get('/', (req, res) => {
    res.send("Data From GET")
}) 

route.post('/add', theaterController.addTheater)
route.get('/get/', theaterController.getAllTheater)
route.get('/get/:id', theaterController.getTheater)
route.put('/update/:id', theaterController.updateTheater)
route.post('/book/:id', theaterController.bookTicket);




route.all('/*', (request,response)=>{response.status(400).send("HTTP Method Wrong")})


module.exports = route 