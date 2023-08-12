const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 设置回调
mongoose.connection.once('open', () => {
    // console.log('连接成功');
    // 创建文档的结构对象
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 创建模型对象，对文档操作的封装操作
    let BookModel = new mongoose.model('books', BookSchema);

    // 新增
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 30
    }).then((err, data) => {
        // 收集错误
        if(err){
            console.log(err);
            return;
        }
        // 没有出错
        console.log(data);
    })
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