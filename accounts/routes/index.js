var express = require('express');
var router = express.Router();
const shortid = require('shortid')
// 导入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapters = new FileSync('./data/db.json')

// 获取db对象
const db = low(adapters);

// 记账本列表
router.get('/account', function(req, res, next) {
  // 获取账单信息
  let accounts = db.get('accounts').value();
  res.render('list',{accounts: accounts});
});

// 添加记录
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

// 新增记录
router.post('/account', (req, res) => {
  let id = shortid.generate();
  db.get('accounts').unshift({id: id,...req.body}).write();
  res.render('success',{msg: '添加成功',url: '/account'})
})

// 删除记录
router.get('/account/:id', (req, res) => {
  let id = req.params.id;
  db.get('accounts').remove({id: id}).write();
  res.render('success',{msg: '删除成功',url: '/account'})
})

module.exports = router;
