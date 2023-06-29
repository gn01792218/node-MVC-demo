const express = require('express')
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const userRoute = require('./src/routes/user')
const notFountRoute = require('./src/routes/notFound')

const app = express()

app.set('view engine','ejs')
app.set('views','src/views')
app.set('layout','layouts/layout') //因為我們要將layout檔案，放置於layouts夾底下，所以要設定讀取預設layout檔案，要去哪裡才找的到
app.use(ejsLayouts)

app.use(express.static(path.join(__dirname,'public'))) //設定靜態資料夾為public

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(userRoute)
app.use(notFountRoute)

app.listen(3000,()=>{
    console.log('監聽 3000')
})