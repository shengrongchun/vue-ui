const fs = require('fs');
const path = require('path');
const express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// 引用express-session模块
var session = require('express-session');
const app = express();

//post body体解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//实例化cookie
app.use(cookieParser());

//实例化session
app.use(session({
    name: 'cookieName',
    secret: 'cookieSignName',
    cookie: {'maxAge':30*1000},//多长时间过期
    resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
    saveUninitialized: false, //
}));

//将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了
app.use('/static',express.static(path.resolve(__dirname, './dist/static')));
//
app.use(function(req, res) {
    var html = '';
    if(req.url == '/login') {
        if(req.body.user == 'sheng'&&req.body.password=='123') {
            req.session.name = req.body.user+req.body.password
            res.send('ok')
        }else {
            if(req.body.user == 'sheng') {
                res.status(300).send('密码错误')
            }else {
                res.status(300).send('用户名错误')
            }  
        }
        
    }else {
        //
        if(req.session.name || req.url == '/index') {
            html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8');
            res.send(html);
        }else {
            res.redirect('/index'); 
        }
    }
    
});

//
app.listen(8000);
console.log('server starting 8000');