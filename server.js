const path = require('path');
const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');

// 加载静态文件 打包好的静态文件放在dist下
app.use(express.static(path.join(__dirname, './dist')));

// 设置服务器代理，解决跨域问题
// target：目标地址
app.use('/api/v1/poem', proxy({
    target: 'https://wechat.uiseed.cn/poem',//目标接口域名
    changeOrigin: true,//是否跨域
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = 8888;

//监听端口
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return null;
    }
    return console.log(`${port} port starting`);
});
