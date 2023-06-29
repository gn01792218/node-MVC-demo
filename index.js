const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const path = require('path')
const userRoute = require('./routes/user')

const app = express()
app.set('view engine','ejs')
app.set('layout','layouts/layout')
app.use(ejsLayouts)
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(userRoute)

app.listen(3000,()=>{
    console.log('監聽 3000')
})