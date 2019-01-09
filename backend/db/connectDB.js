const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

let db = mongoose.connection;
db.on('error', function() {
    console.error('数据库连接错误')
});
db.once('open', function() {
  // we're connected!
  console.log('数据库连接成功')
    
var userSchema = new mongoose.Schema({
    phone: String,
    password: String
  });
var userModel = mongoose.model('users', userSchema);

// let user = new userModel({phone: '18826078902', password: '123456'})
userModel.find({'phone': '18826078902'}, (err, data) => {
    console.log('找到一条数据'+data)
})

});
