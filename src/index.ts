import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import ejsLayouts from 'express-ejs-layouts'
import indexRoute from './routes/index.js'
import adminRoute from './routes/admin/admin.js'
import userRoute from './routes/admin/user.js'
import projectRoute from './routes/admin/project.js'
import notFountRoute from './routes/notFound.js'
import db from './data/database.js'
import User from './data/Models/user.js'
import Project from './data/Models/project.js'
import {  projectList } from './localData/projectList.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 3000
app.set('view engine','ejs')
app.set('views','src/views')
app.set('layout','layouts/layout') //因為我們要將layout檔案，放置於layouts夾底下，所以要設定讀取預設layout檔案，要去哪裡才找的到
app.use(ejsLayouts)

app.use(express.static(path.join(__dirname,'..','public'))) //設定靜態資料夾為public
app.use('/admin',express.static(path.join(__dirname,'..','public'))) //設定靜態資料夾為public
app.use('/admin/user',express.static(path.join(__dirname,'..','public'))) //設定靜態資料夾為public
app.use('/admin/project',express.static(path.join(__dirname,'..','public'))) //設定靜態資料夾為public

app.use(express.urlencoded({extended:false}))
app.use(express.json())


//路由
app.use(indexRoute)
app.use('/admin',adminRoute)
app.use('/admin/user',userRoute)
app.use('/admin/project',projectRoute)
app.use(notFountRoute)

//建立資料庫關聯
User.hasMany(Project)
Project.belongsTo(User,{
    constraints:true,
    onDelete:"CASCADE",
})

//連接資料庫
await db.sync()
console.log('db連接成功')
// await Project.sync()
// await Project.bulkCreate(projectList)
// console.log('資料灌入成功')
app.listen(port,()=>{
    console.log('監聽 3000')
})