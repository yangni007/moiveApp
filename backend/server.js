const express = require('express')
const async = require('async');

const app = express()

app.post('/login', (req, res) => {
    
})

app.listen(3000, () => {
    console.log('server is listening, port is 3000')
})