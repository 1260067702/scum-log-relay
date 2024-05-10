const express = require("express")
const app = express()
const dao = require("./dao")
app.use(express.json())
app.post("/scumFtpList",dao.scumFtpList)
app.post("/scumFtpFile",dao.scumFtpFile)


app.listen(3344,console.log("服务器已启动"))