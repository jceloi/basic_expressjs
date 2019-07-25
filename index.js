const express = require('express')
const app = express()

app.post('/', function (req, res) {
    res.send('OK')
    console.log(`Request : ${JSON.stringify(req)}`);
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})