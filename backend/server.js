const express = require('express')
const app = express()

app.post('/login', (req, res) => {
    console.log('/login')
    res.send('hello world')
})

app.listen(3000, () => {
    console.log('server is listening, port is 3000')
})