const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

// 中间件
function recordMiddleware(req, res, next){
    // 获取 url 和 ip
    let {url, ip} = req;

    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`)

    next();
}

app.use(recordMiddleware);

app.get('/response', (req, res) => {
    // 原生响应
    res.statusCode = 404;
    res.statusMessage = 'love';
    res.setHeader('xxx', 'yyy')
    res.send('hello express')
})

app.listen(3000, () => {
    console.log('服务启动，端口 3000 正在监听中....]')
})