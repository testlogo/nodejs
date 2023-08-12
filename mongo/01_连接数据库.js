const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 设置回调
mongoose.connection.once('open', () => {
    console.log('连接成功');
})
mongoose.connection.on('error', () => {
    console.log('连接失败');
})
mongoose.connection.on('close', () => {
    console.log('关闭连接');
})
// 关闭连接
// setTimeout(() => {
//     mongoose.disconnect();
// },2000)