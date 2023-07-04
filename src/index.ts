
import express from 'express'
import path from 'path'
import ejsLayouts from 'express-ejs-layouts'
import indexRoute from './routes'
import adminRoute from './routes/admin/admin'
import userRoute from './routes/admin/user'
import projectRoute from './routes/admin/project'
import notFountRoute from './routes/notFound'

const app = express()
const port = process.env.PORT || 3000
app.set('view engine','ejs')
app.set('views','src/views')
app.set('layout','layouts/layout') //因為我們要將layout檔案，放置於layouts夾底下，所以要設定讀取預設layout檔案，要去哪裡才找的到
app.use(ejsLayouts)

app.use(express.static(path.join(__dirname,'..','public'))) //設定靜態資料夾為public
app.use('/admin/user',express.static(path.join(__dirname,'..','public'))) //設定靜態資料夾為public
app.use('/admin/project',express.static(path.join(__dirname,'..','public'))) //設定靜態資料夾為public

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(indexRoute)
app.use(adminRoute)
app.use('/admin/user',userRoute)
app.use('/admin/project',projectRoute)
app.use(notFountRoute)

app.listen(port,()=>{
    console.log('監聽 3000')
})