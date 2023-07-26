import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejsLayouts from "express-ejs-layouts";
import indexRoute from "./routes/index.js";

import db from "./data/database.js";
import UserModel from "./data/Models/user.js";
import ProjectModel from "./data/Models/project.js";
import { projectList } from "./localData/projectList.js";

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

//tailwindCss設置

//路由
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
