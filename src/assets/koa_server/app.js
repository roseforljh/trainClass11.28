// 项目入口文件

// 1、创建koa对象
const Koa = require("koa");
const app = new Koa();
// 2、绑定中间件
// 绑定第一层中间件
// 导入计算总耗时中间件
const responseDurationMiddleware = require("./middleware/koa_response_duration");
app.use(responseDurationMiddleware);
// 绑定第二层中间件
const responseHeaderMiddleware = require("./middleware/koa_response_header");
app.use(responseHeaderMiddleware);
// 绑定第三层中间件
const responseDataMiddleware = require("./middleware/koa_response_data");
app.use(responseDataMiddleware);
// 3、绑定端口号 8888
app.listen(8888);


const chokidar = require("chokidar");
const path = require("path");
// 导入读取文件内容方法
const fileUtils = require('./utils/file_utils')

const WebSocket = require("ws");
// 创建出WebSocket实例对象
const wss = new WebSocket.Server({
	port: 9998,
});

wss.on("connection", (client) => {
	console.log("有客户端连接...");
	client.on("message", (msg) => {
		console.log("客户端发送数据过来了");
		// 发送数据给客户端
		client.send("hello socket");
	});

	// 要监听的 JSON 文件路径
	const jsonFilePath = path.join(__dirname, "./data/rank.json");
	console.log(jsonFilePath);
	// 初始化 watcher
	const watcher = chokidar.watch(jsonFilePath, {
		persistent: true, // 设置为 true 表示 watcher 将持续运行。
		interval: 1000, // 轮询间隔，单位为毫秒
	});
	// 监听文件变化事件
    watcher.on("change", async path => {
        console.log("数据发生变化...");
        const res = await fileUtils.getFileData(path)
        client.send(res)
    })
});


