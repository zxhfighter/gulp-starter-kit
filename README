## Gulp Web Starter Kit

基于Gulp的脚手架工具。可以基于此快速搭建基于Gulp的项目。

### 运行

第一步：克隆该项目后，进入项目根目录，首先安装必要Gulp插件。
```
npm install gulp gulp-less browser-sync --save-dev
```

第二步：编译，在项目根目录，运行`gulp`默认任务：
```
gulp
```

这里运行到gulp的任务`browser-sync`时，会提示将一段脚本放置在需要监听的html文件底部，需按照提示操作，否则无法实现实时刷新。

第三步：用服务器托管asset目录，例如如果安装了python 2.X，那么可以进入asset目录，运行：

```
python -m SimpleHttpServer
```

或者用nginx、apache等托管也是一样的。

第四步：打开首页后，然后更改`src/css/index.less`中的代码`@h1-color: #000;`至`@h1-color: #F00;`，如果标题变红，说明实时刷新已经OK了。

### 文件夹目录结构

- `index.html`：首页，默认引入了 jQuery 和 underscore，由百度CDN托管。
- `src/`：源文件目录，`src/css`放置less源文件，`src/js`放置js源文件。
- `asset/`：编译文件目录，也即上线文件目录，Gulp编译时，会将所有html和src中的文件放入asset文件夹。
- `gulpfile.js`：Gulp配置文件
- `package.json`：包文件

### 常用的Gulp插件

- gulp：核心
- gulp-less：编译less至css
- gulp-sass：编译sass至css
- browser-sync：免刷新多端实时预览

### TODO

开发阶段和上线阶段如何无缝切换。