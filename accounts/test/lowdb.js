// 导入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapters = new FileSync('./data/db.json')

// 获取db对象
const db = low(adapters);

// 初始化数据
db.defaults({ post: [], user: {} }).write()

// 写入数据
// db.get('post').push({id: 2, title: '今天天气还不错'}).write()
// db.get('post').unshift({id: 3, title: '今天天气还不错'}).write()

// 获取数据
// console.log(db.get('post').value());

// 删除数据
// let res = db.get('post').remove({id: 3}).write()

// 更新数据
db.get('post').find({id: 3}).assign({title: '今天打雷'}).write();
