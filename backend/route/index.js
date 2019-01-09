
function initRouter(app) {
    app.post('/login', (req, res) => {
        console.log(req.body)
        res.send()
        res.end()
    })
    
}

module.exports = { initRouter};