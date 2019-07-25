const express = require('express')
const app = express()

app.post('/', function (req, res) {
    res.send('OK')
    console.log(`Request : ${JSON.stringify(req.params)} - ${JSON.stringify(req.query)} - ${JSON.stringify(req.body)} `);
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})