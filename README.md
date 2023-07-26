# 啟動專案
```
npm run dev
```
# 為專案加上Typescript
參考我的notion筆記 : <br>
https://www.notion.so/Node-js-Typscript-83c15175fb1f45c7afc23a22653a1aba
# 為專案加上Tailwindcss
- 安裝 <br>
其中postcss和postcss-cli是為了要編譯tailwindcss檔案
```
npm i tailwindcss autoprefixer postcss postcss-cli
```
- 撰寫tailwind.config.js檔案
```javascript
export default {
  content: ["./src/**/*.ejs"],
  theme: {
    extend: {}, 
  },
  plugins: [],
}
```
- 撰寫postcss.config.cjs
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
- 新增tailwindcss入口文件<br>
新增位置 : public/style/tailwind.css<br>
並引入三個tailwindcss的工具

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- 編寫package.json<br>
-o前是要進行編譯的目標文件，-o後是編譯輸出的文件( 專案模板中要引用的是這個 )
```
"tailwind": "postcss public/style/tailwind.css -o public/style/style.css --watch",
```
- 使用
1.下 npm run tailwind 會即時編譯css文件，重整網頁就可以看見
# MVC 框架
- controller + routers <br>
routers 應該只負責控制 router；
其他商業邏輯，應該切割到controller裡面 <br>
- views <br>
- models + repositories<br>
models 只負責定義資料格式；repositories負責調度models資料
# 專案模板引擎
使用ejs
## ejs的共用layout
使用插件express-ejs-layouts
### - 初始化設置
```javascript
var express = require('express');
var expressLayouts = require('express-ejs-layouts');

app.set('view engine','ejs')
app.set('layout','layouts/layout')  //[optional] 指定預設的layout要讀取在layouts/layout
app.use(expressLayouts);

```
### - 指定預設layout文件
因為我們想把預設的layout檔案放在views下的layouts夾中，所以要指定layout預設黨的位置。<br>
沒有指定的話，預設會抓取views底下的layout.ejs檔案
```
app.set('layout','layouts/layout')
```
### - 指定不同的layout檔案
當不想使用預設layout，要用別的layout檔案的時候，<br>
請在render方法指定layout
```javascript
//例如要指定views/layout2.ejs

router.get('/',(req, res)=>{
    res.render('UserHome',{layout:"layout2"})
})

//指定在views/layouts/layout2.ejs
router.get('/',(req, res)=>{
    res.render('UserHome',{layout:"layouts/layout2"})
})
```
### - 製作共用layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <%- header %>
    <%- content %>
</body>
</html>
```
### - 引用layout
```html
<%- contentFor('header') %>
<h1>哈囉囉囉</h1>

<%- contentFor('content') %>
<div>略</div>
```
## ejs的components
使用include就可以把其他ejs當作元件注入唷
```html
<!DOCTYPE html>
<html lang="en">
<%- include('../components/head.ejs') %>
<body>
    <h1>Node.js 簡單CRUD 示範</h1>
    <%- include('../components/header.ejs') %>
    <%- body %>
</body>
</html>
```


