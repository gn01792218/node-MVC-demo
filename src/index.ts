import express from "express";
import path from "path";
import session from 'express-session'
import sessionPgConnect from 'connect-pg-simple'
import { fileURLToPath } from "url";
import ejsLayouts from "express-ejs-layouts";
import indexRoute from "./routes/index.js";
import { resLocalsStorage } from './middleware/resLocalsStorage.js'

import db from "./data/database.js";
import UserModel from "./data/Models/user.js";
import ProjectModel from "./data/Models/project.js";
import { User } from './types/user.js'
import { projectList } from "./localData/projectList.js";
import dotenv from 'dotenv'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", "src/views");
app.set("layout", "layouts/layout"); //因為我們要將layout檔案，放置於layouts夾底下，所以要設定讀取預設layout檔案，要去哪裡才找的到
app.use(ejsLayouts);

app.use(express.static(path.join(__dirname, "..", "public"))); //設定靜態資料夾為public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//session設置
declare module 'express-session' {
    interface SessionData{
        isLogin:boolean,
        user:User
    }
}
//製作postgresqlStore
const PostgresqlStore = sessionPgConnect(session)
const sessionStore = new PostgresqlStore({
  conString:process.env.DB_CONNECTION_STRING
})
app.use(session({
  secret:'my project back end',
  resave:false,
  saveUninitialized:false,
  store:sessionStore
}))

//路由
app.use(resLocalsStorage)
app.use(indexRoute);

//建立關聯
UserModel.hasMany(ProjectModel,{
  sourceKey:'id', //預設其實就會抓取UserModel的PK來當SourceKey
  foreignKey:'userId', //將此Model的PK和Project的userId做關聯
});
ProjectModel.belongsTo(UserModel, {
  foreignKey:'userId',
  constraints: true,
  onDelete: "CASCADE",
});

//連接資料庫
await db.sync();
console.log("db連接成功");
// await Project.sync()
// await Project.bulkCreate(projectList)
// console.log('資料灌入成功')
app.listen(port, () => {
  console.log("監聽",port);
});
