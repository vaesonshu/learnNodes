/*服务端业务逻辑的核心文件*/
/*处理各种请求*/
const queryString = require('querystring');
const goodsRouterHandle = require('./router/goods');
const userRouterHandle = require('./router/user');
const initParams = (req) =>{
    // 准备 请求方式 / 请求路径 / 请求参数
    // 1.处理请求方式
    req.method = req.method.toLowerCase();
    // 2.处理请求路径
    req.path = req.url.split('?')[0];
    // 3.处理请求参数
    return new Promise((resolve, reject)=>{
        if(req.method === 'get'){
            let params = req.url.split('?')[1];
            req.query = queryString.parse(params);
            resolve();
        }else if(req.method === 'post'){
            let params = '';
            req.on('data', (chunk)=>{
                params += chunk;
            });
            req.on('end', ()=>{
                req.body = queryString.parse(params);
                resolve();
            });
        }
    });
}

console.log(process.env.NODE_ENV);
const serverHandle = (req, res)=>{
    /*
    如何处理各种请求
    处理各种请求我们需要知道
    请求方式 / 请求路径 / 请求参数
    * */
    res.writeHead(200, {
        'Content-Type':'application/json; charset=utf-8;'
    });
    // 1.准备各种请求参数
    initParams(req).then(()=>{
        // 2.处理各种路由
        // 2.1处理商品相关路由
        let goodsData = goodsRouterHandle(req, res);
        if(goodsData){
            res.end(JSON.stringify(goodsData));
            return
        }
        // 2.2处理用户相关路由
        let userData = userRouterHandle(req, res);
        if(userData){
            res.end(JSON.stringify(userData));
            return
        }
        // 2.3没有匹配到任何路由
        res.writeHead(404, {
            'Content-Type':'text/plain; charset=utf-8;'
        });
        res.end('404 Not Found');
    })
};
module.exports = serverHandle;