// 计算请求总耗时中间件
module.exports = async (ctx,next)=>{
    // 记录开始时间
    const startTime = Date.now()
    await next()
    // 记录结束时间
    const endTime = Date.now()
    // 中间件请求总耗时 = endTime - startTime
    const time = endTime - startTime
    // 将总耗时设置给响应头
    // X-Response-Time 帮助开发者监控请求
    ctx.set('X-Response-Time',time+'ms')
}