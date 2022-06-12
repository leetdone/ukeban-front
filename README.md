# 本次完成的部分 6/12
## server
### writeDatabase
#### connectDB
连接到数据库，并用dotenv隐藏敏感信息，如密码
#### writeHomeCards.js
读取database.json里的信息，将首页卡片的标题列的信息写入数据库
#### insertRowsInHomeCard.js
读取database.json里的信息，将首页卡片的每一列的信息写入数据库
#### writeNew.js
读取database.json里的信息，将News的每一列的信息写入数据库

routerHanlder.js
读取首页卡片的标题列的信息，对前端发送json信息

# ukeban-front/src

#### utils/request.js
封装axios请求
#### service/requestNews.js
发送页数query
#### news/New.js
加入无限滚动后换页

# server
## routes/router.js

接收'/home'和'/news'的请求

## routerHandler/routerHandler.js

读取database.json文件中的数据，当接收到请求时发送数据




## src 中的源代码
### App.js
渲染首页， 包括标签栏。标签栏用编程式导航实现。（用了NavLink）
### RouterIndex.js
路由模块，存储路由

### reset-css
将所有格式变成默认格式

## views文件夹
包含标签栏导航到的各个页面，对应关系为Home.js(首页), Product.js(产品介绍)， About.js(关于我们)， News.js(新闻中心，发送ajax请求并接收服务器数据，显示在单个list中 )， Merchant.js(商户总览)， Help.js（帮助中心）， Footer.js(页脚）  

viewCSS包含js文件对应的css文件

## components
抽象出的react组件  
### 首页
Menu.js 菜单栏组件  
Carousel.js 轮播组件  
homeCards.js 包含首页中所有卡片, 发送ajax请求并接收服务器数据，显示在单个卡片中
HomeCard.js 首页中单个卡片  

### 新闻中心
NewsCard展示每个新闻的组件  
### 页脚
qr-code 页脚的QR二维码组件  
Hotline 页脚最右侧的客服热线  
ContactMenu.js 页脚中间的联系我们，和可伴  



## 启动程序
项目基于react的脚手架  
npm start
