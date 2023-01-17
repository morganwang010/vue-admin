### 20230116
- npx 执行卡住  重新执行即可 如果报watcher limit，需要修改/etc/sysctl.conf 增加 fs.inotify.max_user_watches=524288
- 更改默认端口及监听IP，因为使用了vite ，需要修改vite的相关配置 即vite.cofnig.js增加server的内容
- 