// 1. 导入http
const http = require('http')

// 2. 创建服务
const server = http.createServer((request, response) => {

    
    response.end('<table border="1"><tr><td>test</td></tr></table>')
})

// 3. 监听接口，启动服务
server.listen(9000, () => {
    console.log('服务启动。。。');
})