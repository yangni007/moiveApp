const mongoose = require('./connectDB')

var userSchema = new mongoose.Schema({
    phone: String,
    password: String
});

function login(params) {
    
    var userModel = mongoose.model('users', userSchema);
    return new Promise((resolve, reject) => {
        userModel.find({'phone': params.phone}, (err, data) => {
            if(err) {
                reject(err)
            }
            resolve(data)
            
        })
    })
    
}
function register(params) {
    
    var userModel = mongoose.model('users', userSchema);
    return new Promise((resolve, reject) => {
        // 注册过
        userModel.find({'phone': params.phone}, (err, data) => {
            if(err) {
                reject(err)
            }
            if(data.length) {
                resolve(data)
            } else {
                let user = new userModel({'phone': params.phone, 'password': params.password})
        
                user.save(function (err, user) {
                    if(err) {
                        reject(err)
                    }
                    resolve([])
                });
            }
        })
    }).catch(e => {
        console.log(e)
    })
    
}

module.exports = {login, register}
