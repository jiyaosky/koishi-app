import { App } from 'koishi'
import * as ping from './ping'
import { OneBot } from "@koishijs/plugin-adapter-onebot";
import * as echo from '@koishijs/plugin-echo'
import { appendFile } from "fs";


const app = new App()

// 安装 onebot 适配器插件，并配置机器人
app.plugin('adapter-onebot', {
  protocol: 'ws',
  selfId: '123456789',
  endpoint: 'ws://127.0.0.1:6700',
})

// 安装 echo 插件
app.plugin('echo')
app.plugin(ping)
// 启动应用
app.start()