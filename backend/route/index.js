
function initRouter(app) {
    
    app.get('/login', (req, res) => {
        console.log('登陆接口')
        res.send('欢迎，登陆接口')
        res.end()
    })
    
}

module.exports = { initRouter};