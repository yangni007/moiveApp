const DB = require('../db/util')

function initRouter(app) {
    app.post('/login', async (req, res) => {
        console.log(req.body)
        DB.login({phone: req.body.phone}).then(data => {
            console.log(data)
            res.send(data)
            res.end()
        }).catch(e => {
            res.send(e)
            res.end()
        })
        
    })
    app.post('/register', async (req, res) => {
        console.log(req.body)
        DB.register({phone: req.body.phone, password: req.body.password}).then(data => {
            coonsole.log(data)
            res.send()
            res.end()
        })
        
    })
    
}

module.exports = { initRouter};