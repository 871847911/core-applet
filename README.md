# 项目介绍

- core-applet
- 宿 v 次方-核心小程序

## 主架构 uniapp

### 介绍

- 组件使用 easycom 模式 cl-\*(可在 pages 里面修改)

### plugins

- ui 框架 -> [uview](http://uviewui.com/)
- api 请求 -> [uview 自带 api 请求](http://uviewui.com/js/http.html)

### 项目结构

```
├─apis					// 接口管理
│  ├─http.api 			// 请求接口
│  ├─user 				// 模拟user模块
│  └─http.interceptor 	// 拦截器
├─common				// 公共方法库
│  ├─config 			// 环境配置 (设置baseurl等)
│  ├─extend 			// 扩展原型方法
│  ├─filters 			// 全局过滤器
│  ├─tools 				// 全局公共方法
│  └─router 			// 路由文件
├─components			// 组件库
│  ├─cl-test			// easycom测试组件 (示例使用可删除)
│  └─cl-icon			// iconfont图标库 （暂时删除）
├─store					  // vuex
│  ├─$u.mixin			// 混入方法
│  └─index				// vuex
├─uview-ui				// uview
├─uni_modules			//插件市场引入的第三方插件
├─utils           //工具类和sdk以及一些配置
│─wxcomponents    //微信小程序插件
```

### 自定义环境配置

[官方文档示例](https://uniapp.dcloud.io/collocation/package)，目前已配置了微信小程序，其他自行配置即可。

![avatar](https://z3.ax1x.com/2021/06/09/2671JJ.png)

![avatar](https://z3.ax1x.com/2021/06/09/267Rw8.png)

### Iconfont 注意事项

1. 在阿里矢量图标库创建项目
2. 添加你所需要使用的图标文件
3. 下载文件到本地后替换 components/cl-icon 里面的文件

### Iconfont 示例

iconfont 库中修改示例:

![avatar](https://z3.ax1x.com/2021/07/19/WJa9w6.png)

代码示例:

```
	<cl-icon type="test" size="30" color="#000000"></cl-icon>
```

### 依赖安装

安装之前请移除下载后自带的 package.json 使用下面代码安装依赖即可运行

```
npm init -y
```
