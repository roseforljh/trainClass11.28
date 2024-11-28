// 读取json文件的工具方法
// fs模块: 对文件/文件夹的操作 fs.readFile(文件路径,'utf-8',回调函数) 读取文件内容 
const fs = require('fs')
module.exports.getFileData = (fullPath)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(fullPath,'utf-8',(err,data)=>{
            if(err){
                // 文件读取失败
                reject(err)  // 不能使用return  
            }else{
                // 文件读取成功  data
                resolve(data)
            }
        })
    })
}

