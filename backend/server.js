const express = require('express');
// const async = require('async');
const router = require('./route/index')
const app = express()

app.all('*', function(req, res, next){
    console.log('接口')
    next()
})
router.initRouter(app)


app.listen(3000, () => {
    console.log('server is listening, port is 3000') 
})

