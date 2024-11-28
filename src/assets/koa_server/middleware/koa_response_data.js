// 数据处理中间件
// 导入读取文件内容方法
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx,next)=>{
    // 读取data目录中的json数据
    // 1、获取请求url地址
    const URL =  ctx.request.url   // /xx
    // 2、拼接url地址，拼接出当前文件的绝对路径
    // path模块：path.join() 拼接路径
    const path = require('path')
    // 拼接：当前文件夹路径(__dirname)+URL   /map ==> ../data/map.json
    const fullPath = path.join(__dirname,"../data"+URL+".json")
    console.log(fullPath,'请求数据路径')
    // 3、读取文件
    try{
        const res = await fileUtils.getFileData(fullPath)
        // 4、响应数据
        ctx.response.body = res
    }catch{
        let msg = {
            message:"读取文件失败，文件资源不存在",
            code:404
        }
        ctx.response.body = JSON.stringify(msg)
    }
    
    await next()
    // http://127.0.0.1:8888/map
    // http://127.0.0.1:8888/rank
    // http://127.0.0.1:8888/hotproduct
}