import { Project } from "../models/project"

export const projectList:Project[] = [
    {
        id:"001",
        title:"急急如律令，任意速速簽",
        demoUrl:"https://gn01792218.github.io/f2e-react-sign-system/",
        imgs:["https://s3cdn.yourator.co/attachments/attachments/000/122/702/original/9c98c6a5f734ac1f4d7d9e0d5af4b696ad96701b.jpg"],
        tags:["Vite","React","Typscript","TailwindCss","Redux","React-router-dom"],
        repoUrl:"https://github.com/gn01792218/f2e-react-sign-system",
        projectFeatureDescription:"這是一個可以讓使用者快速線上簽署文件的網站 : \n- 使用者可使用繪圖板進行簽名\n- 可將簽名及上傳文件合併\n- 可儲存、查看歷史文件\n- 支援深色模式",
        projectTechnologyDescription:"- 圖片合併與拖拉縮放插件: fabric.js\n- PDF傳輸插件:react-pdf",
        projectFutureDescription:"- 導入會員登入機制\n- 修復手機版本canvas顯示問題"
    },
    {
        id:"002",
        title:"自製元件集成網",
        demoUrl:"https://gn01792218.github.io/vue3-tailwind-component/#/",
        imgs:["https://s3cdn.yourator.co/attachments/attachments/000/111/359/original/b7dec1f0d5b749fd391d6b68ddb2537db7771c39.jpg"],
        tags:["Vite","vue3","typscript","TailwindCss"],
        repoUrl:"https://github.com/gn01792218/vue3-tailwind-component",
        projectFeatureDescription:"閒暇之餘的個人元件練功房，展示各種自製元件樣式，\n例如:btn、card、checkbox、knob...等，內容持續擴展中，不定期更新!",
        projectTechnologyDescription:"",
        projectFutureDescription:""
    },
    {
        id:"003",
        title:"TSZ大冒險旅遊資訊網",
        demoUrl:"https://gn01792218.github.io/f2e-tourism/",
        imgs:["https://s3cdn.yourator.co/attachments/attachments/000/111/360/original/e413f0db6b9a7f5afc49fab4034958d84b7bf830.jpg"],
        tags:["Vue CLI","Vue3","Typscript","Bootstrap5","SCSS","Vuex","Vue-Router"],
        repoUrl:"https://github.com/gn01792218/f2e-tourism",
        projectFeatureDescription:"一個串接全台灣旅遊資料而成的大冒險旅遊網站 : \n- 地理位置定位功能: 查詢使用者周邊資料\n- 大冒險 : 隨機推薦旅遊資訊\n- 我的收藏: 使用LocalStorage儲存使用者收藏\n- RWD響應式設計\n- 資料呈現 : 瀑布式載入",
        projectTechnologyDescription:"-API串接來源 : 交通部TDC 運輸資料流通服務\n- 專案UI框架 : Bootstrap5、SCSS \n- 地圖資訊顯示插件 : Vue3-OpenLayers Map\n- 動畫插件 : Gsap.js\n- 臺灣地圖視覺化呈現 : D3.js",
        projectFutureDescription:"- 增加規劃行程功能"
    },
    {
        id:"004",
        title:"公車任意門",
        demoUrl:"https://gn01792218.github.io/f2e-bus/#/",
        imgs:["https://s3cdn.yourator.co/attachments/attachments/000/111/361/original/677d89de98ce75bc366cf8c05f3fe37a3956dd25.jpg"],
        tags:["Vue CLI","Vue3","Typscript","Bootstrap5","SCSS","Vuex","Vue-Router"],
        repoUrl:"https://github.com/gn01792218/f2e-bus",
        projectFeatureDescription:"串接全台灣公車資訊的公車查詢網站 :  \n- 查詢全台'公車動態'\n- 查詢全台'公車站點'\n- 查詢全台'公車票價'\n- 查詢使用者'附近站牌'\n- RWD響應式設計",
        projectTechnologyDescription:"-API串接來源 : 交通部TDC 運輸資料流通服務\n- 專案UI框架 : Bootstrap5、SCSS \n- 地圖資訊顯示插件 : Vue3-OpenLayers Map\n- 動畫插件 : Gsap.js\n- 臺灣地圖視覺化呈現 : D3.js",
        projectFutureDescription:""
    },
    {
        id:"005",
        title:"小孩益智遊戲平台",
        demoUrl:"https://gn01792218.github.io/memory-card/#/",
        imgs:["https://s3cdn.yourator.co/attachments/attachments/000/111/367/original/8ae266ff6d14d241d7d770fcb4cd8348c15d7e06.jpg"],
        tags:["Vite","Vue3","Typscript","TailwindCss","Vue-Router","Vuex"],
        repoUrl:"https://github.com/gn01792218/memory-card",
        projectFeatureDescription:"想做一個給小孩玩的'益智遊戲'平台，其中也包含了一些突發奇想的小遊戲實作。\n專案有遊戲難度的設計、遊戲音效等等。目前可玩遊戲: \n - 記憶翻翻牌\n - 八皇后棋局",
        projectTechnologyDescription:"- 目前專案中的特效皆純CSS製作",
        projectFutureDescription:"- 導入會員登入機制\n- 遊戲商城功能\n- 增加怪獸棋遊戲"
    },
    {
        id:"006",
        title:"溫水煮程式",
        demoUrl:"https://www.youtube.com/watch?v=yKF2I6CJ4ns&t=5s",
        imgs:["https://s3cdn.yourator.co/attachments/attachments/000/111/362/original/9fac2bf6af059da1a76ed4a1681de6ac9c9a27b0.jpg"],
        tags:["Vue CLI","Vue2","Bootstrap","SCSS","Vue-Router"],
        repoUrl:"https://github.com/gn01792218/vue2-webProject",
        projectFeatureDescription:"由洪夢澤(前端)與林鶴年(後端)共同開發的社群網站\n透過我們的網站，開發者可以上傳自己的產品已獲得即時的交流回饋 : \n- 使用者上傳功能 : 專案文案、圖片、影音等\n- 討論區功能 \n- RWD響應式設計 \n- 瀑布式資料載入",
        projectTechnologyDescription:"- 文字編輯套件 : vue-markdown + vue-quill-editor \n- Slider套件 : vue-easy-slider \n",
        projectFutureDescription:"自己重刻後端部分，讓網站復活"
    },
    {
        id:"007",
        title:"WaveDefence - Java塔防自走棋遊戲",
        demoUrl:"https://www.youtube.com/watch?v=l6ddYNVO8Cs",
        imgs:["https://s3cdn.yourator.co/attachments/attachments/000/111/363/original/6c13b7ea4b93cf80a1efb861fbefb1147b6bafec.jpg"],
        tags:["Java","Blender"],
        repoUrl:"https://github.com/gn01792218/Wave-Defence",
        projectFeatureDescription:"由洪夢澤與林于騰使用java共同開發的遊戲，\n融合了塔防、自走棋、即時戰略等元素，開發獨創玩法\n遊戲中玩家可以自行擺陣，並於場中使用戰術指令左右戰局\n**遊戲中素材、遊戲場景由洪夢澤使用Blender3D建模軟體製作",
        projectTechnologyDescription:"- 使用Java製作",
        projectFutureDescription:"- 遊戲能打包exe檔案"
    }
] 