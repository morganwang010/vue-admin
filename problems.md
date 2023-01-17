### 20230116
- npx 执行卡住  重新执行即可 如果报watcher limit，需要修改/etc/sysctl.conf 增加 fs.inotify.max_user_watches=524288
- 更改默认端口及监听IP，因为使用了vite ，需要修改vite的相关配置 即vite.cofnig.js增加server的内容
### 20230117
- 手动安装typescript，将main.js修改为main.ts，同步修改Index.html里的链接,还要把vite.config.js改成vite.config.ts  ts的写法与js的写法还是有区别
- 如果要使用@替代src路径的话，需要在vite.config.ts里进行resolve配置，
- 使用export const导出时，引用时要使用{}，而如果使用export default，import时就直接写名字就可以了，不再需要使用大括号
- 使用vue-router还得要配合router-viewer使用，可以使用整个页面都包含在router-view当中
- web页面的缓存使用类库web-storage-cache，用来存session的一些信息
