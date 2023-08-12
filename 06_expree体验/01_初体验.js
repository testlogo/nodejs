const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.end('hello express')
})

app.get('/', (req, res) => {
    res.end('home')
    res.render
})

app.listen(3000, () => {
    console.log('服务启动，端口 3000 正在监听中....]')
})