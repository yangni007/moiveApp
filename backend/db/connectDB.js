const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',  {useNewUrlParser:true});

let db = mongoose.connection;
db.on('error', function() {
    console.error('数据库连接错误')
});
db.once('open', function() {
  // we're connected!
  console.log('数据库连接成功')

});

module.exports = mongoose
