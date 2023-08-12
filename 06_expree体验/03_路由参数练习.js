// 引入express
const express = require('express')

// 引入json文件
const {singers} = require('./Singer.json')

// 创建应用对象
const app = express()

// 创建路由
app.get('/singer/:id.html', (req, res) => {
    
    let {id} = req.params;
    let result = singers.find(item =>{
        if(item.id === Number(id)){
            return true;
        }
    })
    if(!result){
        res.statusCode = 404;
        res.end(`<h1>404 Not Found</h1>`);
        return;
    }
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Doooocumnet</title>
            </head>
            <body>
                <h2>${result.singersName}</h2>
                <img title=${result.singersName} src='${result.singersPicture}'/>
            </body>
    </html>`)
})

app.listen(3000, () => {
    console.log('服务启动，端口 3000 正在监听中....]')
})