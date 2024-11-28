// 响应设置的中间件
module.exports = async (ctx,next)=>{
    // 设置响应给前端的数据格式   application/json(设置为json数据类型)
    let contentType = "application/json"
    ctx.set('Content-Type',contentType)

    
    // 设置跨域
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.set('Access-Control-Allow-Methods','OPTIONS,GET,POST,DELETE,PUT')
    
    await next()
}