"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const user_1 = __importDefault(require("./routes/user"));
const notFound_1 = __importDefault(require("./routes/notFound"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.set('layout', 'layouts/layout'); //因為我們要將layout檔案，放置於layouts夾底下，所以要設定讀取預設layout檔案，要去哪裡才找的到
app.use(express_ejs_layouts_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '../public'))); //設定靜態資料夾為public
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(user_1.default);
app.use(notFound_1.default);
app.listen(port, () => {
    console.log('監聽 3000');
});
