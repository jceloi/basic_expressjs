const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.post('/', function (req, res) {
    console.log(`Request : ${JSON.stringify(req.params)} - ${JSON.stringify(req.query)} - ${JSON.stringify(req.body)} `);
    console.log(`Complete Request : ${JSON.stringify(req)} `);
    res.send('OK')

})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
