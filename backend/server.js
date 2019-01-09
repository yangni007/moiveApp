const express = require('express');
// const async = require('async');
const router = require('./route/index')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.raw({ limit: '10mb' }));

app.all('*', function(req, res, next){
    console.log('接口')
    next()
})
app.post('/login', (req, res) => {
    console.log(req.body)
    res.send()
    
    res.end()
})
// router.initRouter(app)


app.listen(3000, () => {
    console.log('server is listening, port is 3000') 
})

