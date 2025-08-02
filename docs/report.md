# 電影/戲院管理系統

## 專案簡述
本專案為「電影/戲院管理系統」，使用 Node.js 建立後端伺服器，並透過 MongoDB 儲存電影資料。採用 Mongoose ODM 實現 CRUD 功能。

## 功能
- 新增/刪除/更新/查詢電影
- 模擬場次與座位
- 處理 REST API HTTP 請求

## 技術棧
- Node.js (Express)
- MongoDB
- Mongoose ODM

## UML 與結構圖
(請將 UML 圖放在 docs/uml.png)

## 專案架構
- server.js：主伺服器入口
- routes/movies.js：電影 API
- models/Movie.js：Mongoose 模型
- controllers/movieController.js：CRUD 控制器
