const mongoose = require('./connectDB')

var userSchema = new mongoose.Schema({
    phone: String,
    password: String
});

function login(params) {
    
    var userModel = mongoose.model('users', userSchema);
    return new Promise((resolve, reject) => {
        // let user = new userModel({phone: '18826078902', password: '123456'})
        userModel.find({'phone': params.phone}, (err, data) => {
            if(err) {
                reject(err)
            }
            console.log('找到一条数据'+data)
            resolve(data)
            
        })
    })
    
}
function register(params) {
    
    var userModel = mongoose.model('users', userSchema);
    return new Promise((resolve, reject) => {
        // let user = new userModel({phone: '18826078902', password: '123456'})
        userModel.insert({'phone': params.phone, 'password': params.password}, (err, data) => {
            console.log('存成功'+data)
            resolve(data)
        })
    })
    
}

module.exports = {login, register}
