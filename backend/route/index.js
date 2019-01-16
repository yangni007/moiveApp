const DB = require('../db/util')

function initRouter(app) {
    app.post('/login', async (req, res) => {
        DB.login({phone: req.body.phone}).then(data => {
            if(data.length) {
                
                if(data[0].password == req.body.password) {
                    res.send({code: 0, data: null, msg: '登陆成功'})
                } else {
                    res.send({code: 1, data: null, msg: '密码不正确'})
                }
                
                res.end()
            } else {
                res.send({code: 1, data: null, msg: '该账号还没注册，请先注册'})
                res.end()
            }
            
        }).catch(e => {
            res.send(e)
            res.end()
        })
        
    })
    app.post('/register', async (req, res) => {
        DB.register({phone: req.body.phone, password: req.body.password}).then(data => {
            if(data.length) {
                res.send({code: 1, data:null, msg: '该账号已经注册，可前往登录页面登录'})
                res.end()
            } else {
                res.send({code: 0, data:null, msg: '注册成功'})
                res.end()
            }
            
        }).catch(e => {
            res.send(e)
            res.end()
        })
        
    })
    
}

module.exports = { initRouter};